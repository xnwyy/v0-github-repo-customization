import { MenuItem } from "../types";

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "pupcups",
    name: "Pup Cups & Dog Treats",
    emoji: "🐕",
    items: [
      { name: "Pup Cup (Vanilla Soft Serve)", price: 0.00, calories: 50 },
      { name: "Pup Cup (Plain Whipped Cream)", price: 0.00, calories: 30 },
      { name: "Doggie Ice Cream Cup", price: 1.99, calories: 80 },
      { name: "Peanut Butter Pup Cup", price: 1.49, calories: 120 },
      { name: "Bacon Bits Pup Treat", price: 1.29, calories: 60 },
      { name: "Plain Grilled Chicken Strips (Dog Safe)", price: 2.99, calories: 150 },
      { name: "Plain Hamburger Patty (No Seasoning)", price: 2.49, calories: 200 },
      { name: "Puppy Biscuit Treat", price: 0.99, calories: 40 },
      { name: "Dog Water Bowl (Free Refills)", price: 0.00, calories: 0 },
      { name: "Doggie Meal Deal", price: 4.99, calories: 280, includes: ["Pup Cup", "Plain Chicken Strip", "Puppy Biscuit", "Water Bowl"] }
    ]
  },
  {
    id: "burgers",
    name: "Burgers & Sandwiches",
    emoji: "🍔",
    items: [
      { name: "Big Mac", price: 6.49, calories: 550 },
      { name: "Grand Mac", price: 7.99, calories: 720 },
      { name: "Mac Jr.", price: 4.49, calories: 400 },
      { name: "Quarter Pounder w/ Cheese", price: 6.49, calories: 520 },
      { name: "Double Quarter Pounder w/ Cheese", price: 7.79, calories: 740 },
      { name: "Triple Quarter Pounder w/ Cheese", price: 9.99, calories: 1010 },
      { name: "Bacon Quarter Pounder w/ Cheese", price: 7.82, calories: 610 },
      { name: "Double Bacon Quarter Pounder w/ Cheese", price: 9.13, calories: 830 },
      { name: "Bacon Smokehouse Burger", price: 8.49, calories: 680 },
      { name: "Mushroom Swiss Burger", price: 7.99, calories: 590 },
      { name: "Cheeseburger", price: 2.79, calories: 300 },
      { name: "Double Cheeseburger", price: 4.79, calories: 450 },
      { name: "Triple Cheeseburger", price: 5.99, calories: 600 },
      { name: "McDouble", price: 3.49, calories: 400 },
      { name: "Filet-O-Fish", price: 6.27, calories: 390 },
      { name: "Double Filet-O-Fish", price: 8.49, calories: 560 },
      { name: "Classic Hamburger", price: 3.49, calories: 250 },
      { name: "Jalapeño Double Burger", price: 5.99, calories: 480 },
      { name: "BBQ Bacon Burger", price: 7.25, calories: 670 },
      { name: "Smokehouse BBQ Burger", price: 7.79, calories: 650 },
      { name: "Western BBQ Burger", price: 7.49, calories: 640 },
      { name: "Bacon Deluxe Burger", price: 6.99, calories: 580 },
      { name: "Veggie Burger", price: 5.29, calories: 340 },
      { name: "McPlant Burger", price: 6.79, calories: 380 }
    ]
  },
  {
    id: "chicken-sandwiches",
    name: "Chicken Sandwiches",
    emoji: "🐔",
    items: [
      { name: "McChicken Sandwich", price: 4.29, calories: 400 },
      { name: "Spicy McChicken Sandwich", price: 4.49, calories: 420 },
      { name: "Crispy Chicken Sandwich", price: 5.49, calories: 470 },
      { name: "Deluxe Crispy Chicken Sandwich", price: 6.49, calories: 530 },
      { name: "Spicy Crispy Chicken Sandwich", price: 5.49, calories: 490 },
      { name: "Spicy Deluxe Crispy Chicken", price: 6.79, calories: 540 },
      { name: "Grilled Chicken Sandwich", price: 5.99, calories: 380 },
      { name: "Grilled Chicken Club", price: 7.29, calories: 460 },
      { name: "Buffalo Ranch Chicken Sandwich", price: 6.49, calories: 510 },
      { name: "Honey BBQ Chicken Sandwich", price: 6.29, calories: 480 },
      { name: "Nashville Hot Chicken Sandwich", price: 6.99, calories: 530 },
      { name: "Buttermilk Crispy Chicken", price: 5.79, calories: 490 },
      { name: "Bacon Ranch Grilled Chicken", price: 7.49, calories: 500 },
      { name: "Chipotle Chicken Sandwich", price: 6.49, calories: 520 }
    ]
  },
  {
    id: "chicken",
    name: "Chicken & Nuggets",
    emoji: "🍗",
    items: [
      { name: "3 piece Chicken McNuggets", price: 1.39, calories: 170 },
      { name: "4 piece Chicken McNuggets", price: 2.39, calories: 180 },
      { name: "6 piece Chicken McNuggets", price: 3.39, calories: 270 },
      { name: "10 piece Chicken McNuggets", price: 4.59, calories: 440 },
      { name: "20 piece Chicken McNuggets", price: 7.58, calories: 880 },
      { name: "40 piece Chicken McNuggets", price: 13.99, calories: 1760 },
      { name: "50 piece Chicken McNuggets Party Box", price: 16.99, calories: 2200 },
      { name: "Spicy Chicken McNuggets (6 pcs)", price: 3.79, calories: 290 },
      { name: "Spicy Chicken McNuggets (10 pcs)", price: 4.99, calories: 480 },
      { name: "Chicken Tenders (3 pcs)", price: 4.29, calories: 380 },
      { name: "Chicken Tenders (5 pcs)", price: 5.99, calories: 630 },
      { name: "Chicken Tenders (8 pcs)", price: 8.49, calories: 1010 },
      { name: "Spicy Chicken Tenders (5 pcs)", price: 6.29, calories: 650 },
      { name: "Chicken Snack Wrap (Grilled)", price: 3.89, calories: 260 },
      { name: "Chicken Snack Wrap (Crispy)", price: 3.99, calories: 330 },
      { name: "Buffalo Wings (6 pcs)", price: 7.99, calories: 540 },
      { name: "Buffalo Wings (12 pcs)", price: 13.99, calories: 1080 },
      { name: "Honey BBQ Wings (6 pcs)", price: 7.99, calories: 590 },
      { name: "Garlic Parmesan Wings (6 pcs)", price: 8.49, calories: 580 },
      { name: "Popcorn Chicken", price: 4.99, calories: 420 },
      { name: "Chicken Bites (6 pcs)", price: 3.99, calories: 280 }
    ]
  },
  {
    id: "wraps",
    name: "Wraps & Snacks",
    emoji: "🌯",
    items: [
      { name: "Grilled Chicken Wrap", price: 5.49, calories: 350 },
      { name: "Crispy Chicken Wrap", price: 5.49, calories: 420 },
      { name: "Spicy Chicken Wrap", price: 5.79, calories: 440 },
      { name: "Ranch Chicken Wrap", price: 5.49, calories: 380 },
      { name: "Caesar Chicken Wrap", price: 5.79, calories: 390 },
      { name: "BBQ Chicken Wrap", price: 5.49, calories: 400 },
      { name: "Buffalo Chicken Wrap", price: 5.99, calories: 410 },
      { name: "Southwest Chicken Wrap", price: 6.29, calories: 430 },
      { name: "Chipotle Ranch Wrap", price: 5.99, calories: 420 },
      { name: "Veggie Wrap", price: 4.99, calories: 280 },
      { name: "Bacon Ranch Wrap", price: 6.49, calories: 480 }
    ]
  },
  {
    id: "salads",
    name: "Salads",
    emoji: "🥗",
    items: [
      { name: "Southwest Grilled Chicken Salad", price: 8.99, calories: 350 },
      { name: "Southwest Crispy Chicken Salad", price: 8.99, calories: 520 },
      { name: "Bacon Ranch Grilled Chicken Salad", price: 8.49, calories: 320 },
      { name: "Bacon Ranch Crispy Chicken Salad", price: 8.49, calories: 490 },
      { name: "Caesar Salad (No Chicken)", price: 5.99, calories: 180 },
      { name: "Caesar Salad with Grilled Chicken", price: 8.29, calories: 310 },
      { name: "Caesar Salad with Crispy Chicken", price: 8.29, calories: 480 },
      { name: "Side Salad", price: 3.49, calories: 50 },
      { name: "Garden Salad", price: 5.99, calories: 120 },
      { name: "Cobb Salad", price: 9.49, calories: 440 },
      { name: "Asian Sesame Salad", price: 8.79, calories: 380 },
      { name: "Greek Salad", price: 7.99, calories: 290 }
    ]
  },
  {
    id: "breakfast",
    name: "Breakfast",
    emoji: "🥞",
    items: [
      { name: "Egg McMuffin", price: 4.89, calories: 310 },
      { name: "Bacon Egg McMuffin", price: 5.49, calories: 380 },
      { name: "Sausage McMuffin", price: 3.79, calories: 400 },
      { name: "Sausage McMuffin w/ Egg", price: 4.89, calories: 480 },
      { name: "Double Sausage McMuffin", price: 5.99, calories: 580 },
      { name: "Bacon, Egg & Cheese McGriddles", price: 5.49, calories: 460 },
      { name: "Sausage McGriddles", price: 4.39, calories: 420 },
      { name: "Sausage, Egg & Cheese McGriddles", price: 5.49, calories: 550 },
      { name: "Bacon McGriddles", price: 4.49, calories: 380 },
      { name: "Big Breakfast", price: 6.49, calories: 740 },
      { name: "Big Breakfast w/ Hotcakes", price: 8.49, calories: 1090 },
      { name: "Deluxe Breakfast", price: 9.49, calories: 1150 },
      { name: "Hotcakes", price: 4.29, calories: 320 },
      { name: "Hotcakes & Sausage", price: 5.29, calories: 520 },
      { name: "Hotcakes & Bacon", price: 5.49, calories: 480 },
      { name: "Hash Browns", price: 1.89, calories: 150 },
      { name: "Hash Browns (2 pcs)", price: 3.29, calories: 300 },
      { name: "Sausage Biscuit", price: 3.49, calories: 460 },
      { name: "Bacon, Egg & Cheese Biscuit", price: 4.79, calories: 460 },
      { name: "Sausage, Egg & Cheese Biscuit", price: 4.79, calories: 520 },
      { name: "Chicken Biscuit", price: 4.49, calories: 450 },
      { name: "Steak, Egg & Cheese Biscuit", price: 5.99, calories: 540 },
      { name: "Breakfast Burrito", price: 3.99, calories: 305 },
      { name: "Sausage Breakfast Burrito", price: 4.49, calories: 380 },
      { name: "Steak Breakfast Burrito", price: 5.29, calories: 420 },
      { name: "Fruit & Maple Oatmeal", price: 3.89, calories: 320 },
      { name: "Scrambled Eggs (2 pcs)", price: 2.49, calories: 180 },
      { name: "Sausage Patty", price: 1.79, calories: 170 },
      { name: "Bacon Strips (3 pcs)", price: 2.29, calories: 120 },
      { name: "Cinnamon Roll", price: 3.29, calories: 450 },
      { name: "Blueberry Muffin", price: 2.99, calories: 380 },
      { name: "Apple Danish", price: 2.79, calories: 340 }
    ]
  },
  {
    id: "mccafe",
    name: "McCafe & Beverages",
    emoji: "☕",
    items: [
      { name: "Iced Coffee", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.99, calories: 140 },
        { size: "Medium", price: 2.49, calories: 190 },
        { size: "Large", price: 3.19, calories: 260 }
      ]},
      { name: "Caramel Frappe", price: 0, calories: 0, sizes: [
        { size: "Small", price: 4.79, calories: 420 },
        { size: "Medium", price: 5.79, calories: 550 },
        { size: "Large", price: 6.79, calories: 670 }
      ]},
      { name: "Mocha Frappe", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.79, calories: 410 },
        { size: "Medium", price: 4.79, calories: 510 },
        { size: "Large", price: 5.79, calories: 610 }
      ]},
      { name: "Hot & Iced Lattes", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.29, calories: 150 },
        { size: "Medium", price: 3.29, calories: 190 },
        { size: "Large", price: 4.29, calories: 240 }
      ]},
      { name: "Hot Chocolate", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.49, calories: 370 },
        { size: "Medium", price: 2.49, calories: 440 },
        { size: "Large", price: 3.49, calories: 540 }
      ]},
      { name: "Chai Latte", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.99, calories: 240 },
        { size: "Medium", price: 3.99, calories: 290 },
        { size: "Large", price: 4.99, calories: 350 }
      ]},
      { name: "Espresso Shot", price: 1.99, calories: 5 },
      { name: "Cappuccino", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.49, calories: 120 },
        { size: "Medium", price: 3.49, calories: 160 },
        { size: "Large", price: 4.49, calories: 200 }
      ]},
      { name: "Americano", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.99, calories: 10 },
        { size: "Medium", price: 2.49, calories: 15 },
        { size: "Large", price: 2.99, calories: 20 }
      ]}
    ]
  },
  {
    id: "drinks",
    name: "Soft Drinks",
    emoji: "🥤",
    items: [
      // Coca-Cola Products
      { name: "Coca-Cola", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 150 },
        { size: "Medium", price: 1.89, calories: 210 },
        { size: "Large", price: 2.39, calories: 310 }
      ]},
      { name: "Diet Coke", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 0 },
        { size: "Medium", price: 1.89, calories: 0 },
        { size: "Large", price: 2.39, calories: 0 }
      ]},
      { name: "Coca-Cola Zero Sugar", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 0 },
        { size: "Medium", price: 1.89, calories: 0 },
        { size: "Large", price: 2.39, calories: 0 }
      ]},
      { name: "Cherry Coke", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 150 },
        { size: "Medium", price: 1.89, calories: 210 },
        { size: "Large", price: 2.39, calories: 310 }
      ]},
      { name: "Vanilla Coke", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 150 },
        { size: "Medium", price: 1.89, calories: 210 },
        { size: "Large", price: 2.39, calories: 310 }
      ]},
      { name: "Sprite", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 140 },
        { size: "Medium", price: 1.89, calories: 200 },
        { size: "Large", price: 2.39, calories: 290 }
      ]},
      { name: "Sprite Zero", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 0 },
        { size: "Medium", price: 1.89, calories: 0 },
        { size: "Large", price: 2.39, calories: 0 }
      ]},
      { name: "Fanta Orange", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 330 }
      ]},
      { name: "Fanta Grape", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 330 }
      ]},
      { name: "Fanta Strawberry", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 330 }
      ]},
      { name: "Hi-C Orange Lavaburst", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 330 }
      ]},
      // Pepsi Products
      { name: "Pepsi", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 150 },
        { size: "Medium", price: 1.89, calories: 210 },
        { size: "Large", price: 2.39, calories: 310 }
      ]},
      { name: "Diet Pepsi", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 0 },
        { size: "Medium", price: 1.89, calories: 0 },
        { size: "Large", price: 2.39, calories: 0 }
      ]},
      { name: "Pepsi Zero Sugar", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 0 },
        { size: "Medium", price: 1.89, calories: 0 },
        { size: "Large", price: 2.39, calories: 0 }
      ]},
      { name: "Pepsi Wild Cherry", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 220 },
        { size: "Large", price: 2.39, calories: 320 }
      ]},
      // Mountain Dew Products
      { name: "Mountain Dew", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 170 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 340 }
      ]},
      { name: "Diet Mountain Dew", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 0 },
        { size: "Medium", price: 1.89, calories: 0 },
        { size: "Large", price: 2.39, calories: 0 }
      ]},
      { name: "Mountain Dew Zero Sugar", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 0 },
        { size: "Medium", price: 1.89, calories: 0 },
        { size: "Large", price: 2.39, calories: 0 }
      ]},
      { name: "Mountain Dew Code Red", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 170 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 340 }
      ]},
      { name: "Mountain Dew Baja Blast", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 170 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 340 }
      ]},
      { name: "Mountain Dew Voltage", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 170 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 340 }
      ]},
      { name: "Mountain Dew LiveWire", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 170 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 340 }
      ]},
      // Other Sodas
      { name: "Dr Pepper", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 150 },
        { size: "Medium", price: 1.89, calories: 210 },
        { size: "Large", price: 2.39, calories: 310 }
      ]},
      { name: "Diet Dr Pepper", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 0 },
        { size: "Medium", price: 1.89, calories: 0 },
        { size: "Large", price: 2.39, calories: 0 }
      ]},
      { name: "Dr Pepper Cherry", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 150 },
        { size: "Medium", price: 1.89, calories: 210 },
        { size: "Large", price: 2.39, calories: 310 }
      ]},
      { name: "Dr Pepper Cream Soda", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 220 },
        { size: "Large", price: 2.39, calories: 320 }
      ]},
      { name: "7UP", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 140 },
        { size: "Medium", price: 1.89, calories: 200 },
        { size: "Large", price: 2.39, calories: 290 }
      ]},
      { name: "Sierra Mist", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 140 },
        { size: "Medium", price: 1.89, calories: 200 },
        { size: "Large", price: 2.39, calories: 290 }
      ]},
      { name: "Mug Root Beer", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 220 },
        { size: "Large", price: 2.39, calories: 320 }
      ]},
      { name: "A&W Root Beer", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 220 },
        { size: "Large", price: 2.39, calories: 320 }
      ]},
      { name: "Barq's Root Beer", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 220 },
        { size: "Large", price: 2.39, calories: 320 }
      ]},
      { name: "Minute Maid Lemonade", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.59, calories: 130 },
        { size: "Medium", price: 2.09, calories: 180 },
        { size: "Large", price: 2.59, calories: 260 }
      ]},
      { name: "Minute Maid Pink Lemonade", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.59, calories: 130 },
        { size: "Medium", price: 2.09, calories: 180 },
        { size: "Large", price: 2.59, calories: 260 }
      ]},
      { name: "Sunkist Orange", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 170 },
        { size: "Medium", price: 1.89, calories: 240 },
        { size: "Large", price: 2.39, calories: 350 }
      ]},
      { name: "Canada Dry Ginger Ale", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 130 },
        { size: "Medium", price: 1.89, calories: 180 },
        { size: "Large", price: 2.39, calories: 260 }
      ]},
      { name: "Crush Orange", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 330 }
      ]},
      { name: "Crush Grape", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.39, calories: 160 },
        { size: "Medium", price: 1.89, calories: 230 },
        { size: "Large", price: 2.39, calories: 330 }
      ]},
      { name: "Bottled Water", price: 1.50, calories: 0 },
      { name: "Sparkling Water", price: 1.79, calories: 0 }
    ]
  },
  {
    id: "tea",
    name: "Tea",
    emoji: "🍵",
    items: [
      { name: "Sweet Tea", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.29, calories: 90 },
        { size: "Medium", price: 1.69, calories: 130 },
        { size: "Large", price: 1.99, calories: 180 }
      ]},
      { name: "Unsweetened Iced Tea", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.29, calories: 0 },
        { size: "Medium", price: 1.69, calories: 0 },
        { size: "Large", price: 1.99, calories: 0 }
      ]},
      { name: "Hot Tea", price: 1.49, calories: 0 },
      { name: "Green Tea", price: 1.79, calories: 0 },
      { name: "Peach Tea", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.49, calories: 100 },
        { size: "Medium", price: 1.89, calories: 140 },
        { size: "Large", price: 2.29, calories: 190 }
      ]}
    ]
  },
  {
    id: "icee",
    name: "ICEE & Frozen Beverages",
    emoji: "🧊",
    items: [
      { name: "ICEE Cherry", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.99, calories: 110 },
        { size: "Medium", price: 2.49, calories: 160 },
        { size: "Large", price: 2.99, calories: 220 }
      ]},
      { name: "ICEE Blue Raspberry", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.99, calories: 110 },
        { size: "Medium", price: 2.49, calories: 160 },
        { size: "Large", price: 2.99, calories: 220 }
      ]},
      { name: "ICEE Coke", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.99, calories: 120 },
        { size: "Medium", price: 2.49, calories: 170 },
        { size: "Large", price: 2.99, calories: 240 }
      ]},
      { name: "Frozen Strawberry Lemonade", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.29, calories: 140 },
        { size: "Medium", price: 2.79, calories: 190 },
        { size: "Large", price: 3.29, calories: 260 }
      ]},
      { name: "Frozen Fanta Wild Cherry", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.29, calories: 130 },
        { size: "Medium", price: 2.79, calories: 180 },
        { size: "Large", price: 3.29, calories: 250 }
      ]}
    ]
  },
  {
    id: "sides",
    name: "Sides & Extras",
    emoji: "🍟",
    items: [
      { name: "French Fries", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.50, calories: 320 },
        { size: "Medium", price: 3.29, calories: 340 },
        { size: "Large", price: 3.79, calories: 365 }
      ]},
      { name: "Basket of Fries", price: 4.99, calories: 540 },
      { name: "Apple Slices", price: 1.89, calories: 15 },
      { name: "Onion Rings", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.10, calories: 150 },
        { size: "Medium", price: 4.10, calories: 240 },
        { size: "Large", price: 5.10, calories: 340 }
      ]},
      { name: "Bacon Strips", price: 2.59, calories: 90 },
      { name: "Mozzarella Sticks (6 pcs)", price: 4.99, calories: 470 },
      { name: "Side Salad", price: 3.99, calories: 15 },
      { name: "Fruit Cup", price: 2.99, calories: 60 },
      { name: "Mac & Cheese", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.49, calories: 160 },
        { size: "Regular", price: 3.49, calories: 280 },
        { size: "Large", price: 4.49, calories: 420 }
      ]}
    ]
  },
  {
    id: "icecream",
    name: "Ice Cream & Frozen Treats",
    emoji: "🍦",
    items: [
      { name: "Vanilla Cone", price: 1.00, calories: 200 },
      { name: "McFlurry M&M", price: 0, calories: 0, sizes: [
        { size: "Snack", price: 3.00, calories: 430 },
        { size: "Regular", price: 5.00, calories: 640 }
      ]},
      { name: "McFlurry Oreo", price: 0, calories: 0, sizes: [
        { size: "Snack", price: 3.00, calories: 340 },
        { size: "Regular", price: 5.00, calories: 510 }
      ]},
      { name: "Milkshake Strawberry", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.00, calories: 420 },
        { size: "Medium", price: 4.00, calories: 530 },
        { size: "Large", price: 5.00, calories: 690 }
      ]},
      { name: "Milkshake Vanilla", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.00, calories: 410 },
        { size: "Medium", price: 4.00, calories: 520 },
        { size: "Large", price: 5.00, calories: 680 }
      ]},
      { name: "Milkshake Chocolate", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.00, calories: 430 },
        { size: "Medium", price: 4.00, calories: 540 },
        { size: "Large", price: 5.00, calories: 700 }
      ]},
      { name: "Sundae Hot Fudge", price: 4.00, calories: 330 },
      { name: "Sundae Caramel", price: 4.00, calories: 340 },
      { name: "Chocolate Dipped Cone", price: 1.49, calories: 280 },
      { name: "McFlurry Reese's", price: 5.29, calories: 610 }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    emoji: "🧁",
    items: [
      { name: "Apple Pie", price: 2.00, calories: 230 },
      { name: "Cherry Pie", price: 2.00, calories: 240 },
      { name: "Chocolate Chip Cookie", price: 1.50, calories: 160 },
      { name: "Oatmeal Raisin Cookie", price: 1.50, calories: 150 },
      { name: "Apple Fritter", price: 3.00, calories: 510 },
      { name: "Hershey Pie", price: 2.00, calories: 310 },
      { name: "Cinnamon Roll", price: 3.00, calories: 460 },
      { name: "Brownie", price: 2.99, calories: 340 },
      { name: "Strawberry Pie", price: 2.49, calories: 260 },
      { name: "Peach Cobbler", price: 3.79, calories: 350 }
    ]
  },
  {
    id: "smoothies",
    name: "Smoothies",
    emoji: "🥤",
    items: [
      { name: "Strawberry Banana Smoothie", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.49, calories: 190 },
        { size: "Medium", price: 4.29, calories: 250 },
        { size: "Large", price: 4.99, calories: 330 }
      ]},
      { name: "Mango Pineapple Smoothie", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.49, calories: 200 },
        { size: "Medium", price: 4.29, calories: 260 },
        { size: "Large", price: 4.99, calories: 340 }
      ]},
      { name: "Blueberry Pomegranate Smoothie", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.49, calories: 180 },
        { size: "Medium", price: 4.29, calories: 240 },
        { size: "Large", price: 4.99, calories: 320 }
      ]},
      { name: "Mixed Berry Smoothie", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.49, calories: 185 },
        { size: "Medium", price: 4.29, calories: 245 },
        { size: "Large", price: 4.99, calories: 325 }
      ]}
    ]
  },
  {
    id: "international",
    name: "International Specials",
    emoji: "🌍",
    items: [
      { name: "McSpicy (Singapore)", price: 6.99, calories: 520 },
      { name: "Teriyaki McBurger (Japan)", price: 6.49, calories: 480 },
      { name: "McAloo Tikki (India)", price: 4.99, calories: 350 },
      { name: "Croque McDo (France)", price: 5.49, calories: 420 },
      { name: "McLobster (Canada)", price: 8.99, calories: 380 },
      { name: "Samurai Pork Burger (Thailand)", price: 6.29, calories: 510 },
      { name: "McArabia (Middle East)", price: 7.49, calories: 560 },
      { name: "Prosperity Burger (Malaysia)", price: 6.79, calories: 530 },
      { name: "Chicken Maharaja Mac (India)", price: 7.29, calories: 590 },
      { name: "Ebi Filet-O (Japan)", price: 5.99, calories: 340 }
    ]
  },
  {
    id: "combos",
    name: "Combo Meals",
    emoji: "🍔",
    items: [
      { name: "Big Mac Combo", price: 9.99, calories: 1100, includes: ["Big Mac Burger", "Medium Fries", "Medium Drink"] },
      { name: "Quarter Pounder Combo", price: 10.49, calories: 1080, includes: ["Quarter Pounder with Cheese", "Medium Fries", "Medium Drink"] },
      { name: "Double Quarter Pounder Combo", price: 12.29, calories: 1340, includes: ["Double Quarter Pounder with Cheese", "Medium Fries", "Medium Drink"] },
      { name: "McChicken Combo", price: 8.79, calories: 950, includes: ["McChicken Sandwich", "Medium Fries", "Medium Drink"] },
      { name: "Filet-O-Fish Combo", price: 9.77, calories: 940, includes: ["Filet-O-Fish Sandwich", "Medium Fries", "Medium Drink"] },
      { name: "10 Piece McNuggets Combo", price: 8.99, calories: 990, includes: ["10 Piece McNuggets", "Medium Fries", "Medium Drink"] },
      { name: "Crispy Chicken Sandwich Combo", price: 9.99, calories: 1020, includes: ["Crispy Chicken Sandwich", "Medium Fries", "Medium Drink"] },
      { name: "20 Piece McNuggets Combo", price: 12.49, calories: 1430, includes: ["20 Piece McNuggets", "Large Fries", "Large Drink"] }
    ]
  },
  {
    id: "happymeals",
    name: "Happy Meals",
    emoji: "🎁",
    items: [
      { name: "4 Piece McNuggets Happy Meal", price: 4.99, calories: 475, includes: ["4 Piece McNuggets", "Small Fries or Apple Slices", "Small Drink or Milk", "Toy"] },
      { name: "Hamburger Happy Meal", price: 4.79, calories: 475, includes: ["Hamburger", "Small Fries or Apple Slices", "Small Drink or Milk", "Toy"] },
      { name: "Cheeseburger Happy Meal", price: 5.29, calories: 520, includes: ["Cheeseburger", "Small Fries or Apple Slices", "Small Drink or Milk", "Toy"] },
      { name: "6 Piece McNuggets Happy Meal", price: 5.99, calories: 570, includes: ["6 Piece McNuggets", "Small Fries or Apple Slices", "Small Drink or Milk", "Toy"] }
    ]
  },
  {
    id: "valuemenu",
    name: "Value Menu",
    emoji: "💰",
    items: [
      { name: "McDouble", price: 2.49, calories: 400 },
      { name: "McChicken", price: 1.99, calories: 400 },
      { name: "Junior Chicken", price: 1.79, calories: 350 },
      { name: "Small Cheeseburger", price: 1.49, calories: 300 },
      { name: "4 Piece McNuggets", price: 2.39, calories: 180 },
      { name: "Value Fries", price: 1.49, calories: 220 },
      { name: "Side Salad", price: 2.49, calories: 50 },
      { name: "Soft Drink", price: 1.00, calories: 0, sizes: [
        { size: "Any Size", price: 1.00, calories: 150 }
      ]},
      { name: "Hash Browns", price: 1.49, calories: 150 },
      { name: "Apple Pie", price: 1.49, calories: 230 },
      { name: "Vanilla Cone", price: 1.00, calories: 200 },
      { name: "2 Cookie Bundle", price: 1.99, calories: 320 },
      { name: "Sausage Biscuit", price: 1.99, calories: 460 },
      { name: "Sausage McMuffin", price: 2.29, calories: 400 }
    ]
  },
  {
    id: "energy",
    name: "Energy Drinks",
    emoji: "⚡",
    items: [
      { name: "Red Bull", price: 3.99, calories: 110 },
      { name: "Red Bull Sugar Free", price: 3.99, calories: 10 },
      { name: "Monster Energy", price: 3.79, calories: 210 },
      { name: "Monster Zero Ultra", price: 3.79, calories: 10 },
      { name: "Monster Mango Loco", price: 3.79, calories: 230 },
      { name: "Rockstar Energy", price: 3.49, calories: 280 },
      { name: "Rockstar Sugar Free", price: 3.49, calories: 10 },
      { name: "NOS Energy", price: 3.49, calories: 210 },
      { name: "Bang Energy", price: 3.99, calories: 0 },
      { name: "Celsius Energy", price: 3.79, calories: 10 },
      { name: "5-Hour Energy", price: 3.49, calories: 4 },
      { name: "Reign Total Body Fuel", price: 3.49, calories: 10 },
      { name: "C4 Energy", price: 3.79, calories: 0 },
      { name: "Ghost Energy", price: 3.99, calories: 5 }
    ]
  },
  {
    id: "juice",
    name: "Juice & Water",
    emoji: "🧃",
    items: [
      { name: "Orange Juice", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.29, calories: 110 },
        { size: "Medium", price: 2.79, calories: 150 },
        { size: "Large", price: 3.29, calories: 200 }
      ]},
      { name: "Apple Juice", price: 1.89, calories: 90 },
      { name: "Grape Juice", price: 1.89, calories: 100 },
      { name: "Cranberry Juice", price: 2.09, calories: 110 },
      { name: "Tropical Punch", price: 2.09, calories: 130 },
      { name: "V8 Vegetable Juice", price: 2.49, calories: 50 },
      { name: "Coconut Water", price: 2.99, calories: 45 },
      { name: "Vitamin Water", price: 2.79, calories: 120 },
      { name: "Smartwater", price: 2.49, calories: 0 },
      { name: "Dasani Water", price: 1.99, calories: 0 },
      { name: "Evian Water", price: 2.99, calories: 0 },
      { name: "Perrier Sparkling Water", price: 2.79, calories: 0 },
      { name: "La Croix Sparkling Water", price: 2.49, calories: 0 },
      { name: "1% Low Fat Milk", price: 1.49, calories: 100 },
      { name: "Chocolate Milk", price: 1.79, calories: 150 }
    ]
  },
  {
    id: "exclusive",
    name: "Limited Edition Exclusives",
    emoji: "👑",
    items: [
      { 
        name: "McDonald's Wig", 
        price: 50.00, 
        calories: 0,
      },
      { 
        name: "Golden Arches Crown", 
        price: 25.00, 
        calories: 0,
      },
      { 
        name: "Ronald McDonald Nose (Replica)", 
        price: 15.00, 
        calories: 0,
      }
    ]
  }
];

export const condimentsData = [
  { id: "ketchup", name: "Ketchup Packets", calories: 10 },
  { id: "mustard", name: "Mustard Packets", calories: 5 },
  { id: "mayo", name: "Mayo Packets", calories: 90 },
  { id: "bbq", name: "BBQ Sauce", calories: 15 },
  { id: "tangybbq", name: "Tangy BBQ Sauce", calories: 45 },
  { id: "smokybbq", name: "Smoky BBQ Sauce", calories: 50 },
  { id: "ranch", name: "Ranch Dressing", calories: 110 },
  { id: "buttermilkranch", name: "Buttermilk Ranch", calories: 120 },
  { id: "hotsauce", name: "Hot Sauce", calories: 0 },
  { id: "sweetsour", name: "Sweet & Sour Sauce", calories: 50 },
  { id: "honeymustard", name: "Honey Mustard", calories: 60 },
  { id: "hotmustard", name: "Hot Mustard", calories: 45 },
  { id: "spicymayo", name: "Spicy Mayo", calories: 100 },
  { id: "buffalo", name: "Buffalo Sauce", calories: 5 },
  { id: "spicybuffalo", name: "Spicy Buffalo Sauce", calories: 10 },
  { id: "chipotle", name: "Chipotle Sauce", calories: 25 },
  { id: "aioli", name: "Garlic Aioli", calories: 120 },
  { id: "teriyaki", name: "Teriyaki Sauce", calories: 35 },
  { id: "thousandisland", name: "Thousand Island", calories: 80 },
  { id: "sriracha", name: "Sriracha", calories: 5 },
  { id: "srirachamac", name: "Sriracha Mac Sauce", calories: 70 },
  { id: "creamysalsa", name: "Creamy Salsa", calories: 60 },
  { id: "tartar", name: "Tartar Sauce", calories: 90 },
  { id: "bigmacsauce", name: "Big Mac Sauce", calories: 80 },
  { id: "signature", name: "Signature Sauce", calories: 70 },
  { id: "marinara", name: "Marinara Sauce", calories: 25 },
  { id: "honeypacket", name: "Honey Packet", calories: 50 },
  { id: "jelly", name: "Grape Jelly", calories: 35 },
  { id: "strawberryjam", name: "Strawberry Jam", calories: 35 },
  { id: "butter", name: "Butter Packet", calories: 40 },
  { id: "creamcheese", name: "Cream Cheese", calories: 90 },
  { id: "maplesyrup", name: "Maple Syrup", calories: 180 },
  { id: "salt", name: "Salt Packets", calories: 0 },
  { id: "pepper", name: "Pepper Packets", calories: 0 },
  { id: "sugars", name: "Sugar Packets", calories: 15 },
  { id: "creamer", name: "Coffee Creamer", calories: 20 }
];

export const users: Record<string, { username: string; avatar: string; theme: string; displayName: string }> = {
  sav: {
    username: "sav",
    avatar: "https://i.pinimg.com/474x/b5/51/ec/b551ec41dcbc51a686e482dc2113ad3b.jpg",
    theme: "sav",
    displayName: "Savannah"
  },
  kir: {
    username: "kir",
    avatar: "https://c.pxhere.com/photos/88/8a/cat_lying_blue_eye_small_ginger_fur_heal_pet_animal-609263.jpg!d",
    theme: "kir",
    displayName: "Kirsten"
  }
};

export function itemHasSizes(item: MenuItem): boolean {
  return Boolean(item.sizes && item.sizes.length > 0);
}
