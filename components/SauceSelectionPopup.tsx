"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { condimentsData } from "@/data/menuData";

// Filter to only include sauces from condiments
const sauceItems = condimentsData.filter(item => 
  item.id.includes("sauce") ||
  item.id.includes("bbq") ||
  item.id.includes("ranch") ||
  item.id.includes("mustard") ||
  item.id.includes("mayo") ||
  item.id.includes("buffalo") ||
  item.id.includes("chipotle") ||
  item.id.includes("aioli") ||
  item.id.includes("teriyaki") ||
  item.id.includes("thousandisland") ||
  item.id.includes("sriracha") ||
  item.id.includes("tartar") ||
  item.id.includes("bigmacsauce") ||
  item.id.includes("signature") ||
  item.id.includes("marinara") ||
  item.id === "ketchup" ||
  item.id === "mayo"
);

interface SauceSelection {
  sauceId: string;
  sauceName: string;
  amount: "regular" | "extra";
  price: number;
}

interface SauceSelectionPopupProps {
  itemName: string;
  onConfirm: (sauces: SauceSelection[]) => void;
  onClose: () => void;
}

export function SauceSelectionPopup({ itemName, onConfirm, onClose }: SauceSelectionPopupProps) {
  const [selectedSauces, setSelectedSauces] = useState<Record<string, "regular" | "extra" | null>>({});
  const [showAmountPopup, setShowAmountPopup] = useState<{ sauceId: string; sauceName: string } | null>(null);

  const handleSauceClick = (sauceId: string, sauceName: string) => {
    setShowAmountPopup({ sauceId, sauceName });
  };

  const handleAmountSelect = (amount: "regular" | "extra") => {
    if (showAmountPopup) {
      setSelectedSauces(prev => ({
        ...prev,
        [showAmountPopup.sauceId]: amount
      }));
      setShowAmountPopup(null);
    }
  };

  const handleRemoveSauce = (sauceId: string) => {
    setSelectedSauces(prev => {
      const newSauces = { ...prev };
      delete newSauces[sauceId];
      return newSauces;
    });
  };

  const handleConfirm = () => {
    const sauces: SauceSelection[] = Object.entries(selectedSauces)
      .filter(([, amount]) => amount !== null)
      .map(([sauceId, amount]) => {
        const sauce = sauceItems.find(s => s.id === sauceId);
        return {
          sauceId,
          sauceName: sauce?.name || sauceId,
          amount: amount as "regular" | "extra",
          price: amount === "extra" ? 0.50 : 0.25
        };
      });
    onConfirm(sauces);
  };

  const totalExtraCost = Object.entries(selectedSauces)
    .filter(([, amount]) => amount !== null)
    .reduce((sum, [, amount]) => sum + (amount === "extra" ? 0.50 : 0.25), 0);

  const selectedCount = Object.values(selectedSauces).filter(v => v !== null).length;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-black/90 rounded-2xl p-6 w-full max-w-lg border border-white/20 animate-fadeIn max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Add Sauces to {itemName}</h3>
              <p className="text-sm text-white/60 mt-1">Tap a sauce to add it</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Selected Sauces Summary */}
          {selectedCount > 0 && (
            <div className="bg-pink-500/20 border border-pink-500/40 rounded-xl p-4 mb-6">
              <div className="text-sm text-pink-400 font-semibold mb-2">Selected Sauces ({selectedCount})</div>
              <div className="space-y-2">
                {Object.entries(selectedSauces)
                  .filter(([, amount]) => amount !== null)
                  .map(([sauceId, amount]) => {
                    const sauce = sauceItems.find(s => s.id === sauceId);
                    const price = amount === "extra" ? 0.50 : 0.25;
                    return (
                      <div key={sauceId} className="flex justify-between items-center text-white">
                        <span>
                          {sauce?.name} 
                          <span className="text-pink-300 ml-2">({amount})</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">+${price.toFixed(2)}</span>
                          <button
                            onClick={() => handleRemoveSauce(sauceId)}
                            className="text-red-400 hover:text-red-300 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="border-t border-pink-500/30 mt-3 pt-3 flex justify-between text-white font-bold">
                <span>Total Extra:</span>
                <span className="text-green-400">+${totalExtraCost.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Sauce Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {sauceItems.map((sauce) => {
              const isSelected = selectedSauces[sauce.id] !== undefined && selectedSauces[sauce.id] !== null;
              return (
                <button
                  key={sauce.id}
                  onClick={() => handleSauceClick(sauce.id, sauce.name)}
                  className={`p-4 rounded-xl text-left transition-all ${
                    isSelected
                      ? "bg-pink-500/30 border-2 border-pink-500"
                      : "bg-white/5 border border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="text-white font-medium text-sm">{sauce.name}</div>
                  <div className="text-white/50 text-xs mt-1">{sauce.calories} cal</div>
                  {isSelected && (
                    <div className="text-pink-400 text-xs mt-1 font-semibold">
                      {selectedSauces[sauce.id]} (+${selectedSauces[sauce.id] === "extra" ? "0.50" : "0.25"})
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors font-medium"
            >
              Skip Sauces
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black rounded-lg transition-colors font-bold"
            >
              {selectedCount > 0 ? `Add ${selectedCount} Sauce${selectedCount > 1 ? 's' : ''}` : 'No Sauces'}
            </button>
          </div>
        </div>
      </div>

      {/* Amount Selection Popup */}
      {showAmountPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-black/95 rounded-2xl p-6 w-full max-w-sm border border-white/20 animate-fadeIn">
            <h4 className="text-lg font-bold text-white text-center mb-2">
              {showAmountPopup.sauceName}
            </h4>
            <p className="text-white/60 text-center text-sm mb-6">
              Select sauce amount
            </p>

            <div className="space-y-3">
              <button
                onClick={() => handleAmountSelect("regular")}
                className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all flex justify-between items-center px-4"
              >
                <span className="font-semibold">Regular</span>
                <span className="text-green-400 font-bold">+$0.25</span>
              </button>
              <button
                onClick={() => handleAmountSelect("extra")}
                className="w-full py-4 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 rounded-xl text-white transition-all flex justify-between items-center px-4"
              >
                <span className="font-semibold">Extra</span>
                <span className="text-green-400 font-bold">+$0.50</span>
              </button>
            </div>

            <button
              onClick={() => setShowAmountPopup(null)}
              className="w-full mt-4 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
