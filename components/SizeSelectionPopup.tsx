"use client";

import { useState } from "react";
import { X, Plus, Minus } from "lucide-react";

interface SizeSelectionPopupProps {
  item: {
    name: string;
    sizes?: { size: string; price: number; calories: number }[];
  };
  category: string;
  onConfirm: (selections: { size: string; price: number; calories: number; quantity: number; iceOption?: string }[]) => void;
  onClose: () => void;
  existingQuantities?: Record<string, number>; // key is size, value is current quantity
}

// Ice options with price adjustments
const iceOptions = [
  { id: "regular", label: "Regular Ice", priceAdjust: 0 },
  { id: "light", label: "Light Ice", priceAdjust: -0.10 },
  { id: "no-ice", label: "No Ice", priceAdjust: -0.20 },
  { id: "extra", label: "Extra Ice", priceAdjust: 0 },
];

// Categories that should show ice options
const drinkCategories = ["drinks", "mccafe", "tea", "icee", "smoothies"];

export function SizeSelectionPopup({ item, category, onConfirm, onClose, existingQuantities }: SizeSelectionPopupProps) {
  const [selections, setSelections] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    item.sizes?.forEach((s) => {
      // Pre-fill with existing quantities if available
      initial[s.size] = existingQuantities?.[s.size] || 0;
    });
    return initial;
  });
  
  // Ice option state (for drinks)
  const [iceOption, setIceOption] = useState("regular");
  
  // Check if this is a drink category
  const isDrink = drinkCategories.some(cat => 
    category.toLowerCase().includes(cat) ||
    item.name.toLowerCase().includes("coke") ||
    item.name.toLowerCase().includes("sprite") ||
    item.name.toLowerCase().includes("fanta") ||
    item.name.toLowerCase().includes("pepsi") ||
    item.name.toLowerCase().includes("tea") ||
    item.name.toLowerCase().includes("lemonade") ||
    item.name.toLowerCase().includes("dr pepper") ||
    item.name.toLowerCase().includes("mountain dew")
  );
  
  // Get current ice price adjustment
  const getIcePriceAdjust = () => {
    return iceOptions.find(opt => opt.id === iceOption)?.priceAdjust || 0;
  };

  const updateQuantity = (size: string, change: number) => {
    setSelections((prev) => ({
      ...prev,
      [size]: Math.max(0, (prev[size] || 0) + change),
    }));
  };

  const handleConfirm = () => {
    const iceAdjust = isDrink ? getIcePriceAdjust() : 0;
    // Include ALL sizes so we can handle removals (quantity = 0)
    const result = item.sizes?.map((s) => ({
      size: s.size,
      price: Math.max(0, s.price + iceAdjust), // Apply ice discount
      calories: s.calories,
      quantity: selections[s.size] || 0,
      iceOption: isDrink ? iceOption : undefined,
    }));
    onConfirm(result || []);
  };

  const hasSelections = Object.values(selections).some((q) => q > 0);
  const hasExistingItems = existingQuantities && Object.values(existingQuantities).some(q => q > 0);
  const hasChanges = hasSelections || hasExistingItems;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 rounded-2xl p-6 w-full max-w-md border border-white/20 animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">{item.name}</h3>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-white/60 mb-4">Select size and quantity:</p>

        <div className="space-y-3">
          {item.sizes?.map((size) => {
            const iceAdjust = isDrink ? getIcePriceAdjust() : 0;
            const adjustedPrice = Math.max(0, size.price + iceAdjust);
            return (
              <div
                key={size.size}
                className="flex justify-between items-center bg-white/5 rounded-xl p-4"
              >
                <div>
                  <div className="text-white font-medium">{size.size}</div>
                  <div className="text-sm text-white/60">
                    ${adjustedPrice.toFixed(2)} • {size.calories} cal
                    {iceAdjust !== 0 && (
                      <span className={iceAdjust < 0 ? "text-green-400 ml-1" : "text-red-400 ml-1"}>
                        ({iceAdjust < 0 ? "-" : "+"}${Math.abs(iceAdjust).toFixed(2)})
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(size.size, -1)}
                    className="w-8 h-8 rounded-full border border-pink-400 text-pink-400 flex items-center justify-center hover:bg-pink-400 hover:text-black transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center text-white font-bold">
                    {selections[size.size] || 0}
                  </span>
                  <button
                    onClick={() => updateQuantity(size.size, 1)}
                    className="w-8 h-8 rounded-full bg-pink-500 text-black flex items-center justify-center hover:bg-pink-400 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ice Options for Drinks */}
        {isDrink && (
          <div className="mt-6">
            <h4 className="text-pink-400 font-semibold text-sm mb-3 uppercase tracking-wide">Ice Option</h4>
            <div className="grid grid-cols-2 gap-2">
              {iceOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setIceOption(opt.id)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    iceOption === opt.id
                      ? "bg-pink-500 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {opt.label}
                  {opt.priceAdjust !== 0 && (
                    <span className={opt.priceAdjust < 0 ? "text-green-400 ml-1" : ""}>
                      {opt.priceAdjust < 0 ? ` (-$${Math.abs(opt.priceAdjust).toFixed(2)})` : ` (+$${opt.priceAdjust.toFixed(2)})`}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!hasChanges}
            className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black rounded-lg transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {hasExistingItems ? 'Update Order' : 'Add to Order'}
          </button>
        </div>
      </div>
    </div>
  );
}
