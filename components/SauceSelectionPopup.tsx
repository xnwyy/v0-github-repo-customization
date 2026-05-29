"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface SauceSelectionPopupProps {
  itemName: string;
  onConfirm: (sauces: { name: string; type: "regular" | "extra"; price: number }[]) => void;
  onClose: () => void;
}

// Sauce options from condiments data with pricing
const sauceOptions = [
  { id: "ketchup", name: "Ketchup", regularPrice: 0, extraPrice: 0.25 },
  { id: "mustard", name: "Mustard", regularPrice: 0, extraPrice: 0.25 },
  { id: "mayo", name: "Mayo", regularPrice: 0, extraPrice: 0.35 },
  { id: "bbq", name: "BBQ Sauce", regularPrice: 0, extraPrice: 0.35 },
  { id: "tangybbq", name: "Tangy BBQ Sauce", regularPrice: 0.25, extraPrice: 0.50 },
  { id: "smokybbq", name: "Smoky BBQ Sauce", regularPrice: 0.25, extraPrice: 0.50 },
  { id: "ranch", name: "Ranch Dressing", regularPrice: 0.30, extraPrice: 0.55 },
  { id: "buttermilkranch", name: "Buttermilk Ranch", regularPrice: 0.30, extraPrice: 0.55 },
  { id: "hotsauce", name: "Hot Sauce", regularPrice: 0, extraPrice: 0.25 },
  { id: "sweetsour", name: "Sweet & Sour Sauce", regularPrice: 0.25, extraPrice: 0.45 },
  { id: "honeymustard", name: "Honey Mustard", regularPrice: 0.30, extraPrice: 0.55 },
  { id: "hotmustard", name: "Hot Mustard", regularPrice: 0.25, extraPrice: 0.45 },
  { id: "spicymayo", name: "Spicy Mayo", regularPrice: 0.35, extraPrice: 0.60 },
  { id: "buffalo", name: "Buffalo Sauce", regularPrice: 0.25, extraPrice: 0.45 },
  { id: "spicybuffalo", name: "Spicy Buffalo Sauce", regularPrice: 0.30, extraPrice: 0.50 },
  { id: "chipotle", name: "Chipotle Sauce", regularPrice: 0.35, extraPrice: 0.60 },
  { id: "aioli", name: "Garlic Aioli", regularPrice: 0.40, extraPrice: 0.70 },
  { id: "teriyaki", name: "Teriyaki Sauce", regularPrice: 0.30, extraPrice: 0.55 },
  { id: "thousandisland", name: "Thousand Island", regularPrice: 0.30, extraPrice: 0.55 },
  { id: "sriracha", name: "Sriracha", regularPrice: 0.25, extraPrice: 0.45 },
  { id: "srirachamac", name: "Sriracha Mac Sauce", regularPrice: 0.35, extraPrice: 0.60 },
  { id: "creamysalsa", name: "Creamy Salsa", regularPrice: 0.30, extraPrice: 0.55 },
  { id: "bigmacsauce", name: "Big Mac Sauce", regularPrice: 0.40, extraPrice: 0.70 },
  { id: "signature", name: "Signature Sauce", regularPrice: 0.35, extraPrice: 0.60 },
];

type SauceSelection = "none" | "regular" | "extra";

interface SauceAmountPopupProps {
  sauce: typeof sauceOptions[0];
  onSelect: (type: "regular" | "extra") => void;
  onClose: () => void;
}

function SauceAmountPopup({ sauce, onSelect, onClose }: SauceAmountPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-black/95 rounded-2xl p-6 w-full max-w-sm border border-pink-500/40 animate-fadeIn">
        <div className="text-center mb-6">
          <h4 className="text-lg font-bold text-white mb-2">How much {sauce.name}?</h4>
          <p className="text-white/60 text-sm">Select the amount for your {sauce.name}</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => onSelect("regular")}
            className="w-full py-4 px-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-pink-400 rounded-xl transition-all flex justify-between items-center"
          >
            <div className="text-left">
              <div className="text-white font-semibold">Regular</div>
              <div className="text-white/60 text-sm">Standard amount</div>
            </div>
            <div className="text-pink-400 font-bold">
              {sauce.regularPrice === 0 ? "Free" : `+$${sauce.regularPrice.toFixed(2)}`}
            </div>
          </button>

          <button
            onClick={() => onSelect("extra")}
            className="w-full py-4 px-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-pink-400 rounded-xl transition-all flex justify-between items-center"
          >
            <div className="text-left">
              <div className="text-white font-semibold">Extra</div>
              <div className="text-white/60 text-sm">Double the sauce</div>
            </div>
            <div className="text-pink-400 font-bold">
              +${sauce.extraPrice.toFixed(2)}
            </div>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-3 text-white/60 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export function SauceSelectionPopup({ itemName, onConfirm, onClose }: SauceSelectionPopupProps) {
  const [selections, setSelections] = useState<Record<string, SauceSelection>>(() => {
    const initial: Record<string, SauceSelection> = {};
    sauceOptions.forEach(sauce => {
      initial[sauce.id] = "none";
    });
    return initial;
  });
  const [amountPopup, setAmountPopup] = useState<typeof sauceOptions[0] | null>(null);

  const handleSauceClick = (sauce: typeof sauceOptions[0]) => {
    if (selections[sauce.id] === "none") {
      // Show amount popup
      setAmountPopup(sauce);
    } else {
      // Toggle off
      setSelections(prev => ({
        ...prev,
        [sauce.id]: "none"
      }));
    }
  };

  const handleAmountSelect = (type: "regular" | "extra") => {
    if (amountPopup) {
      setSelections(prev => ({
        ...prev,
        [amountPopup.id]: type
      }));
      setAmountPopup(null);
    }
  };

  const handleConfirm = () => {
    const selectedSauces: { name: string; type: "regular" | "extra"; price: number }[] = [];
    
    Object.entries(selections).forEach(([id, selection]) => {
      if (selection !== "none") {
        const sauce = sauceOptions.find(s => s.id === id);
        if (sauce) {
          selectedSauces.push({
            name: sauce.name,
            type: selection,
            price: selection === "regular" ? sauce.regularPrice : sauce.extraPrice
          });
        }
      }
    });
    
    onConfirm(selectedSauces);
  };

  const totalSaucePrice = Object.entries(selections).reduce((total, [id, selection]) => {
    if (selection === "none") return total;
    const sauce = sauceOptions.find(s => s.id === id);
    if (!sauce) return total;
    return total + (selection === "regular" ? sauce.regularPrice : sauce.extraPrice);
  }, 0);

  const selectedCount = Object.values(selections).filter(s => s !== "none").length;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-black/90 rounded-2xl p-6 w-full max-w-lg border border-white/20 animate-fadeIn max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Add Sauces</h3>
              <p className="text-white/60 text-sm">for {itemName}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-white/60 text-sm mb-4">
            Tap a sauce to add it, tap again to remove
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {sauceOptions.map((sauce) => {
              const selection = selections[sauce.id];
              const isSelected = selection !== "none";
              
              return (
                <button
                  key={sauce.id}
                  onClick={() => handleSauceClick(sauce)}
                  className={`py-3 px-4 rounded-xl border transition-all text-left ${
                    isSelected
                      ? "bg-pink-500/20 border-pink-500 text-white"
                      : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40"
                  }`}
                >
                  <div className="font-medium text-sm">{sauce.name}</div>
                  {isSelected && (
                    <div className="text-xs text-pink-400 mt-1">
                      {selection === "regular" ? "Regular" : "Extra"} 
                      {selection === "regular" && sauce.regularPrice > 0 && ` +$${sauce.regularPrice.toFixed(2)}`}
                      {selection === "extra" && ` +$${sauce.extraPrice.toFixed(2)}`}
                    </div>
                  )}
                  {!isSelected && sauce.regularPrice === 0 && (
                    <div className="text-xs text-white/40 mt-1">Free</div>
                  )}
                  {!isSelected && sauce.regularPrice > 0 && (
                    <div className="text-xs text-white/40 mt-1">from +${sauce.regularPrice.toFixed(2)}</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Summary */}
          {selectedCount > 0 && (
            <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-white/60">{selectedCount} sauce{selectedCount !== 1 ? "s" : ""} selected</span>
                <span className="text-pink-400 font-bold">
                  {totalSaucePrice > 0 ? `+$${totalSaucePrice.toFixed(2)}` : "Free"}
                </span>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-all font-medium"
            >
              Skip Sauces
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black rounded-lg transition-all font-bold"
            >
              {selectedCount > 0 ? "Add Sauces" : "Continue"}
            </button>
          </div>
        </div>
      </div>

      {amountPopup && (
        <SauceAmountPopup
          sauce={amountPopup}
          onSelect={handleAmountSelect}
          onClose={() => setAmountPopup(null)}
        />
      )}
    </>
  );
}
