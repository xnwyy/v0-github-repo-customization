"use client";

import { useState, useMemo } from "react";
import { X, Plus, Minus, ChevronRight, ChevronLeft } from "lucide-react";
import { condimentsData } from "@/data/menuData";
import { SauceSelection } from "@/types";

interface CustomizationPopupProps {
  itemName: string;
  category: string;
  itemIncludes?: string[];
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

// Soft drinks customizations
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

// Wrap customizations - comprehensive
const wrapCustomizations = [
  { id: "tortilla", name: "Tortilla", options: ["as included", "flour", "whole wheat (+$0.25)", "spinach (+$0.25)", "tomato basil (+$0.25)"] },
  { id: "protein", name: "Protein", options: ["as included", "extra protein (+$2.00)", "no protein (-$1.50)", "grilled chicken", "crispy chicken (+$0.50)"] },
  { id: "lettuce", name: "Lettuce", options: ["as included", "extra (+$0.25)", "no lettuce (-$0.10)"] },
  { id: "tomato", name: "Tomato", options: ["as included", "extra (+$0.30)", "no tomato (-$0.10)"] },
  { id: "cheese", name: "Cheese", options: ["as included", "extra (+$0.50)", "no cheese (-$0.30)", "cheddar", "pepper jack (+$0.25)", "swiss (+$0.25)"] },
  { id: "onion", name: "Onion", options: ["as included", "extra (+$0.25)", "no onion (-$0.10)", "grilled (+$0.35)"] },
  { id: "bacon", name: "Bacon", options: ["none", "add bacon (+$1.50)", "extra bacon (+$2.50)"] },
  { id: "avocado", name: "Avocado", options: ["none", "add avocado (+$1.50)", "extra avocado (+$2.25)"] },
  { id: "sauce", name: "Sauce", options: ["as included", "ranch", "honey mustard", "buffalo", "no sauce"] },
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

// Categories that should show sauce selection
const sauceEligibleCategories = [
  "burgers",
  "chicken-sandwiches",
  "wraps",
  "salads",
  "combos",
  "international",
  "chicken"
];

function isSauceEligible(category: string, itemName: string): boolean {
  const cat = category.toLowerCase();
  const name = itemName.toLowerCase();
  
  if (sauceEligibleCategories.some(c => cat.includes(c))) return true;
  
  if (name.includes("burger") || name.includes("sandwich") || name.includes("wrap") || 
      name.includes("salad") || name.includes("quarter pounder") || name.includes("big mac") ||
      name.includes("filet-o") || name.includes("mcchicken") || name.includes("mcarabia") ||
      name.includes("mcspicy") || name.includes("combo") || name.includes("snack wrap")) {
    return true;
  }
  
  return false;
}

function getCustomizationOptions(itemName: string, category: string) {
  const name = itemName.toLowerCase();
  const cat = category.toLowerCase();
  
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
  
  // Salads - handled separately with dynamic options
  if (cat.includes("salad") || name.includes("salad")) {
    return []; // Handled by salad-specific logic
  }
  
  // Coffee and McCafe
  if (cat.includes("mccafe") || name.includes("coffee") || name.includes("latte") || name.includes("cappuccino") || name.includes("frappe") || name.includes("mocha") || name.includes("espresso") || name.includes("americano") || name.includes("hot chocolate") || name.includes("chai")) {
    return coffeeCustomizations;
  }
  
  // Soft Drinks
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
  
  // International items
  if (cat.includes("international")) {
    return [...breadOptions, ...burgerCustomizations.slice(0, 10)];
  }
  
  // Pup cups and dog treats
  if (cat.includes("pup") || cat.includes("dog") || name.includes("pup") || name.includes("dog")) {
    return pupCupCustomizations;
  }
  
  // Limited Edition Exclusives
  if (cat.includes("exclusive") || cat.includes("limited") || name.includes("wig") || name.includes("crown") || name.includes("nose")) {
    return [];
  }
  
  // Fallback
  return [...breadOptions, ...burgerCustomizations.slice(0, 6)];
}

// Generate dynamic salad customization based on what's included
function getSaladCustomizations(itemIncludes: string[] = []) {
  const customizations: { id: string; name: string; options: string[] }[] = [];
  const includesLower = itemIncludes.map(i => i.toLowerCase());
  
  // Dressing is always available
  customizations.push({
    id: "dressing",
    name: "Dressing",
    options: ["as included", "on the side", "Ranch", "Caesar", "Balsamic Vinaigrette", "Italian", "Honey Mustard", "Thousand Island", "Blue Cheese", "no dressing (-$0.25)"]
  });
  
  // Protein options
  if (includesLower.some(i => i.includes("chicken") || i.includes("grilled") || i.includes("crispy"))) {
    customizations.push({
      id: "protein",
      name: "Protein",
      options: ["as included", "extra protein (+$3.00)", "no protein (-$2.00)", "substitute grilled", "substitute crispy"]
    });
  } else {
    customizations.push({
      id: "protein",
      name: "Add Protein",
      options: ["none", "add grilled chicken (+$3.00)", "add crispy chicken (+$3.50)"]
    });
  }
  
  // Bacon
  if (includesLower.some(i => i.includes("bacon"))) {
    customizations.push({
      id: "bacon",
      name: "Bacon",
      options: ["as included", "extra bacon (+$1.50)", "no bacon (-$1.00)"]
    });
  } else {
    customizations.push({
      id: "bacon",
      name: "Bacon",
      options: ["none", "add bacon (+$1.50)", "extra bacon (+$2.50)"]
    });
  }
  
  // Cheese
  if (includesLower.some(i => i.includes("cheese") || i.includes("parmesan") || i.includes("feta"))) {
    customizations.push({
      id: "cheese",
      name: "Cheese",
      options: ["as included", "extra cheese (+$0.75)", "no cheese (-$0.50)"]
    });
  } else {
    customizations.push({
      id: "cheese",
      name: "Cheese",
      options: ["none", "add parmesan (+$0.75)", "add feta (+$0.85)", "add cheddar (+$0.75)"]
    });
  }
  
  // Croutons
  if (includesLower.some(i => i.includes("crouton"))) {
    customizations.push({
      id: "croutons",
      name: "Croutons",
      options: ["as included", "extra croutons (+$0.50)", "no croutons (-$0.25)"]
    });
  } else {
    customizations.push({
      id: "croutons",
      name: "Croutons",
      options: ["none", "add croutons (+$0.50)"]
    });
  }
  
  // Tomatoes
  if (includesLower.some(i => i.includes("tomato"))) {
    customizations.push({
      id: "tomatoes",
      name: "Tomatoes",
      options: ["as included", "extra tomatoes (+$0.30)", "no tomatoes (-$0.15)"]
    });
  }
  
  // Onions
  if (includesLower.some(i => i.includes("onion"))) {
    customizations.push({
      id: "onions",
      name: "Onions",
      options: ["as included", "extra onions (+$0.25)", "no onions (-$0.10)"]
    });
  }
  
  // Cucumbers
  if (includesLower.some(i => i.includes("cucumber"))) {
    customizations.push({
      id: "cucumbers",
      name: "Cucumbers",
      options: ["as included", "extra cucumbers (+$0.30)", "no cucumbers (-$0.15)"]
    });
  }
  
  // Olives
  if (includesLower.some(i => i.includes("olive"))) {
    customizations.push({
      id: "olives",
      name: "Olives",
      options: ["as included", "extra olives (+$0.40)", "no olives (-$0.20)"]
    });
  }
  
  // Avocado
  if (includesLower.some(i => i.includes("avocado"))) {
    customizations.push({
      id: "avocado",
      name: "Avocado",
      options: ["as included", "extra avocado (+$1.50)", "no avocado (-$1.00)"]
    });
  } else {
    customizations.push({
      id: "avocado",
      name: "Avocado",
      options: ["none", "add avocado (+$1.50)"]
    });
  }
  
  // Egg
  if (includesLower.some(i => i.includes("egg"))) {
    customizations.push({
      id: "egg",
      name: "Hard-Boiled Egg",
      options: ["as included", "extra egg (+$0.75)", "no egg (-$0.50)"]
    });
  }
  
  // Beans/Corn
  if (includesLower.some(i => i.includes("bean") || i.includes("corn"))) {
    customizations.push({
      id: "beans_corn",
      name: "Beans & Corn",
      options: ["as included", "extra (+$0.50)", "no beans (-$0.25)", "no corn (-$0.25)", "none (-$0.40)"]
    });
  }
  
  // Tortilla strips / wonton
  if (includesLower.some(i => i.includes("tortilla") || i.includes("wonton") || i.includes("strip"))) {
    customizations.push({
      id: "crunchy_topping",
      name: "Crunchy Topping",
      options: ["as included", "extra (+$0.50)", "no crunchy topping (-$0.25)"]
    });
  }
  
  // Nuts
  if (includesLower.some(i => i.includes("almond") || i.includes("nut") || i.includes("pecan"))) {
    customizations.push({
      id: "nuts",
      name: "Nuts",
      options: ["as included", "extra nuts (+$0.50)", "no nuts (-$0.30)"]
    });
  }
  
  return customizations;
}

// Sauce selection popup component
interface SauceSelectPopupProps {
  sauce: typeof condimentsData[0];
  onSelect: (type: 'regular' | 'extra', quantity: number) => void;
  onClose: () => void;
}

function SauceSelectPopup({ sauce, onSelect, onClose }: SauceSelectPopupProps) {
  const [selectedType, setSelectedType] = useState<'regular' | 'extra' | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  const handleConfirm = () => {
    if (selectedType) {
      onSelect(selectedType, quantity);
    }
  };
  
  const currentPrice = selectedType === 'regular' 
    ? sauce.regularPrice 
    : selectedType === 'extra' 
    ? sauce.extraPrice 
    : 0;
  
  return (
    <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-sm border border-white/20 animate-fadeIn">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-bold text-white">{sauce.name}</h4>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <p className="text-white/60 text-sm mb-4">{sauce.calories} calories per serving</p>
        
        <div className="space-y-3 mb-6">
          <button
            onClick={() => setSelectedType('regular')}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              selectedType === 'regular' 
                ? 'border-pink-500 bg-pink-500/20' 
                : 'border-white/20 bg-white/5 hover:border-white/40'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">Regular</div>
                <div className="text-white/50 text-sm">Standard portion</div>
              </div>
              <div className="text-pink-400 font-bold">
                {sauce.regularPrice > 0 ? `$${sauce.regularPrice.toFixed(2)}` : 'Free'}
              </div>
            </div>
          </button>
          
          <button
            onClick={() => setSelectedType('extra')}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              selectedType === 'extra' 
                ? 'border-pink-500 bg-pink-500/20' 
                : 'border-white/20 bg-white/5 hover:border-white/40'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">Extra</div>
                <div className="text-white/50 text-sm">Double portion</div>
              </div>
              <div className="text-pink-400 font-bold">
                {sauce.extraPrice > 0 ? `$${sauce.extraPrice.toFixed(2)}` : 'Free'}
              </div>
            </div>
          </button>
        </div>
        
        {selectedType && (
          <div className="mb-6">
            <div className="text-white/70 text-sm mb-2 text-center">Quantity</div>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border border-pink-400 text-pink-400 flex items-center justify-center hover:bg-pink-400 hover:text-black transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="text-2xl font-bold text-white w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-pink-500 text-black flex items-center justify-center hover:bg-pink-400 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            <div className="text-center mt-2 text-pink-400 font-semibold">
              Total: {currentPrice * quantity > 0 ? `$${(currentPrice * quantity).toFixed(2)}` : 'Free'}
            </div>
          </div>
        )}
        
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedType}
            className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Sauce
          </button>
        </div>
      </div>
    </div>
  );
}

export function CustomizationPopup({ itemName, category, itemIncludes = [], onConfirm, onClose }: CustomizationPopupProps) {
  const isSalad = category.toLowerCase().includes("salad") || itemName.toLowerCase().includes("salad");
  const isWrap = category.toLowerCase().includes("wrap") || itemName.toLowerCase().includes("wrap");
  const showSauceStep = isSauceEligible(category, itemName);
  
  const customizationOptions = useMemo(() => {
    if (isSalad) {
      return getSaladCustomizations(itemIncludes);
    }
    if (isWrap) {
      return wrapCustomizations;
    }
    return getCustomizationOptions(itemName, category);
  }, [itemName, category, isSalad, isWrap, itemIncludes]);

  const [step, setStep] = useState<'customize' | 'sauces'>('customize');
  const [customizations, setCustomizations] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    customizationOptions.forEach((c) => {
      if (c.options.includes("regular")) {
        initial[c.id] = "regular";
      } else if (c.options.includes("as included")) {
        initial[c.id] = "as included";
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
  const [saucePopup, setSaucePopup] = useState<typeof condimentsData[0] | null>(null);

  const handleChange = (id: string, value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSauceSelect = (sauce: typeof condimentsData[0], type: 'regular' | 'extra', qty: number) => {
    const price = type === 'regular' ? (sauce.regularPrice || 0) : (sauce.extraPrice || 0);
    
    setSelectedSauces(prev => {
      // Check if this sauce with same type already exists
      const existingIndex = prev.findIndex(s => s.name === sauce.name && s.type === type);
      if (existingIndex >= 0) {
        // Add to existing quantity
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty
        };
        return updated;
      }
      // Add new sauce entry
      return [...prev, {
        name: sauce.name,
        type,
        quantity: qty,
        price,
        calories: sauce.calories
      }];
    });
    
    setSaucePopup(null);
  };

  const handleRemoveSauce = (index: number) => {
    setSelectedSauces(prev => prev.filter((_, i) => i !== index));
  };

  const handleConfirm = () => {
    onConfirm(customizations, specialNotes, quantity, selectedSauces.length > 0 ? selectedSauces : undefined);
  };

  const handleNextStep = () => {
    if (showSauceStep && step === 'customize') {
      setStep('sauces');
    } else {
      handleConfirm();
    }
  };

  const handleBackStep = () => {
    if (step === 'sauces') {
      setStep('customize');
    } else {
      onClose();
    }
  };

  // Group customizations by type
  const groupedOptions = useMemo(() => {
    const groups: { title: string; options: typeof customizationOptions }[] = [];
    
    // For salads, use clear grouping
    if (isSalad) {
      const dressingOpts = customizationOptions.filter(c => c.id === "dressing");
      const proteinOpts = customizationOptions.filter(c => c.id === "protein");
      const toppingOpts = customizationOptions.filter(c => !["dressing", "protein"].includes(c.id));
      
      if (dressingOpts.length > 0) groups.push({ title: "Dressing", options: dressingOpts });
      if (proteinOpts.length > 0) groups.push({ title: "Protein", options: proteinOpts });
      if (toppingOpts.length > 0) groups.push({ title: "Toppings & Ingredients", options: toppingOpts });
      
      return groups;
    }
    
    // For wraps
    if (isWrap) {
      const tortillaOpts = customizationOptions.filter(c => c.id === "tortilla");
      const proteinOpts = customizationOptions.filter(c => c.id === "protein");
      const sauceOpts = customizationOptions.filter(c => c.id === "sauce");
      const toppingOpts = customizationOptions.filter(c => !["tortilla", "protein", "sauce"].includes(c.id));
      
      if (tortillaOpts.length > 0) groups.push({ title: "Tortilla", options: tortillaOpts });
      if (proteinOpts.length > 0) groups.push({ title: "Protein", options: proteinOpts });
      if (toppingOpts.length > 0) groups.push({ title: "Toppings & Add-ons", options: toppingOpts });
      if (sauceOpts.length > 0) groups.push({ title: "Sauce", options: sauceOpts });
      
      return groups;
    }
    
    const breadOpts = customizationOptions.filter(c => c.id === "bread" || c.id === "tortilla");
    const proteinOpts = customizationOptions.filter(c => c.id === "patty" || c.id === "protein" || c.id === "preparation" || c.id === "egg" || c.id === "meat");
    const toppingOpts = customizationOptions.filter(c => ["lettuce", "tomato", "onion", "pickle", "pickles", "cheese", "bacon", "jalapenos", "avocado", "mushrooms", "croutons", "tomatoes", "onions", "cucumbers", "olives", "egg", "beans_corn", "crunchy_topping", "nuts"].includes(c.id));
    const sauceOpts = customizationOptions.filter(c => ["sauce", "ketchup", "mustard", "mayo", "tartar", "dressing", "dipping1", "dipping2", "extra_sauce", "fudge", "caramel", "drizzle"].includes(c.id));
    const drinkOpts = customizationOptions.filter(c => ["ice", "milk", "sweetener", "shots", "flavor", "whip", "drinkType", "drinkSize", "drink", "straw", "lid"].includes(c.id));
    const sidesOpts = customizationOptions.filter(c => ["side", "friesSize", "friesSalt", "friesCooking", "salt", "cooking", "seasoning"].includes(c.id));
    const otherOpts = customizationOptions.filter(c => ["butter", "toy", "toppings", "cherry", "topping", "size", "temperature"].includes(c.id));
    
    if (breadOpts.length > 0) groups.push({ title: "Bread Options", options: breadOpts });
    if (proteinOpts.length > 0) groups.push({ title: "Protein", options: proteinOpts });
    if (toppingOpts.length > 0) groups.push({ title: "Toppings & Add-ons", options: toppingOpts });
    if (sauceOpts.length > 0) groups.push({ title: "Sauces & Condiments", options: sauceOpts });
    if (drinkOpts.length > 0) groups.push({ title: "Drink Options", options: drinkOpts });
    if (sidesOpts.length > 0) groups.push({ title: "Sides & Cooking", options: sidesOpts });
    if (otherOpts.length > 0) groups.push({ title: "Other Options", options: otherOpts });
    
    return groups;
  }, [customizationOptions, isSalad, isWrap]);

  const totalSauceCost = selectedSauces.reduce((sum, s) => sum + (s.price * s.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 rounded-2xl p-6 w-full max-w-lg border border-white/20 animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">Customize {itemName}</h3>
            {showSauceStep && (
              <p className="text-sm text-white/60 mt-1">
                Step {step === 'customize' ? '1' : '2'} of 2: {step === 'customize' ? 'Customize Item' : 'Add Sauces'}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Show what's included */}
        {itemIncludes && itemIncludes.length > 0 && step === 'customize' && (
          <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <h4 className="text-sm font-semibold text-pink-400 mb-2">What&apos;s Included:</h4>
            <div className="flex flex-wrap gap-2">
              {itemIncludes.map((item, idx) => (
                <span key={idx} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {step === 'customize' ? (
          <div className="space-y-6">
            {groupedOptions.length > 0 ? (
              groupedOptions.map((group) => (
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
              ))
            ) : (
              <div className="text-white/60 text-center py-4">
                No customization options available for this item.
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
        ) : (
          // Sauce selection step
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-4">
              <p className="text-white/80 text-sm">
                Tap a sauce to add it. Choose regular or extra amount.
              </p>
            </div>

            {/* Selected sauces summary */}
            {selectedSauces.length > 0 && (
              <div className="p-4 bg-pink-500/10 rounded-xl border border-pink-500/30 mb-4">
                <h4 className="text-pink-400 font-semibold text-sm mb-3">Selected Sauces:</h4>
                <div className="space-y-2">
                  {selectedSauces.map((sauce, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/5 rounded-lg p-2">
                      <div className="text-sm text-white/80">
                        {sauce.quantity}x {sauce.name} <span className="text-white/50">({sauce.type})</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-pink-400 font-semibold">
                          {sauce.price > 0 ? `+$${(sauce.price * sauce.quantity).toFixed(2)}` : 'Free'}
                        </span>
                        <button
                          onClick={() => handleRemoveSauce(idx)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-pink-500/30 flex justify-between">
                  <span className="text-white/70 text-sm">Sauce Total:</span>
                  <span className="text-pink-400 font-bold">
                    {totalSauceCost > 0 ? `+$${totalSauceCost.toFixed(2)}` : 'Free'}
                  </span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 max-h-[40vh] overflow-y-auto">
              {condimentsData.map((sauce) => (
                <button
                  key={sauce.id}
                  onClick={() => setSaucePopup(sauce)}
                  className="bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-pink-500/50 transition-all text-left"
                >
                  <div className="text-white font-medium text-sm">{sauce.name}</div>
                  <div className="text-white/50 text-xs mt-1">{sauce.calories} cal</div>
                  <div className="text-pink-400/70 text-xs mt-1">
                    {sauce.regularPrice > 0 ? `from $${sauce.regularPrice.toFixed(2)}` : 'Free'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-6 sticky bottom-0 bg-black/90 pt-4">
          <button
            onClick={handleBackStep}
            className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
          >
            <ChevronLeft size={18} />
            {step === 'sauces' ? 'Back' : 'Cancel'}
          </button>
          <button
            onClick={handleNextStep}
            className="flex-1 py-3 bg-pink-500 hover:bg-pink-400 text-black rounded-lg transition-colors font-bold flex items-center justify-center gap-2"
          >
            {step === 'customize' && showSauceStep ? (
              <>
                Add Sauces
                <ChevronRight size={18} />
              </>
            ) : (
              `Add ${quantity > 1 ? `${quantity} Items` : 'to Order'}`
            )}
          </button>
        </div>
      </div>
      
      {/* Sauce selection popup */}
      {saucePopup && (
        <SauceSelectPopup
          sauce={saucePopup}
          onSelect={(type, qty) => handleSauceSelect(saucePopup, type, qty)}
          onClose={() => setSaucePopup(null)}
        />
      )}
    </div>
  );
}
