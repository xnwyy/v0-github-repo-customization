"use client";

import { useState, useMemo } from "react";
import { X, Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { condimentsData } from "@/data/menuData";

interface CustomizationPopupProps {
  itemName: string;
  category: string;
  onConfirm: (customizations: Record<string, string>, specialNotes: string, quantity: number, extraSauces?: Record<string, { amount: "regular" | "extra"; price: number }>) => void;
  onClose: () => void;
}

// Pricing for extra sauces
const SAUCE_PRICING = {
  regular: 0.35,
  extra: 0.65,
};

// Bread/Bun options
const breadOptions = [
  { id: "bread", name: "Bread/Bun", options: ["regular", "no bun (lettuce wrap) (-$0.30)", "no bread (-$0.50)", "toasted extra", "sesame seed bun", "brioche bun (+$0.75)", "whole wheat bun (+$0.50)", "gluten-free bun (+$1.50)"] },
];

// Burger/Sandwich customizations
const burgerCustomizations = [
  { id: "patty", name: "Patty", options: ["regular", "extra patty (+$2.00)", "double patty (+$3.50)", "well done", "lightly cooked", "no patty (-$2.00)"] },
  { id: "lettuce", name: "Lettuce", options: ["regular", "none (-$0.10)", "extra (+$0.25)", "shredded", "whole leaf"] },
  { id: "tomato", name: "Tomato", options: ["regular", "none (-$0.10)", "extra (+$0.30)", "fresh sliced thick (+$0.25)"] },
  { id: "onion", name: "Onion", options: ["regular", "none (-$0.10)", "extra (+$0.25)", "grilled onions (+$0.35)", "raw onions", "caramelized onions (+$0.75)"] },
  { id: "pickle", name: "Pickles", options: ["regular", "none (-$0.10)", "extra (+$0.20)", "extra extra (+$0.40)"] },
  { id: "cheese", name: "Cheese", options: ["American", "none (-$0.40)", "extra American (+$0.50)", "double cheese (+$1.00)", "cheddar (+$0.25)", "Swiss (+$0.35)", "pepper jack (+$0.35)", "provolone (+$0.35)", "mozzarella (+$0.40)"] },
  { id: "sauce", name: "Special Sauce", options: ["regular", "none (-$0.10)", "extra (+$0.25)", "on the side"] },
  { id: "ketchup", name: "Ketchup", options: ["none", "regular", "extra (+$0.15)", "on the side"] },
  { id: "mustard", name: "Mustard", options: ["none", "regular", "extra (+$0.15)", "honey mustard (+$0.30)", "spicy mustard (+$0.25)", "on the side"] },
  { id: "mayo", name: "Mayo", options: ["none", "regular", "extra (+$0.20)", "light mayo", "on the side"] },
  { id: "bacon", name: "Bacon", options: ["none", "add bacon (+$1.50)", "extra bacon (+$2.50)", "crispy bacon (+$1.75)", "turkey bacon (+$1.75)"] },
  { id: "jalapenos", name: "Jalapenos", options: ["none", "add jalapenos (+$0.35)", "extra jalapenos (+$0.60)", "pickled jalapenos (+$0.40)"] },
  { id: "avocado", name: "Avocado/Guac", options: ["none", "add guacamole (+$1.50)", "extra guacamole (+$2.25)", "add avocado slices (+$1.75)"] },
  { id: "mushrooms", name: "Mushrooms", options: ["none", "add sauteed mushrooms (+$0.75)", "extra mushrooms (+$1.25)"] },
];

// Chicken sandwich customizations
const chickenCustomizations = [
  { id: "preparation", name: "Preparation", options: ["crispy fried", "grilled (-$0.50)", "spicy crispy (+$0.25)", "blackened (+$0.50)"] },
  { id: "lettuce", name: "Lettuce", options: ["regular", "none (-$0.10)", "extra (+$0.25)", "shredded", "whole leaf"] },
  { id: "tomato", name: "Tomato", options: ["regular", "none (-$0.10)", "extra (+$0.30)"] },
  { id: "pickles", name: "Pickles", options: ["regular", "none (-$0.10)", "extra (+$0.20)", "extra extra (+$0.40)"] },
  { id: "cheese", name: "Cheese", options: ["none", "American (+$0.40)", "pepper jack (+$0.50)", "Swiss (+$0.50)", "provolone (+$0.50)"] },
  { id: "sauce", name: "Sauce", options: ["mayo", "none (-$0.10)", "spicy mayo (+$0.25)", "buffalo sauce (+$0.30)", "ranch (+$0.30)", "honey mustard (+$0.30)", "BBQ sauce (+$0.25)", "chipotle aioli (+$0.40)"] },
  { id: "onion", name: "Onion", options: ["none", "raw onions (+$0.15)", "grilled onions (+$0.35)", "pickled red onions (+$0.40)"] },
  { id: "bacon", name: "Bacon", options: ["none", "add bacon (+$1.50)", "extra bacon (+$2.50)"] },
  { id: "avocado", name: "Avocado", options: ["none", "add guacamole (+$1.50)", "add avocado slices (+$1.75)"] },
];

// Fish sandwich customizations
const fishCustomizations = [
  { id: "preparation", name: "Preparation", options: ["fried", "grilled (+$0.50)"] },
  { id: "cheese", name: "Cheese", options: ["American", "none (-$0.30)", "Swiss (+$0.25)", "extra cheese (+$0.50)"] },
  { id: "tartar", name: "Tartar Sauce", options: ["regular", "none (-$0.15)", "extra (+$0.30)", "on the side"] },
  { id: "lettuce", name: "Lettuce", options: ["none", "add lettuce (+$0.20)", "extra lettuce (+$0.35)"] },
  { id: "tomato", name: "Tomato", options: ["none", "add tomato (+$0.25)", "extra tomato (+$0.40)"] },
  { id: "onion", name: "Onion", options: ["none", "add raw onion (+$0.15)", "add grilled onion (+$0.35)"] },
  { id: "pickles", name: "Pickles", options: ["none", "add pickles (+$0.15)", "extra pickles (+$0.25)"] },
];

// Nuggets/Tenders customizations
const nuggetsCustomizations = [
  { id: "dipping1", name: "Dipping Sauce 1", options: ["BBQ", "none (-$0.25)", "Sweet & Sour", "Honey Mustard", "Ranch", "Buffalo", "Spicy Buffalo", "Tangy BBQ", "Hot Mustard", "Creamy Ranch", "Sriracha Mac", "Chipotle BBQ"] },
  { id: "dipping2", name: "Dipping Sauce 2", options: ["none", "BBQ (+$0.35)", "Sweet & Sour (+$0.35)", "Honey Mustard (+$0.35)", "Ranch (+$0.35)", "Buffalo (+$0.35)", "Spicy Buffalo (+$0.35)", "Tangy BBQ (+$0.35)", "Hot Mustard (+$0.35)"] },
  { id: "extra_sauce", name: "Extra Sauces", options: ["none", "+1 extra sauce (+$0.35)", "+2 extra sauces (+$0.70)", "+3 extra sauces (+$1.05)"] },
];

// Breakfast customizations
const breakfastCustomizations = [
  { id: "egg", name: "Egg", options: ["regular (folded)", "round egg", "scrambled", "no egg", "extra egg (+$1)"] },
  { id: "meat", name: "Meat", options: ["regular", "crispy", "no meat", "extra meat (+$1.50)", "substitute bacon", "substitute ham"] },
  { id: "cheese", name: "Cheese", options: ["American", "none", "extra cheese", "white cheddar"] },
  { id: "sauce", name: "Sauce", options: ["none", "ketchup", "hot sauce", "maple syrup"] },
  { id: "butter", name: "Butter", options: ["regular", "none", "extra butter"] },
];

// Salad customizations
const saladCustomizations = [
  { id: "protein", name: "Protein", options: ["grilled chicken", "crispy chicken", "no protein", "double protein (+$3)"] },
  { id: "dressing", name: "Dressing", options: ["Ranch", "on the side", "Caesar", "Balsamic Vinaigrette", "Italian", "Honey Mustard", "Thousand Island", "Blue Cheese", "none"] },
  { id: "croutons", name: "Croutons", options: ["regular", "none", "extra croutons"] },
  { id: "cheese", name: "Cheese", options: ["regular", "none", "extra cheese"] },
  { id: "tomatoes", name: "Tomatoes", options: ["regular", "none", "extra tomatoes"] },
  { id: "onions", name: "Onions", options: ["regular", "none", "extra onions"] },
];

// Coffee/Beverage customizations
const coffeeCustomizations = [
  { id: "ice", name: "Ice", options: ["regular", "no ice (-$0.25)", "light ice (-$0.10)", "extra ice"] },
  { id: "milk", name: "Milk", options: ["regular (2%)", "skim milk", "whole milk", "oat milk (+$0.70)", "almond milk (+$0.70)", "soy milk (+$0.70)", "coconut milk (+$0.70)", "no milk (-$0.15)"] },
  { id: "sweetener", name: "Sweetener", options: ["regular sugar", "none (-$0.05)", "extra sugar (+$0.10)", "Splenda", "Stevia", "Equal", "raw sugar", "honey (+$0.25)"] },
  { id: "shots", name: "Espresso Shots", options: ["regular", "extra shot (+$0.80)", "double shot (+$1.50)", "decaf", "half-caf", "no shot (-$0.50)"] },
  { id: "flavor", name: "Flavor Syrup", options: ["none", "vanilla (+$0.60)", "caramel (+$0.60)", "hazelnut (+$0.60)", "mocha (+$0.60)", "sugar-free vanilla (+$0.60)", "extra flavor (+$0.90)"] },
  { id: "whip", name: "Whipped Cream", options: ["regular", "none (-$0.15)", "extra whip (+$0.30)"] },
  { id: "drizzle", name: "Drizzle", options: ["none", "caramel drizzle (+$0.25)", "chocolate drizzle (+$0.25)", "both (+$0.45)"] },
];

// Ice cream customizations
const iceCreamCustomizations = [
  { id: "toppings", name: "Toppings", options: ["regular", "extra toppings (+$0.50)", "light toppings (-$0.15)", "none (-$0.25)"] },
  { id: "fudge", name: "Hot Fudge", options: ["none", "regular", "extra (+$0.40)", "on the side"] },
  { id: "caramel", name: "Caramel", options: ["none", "regular", "extra (+$0.40)", "on the side"] },
  { id: "nuts", name: "Nuts", options: ["none", "peanuts (+$0.30)", "almonds (+$0.35)", "mixed nuts (+$0.40)"] },
  { id: "cherry", name: "Cherry", options: ["none", "one cherry", "extra cherries (+$0.20)"] },
  { id: "whip", name: "Whipped Cream", options: ["regular", "none (-$0.15)", "extra whip (+$0.30)"] },
];

// Soft drinks customizations (with ice options)
const softDrinkCustomizations = [
  { id: "ice", name: "Ice", options: ["regular", "no ice (-$0.20)", "light ice (-$0.10)", "extra ice"] },
  { id: "straw", name: "Straw", options: ["regular", "no straw", "extra straws"] },
  { id: "lid", name: "Lid", options: ["regular", "no lid"] },
];

// Fries customizations
const friesCustomizations = [
  { id: "salt", name: "Salt", options: ["regular", "no salt", "extra salt", "light salt"] },
  { id: "cooking", name: "Cooking", options: ["regular", "well done/crispy", "lightly cooked"] },
  { id: "seasoning", name: "Seasoning", options: ["none", "cajun seasoning (+$0.50)", "garlic parmesan (+$0.75)", "ranch seasoning (+$0.50)"] },
];

// Happy Meal customizations
const happyMealCustomizations = [
  { id: "side", name: "Side", options: ["Small Fries", "Apple Slices", "Go-Gurt Side"] },
  { id: "drink", name: "Drink", options: ["Small Soft Drink", "1% Low Fat Milk", "Fat Free Chocolate Milk", "Apple Juice", "Water Bottle"] },
  { id: "toy", name: "Toy Preference", options: ["Any toy", "Boy toy", "Girl toy", "No toy please"] },
];

// Wrap customizations
const wrapCustomizations = [
  { id: "tortilla", name: "Tortilla", options: ["flour", "whole wheat", "spinach"] },
  { id: "protein", name: "Protein", options: ["grilled chicken", "crispy chicken", "no protein"] },
  { id: "lettuce", name: "Lettuce", options: ["regular", "none", "extra"] },
  { id: "cheese", name: "Cheese", options: ["cheddar", "none", "extra cheese", "pepper jack"] },
  { id: "sauce", name: "Sauce", options: ["ranch", "none", "creamy salsa", "chipotle", "honey mustard"] },
  { id: "tomato", name: "Tomato", options: ["regular", "none", "extra"] },
];

// Combo meal customizations
const comboCustomizations = [
  { id: "drinkType", name: "Drink Choice", options: ["Coca-Cola", "Diet Coke", "Sprite", "Dr Pepper", "Fanta Orange", "Sweet Tea", "Unsweet Tea", "Lemonade", "Hi-C Orange", "Coffee"] },
  { id: "drinkSize", name: "Drink Size", options: ["Medium (included)", "Large (+$0.40)"] },
  { id: "friesSize", name: "Fries Size", options: ["Medium (included)", "Large (+$0.50)"] },
  { id: "friesSalt", name: "Fries Salt", options: ["regular", "no salt", "extra salt"] },
  { id: "friesCooking", name: "Fries Cooking", options: ["regular", "well done/crispy"] },
];

// Pup cup / dog treat customizations
const pupCupCustomizations = [
  { id: "topping", name: "Topping", options: ["none", "dog biscuit on top", "bacon bits on top (+$0.50)"] },
  { id: "size", name: "Portion Size", options: ["regular", "small (for tiny dogs)", "large (for big dogs)"] },
  { id: "temperature", name: "Temperature", options: ["regular (cold)", "slightly softened"] },
];

function getCustomizationOptions(itemName: string, category: string) {
  const name = itemName.toLowerCase();
  const cat = category.toLowerCase();
  
  // Determine which customization set to use based on item/category
  
  // Items that should show extra sauces option
  const showExtraSauces = 
    cat.includes("burger") || 
    name.includes("burger") || 
    name.includes("sandwich") ||
    name.includes("quarter pounder") || 
    name.includes("big mac") || 
    name.includes("cheeseburger") || 
    name.includes("hamburger") ||
    name.includes("mcchicken") ||
    name.includes("chicken sandwich") ||
    name.includes("crispy chicken") ||
    name.includes("filet-o-fish") ||
    name.includes("fish") ||
    name.includes("wrap") ||
    name.includes("nugget") ||
    name.includes("tender") ||
    name.includes("wings") ||
    cat.includes("chicken");
  
  // Happy Meals
  if (cat.includes("happy") || name.includes("happy meal")) {
    return happyMealCustomizations;
  }
  
  // Combo Meals
  if (cat.includes("combo") || name.includes("combo")) {
    return [...breadOptions, ...burgerCustomizations.slice(0, 8), ...comboCustomizations];
  }
  
  // Nuggets and Tenders
  if (name.includes("nugget") || name.includes("tender") || name.includes("wings")) {
    return nuggetsCustomizations;
  }
  
  // Fish sandwiches
  if (name.includes("fish") || name.includes("filet-o") || name.includes("ebi")) {
    return [...breadOptions, ...fishCustomizations];
  }
  
  // Chicken sandwiches
  if (name.includes("chicken") && (name.includes("sandwich") || name.includes("crispy") || name.includes("mcchicken") || name.includes("spicy"))) {
    return [...breadOptions, ...chickenCustomizations];
  }
  
  // Wraps
  if (name.includes("wrap") || name.includes("snack wrap")) {
    return wrapCustomizations;
  }
  
  // Breakfast items
  if (cat.includes("breakfast") || name.includes("mcmuffin") || name.includes("mcgriddle") || name.includes("biscuit") || name.includes("hotcake") || name.includes("breakfast")) {
    return breakfastCustomizations;
  }
  
  // Salads
  if (cat.includes("salad") || name.includes("salad")) {
    return saladCustomizations;
  }
  
  // Coffee and McCafe
  if (cat.includes("mccafe") || name.includes("coffee") || name.includes("latte") || name.includes("cappuccino") || name.includes("frappe") || name.includes("mocha") || name.includes("espresso") || name.includes("americano") || name.includes("hot chocolate") || name.includes("chai")) {
    return coffeeCustomizations;
  }
  
  // Soft Drinks (Coke, Sprite, etc.)
  if (cat.includes("drinks") || cat.includes("soft drink") || name.includes("coca-cola") || name.includes("coke") || name.includes("sprite") || name.includes("fanta") || name.includes("pepsi") || name.includes("dr pepper") || name.includes("mountain dew") || name.includes("lemonade") || name.includes("tea") || name.includes("iced")) {
    return softDrinkCustomizations;
  }
  
  // Ice cream and frozen treats
  if (cat.includes("ice cream") || cat.includes("frozen") || name.includes("mcflurry") || name.includes("sundae") || name.includes("cone") || name.includes("milkshake")) {
    return iceCreamCustomizations;
  }
  
  // Fries and sides
  if (name.includes("fries") || name.includes("onion ring")) {
    return friesCustomizations;
  }
  
  // Default: burgers and sandwiches
  if (cat.includes("burger") || name.includes("burger") || name.includes("quarter pounder") || name.includes("big mac") || name.includes("cheeseburger") || name.includes("hamburger") || name.includes("mcarabia") || name.includes("mcspicy")) {
    return [...breadOptions, ...burgerCustomizations];
  }
  
  // International items - use burger customizations as base
  if (cat.includes("international")) {
    return [...breadOptions, ...burgerCustomizations.slice(0, 10)];
  }
  
  // Pup cups and dog treats
  if (cat.includes("pup") || cat.includes("dog") || name.includes("pup") || name.includes("dog")) {
    return pupCupCustomizations;
  }
  
  // Limited Edition Exclusives (no customization needed, just quantity)
  if (cat.includes("exclusive") || cat.includes("limited") || name.includes("wig") || name.includes("crown") || name.includes("nose")) {
    return [];
  }
  
  // Fallback
  return [...breadOptions, ...burgerCustomizations.slice(0, 6)];
}

// Helper to determine if item should show extra sauces
function shouldShowExtraSauces(itemName: string, category: string): boolean {
  const name = itemName.toLowerCase();
  const cat = category.toLowerCase();
  
  return (
    cat.includes("burger") || 
    name.includes("burger") || 
    name.includes("sandwich") ||
    name.includes("quarter pounder") || 
    name.includes("big mac") || 
    name.includes("cheeseburger") || 
    name.includes("hamburger") ||
    name.includes("mcchicken") ||
    name.includes("chicken sandwich") ||
    name.includes("crispy chicken") ||
    name.includes("filet-o-fish") ||
    name.includes("fish") ||
    name.includes("wrap") ||
    name.includes("nugget") ||
    name.includes("tender") ||
    name.includes("wings") ||
    cat.includes("chicken") ||
    cat.includes("chicken-sandwiches")
  );
}

export function CustomizationPopup({ itemName, category, onConfirm, onClose }: CustomizationPopupProps) {
  const customizationOptions = useMemo(() => getCustomizationOptions(itemName, category), [itemName, category]);
  const showExtraSauces = useMemo(() => shouldShowExtraSauces(itemName, category), [itemName, category]);

  const [customizations, setCustomizations] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    customizationOptions.forEach((c) => {
      // Set sensible defaults
      if (c.options.includes("regular")) {
        initial[c.id] = "regular";
      } else if (c.options.includes("none")) {
        initial[c.id] = "none";
      } else {
        initial[c.id] = c.options[0];
      }
    });
    return initial;
  });
  const [specialNotes, setSpecialNotes] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [extraSauces, setExtraSauces] = useState<Record<string, { amount: "regular" | "extra"; price: number }>>({});
  const [showSaucesSection, setShowSaucesSection] = useState(false);
  const [saucePopup, setSaucePopup] = useState<{ id: string; name: string } | null>(null);

  const handleChange = (id: string, value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddSauce = (sauceId: string, sauceName: string, amount: "regular" | "extra") => {
    const price = amount === "extra" ? SAUCE_PRICING.extra : SAUCE_PRICING.regular;
    setExtraSauces((prev) => ({
      ...prev,
      [sauceId]: { amount, price },
    }));
    setSaucePopup(null);
  };

  const handleRemoveSauce = (sauceId: string) => {
    setExtraSauces((prev) => {
      const updated = { ...prev };
      delete updated[sauceId];
      return updated;
    });
  };

  const extraSaucesTotal = Object.values(extraSauces).reduce((sum, s) => sum + s.price, 0);

  const handleConfirm = () => {
    onConfirm(customizations, specialNotes, quantity, Object.keys(extraSauces).length > 0 ? extraSauces : undefined);
  };

  // Group customizations by type for better UX
  const groupedOptions = useMemo(() => {
    const groups: { title: string; options: typeof customizationOptions }[] = [];
    
    const breadOpts = customizationOptions.filter(c => c.id === "bread" || c.id === "tortilla");
    const proteinOpts = customizationOptions.filter(c => c.id === "patty" || c.id === "protein" || c.id === "preparation" || c.id === "egg" || c.id === "meat");
    const toppingOpts = customizationOptions.filter(c => ["lettuce", "tomato", "onion", "pickle", "pickles", "cheese", "bacon", "jalapenos", "avocado", "mushrooms", "croutons", "tomatoes", "onions"].includes(c.id));
    const sauceOpts = customizationOptions.filter(c => ["sauce", "ketchup", "mustard", "mayo", "tartar", "dressing", "dipping1", "dipping2", "extra_sauce", "fudge", "caramel", "drizzle"].includes(c.id));
    const drinkOpts = customizationOptions.filter(c => ["ice", "milk", "sweetener", "shots", "flavor", "whip", "drinkType", "drinkSize", "drink", "straw", "lid"].includes(c.id));
    const sidesOpts = customizationOptions.filter(c => ["side", "friesSize", "friesSalt", "friesCooking", "salt", "cooking", "seasoning"].includes(c.id));
    const otherOpts = customizationOptions.filter(c => ["butter", "toy", "toppings", "nuts", "cherry"].includes(c.id));
    
    if (breadOpts.length > 0) groups.push({ title: "Bread Options", options: breadOpts });
    if (proteinOpts.length > 0) groups.push({ title: "Protein", options: proteinOpts });
    if (toppingOpts.length > 0) groups.push({ title: "Toppings & Add-ons", options: toppingOpts });
    if (sauceOpts.length > 0) groups.push({ title: "Sauces & Condiments", options: sauceOpts });
    if (drinkOpts.length > 0) groups.push({ title: "Drink Options", options: drinkOpts });
    if (sidesOpts.length > 0) groups.push({ title: "Sides & Cooking", options: sidesOpts });
    if (otherOpts.length > 0) groups.push({ title: "Other Options", options: otherOpts });
    
    return groups;
  }, [customizationOptions]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 rounded-2xl p-6 w-full max-w-lg border border-white/20 animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Customize {itemName}</h3>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          {groupedOptions.map((group) => (
            <div key={group.title}>
              <h4 className="text-pink-400 font-semibold text-sm mb-3 uppercase tracking-wide">{group.title}</h4>
              <div className="space-y-3">
                {group.options.map((option) => (
                  <div key={option.id}>
                    <label className="block text-white/80 text-sm mb-1">{option.name}</label>
                    <select
                      value={customizations[option.id] || option.options[0]}
                      onChange={(e) => handleChange(option.id, e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-pink-400 text-sm"
                    >
                      {option.options.map((opt) => (
                        <option key={opt} value={opt} className="bg-gray-800">
                          {opt.charAt(0).toUpperCase() + opt.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Extra Sauces Section - Only for burgers, sandwiches, nuggets, etc. */}
          {showExtraSauces && (
            <div>
              <button
                onClick={() => setShowSaucesSection(!showSaucesSection)}
                className="w-full flex items-center justify-between text-pink-400 font-semibold text-sm mb-3 uppercase tracking-wide hover:text-pink-300 transition-colors"
              >
                <span>Extra Sauces {Object.keys(extraSauces).length > 0 && `(${Object.keys(extraSauces).length} selected)`}</span>
                {showSaucesSection ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {/* Selected sauces summary */}
              {Object.keys(extraSauces).length > 0 && !showSaucesSection && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {Object.entries(extraSauces).map(([id, { amount, price }]) => {
                    const sauce = condimentsData.find(c => c.id === id);
                    return (
                      <span key={id} className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        {sauce?.name} ({amount}) +${price.toFixed(2)}
                        <button onClick={() => handleRemoveSauce(id)} className="hover:text-white">
                          <X size={12} />
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}

              {showSaucesSection && (
                <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-2">
                  {condimentsData.map((sauce) => {
                    const isSelected = extraSauces[sauce.id];
                    return (
                      <button
                        key={sauce.id}
                        onClick={() => {
                          if (isSelected) {
                            handleRemoveSauce(sauce.id);
                          } else {
                            setSaucePopup({ id: sauce.id, name: sauce.name });
                          }
                        }}
                        className={`p-2 rounded-lg text-left text-xs transition-all ${
                          isSelected
                            ? "bg-pink-500/30 border-2 border-pink-400 text-white"
                            : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <div className="font-medium truncate">{sauce.name}</div>
                        {isSelected ? (
                          <div className="text-pink-300">{extraSauces[sauce.id].amount} +${extraSauces[sauce.id].price.toFixed(2)}</div>
                        ) : (
                          <div className="text-white/50">{sauce.calories} cal</div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
              
              {extraSaucesTotal > 0 && (
                <div className="mt-3 text-right text-sm text-pink-400">
                  Extra sauces total: +${extraSaucesTotal.toFixed(2)}
                </div>
              )}
            </div>
          )}

          {/* Sauce Amount Popup */}
          {saucePopup && (
            <div className="fixed inset-0 bg-black/60 z-60 flex items-center justify-center p-4" onClick={() => setSaucePopup(null)}>
              <div className="bg-gray-900 rounded-xl p-5 w-full max-w-xs border border-white/20 animate-fadeIn" onClick={e => e.stopPropagation()}>
                <h4 className="text-white font-bold text-center mb-4">{saucePopup.name}</h4>
                <p className="text-white/60 text-sm text-center mb-4">Select amount:</p>
                <div className="space-y-2">
                  <button
                    onClick={() => handleAddSauce(saucePopup.id, saucePopup.name, "regular")}
                    className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex justify-between px-4"
                  >
                    <span>Regular</span>
                    <span className="text-pink-400">+${SAUCE_PRICING.regular.toFixed(2)}</span>
                  </button>
                  <button
                    onClick={() => handleAddSauce(saucePopup.id, saucePopup.name, "extra")}
                    className="w-full py-3 bg-pink-500/20 hover:bg-pink-500/30 text-white rounded-lg transition-colors flex justify-between px-4 border border-pink-400/50"
                  >
                    <span>Extra</span>
                    <span className="text-pink-400">+${SAUCE_PRICING.extra.toFixed(2)}</span>
                  </button>
                </div>
                <button
                  onClick={() => setSaucePopup(null)}
                  className="w-full mt-4 py-2 text-white/60 hover:text-white text-sm transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div>
            <h4 className="text-pink-400 font-semibold text-sm mb-3 uppercase tracking-wide">Quantity</h4>
            <div className="flex items-center justify-center gap-4 bg-white/10 rounded-lg p-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border border-pink-400 text-pink-400 flex items-center justify-center hover:bg-pink-400 hover:text-black transition-colors"
              >
                <Minus size={20} />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center text-2xl font-bold text-white bg-transparent border-b-2 border-pink-400 focus:outline-none"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-pink-500 text-black flex items-center justify-center hover:bg-pink-400 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
            <p className="text-white/50 text-xs text-center mt-2">
              Add multiple items with the same customization
            </p>
          </div>

          <div>
            <h4 className="text-pink-400 font-semibold text-sm mb-3 uppercase tracking-wide">Special Requests</h4>
            <textarea
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="Allergies, special requests, or anything else we should know..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-pink-400 resize-none text-sm"
              rows={3}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6 sticky bottom-0 bg-black/90 pt-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black rounded-lg transition-colors font-bold"
          >
            Add {quantity > 1 ? `${quantity} Items` : 'to Order'}
          </button>
        </div>
      </div>
    </div>
  );
}
