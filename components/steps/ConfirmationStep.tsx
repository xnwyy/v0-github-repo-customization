"use client";

import { useEffect, useState } from "react";
import { OrderItem } from "@/types";

interface ConfirmationStepProps {
  onNewOrder: () => void;
  orderItems: Record<string, OrderItem>;
  pickupMethod: string;
}

function calculateWaitTime(orderItems: Record<string, OrderItem>, pickupMethod: string): number {
  const totalItems = Object.values(orderItems).reduce((sum, item) => sum + item.quantity, 0);
  
  // Base time: 3-5 minutes
  const baseTime = Math.floor(Math.random() * 3) + 3;
  
  // Per item time: 1-2 minutes per item with randomization
  const perItemTime = totalItems * (Math.random() * 1.5 + 0.5);
  
  // Complexity bonus: some items take longer (burgers, combos, etc.)
  let complexityBonus = 0;
  Object.values(orderItems).forEach((item) => {
    const name = item.name.toLowerCase();
    if (name.includes("combo") || name.includes("meal")) {
      complexityBonus += item.quantity * (Math.random() * 2 + 1);
    }
    if (name.includes("burger") || name.includes("quarter pounder") || name.includes("big mac")) {
      complexityBonus += item.quantity * (Math.random() * 1.5 + 0.5);
    }
    if (name.includes("happy meal")) {
      complexityBonus += item.quantity * (Math.random() * 2 + 1.5);
    }
    if (name.includes("mcflurry") || name.includes("frappe") || name.includes("milkshake")) {
      complexityBonus += item.quantity * (Math.random() * 1 + 0.5);
    }
  });
  
  // Delivery adds extra time
  const deliveryBonus = pickupMethod === "delivery" ? Math.floor(Math.random() * 15) + 10 : 0;
  
  // Random rush hour factor (sometimes kitchen is busy)
  const rushFactor = Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 3 : 0;
  
  const totalTime = Math.ceil(baseTime + perItemTime + complexityBonus + deliveryBonus + rushFactor);
  
  return totalTime;
}

function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  }
  return `${hours} hour${hours !== 1 ? 's' : ''} ${mins} minute${mins !== 1 ? 's' : ''}`;
}

export function ConfirmationStep({ onNewOrder, orderItems, pickupMethod }: ConfirmationStepProps) {
  const [waitTime, setWaitTime] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    // Simulate calculation delay for effect
    const timer = setTimeout(() => {
      const time = calculateWaitTime(orderItems, pickupMethod);
      setWaitTime(time);
      setIsCalculating(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [orderItems, pickupMethod]);

  const totalItems = Object.values(orderItems).reduce((sum, item) => sum + item.quantity, 0);
  const isDelivery = pickupMethod === "delivery";

  return (
    <section className="max-w-md mx-auto text-center animate-fadeIn">
      <div className="text-6xl mb-6">🎉</div>
      <h3 className="text-3xl font-bold text-green-400 mb-4">Order Submitted Successfully!</h3>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
        <div className="text-white/70 mb-2">
          {isDelivery ? "Estimated Delivery Time" : "Estimated Wait Time"}
        </div>
        
        {isCalculating ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-pink-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-white/60">Calculating...</span>
          </div>
        ) : (
          <>
            <div className="text-4xl font-bold text-pink-400 mb-2">
              {formatTime(waitTime!)}
            </div>
            <div className="text-white/50 text-sm">
              Based on {totalItems} item{totalItems !== 1 ? 's' : ''} in your order
            </div>
          </>
        )}
      </div>

      {waitTime && waitTime > 20 && (
        <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-4 mb-6">
          <div className="text-yellow-400 text-sm">
            {waitTime > 45 
              ? "🔥 Large order detected! Our team is working hard on your order."
              : "⏰ Your order is a bit larger than usual. Thanks for your patience!"}
          </div>
        </div>
      )}

      <p className="text-white/70 mb-8">
        {isDelivery 
          ? "Your order is being prepared and will be delivered to your address soon."
          : "Please proceed to the counter when your order number is called."}
      </p>

      <button
        onClick={onNewOrder}
        className="py-3 px-8 bg-pink-500 hover:bg-pink-400 text-black font-bold rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
      >
        Place New Order
      </button>
    </section>
  );
}
