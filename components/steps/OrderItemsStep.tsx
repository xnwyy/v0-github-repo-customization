"use client";

import { useState, useMemo } from "react";
import { Search, X, Plus, Minus } from "lucide-react";
import { menuCategories, itemHasSizes } from "@/data/menuData";
import { CustomizationPopup } from "@/components/CustomizationPopup";
import { SizeSelectionPopup } from "@/components/SizeSelectionPopup";
import { OrderItem, MenuItem } from "@/types";
import { useToast } from "@/components/Toast";

interface OrderItemsStepProps {
  orderItems: Record<string, OrderItem>;
  setOrderItems: (items: Record<string, OrderItem>) => void;
  onNext: () => void;
  onBack: () => void;
}

// Improved search function with fuzzy matching and keyword support
function searchScore(itemName: string, categoryName: string, query: string): number {
  const name = itemName.toLowerCase();
  const cat = categoryName.toLowerCase();
  const q = query.toLowerCase().trim();
  
  if (!q) return 1;
  
  // Exact match gets highest score
  if (name === q) return 100;
  
  // Name starts with query
  if (name.startsWith(q)) return 90;
  
  // Category + name combined match
  if (`${cat} ${name}`.includes(q)) return 80;
  
  // Name contains the full query
  if (name.includes(q)) return 70;
  
  // Split query into words and check each
  const queryWords = q.split(/\s+/).filter(w => w.length > 0);
  const nameWords = name.split(/\s+/);
  
  // All query words found in name
  const allWordsMatch = queryWords.every(qw => 
    nameWords.some(nw => nw.includes(qw) || qw.includes(nw))
  );
  if (allWordsMatch && queryWords.length > 1) return 60;
  
  // Common keyword mappings for better search
  const keywords: Record<string, string[]> = {
    "dog": ["pup", "puppy", "doggie", "canine"],
    "pet": ["pup", "puppy", "doggie", "dog"],
    "puppy": ["pup", "dog", "doggie"],
    "mcnuggets": ["nugget", "nuggets", "chicken nuggets"],
    "nuggets": ["mcnuggets", "chicken nuggets", "nugget"],
    "fries": ["french fries", "potato", "fry"],
    "coke": ["coca-cola", "coca cola", "soda", "pop"],
    "sprite": ["lemon lime", "soda", "pop"],
    "pepsi": ["cola", "soda", "pop"],
    "dew": ["mountain dew", "mtn dew"],
    "mtn": ["mountain", "mountain dew"],
    "shake": ["milkshake", "milk shake"],
    "milkshake": ["shake", "milk shake"],
    "coffee": ["mccafe", "latte", "cappuccino", "espresso"],
    "breakfast": ["morning", "egg", "mcmuffin", "mcgriddle", "biscuit"],
    "burger": ["hamburger", "cheeseburger", "sandwich"],
    "sandwich": ["burger", "chicken sandwich"],
    "chicken": ["mcchicken", "nuggets", "tenders", "wings"],
    "healthy": ["salad", "grilled", "water"],
    "salad": ["healthy", "greens", "lettuce"],
    "ice cream": ["mcflurry", "sundae", "cone", "frozen"],
    "mcflurry": ["ice cream", "frozen", "oreo", "m&m"],
    "dessert": ["mcflurry", "ice cream", "cookie", "pie", "sundae"],
    "sweet": ["dessert", "mcflurry", "shake", "cookie"],
    "drink": ["soda", "beverage", "soft drink", "coke", "sprite"],
    "soda": ["drink", "pop", "soft drink", "coke", "sprite", "pepsi"],
    "pop": ["soda", "drink", "soft drink"],
    "water": ["bottled water", "dasani", "aqua"],
    "juice": ["orange juice", "apple juice", "oj"],
    "oj": ["orange juice"],
    "tea": ["iced tea", "sweet tea"],
    "happy meal": ["kids", "toy", "children"],
    "kids": ["happy meal", "children"],
    "value": ["cheap", "dollar", "budget", "deal"],
    "cheap": ["value", "dollar menu", "budget"],
    "big mac": ["mac", "bigmac"],
    "quarter pounder": ["qp", "quarter", "1/4 pounder"],
    "qp": ["quarter pounder"],
    "bacon": ["blt", "smoky"],
    "spicy": ["hot", "jalapeno", "buffalo", "nashville"],
    "hot": ["spicy", "warm"],
    "wrap": ["snack wrap", "tortilla"],
    "fish": ["filet-o-fish", "filet o fish", "seafood"],
    "veggie": ["vegetarian", "plant", "meatless"],
    "vegan": ["plant", "mcplant", "meatless"],
    "energy": ["red bull", "monster", "caffeine", "boost"],
  };
  
  // Check keyword expansions
  for (const [keyword, expansions] of Object.entries(keywords)) {
    if (q.includes(keyword)) {
      for (const expansion of expansions) {
        if (name.includes(expansion)) return 50;
      }
    }
    if (expansions.some(e => q.includes(e))) {
      if (name.includes(keyword)) return 50;
    }
  }
  
  // Any query word found in name
  const anyWordMatch = queryWords.some(qw => 
    nameWords.some(nw => nw.includes(qw) || qw.includes(nw))
  );
  if (anyWordMatch) return 40;
  
  // Category contains query
  if (cat.includes(q)) return 30;
  
  // Fuzzy matching - check for partial character matches
  let matchCount = 0;
  for (const qw of queryWords) {
    if (qw.length >= 3) {
      for (const nw of nameWords) {
        if (nw.includes(qw.slice(0, 3))) matchCount++;
      }
    }
  }
  if (matchCount > 0) return 20 + matchCount;
  
  return 0;
}

export function OrderItemsStep({ orderItems, setOrderItems, onNext, onBack }: OrderItemsStepProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [customizationPopup, setCustomizationPopup] = useState<{
    show: boolean;
    itemKey: string;
    itemName: string;
    category: string;
    baseItem: MenuItem;
    quantity: number;
  } | null>(null);
  const [sizePopupItem, setSizePopupItem] = useState<{ item: MenuItem; category: string } | null>(null);
  const { showToast } = useToast();

  // Search results with scoring
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const results: { item: MenuItem; category: typeof menuCategories[0]; score: number }[] = [];
    
    menuCategories.forEach(category => {
      category.items.forEach(item => {
        const score = searchScore(item.name, category.name, searchQuery);
        if (score > 0) {
          results.push({ item, category, score });
        }
      });
    });
    
    // Sort by score descending
    return results.sort((a, b) => b.score - a.score);
  }, [searchQuery]);

  const calculateTotal = () => {
    return Object.values(orderItems).reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const needsCustomization = (item: MenuItem, category: string): boolean => {
    return item.needsCustomization || 
           category === "Happy Meals" ||
           category === "happymeals" ||
           category.toLowerCase().includes("burger") ||
           category === "chicken-sandwiches" ||
           (category === "burgers" && 
            (item.name.toLowerCase().includes("burger") || 
             item.name.toLowerCase().includes("sandwich") ||
             item.name.toLowerCase().includes("mac") ||
             item.name.toLowerCase().includes("quarter")));
  };

  const updateQuantity = (key: string, change: number, item?: MenuItem, category?: string) => {
    const newItems = { ...orderItems };
    
    if (!newItems[key] && item && category) {
      newItems[key] = {
        ...item,
        quantity: 0,
        category
      };
    }

    if (newItems[key]) {
      // No upper limit on quantity
      newItems[key].quantity = Math.max(0, newItems[key].quantity + change);
      
      if (newItems[key].quantity === 0) {
        const itemName = newItems[key].name;
        delete newItems[key];
        setOrderItems(newItems);
        showToast(`${itemName} removed from order`, 'error');
      } else {
        setOrderItems(newItems);
        
        if (change > 0) {
          showToast(`${newItems[key].name} added to order`, 'success');
        } else if (change < 0) {
          showToast(`${newItems[key].name} quantity: ${newItems[key].quantity}`, 'info');
        }
      }
    }
  };

  const handleSizeSelection = (item: MenuItem, category: string) => {
    setSizePopupItem({ item, category });
  };

  const handleSizeConfirm = (selections: { size: string; price: number; calories: number; quantity: number; iceOption?: string }[]) => {
    const category = sizePopupItem?.category || '';
    const item = sizePopupItem?.item;
    
    if (!item) return;
    
    const newItems = { ...orderItems };
    
    selections.forEach(selection => {
      // Include ice option in key if present
      const iceKey = selection.iceOption && selection.iceOption !== 'regular' ? `:${selection.iceOption}` : '';
      const key = `${category}:${item.name}:${selection.size}${iceKey}`;
      
      if (newItems[key]) {
        newItems[key].quantity += selection.quantity;
      } else {
        newItems[key] = {
          name: item.name,
          price: selection.price,
          calories: selection.calories,
          quantity: selection.quantity,
          category,
          size: selection.size,
          // Store ice option in customizations for display
          customizations: selection.iceOption && selection.iceOption !== 'regular' 
            ? { ice: selection.iceOption === 'no-ice' ? 'no ice (-$0.20)' : selection.iceOption === 'light' ? 'light ice (-$0.10)' : 'extra ice' }
            : undefined
        };
      }
    });
    
    setOrderItems(newItems);
    
    selections.forEach(selection => {
      if (selection.quantity > 0) {
        showToast(`${item.name} (${selection.size}) x${selection.quantity} added to order`, 'success');
      }
    });
    
    setSizePopupItem(null);
  };

  const handleItemClick = (item: MenuItem, category: string) => {
    if (itemHasSizes(item)) {
      handleSizeSelection(item, category);
    } else if (needsCustomization(item, category)) {
      // Open customization popup with quantity selection
      setCustomizationPopup({
        show: true,
        itemKey: `${category}:${item.name}`,
        itemName: item.name,
        category,
        baseItem: item,
        quantity: 1
      });
    } else {
      const key = `${category}:${item.name}`;
      updateQuantity(key, 1, item, category);
    }
  };

  const handleCustomizationConfirm = (customizations: Record<string, string>, specialNotes: string, quantity: number) => {
    if (customizationPopup) {
      const newItems = { ...orderItems };
      
      // Create a unique key based on customizations
      const customKey = Object.entries(customizations)
        .filter(([, v]) => v !== 'regular' && v !== 'none')
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `${k}:${v}`)
        .join('|');
      
      const uniqueKey = customKey 
        ? `${customizationPopup.itemKey}:${customKey.slice(0, 50)}`
        : customizationPopup.itemKey;
      
      // Calculate extra cost from customizations (both additions and subtractions)
      let extraCost = 0;
      Object.entries(customizations).forEach(([key, value]) => {
        // Check for price increases (+$X.XX)
        if (value.includes('+$')) {
          const match = value.match(/\+\$(\d+\.?\d*)/);
          if (match) extraCost += parseFloat(match[1]);
        }
        // Check for price decreases (-$X.XX)
        if (value.includes('-$')) {
          const match = value.match(/-\$(\d+\.?\d*)/);
          if (match) extraCost -= parseFloat(match[1]);
        }
        // Legacy handling for simple "extra" without explicit price
        if (value === 'extra' && key === 'cheese' && !value.includes('$')) extraCost += 0.50;
        if (value === 'extra' && key !== 'cheese' && !value.includes('$')) extraCost += 0.25;
      });
      
      const basePrice = customizationPopup.baseItem.price + extraCost;
      
      if (newItems[uniqueKey]) {
        // Same customization exists, add to quantity
        newItems[uniqueKey].quantity += quantity;
      } else {
        // New customization
        newItems[uniqueKey] = {
          ...customizationPopup.baseItem,
          price: basePrice,
          quantity: quantity,
          category: customizationPopup.category,
          customizations,
          specialNotes
        };
      }
      
      setOrderItems(newItems);
      showToast(`${customizationPopup.itemName} x${quantity} added to order`, 'success');
    }
    setCustomizationPopup(null);
  };

  const getItemQuantity = (item: MenuItem, category: string): number => {
    if (itemHasSizes(item)) {
      return Object.entries(orderItems)
        .filter(([key]) => key.startsWith(`${category}:${item.name}:`))
        .reduce((sum, [, orderItem]) => sum + orderItem.quantity, 0);
    }
    // For customizable items, sum all variants
    return Object.entries(orderItems)
      .filter(([key]) => key.startsWith(`${category}:${item.name}`))
      .reduce((sum, [, orderItem]) => sum + orderItem.quantity, 0);
  };

  const getSizeBreakdown = (item: MenuItem, category: string): { size: string; quantity: number }[] => {
    if (!itemHasSizes(item)) return [];
    
    return Object.entries(orderItems)
      .filter(([key]) => key.startsWith(`${category}:${item.name}:`))
      .map(([key, orderItem]) => ({
        size: orderItem.size || key.split(':')[2],
        quantity: orderItem.quantity
      }))
      .filter(s => s.quantity > 0);
  };

  const renderMenuItem = (item: MenuItem, category: typeof menuCategories[0], showCategory = false) => {
    const quantity = getItemQuantity(item, category.id);
    const hasSizes = itemHasSizes(item);
    const sizeBreakdown = getSizeBreakdown(item, category.id);
    
    return (
      <div
        key={`${category.id}-${item.name}`}
        className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer"
        onClick={() => handleItemClick(item, category.id)}
      >
        <div className="flex justify-between items-center">
          <div className="flex-1">
            {showCategory && (
              <div className="text-xs text-pink-400 mb-1">{category.emoji} {category.name}</div>
            )}
            <div className="font-semibold text-white">{item.name}</div>
            <div className="text-sm text-white/60">
              ${hasSizes ? item.sizes?.[0]?.price.toFixed(2) || '0.00' : item.price.toFixed(2)}
              {hasSizes && ' - '}
              {hasSizes && item.sizes?.map(s => s.size).join(' / ')}
              {' | '}
              {hasSizes ? item.sizes?.[0]?.calories || 0 : item.calories} cal
            </div>
            {item.includes && (
              <div className="text-xs text-pink-400 mt-1">
                Includes: {item.includes.join(', ')}
              </div>
            )}
            {hasSizes && sizeBreakdown.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {sizeBreakdown.map((s) => (
                  <span 
                    key={s.size} 
                    className="inline-flex items-center px-2 py-1 bg-pink-500/20 border border-pink-500/40 rounded-full text-xs text-pink-300"
                  >
                    {s.quantity}x {s.size}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {quantity > 0 && (
              <>
                <button
                  onClick={() => {
                    if (hasSizes) {
                      // Find the first order item matching this item and reduce its quantity
                      const matchingKeys = Object.keys(orderItems).filter(key => 
                        key.startsWith(`${category.id}:${item.name}:`)
                      );
                      if (matchingKeys.length > 0) {
                        // Remove from the last added size variant
                        const keyToUpdate = matchingKeys[matchingKeys.length - 1];
                        updateQuantity(keyToUpdate, -1);
                      }
                    } else {
                      const key = `${category.id}:${item.name}`;
                      updateQuantity(key, -1, item, category.id);
                    }
                  }}
                  className="w-8 h-8 rounded-full border border-pink-400 text-pink-400 flex items-center justify-center hover:bg-pink-400 hover:text-black transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-white font-bold">{quantity}</span>
              </>
            )}
            <button
              onClick={() => handleItemClick(item, category.id)}
              className="w-8 h-8 rounded-full bg-pink-500 text-black flex items-center justify-center hover:bg-pink-400 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Step 2: Select Items</h3>
        <p className="text-white/60">Choose from our delicious menu</p>
      </div>

      {/* Running Total */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-lg rounded-xl p-4 mb-6 border border-white/20 z-10">
        <div className="text-center text-2xl font-bold text-white">
          Total: ${calculateTotal().toFixed(2)}
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
        <input
          type="text"
          placeholder="Search menu (try: nuggets, dog treats, big mac, healthy...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-pink-400 transition-colors"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Search Results */}
      {searchResults && searchResults.length > 0 && (
        <div className="mb-6">
          <div className="text-sm text-white/60 mb-3">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {searchResults.slice(0, 20).map(({ item, category }) => 
              renderMenuItem(item, category, true)
            )}
          </div>
          {searchResults.length > 20 && (
            <div className="text-center text-white/40 text-sm mt-3">
              Showing first 20 results. Try a more specific search.
            </div>
          )}
        </div>
      )}

      {searchResults && searchResults.length === 0 && (
        <div className="text-center text-white/60 mb-6 py-8">
          No items found for &quot;{searchQuery}&quot;. Try different keywords.
        </div>
      )}

      {/* Category Tabs - hide when searching */}
      {!searchQuery && (
        <>
          <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === index
                    ? "bg-pink-500 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="space-y-3 mb-8">
            {menuCategories[activeTab]?.items.map((item) => 
              renderMenuItem(item, menuCategories[activeTab])
            )}
          </div>
        </>
      )}

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-all duration-300 font-medium"
        >
          {"<- Back"}
        </button>
        <button
          onClick={onNext}
          disabled={calculateTotal() === 0}
          className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black rounded-lg transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {"Next: Condiments ->"}
        </button>
      </div>

      {/* Popups */}
      {customizationPopup && (
        <CustomizationPopup
          itemName={customizationPopup.itemName}
          category={customizationPopup.category}
          onConfirm={handleCustomizationConfirm}
          onClose={() => setCustomizationPopup(null)}
        />
      )}
      
      {sizePopupItem && (
        <SizeSelectionPopup
          item={sizePopupItem.item}
          category={sizePopupItem.category}
          onConfirm={handleSizeConfirm}
          onClose={() => setSizePopupItem(null)}
        />
      )}
    </div>
  );
}
