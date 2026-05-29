"use client";

import { useState, useMemo } from "react";
import { X, Plus, Minus, ChevronRight, ChevronLeft } from "lucide-react";
import { condimentsData } from "@/data/menuData";
import { SauceSelection } from "@/types";

interface CustomizationPopupProps {
  itemName: string;
  category: string;
  onConfirm: (customizations: Record<string, string>, specialNotes: string, quantity: number, sauces?: SauceSelection[]) => void;
  onClose: () => void;
}

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

// Categories that should show the sauce selection step
const SAUCE_ELIGIBLE_CATEGORIES = [
  "burgers",
  "chicken-sandwiches",
  "salads",
  "wraps",
];

// Sauce pricing
const SAUCE_PRICES = {
  regular: 0.35,
  extra: 0.60,
};

function needsSauceSelection(itemName: string, category: string): boolean {
  const name = itemName.toLowerCase();
  const cat = category.toLowerCase();
  
  // Check by category
  if (SAUCE_ELIGIBLE_CATEGORIES.some(c => cat.includes(c))) {
    return true;
  }
  
  // Check by item name for items that might not be in the right category
  if (name.includes("burger") || name.includes("sandwich") || name.includes("salad") || name.includes("wrap") ||
      name.includes("quarter pounder") || name.includes("big mac") || name.includes("cheeseburger") ||
      name.includes("hamburger") || name.includes("mcchicken") || name.includes("filet-o-fish")) {
    return true;
  }
  
  return false;
}

function getCustomizationOptions(itemName: string, category: string) {
  const name = itemName.toLowerCase();
  const cat = category.toLowerCase();
  
  // Determine which customization set to use based on item/category
  
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

export function CustomizationPopup({ itemName, category, onConfirm, onClose }: CustomizationPopupProps) {
  const customizationOptions = useMemo(() => getCustomizationOptions(itemName, category), [itemName, category]);
  const showSauceStep = useMemo(() => needsSauceSelection(itemName, category), [itemName, category]);

  const [currentStep, setCurrentStep] = useState<"customization" | "sauces">("customization");
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
  const [selectedSauces, setSelectedSauces] = useState<SauceSelection[]>([]);

  const handleChange = (id: string, value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleConfirm = () => {
    onConfirm(customizations, specialNotes, quantity, selectedSauces.length > 0 ? selectedSauces : undefined);
  };

  const handleNextStep = () => {
    if (showSauceStep && currentStep === "customization") {
      setCurrentStep("sauces");
    } else {
      handleConfirm();
    }
  };

  const handleBackStep = () => {
    if (currentStep === "sauces") {
      setCurrentStep("customization");
    }
  };

  const addSauce = (sauceName: string) => {
    const existingIndex = selectedSauces.findIndex(s => s.name === sauceName && s.amount === "regular");
    if (existingIndex >= 0) {
      // Increase quantity of existing regular sauce
      const updated = [...selectedSauces];
      updated[existingIndex].quantity += 1;
      setSelectedSauces(updated);
    } else {
      // Add new sauce as regular
      setSelectedSauces([...selectedSauces, {
        name: sauceName,
        amount: "regular",
        quantity: 1,
        price: SAUCE_PRICES.regular
      }]);
    }
  };

  const updateSauceAmount = (index: number, amount: "regular" | "extra") => {
    const updated = [...selectedSauces];
    updated[index].amount = amount;
    updated[index].price = SAUCE_PRICES[amount];
    setSelectedSauces(updated);
  };

  const updateSauceQuantity = (index: number, change: number) => {
    const updated = [...selectedSauces];
    const newQuantity = updated[index].quantity + change;
    if (newQuantity <= 0) {
      updated.splice(index, 1);
    } else {
      updated[index].quantity = newQuantity;
    }
    setSelectedSauces(updated);
  };

  const removeSauce = (index: number) => {
    const updated = [...selectedSauces];
    updated.splice(index, 1);
    setSelectedSauces(updated);
  };

  const totalSauceCost = selectedSauces.reduce((sum, s) => sum + (s.price * s.quantity), 0);

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

  // Render Customization Step
  if (currentStep === "customization") {
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

          {showSauceStep && (
            <div className="flex items-center gap-2 mb-4 text-sm">
              <div className="flex items-center gap-1 text-pink-400">
                <span className="w-6 h-6 rounded-full bg-pink-500 text-black flex items-center justify-center text-xs font-bold">1</span>
                <span>Customize</span>
              </div>
              <ChevronRight size={16} className="text-white/40" />
              <div className="flex items-center gap-1 text-white/40">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">2</span>
                <span>Sauces</span>
              </div>
            </div>
          )}

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
              onClick={handleNextStep}
              className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black rounded-lg transition-colors font-bold flex items-center justify-center gap-2"
            >
              {showSauceStep ? (
                <>
                  Next: Sauces
                  <ChevronRight size={18} />
                </>
              ) : (
                `Add ${quantity > 1 ? `${quantity} Items` : 'to Order'}`
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render Sauces Step
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 rounded-2xl p-6 w-full max-w-lg border border-white/20 animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Add Sauces</h3>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-4 text-sm">
          <div className="flex items-center gap-1 text-white/60">
            <span className="w-6 h-6 rounded-full bg-green-500 text-black flex items-center justify-center text-xs font-bold">&#10003;</span>
            <span>Customize</span>
          </div>
          <ChevronRight size={16} className="text-white/40" />
          <div className="flex items-center gap-1 text-pink-400">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-black flex items-center justify-center text-xs font-bold">2</span>
            <span>Sauces</span>
          </div>
        </div>

        <p className="text-white/60 text-sm mb-4">
          Add condiments to your {itemName.toLowerCase()}. Regular: ${SAUCE_PRICES.regular.toFixed(2)} | Extra: ${SAUCE_PRICES.extra.toFixed(2)}
        </p>

        {/* Selected Sauces */}
        {selectedSauces.length > 0 && (
          <div className="mb-6">
            <h4 className="text-pink-400 font-semibold text-sm mb-3 uppercase tracking-wide">Selected Sauces</h4>
            <div className="space-y-2">
              {selectedSauces.map((sauce, index) => (
                <div key={`${sauce.name}-${sauce.amount}-${index}`} className="bg-white/10 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{sauce.name}</span>
                    <button
                      onClick={() => removeSauce(index)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateSauceAmount(index, "regular")}
                        className={`px-3 py-1 rounded text-sm transition-colors ${
                          sauce.amount === "regular"
                            ? "bg-pink-500 text-black font-bold"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        Regular (${SAUCE_PRICES.regular.toFixed(2)})
                      </button>
                      <button
                        onClick={() => updateSauceAmount(index, "extra")}
                        className={`px-3 py-1 rounded text-sm transition-colors ${
                          sauce.amount === "extra"
                            ? "bg-pink-500 text-black font-bold"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        Extra (${SAUCE_PRICES.extra.toFixed(2)})
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateSauceQuantity(index, -1)}
                        className="w-7 h-7 rounded-full border border-pink-400 text-pink-400 flex items-center justify-center hover:bg-pink-400 hover:text-black transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-white font-bold">{sauce.quantity}</span>
                      <button
                        onClick={() => updateSauceQuantity(index, 1)}
                        className="w-7 h-7 rounded-full bg-pink-500 text-black flex items-center justify-center hover:bg-pink-400 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm text-white/60 mt-1">
                    ${(sauce.price * sauce.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 border-t border-white/20">
                <span className="text-white/80">Total Sauce Cost:</span>
                <span className="text-pink-400 font-bold">${totalSauceCost.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Available Sauces */}
        <div>
          <h4 className="text-pink-400 font-semibold text-sm mb-3 uppercase tracking-wide">Available Condiments</h4>
          <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto">
            {condimentsData.map((condiment) => (
              <button
                key={condiment.id}
                onClick={() => addSauce(condiment.name)}
                className="bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg p-3 text-left transition-colors"
              >
                <div className="text-white text-sm font-medium">{condiment.name}</div>
                <div className="text-white/50 text-xs">{condiment.calories} cal</div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-6 sticky bottom-0 bg-black/90 pt-4">
          <button
            onClick={handleBackStep}
            className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
          >
            <ChevronLeft size={18} />
            Back
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black rounded-lg transition-colors font-bold"
          >
            Add {quantity > 1 ? `${quantity} Items` : 'to Order'}
            {totalSauceCost > 0 && ` (+$${totalSauceCost.toFixed(2)})`}
          </button>
        </div>
      </div>
    </div>
  );
}
