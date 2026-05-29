"use client";

import { useEffect, useState } from "react";
import { OrderItem } from "@/types";

interface ConfirmationStepProps {
  onNewOrder: () => void;
  orderItems: Record<string, OrderItem>;
  pickupMethod: string;
}

function calculateWaitTime(orderItems: Record<string, OrderItem>, pickupMethod: string, ordersInQueue: number): number {
  // Base time per order in queue: 4-6 minutes
  const perOrderTime = ordersInQueue * (Math.random() * 2 + 4);
  
  // Small complexity bonus based on YOUR order size
  const totalItems = Object.values(orderItems).reduce((sum, item) => sum + item.quantity, 0);
  let complexityBonus = 0;
  
  Object.values(orderItems).forEach((item) => {
    const name = item.name.toLowerCase();
    if (name.includes("combo") || name.includes("meal")) {
      complexityBonus += item.quantity * 0.5;
    }
    if (name.includes("burger") || name.includes("quarter pounder") || name.includes("big mac")) {
      complexityBonus += item.quantity * 0.3;
    }
    if (name.includes("happy meal")) {
      complexityBonus += item.quantity * 0.5;
    }
  });
  
  // Delivery adds significant extra time regardless of items (15-25 mins extra)
  const deliveryBonus = pickupMethod === "delivery" ? Math.floor(Math.random() * 11) + 15 : 0;
  
  // Base prep time for your order: 3-5 minutes minimum
  const basePrepTime = Math.floor(Math.random() * 3) + 3 + (totalItems * 0.5);
  
  const totalTime = Math.ceil(perOrderTime + complexityBonus + deliveryBonus + basePrepTime);
  
  return Math.max(totalTime, 5); // Minimum 5 minutes
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
  const [ordersAhead, setOrdersAhead] = useState<number>(0);
  const [placeInLine, setPlaceInLine] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    // Simulate calculation delay for effect
    const timer = setTimeout(() => {
      // Completely random number of orders ahead: 1-12
      const randomOrdersAhead = Math.floor(Math.random() * 12) + 1;
      setOrdersAhead(randomOrdersAhead);
      
      const time = calculateWaitTime(orderItems, pickupMethod, randomOrdersAhead);
      setWaitTime(time);
      
      // For dine-in, generate a random place in line number (1-99)
      if (pickupMethod === "dine-in") {
        setPlaceInLine(Math.floor(Math.random() * 99) + 1);
      }
      
      setIsCalculating(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [orderItems, pickupMethod]);

  const totalItems = Object.values(orderItems).reduce((sum, item) => sum + item.quantity, 0);
  const isDelivery = pickupMethod === "delivery";
  const isDineIn = pickupMethod === "dine-in";
  const isPickup = pickupMethod === "pickup";

  return (
    <section className="max-w-md mx-auto text-center animate-fadeIn">
      <div className="text-6xl mb-6">🎉</div>
      <h3 className="text-3xl font-bold text-green-400 mb-4">Order Submitted Successfully!</h3>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
        {/* Place in line for dine-in */}
        {isDineIn && placeInLine && !isCalculating && (
          <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-4 mb-4">
            <div className="text-yellow-400/70 text-sm mb-1">Your Order Number</div>
            <div className="text-yellow-400 font-bold text-4xl">
              #{placeInLine}
            </div>
            <div className="text-yellow-400/70 text-xs mt-2">
              Listen for your number to be called
            </div>
          </div>
        )}

        {/* Orders ahead - only for dine-in and pickup, NOT delivery */}
        {(isDineIn || isPickup) && !isCalculating && (
          <div className="text-white/70 mb-3 text-sm">
            Orders ahead of you: <span className="text-pink-400 font-semibold">{ordersAhead}</span>
          </div>
        )}
        
        <div className="text-white/70 mb-2">
          {isDelivery ? "Estimated Delivery Time" : isDineIn ? "Estimated Wait Time" : "Estimated Pickup Time"}
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
            {(isDineIn || isPickup) && (
              <div className="text-white/50 text-sm">
                Based on {ordersAhead} order{ordersAhead !== 1 ? 's' : ''} ahead
              </div>
            )}
            {isDelivery && (
              <div className="text-white/50 text-sm">
                Includes travel time to your location
              </div>
            )}
            <div className="text-white/40 text-xs mt-1">
              Your order has {totalItems} item{totalItems !== 1 ? 's' : ''}
            </div>
          </>
        )}
      </div>

      {waitTime && waitTime > 20 && (
        <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-4 mb-6">
          <div className="text-yellow-400 text-sm">
            {waitTime > 45 
              ? "We're a bit busy right now! Thanks for your patience."
              : "There are several orders ahead of you. Thanks for waiting!"}
          </div>
        </div>
      )}

      {isDelivery && (
        <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-4 mb-6">
          <div className="text-blue-400 text-sm">
            Your driver will text you when they&apos;re on the way
          </div>
        </div>
      )}

      <p className="text-white/70 mb-8">
        {isDelivery 
          ? "Your order is being prepared and will be delivered to your address soon."
          : isDineIn
          ? "Please wait for your number to be called at the counter."
          : "Please proceed to the counter when your order is ready."}
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
