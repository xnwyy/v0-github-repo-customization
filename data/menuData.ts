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
      { name: "Pup Cup (Vanilla Soft Serve)", price: 0.00, calories: 50, includes: ["Vanilla Soft Serve", "Dog-Safe Cup"] },
      { name: "Pup Cup (Plain Whipped Cream)", price: 0.00, calories: 30, includes: ["Plain Whipped Cream", "Dog-Safe Cup"] },
      { name: "Doggie Ice Cream Cup", price: 1.99, calories: 80, includes: ["Dog-Safe Ice Cream", "Special Cup"] },
      { name: "Peanut Butter Pup Cup", price: 1.49, calories: 120, includes: ["Vanilla Soft Serve", "Peanut Butter Drizzle"] },
      { name: "Bacon Bits Pup Treat", price: 1.29, calories: 60, includes: ["Bacon Bits", "Dog Biscuit"] },
      { name: "Plain Grilled Chicken Strips (Dog Safe)", price: 2.99, calories: 150, includes: ["Unseasoned Grilled Chicken Strips"] },
      { name: "Plain Hamburger Patty (No Seasoning)", price: 2.49, calories: 200, includes: ["Unseasoned Beef Patty"] },
      { name: "Puppy Biscuit Treat", price: 0.99, calories: 40, includes: ["Dog Biscuit"] },
      { name: "Dog Water Bowl (Free Refills)", price: 0.00, calories: 0, includes: ["Fresh Water", "Dog Bowl"] },
      { name: "Doggie Meal Deal", price: 4.99, calories: 280, includes: ["Pup Cup", "Plain Chicken Strip", "Puppy Biscuit", "Water Bowl"] }
    ]
  },
  {
    id: "burgers",
    name: "Burgers & Sandwiches",
    emoji: "🍔",
    items: [
      { name: "Big Mac", price: 6.49, calories: 550, includes: ["Two Beef Patties", "Special Sauce", "Lettuce", "Cheese", "Pickles", "Onions", "Sesame Seed Bun"] },
      { name: "Grand Mac", price: 7.99, calories: 720, includes: ["Two Larger Beef Patties", "Extra Special Sauce", "Lettuce", "Cheese", "Pickles", "Onions", "Larger Sesame Seed Bun"] },
      { name: "Mac Jr.", price: 4.49, calories: 400, includes: ["Single Beef Patty", "Special Sauce", "Lettuce", "Cheese", "Pickles", "Onions", "Sesame Seed Bun"] },
      { name: "Quarter Pounder w/ Cheese", price: 6.49, calories: 520, includes: ["Quarter Pound Beef Patty", "Two Slices Cheese", "Onions", "Pickles", "Ketchup", "Mustard", "Sesame Seed Bun"] },
      { name: "Double Quarter Pounder w/ Cheese", price: 7.79, calories: 740, includes: ["Two Quarter Pound Beef Patties", "Two Slices Cheese", "Onions", "Pickles", "Ketchup", "Mustard", "Sesame Seed Bun"] },
      { name: "Triple Quarter Pounder w/ Cheese", price: 9.99, calories: 1010, includes: ["Three Quarter Pound Beef Patties", "Three Slices Cheese", "Onions", "Pickles", "Ketchup", "Mustard", "Sesame Seed Bun"] },
      { name: "Bacon Quarter Pounder w/ Cheese", price: 7.82, calories: 610, includes: ["Quarter Pound Beef Patty", "Thick-Cut Bacon", "Two Slices Cheese", "Onions", "Pickles", "Ketchup", "Mustard", "Sesame Seed Bun"] },
      { name: "Double Bacon Quarter Pounder w/ Cheese", price: 9.13, calories: 830, includes: ["Two Quarter Pound Beef Patties", "Thick-Cut Bacon", "Two Slices Cheese", "Onions", "Pickles", "Ketchup", "Mustard", "Sesame Seed Bun"] },
      { name: "Bacon Smokehouse Burger", price: 8.49, calories: 680, includes: ["Beef Patty", "Applewood Smoked Bacon", "White Cheddar", "Crispy Onions", "Smoky BBQ Sauce", "Lettuce", "Tomato", "Artisan Roll"] },
      { name: "Mushroom Swiss Burger", price: 7.99, calories: 590, includes: ["Beef Patty", "Sauteed Mushrooms", "Swiss Cheese", "Creamy Garlic Sauce", "Lettuce", "Sesame Seed Bun"] },
      { name: "Cheeseburger", price: 2.79, calories: 300, includes: ["Beef Patty", "American Cheese", "Pickles", "Onions", "Ketchup", "Mustard", "Regular Bun"] },
      { name: "Double Cheeseburger", price: 4.79, calories: 450, includes: ["Two Beef Patties", "Two Slices American Cheese", "Pickles", "Onions", "Ketchup", "Mustard", "Regular Bun"] },
      { name: "Triple Cheeseburger", price: 5.99, calories: 600, includes: ["Three Beef Patties", "Three Slices American Cheese", "Pickles", "Onions", "Ketchup", "Mustard", "Regular Bun"] },
      { name: "McDouble", price: 3.49, calories: 400, includes: ["Two Beef Patties", "American Cheese", "Pickles", "Onions", "Ketchup", "Mustard", "Regular Bun"] },
      { name: "Filet-O-Fish", price: 6.27, calories: 390, includes: ["Fish Filet", "Tartar Sauce", "American Cheese", "Steamed Bun"] },
      { name: "Double Filet-O-Fish", price: 8.49, calories: 560, includes: ["Two Fish Filets", "Tartar Sauce", "American Cheese", "Steamed Bun"] },
      { name: "Classic Hamburger", price: 3.49, calories: 250, includes: ["Beef Patty", "Pickles", "Onions", "Ketchup", "Mustard", "Regular Bun"] },
      { name: "Jalapeño Double Burger", price: 5.99, calories: 480, includes: ["Two Beef Patties", "Pepper Jack Cheese", "Sliced Jalapeños", "Creamy Jalapeño Sauce", "Lettuce", "Regular Bun"] },
      { name: "BBQ Bacon Burger", price: 7.25, calories: 670, includes: ["Beef Patty", "Bacon", "American Cheese", "BBQ Sauce", "Crispy Onions", "Pickles", "Sesame Seed Bun"] },
      { name: "Smokehouse BBQ Burger", price: 7.79, calories: 650, includes: ["Beef Patty", "Smoked Bacon", "Cheddar Cheese", "Smoky BBQ Sauce", "Crispy Onions", "Artisan Roll"] },
      { name: "Western BBQ Burger", price: 7.49, calories: 640, includes: ["Beef Patty", "Bacon", "Onion Rings", "American Cheese", "BBQ Sauce", "Sesame Seed Bun"] },
      { name: "Bacon Deluxe Burger", price: 6.99, calories: 580, includes: ["Beef Patty", "Bacon", "American Cheese", "Lettuce", "Tomato", "Mayo", "Pickles", "Onions", "Sesame Seed Bun"] },
      { name: "Veggie Burger", price: 5.29, calories: 340, includes: ["Veggie Patty", "Lettuce", "Tomato", "Onions", "Pickles", "Ketchup", "Mustard", "Sesame Seed Bun"] },
      { name: "McPlant Burger", price: 6.79, calories: 380, includes: ["Plant-Based Patty", "Vegan Sauce", "Lettuce", "Tomato", "Onions", "Pickles", "Vegan Bun"] }
    ]
  },
  {
    id: "chicken-sandwiches",
    name: "Chicken Sandwiches",
    emoji: "🐔",
    items: [
      { name: "McChicken Sandwich", price: 4.29, calories: 400, includes: ["Crispy Chicken Patty", "Lettuce", "Mayo", "Regular Bun"] },
      { name: "Spicy McChicken Sandwich", price: 4.49, calories: 420, includes: ["Spicy Crispy Chicken Patty", "Lettuce", "Spicy Mayo", "Regular Bun"] },
      { name: "Crispy Chicken Sandwich", price: 5.49, calories: 470, includes: ["Crispy Chicken Breast", "Pickles", "Butter", "Potato Roll"] },
      { name: "Deluxe Crispy Chicken Sandwich", price: 6.49, calories: 530, includes: ["Crispy Chicken Breast", "Lettuce", "Tomato", "Mayo", "Potato Roll"] },
      { name: "Spicy Crispy Chicken Sandwich", price: 5.49, calories: 490, includes: ["Spicy Crispy Chicken Breast", "Pickles", "Spicy Pepper Sauce", "Potato Roll"] },
      { name: "Spicy Deluxe Crispy Chicken", price: 6.79, calories: 540, includes: ["Spicy Crispy Chicken Breast", "Lettuce", "Tomato", "Spicy Mayo", "Potato Roll"] },
      { name: "Grilled Chicken Sandwich", price: 5.99, calories: 380, includes: ["Grilled Chicken Breast", "Lettuce", "Tomato", "Mayo", "Artisan Roll"] },
      { name: "Grilled Chicken Club", price: 7.29, calories: 460, includes: ["Grilled Chicken Breast", "Bacon", "Swiss Cheese", "Lettuce", "Tomato", "Mayo", "Artisan Roll"] },
      { name: "Buffalo Ranch Chicken Sandwich", price: 6.49, calories: 510, includes: ["Crispy Chicken Breast", "Buffalo Sauce", "Ranch Dressing", "Lettuce", "Potato Roll"] },
      { name: "Honey BBQ Chicken Sandwich", price: 6.29, calories: 480, includes: ["Crispy Chicken Breast", "Honey BBQ Sauce", "Pickles", "Potato Roll"] },
      { name: "Nashville Hot Chicken Sandwich", price: 6.99, calories: 530, includes: ["Nashville Hot Crispy Chicken", "Pickles", "Nashville Hot Sauce", "Butter", "Potato Roll"] },
      { name: "Buttermilk Crispy Chicken", price: 5.79, calories: 490, includes: ["Buttermilk Crispy Chicken Breast", "Lettuce", "Mayo", "Tomato", "Regular Bun"] },
      { name: "Bacon Ranch Grilled Chicken", price: 7.49, calories: 500, includes: ["Grilled Chicken Breast", "Bacon", "Ranch Dressing", "Lettuce", "Tomato", "Swiss Cheese", "Artisan Roll"] },
      { name: "Chipotle Chicken Sandwich", price: 6.49, calories: 520, includes: ["Crispy Chicken Breast", "Chipotle Aioli", "Pepper Jack Cheese", "Lettuce", "Tomato", "Potato Roll"] }
    ]
  },
  {
    id: "chicken",
    name: "Chicken & Nuggets",
    emoji: "🍗",
    items: [
      { name: "3 piece Chicken McNuggets", price: 1.39, calories: 170, includes: ["3 Chicken McNuggets", "1 Dipping Sauce"] },
      { name: "4 piece Chicken McNuggets", price: 2.39, calories: 180, includes: ["4 Chicken McNuggets", "1 Dipping Sauce"] },
      { name: "6 piece Chicken McNuggets", price: 3.39, calories: 270, includes: ["6 Chicken McNuggets", "1 Dipping Sauce"] },
      { name: "10 piece Chicken McNuggets", price: 4.59, calories: 440, includes: ["10 Chicken McNuggets", "2 Dipping Sauces"] },
      { name: "20 piece Chicken McNuggets", price: 7.58, calories: 880, includes: ["20 Chicken McNuggets", "3 Dipping Sauces"] },
      { name: "40 piece Chicken McNuggets", price: 13.99, calories: 1760, includes: ["40 Chicken McNuggets", "6 Dipping Sauces"] },
      { name: "50 piece Chicken McNuggets Party Box", price: 16.99, calories: 2200, includes: ["50 Chicken McNuggets", "8 Dipping Sauces"] },
      { name: "Spicy Chicken McNuggets (6 pcs)", price: 3.79, calories: 290, includes: ["6 Spicy Chicken McNuggets", "1 Dipping Sauce"] },
      { name: "Spicy Chicken McNuggets (10 pcs)", price: 4.99, calories: 480, includes: ["10 Spicy Chicken McNuggets", "2 Dipping Sauces"] },
      { name: "Chicken Tenders (3 pcs)", price: 4.29, calories: 380, includes: ["3 Chicken Tenders", "1 Dipping Sauce"] },
      { name: "Chicken Tenders (5 pcs)", price: 5.99, calories: 630, includes: ["5 Chicken Tenders", "2 Dipping Sauces"] },
      { name: "Chicken Tenders (8 pcs)", price: 8.49, calories: 1010, includes: ["8 Chicken Tenders", "3 Dipping Sauces"] },
      { name: "Spicy Chicken Tenders (5 pcs)", price: 6.29, calories: 650, includes: ["5 Spicy Chicken Tenders", "2 Dipping Sauces"] },
      { name: "Chicken Snack Wrap (Grilled)", price: 3.89, calories: 260, includes: ["Grilled Chicken", "Lettuce", "Cheese", "Ranch", "Flour Tortilla"] },
      { name: "Chicken Snack Wrap (Crispy)", price: 3.99, calories: 330, includes: ["Crispy Chicken", "Lettuce", "Cheese", "Ranch", "Flour Tortilla"] },
      { name: "Buffalo Wings (6 pcs)", price: 7.99, calories: 540, includes: ["6 Buffalo Wings", "Celery", "Ranch or Blue Cheese"] },
      { name: "Buffalo Wings (12 pcs)", price: 13.99, calories: 1080, includes: ["12 Buffalo Wings", "Celery", "Ranch or Blue Cheese"] },
      { name: "Honey BBQ Wings (6 pcs)", price: 7.99, calories: 590, includes: ["6 Honey BBQ Glazed Wings", "Celery", "Ranch"] },
      { name: "Garlic Parmesan Wings (6 pcs)", price: 8.49, calories: 580, includes: ["6 Garlic Parmesan Wings", "Celery", "Ranch"] },
      { name: "Popcorn Chicken", price: 4.99, calories: 420, includes: ["Bite-Sized Popcorn Chicken", "1 Dipping Sauce"] },
      { name: "Chicken Bites (6 pcs)", price: 3.99, calories: 280, includes: ["6 Chicken Bites", "1 Dipping Sauce"] }
    ]
  },
  {
    id: "wraps",
    name: "Wraps & Snacks",
    emoji: "🌯",
    items: [
      { name: "Grilled Chicken Wrap", price: 5.49, calories: 350, includes: ["Grilled Chicken", "Lettuce", "Tomato", "Shredded Cheese", "Ranch Dressing", "Flour Tortilla"] },
      { name: "Crispy Chicken Wrap", price: 5.49, calories: 420, includes: ["Crispy Chicken", "Lettuce", "Tomato", "Shredded Cheese", "Ranch Dressing", "Flour Tortilla"] },
      { name: "Spicy Chicken Wrap", price: 5.79, calories: 440, includes: ["Spicy Crispy Chicken", "Lettuce", "Tomato", "Pepper Jack Cheese", "Spicy Ranch", "Flour Tortilla"] },
      { name: "Ranch Chicken Wrap", price: 5.49, calories: 380, includes: ["Grilled Chicken", "Lettuce", "Tomato", "Cheddar Cheese", "Creamy Ranch", "Flour Tortilla"] },
      { name: "Caesar Chicken Wrap", price: 5.79, calories: 390, includes: ["Grilled Chicken", "Romaine Lettuce", "Parmesan", "Caesar Dressing", "Flour Tortilla"] },
      { name: "BBQ Chicken Wrap", price: 5.49, calories: 400, includes: ["Crispy Chicken", "Lettuce", "Cheddar Cheese", "BBQ Sauce", "Crispy Onions", "Flour Tortilla"] },
      { name: "Buffalo Chicken Wrap", price: 5.99, calories: 410, includes: ["Crispy Chicken", "Buffalo Sauce", "Lettuce", "Blue Cheese Crumbles", "Ranch", "Flour Tortilla"] },
      { name: "Southwest Chicken Wrap", price: 6.29, calories: 430, includes: ["Grilled Chicken", "Black Beans", "Corn", "Pepper Jack Cheese", "Chipotle Sauce", "Lettuce", "Flour Tortilla"] },
      { name: "Chipotle Ranch Wrap", price: 5.99, calories: 420, includes: ["Crispy Chicken", "Lettuce", "Tomato", "Cheddar Cheese", "Chipotle Ranch", "Flour Tortilla"] },
      { name: "Veggie Wrap", price: 4.99, calories: 280, includes: ["Lettuce", "Tomato", "Cucumber", "Bell Peppers", "Onions", "Cheese", "Ranch", "Flour Tortilla"] },
      { name: "Bacon Ranch Wrap", price: 6.49, calories: 480, includes: ["Grilled Chicken", "Bacon", "Lettuce", "Tomato", "Cheddar Cheese", "Ranch", "Flour Tortilla"] }
    ]
  },
  {
    id: "salads",
    name: "Salads",
    emoji: "🥗",
    items: [
      { name: "Southwest Grilled Chicken Salad", price: 8.99, calories: 350, includes: ["Grilled Chicken", "Mixed Greens", "Black Beans", "Corn", "Tomatoes", "Tortilla Strips", "Cilantro Lime Dressing"] },
      { name: "Southwest Crispy Chicken Salad", price: 8.99, calories: 520, includes: ["Crispy Chicken", "Mixed Greens", "Black Beans", "Corn", "Tomatoes", "Tortilla Strips", "Cilantro Lime Dressing"] },
      { name: "Bacon Ranch Grilled Chicken Salad", price: 8.49, calories: 320, includes: ["Grilled Chicken", "Mixed Greens", "Bacon", "Tomatoes", "Cheese", "Ranch Dressing"] },
      { name: "Bacon Ranch Crispy Chicken Salad", price: 8.49, calories: 490, includes: ["Crispy Chicken", "Mixed Greens", "Bacon", "Tomatoes", "Cheese", "Ranch Dressing"] },
      { name: "Caesar Salad (No Chicken)", price: 5.99, calories: 180, includes: ["Romaine Lettuce", "Parmesan Cheese", "Croutons", "Caesar Dressing"] },
      { name: "Caesar Salad with Grilled Chicken", price: 8.29, calories: 310, includes: ["Grilled Chicken", "Romaine Lettuce", "Parmesan Cheese", "Croutons", "Caesar Dressing"] },
      { name: "Caesar Salad with Crispy Chicken", price: 8.29, calories: 480, includes: ["Crispy Chicken", "Romaine Lettuce", "Parmesan Cheese", "Croutons", "Caesar Dressing"] },
      { name: "Side Salad", price: 3.49, calories: 50, includes: ["Mixed Greens", "Cherry Tomatoes", "Shredded Carrots", "Choice of Dressing"] },
      { name: "Garden Salad", price: 5.99, calories: 120, includes: ["Mixed Greens", "Tomatoes", "Cucumbers", "Red Onions", "Carrots", "Croutons", "Choice of Dressing"] },
      { name: "Cobb Salad", price: 9.49, calories: 440, includes: ["Grilled Chicken", "Mixed Greens", "Bacon", "Hard-Boiled Egg", "Avocado", "Tomatoes", "Blue Cheese Crumbles", "Ranch Dressing"] },
      { name: "Asian Sesame Salad", price: 8.79, calories: 380, includes: ["Grilled Chicken", "Mixed Greens", "Mandarin Oranges", "Crispy Wontons", "Almonds", "Asian Sesame Dressing"] },
      { name: "Greek Salad", price: 7.99, calories: 290, includes: ["Mixed Greens", "Feta Cheese", "Kalamata Olives", "Cucumbers", "Red Onions", "Tomatoes", "Greek Dressing"] }
    ]
  },
  {
    id: "breakfast",
    name: "Breakfast",
    emoji: "🥞",
    items: [
      { name: "Egg McMuffin", price: 4.89, calories: 310, includes: ["Egg", "Canadian Bacon", "American Cheese", "English Muffin"] },
      { name: "Bacon Egg McMuffin", price: 5.49, calories: 380, includes: ["Egg", "Bacon", "American Cheese", "English Muffin"] },
      { name: "Sausage McMuffin", price: 3.79, calories: 400, includes: ["Sausage Patty", "American Cheese", "English Muffin"] },
      { name: "Sausage McMuffin w/ Egg", price: 4.89, calories: 480, includes: ["Sausage Patty", "Egg", "American Cheese", "English Muffin"] },
      { name: "Double Sausage McMuffin", price: 5.99, calories: 580, includes: ["Two Sausage Patties", "American Cheese", "English Muffin"] },
      { name: "Bacon, Egg & Cheese McGriddles", price: 5.49, calories: 460, includes: ["Bacon", "Egg", "American Cheese", "Maple-Flavored Griddle Cakes"] },
      { name: "Sausage McGriddles", price: 4.39, calories: 420, includes: ["Sausage Patty", "Maple-Flavored Griddle Cakes"] },
      { name: "Sausage, Egg & Cheese McGriddles", price: 5.49, calories: 550, includes: ["Sausage Patty", "Egg", "American Cheese", "Maple-Flavored Griddle Cakes"] },
      { name: "Bacon McGriddles", price: 4.49, calories: 380, includes: ["Bacon", "Maple-Flavored Griddle Cakes"] },
      { name: "Big Breakfast", price: 6.49, calories: 740, includes: ["Scrambled Eggs", "Sausage Patty", "Hash Brown", "Biscuit", "Butter", "Jelly"] },
      { name: "Big Breakfast w/ Hotcakes", price: 8.49, calories: 1090, includes: ["Scrambled Eggs", "Sausage Patty", "Hash Brown", "Biscuit", "Hotcakes", "Butter", "Syrup"] },
      { name: "Deluxe Breakfast", price: 9.49, calories: 1150, includes: ["Scrambled Eggs", "Two Sausage Patties", "Bacon", "Two Hash Browns", "Biscuit", "Hotcakes", "Butter", "Syrup"] },
      { name: "Hotcakes", price: 4.29, calories: 320, includes: ["Three Hotcakes", "Butter", "Syrup"] },
      { name: "Hotcakes & Sausage", price: 5.29, calories: 520, includes: ["Three Hotcakes", "Sausage Patty", "Butter", "Syrup"] },
      { name: "Hotcakes & Bacon", price: 5.49, calories: 480, includes: ["Three Hotcakes", "Bacon Strips", "Butter", "Syrup"] },
      { name: "Hash Browns", price: 1.89, calories: 150, includes: ["Crispy Hash Brown Patty"] },
      { name: "Hash Browns (2 pcs)", price: 3.29, calories: 300, includes: ["Two Crispy Hash Brown Patties"] },
      { name: "Sausage Biscuit", price: 3.49, calories: 460, includes: ["Sausage Patty", "Buttermilk Biscuit"] },
      { name: "Bacon, Egg & Cheese Biscuit", price: 4.79, calories: 460, includes: ["Bacon", "Egg", "American Cheese", "Buttermilk Biscuit"] },
      { name: "Sausage, Egg & Cheese Biscuit", price: 4.79, calories: 520, includes: ["Sausage Patty", "Egg", "American Cheese", "Buttermilk Biscuit"] },
      { name: "Chicken Biscuit", price: 4.49, calories: 450, includes: ["Crispy Chicken Patty", "Buttermilk Biscuit"] },
      { name: "Steak, Egg & Cheese Biscuit", price: 5.99, calories: 540, includes: ["Steak Patty", "Egg", "American Cheese", "Buttermilk Biscuit"] },
      { name: "Breakfast Burrito", price: 3.99, calories: 305, includes: ["Scrambled Eggs", "Sausage", "Cheese", "Peppers", "Onions", "Flour Tortilla"] },
      { name: "Sausage Breakfast Burrito", price: 4.49, calories: 380, includes: ["Scrambled Eggs", "Sausage", "Cheese", "Salsa", "Flour Tortilla"] },
      { name: "Steak Breakfast Burrito", price: 5.29, calories: 420, includes: ["Scrambled Eggs", "Steak", "Cheese", "Peppers", "Onions", "Salsa", "Flour Tortilla"] },
      { name: "Fruit & Maple Oatmeal", price: 3.89, calories: 320, includes: ["Oatmeal", "Diced Apples", "Cranberry Raisin Blend", "Light Cream", "Brown Sugar"] },
      { name: "Scrambled Eggs (2 pcs)", price: 2.49, calories: 180, includes: ["Two Scrambled Eggs"] },
      { name: "Sausage Patty", price: 1.79, calories: 170, includes: ["Sausage Patty"] },
      { name: "Bacon Strips (3 pcs)", price: 2.29, calories: 120, includes: ["Three Bacon Strips"] },
      { name: "Cinnamon Roll", price: 3.29, calories: 450, includes: ["Warm Cinnamon Roll", "Cream Cheese Icing"] },
      { name: "Blueberry Muffin", price: 2.99, calories: 380, includes: ["Blueberry Muffin"] },
      { name: "Apple Danish", price: 2.79, calories: 340, includes: ["Apple Danish", "Icing Drizzle"] }
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
      ], includes: ["Iced Coffee", "Cream", "Sugar"] },
      { name: "Caramel Frappe", price: 0, calories: 0, sizes: [
        { size: "Small", price: 4.79, calories: 420 },
        { size: "Medium", price: 5.79, calories: 550 },
        { size: "Large", price: 6.79, calories: 670 }
      ], includes: ["Coffee Frappe Base", "Caramel Syrup", "Whipped Cream", "Caramel Drizzle"] },
      { name: "Mocha Frappe", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.79, calories: 410 },
        { size: "Medium", price: 4.79, calories: 510 },
        { size: "Large", price: 5.79, calories: 610 }
      ], includes: ["Coffee Frappe Base", "Chocolate Syrup", "Whipped Cream", "Chocolate Drizzle"] },
      { name: "Hot & Iced Lattes", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.29, calories: 150 },
        { size: "Medium", price: 3.29, calories: 190 },
        { size: "Large", price: 4.29, calories: 240 }
      ], includes: ["Espresso", "Steamed Milk"] },
      { name: "Hot Chocolate", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.49, calories: 370 },
        { size: "Medium", price: 2.49, calories: 440 },
        { size: "Large", price: 3.49, calories: 540 }
      ], includes: ["Hot Chocolate", "Steamed Milk", "Whipped Cream"] },
      { name: "Chai Latte", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.99, calories: 240 },
        { size: "Medium", price: 3.99, calories: 290 },
        { size: "Large", price: 4.99, calories: 350 }
      ], includes: ["Chai Concentrate", "Steamed Milk"] },
      { name: "Espresso Shot", price: 1.99, calories: 5, includes: ["Single Espresso Shot"] },
      { name: "Cappuccino", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.49, calories: 120 },
        { size: "Medium", price: 3.49, calories: 160 },
        { size: "Large", price: 4.49, calories: 200 }
      ], includes: ["Espresso", "Steamed Milk", "Milk Foam"] },
      { name: "Americano", price: 0, calories: 0, sizes: [
        { size: "Small", price: 1.99, calories: 10 },
        { size: "Medium", price: 2.49, calories: 15 },
        { size: "Large", price: 2.99, calories: 20 }
      ], includes: ["Espresso", "Hot Water"] }
    ]
  },
  {
    id: "drinks",
    name: "Soft Drinks",
    emoji: "🥤",
    items: [
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
      ], includes: ["Salted French Fries"] },
      { name: "Basket of Fries", price: 4.99, calories: 540, includes: ["Large Portion of French Fries"] },
      { name: "Apple Slices", price: 1.89, calories: 15, includes: ["Fresh Apple Slices"] },
      { name: "Onion Rings", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.10, calories: 150 },
        { size: "Medium", price: 4.10, calories: 240 },
        { size: "Large", price: 5.10, calories: 340 }
      ], includes: ["Crispy Onion Rings"] },
      { name: "Bacon Strips", price: 2.59, calories: 90, includes: ["Three Bacon Strips"] },
      { name: "Mozzarella Sticks (6 pcs)", price: 4.99, calories: 470, includes: ["6 Mozzarella Sticks", "Marinara Sauce"] },
      { name: "Side Salad", price: 3.99, calories: 15, includes: ["Mixed Greens", "Cherry Tomatoes", "Shredded Carrots"] },
      { name: "Fruit Cup", price: 2.99, calories: 60, includes: ["Mixed Fresh Fruit"] },
      { name: "Mac & Cheese", price: 0, calories: 0, sizes: [
        { size: "Small", price: 2.49, calories: 160 },
        { size: "Regular", price: 3.49, calories: 280 },
        { size: "Large", price: 4.49, calories: 420 }
      ], includes: ["Creamy Mac & Cheese"] }
    ]
  },
  {
    id: "icecream",
    name: "Ice Cream & Frozen Treats",
    emoji: "🍦",
    items: [
      { name: "Vanilla Cone", price: 1.00, calories: 200, includes: ["Vanilla Soft Serve", "Cone"] },
      { name: "McFlurry M&M", price: 0, calories: 0, sizes: [
        { size: "Snack", price: 3.00, calories: 430 },
        { size: "Regular", price: 5.00, calories: 640 }
      ], includes: ["Vanilla Soft Serve", "M&M Candies"] },
      { name: "McFlurry Oreo", price: 0, calories: 0, sizes: [
        { size: "Snack", price: 3.00, calories: 340 },
        { size: "Regular", price: 5.00, calories: 510 }
      ], includes: ["Vanilla Soft Serve", "Oreo Cookie Pieces"] },
      { name: "Milkshake Strawberry", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.00, calories: 420 },
        { size: "Medium", price: 4.00, calories: 530 },
        { size: "Large", price: 5.00, calories: 690 }
      ], includes: ["Vanilla Ice Cream", "Strawberry Syrup", "Whipped Cream"] },
      { name: "Milkshake Vanilla", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.00, calories: 410 },
        { size: "Medium", price: 4.00, calories: 520 },
        { size: "Large", price: 5.00, calories: 680 }
      ], includes: ["Vanilla Ice Cream", "Whipped Cream"] },
      { name: "Milkshake Chocolate", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.00, calories: 430 },
        { size: "Medium", price: 4.00, calories: 540 },
        { size: "Large", price: 5.00, calories: 700 }
      ], includes: ["Vanilla Ice Cream", "Chocolate Syrup", "Whipped Cream"] },
      { name: "Sundae Hot Fudge", price: 4.00, calories: 330, includes: ["Vanilla Soft Serve", "Hot Fudge", "Whipped Cream", "Peanuts"] },
      { name: "Sundae Caramel", price: 4.00, calories: 340, includes: ["Vanilla Soft Serve", "Caramel Sauce", "Whipped Cream", "Peanuts"] },
      { name: "Chocolate Dipped Cone", price: 1.49, calories: 280, includes: ["Vanilla Soft Serve", "Chocolate Shell", "Cone"] },
      { name: "McFlurry Reese's", price: 5.29, calories: 610, includes: ["Vanilla Soft Serve", "Reese's Peanut Butter Cup Pieces", "Peanut Butter Drizzle"] }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    emoji: "🧁",
    items: [
      { name: "Apple Pie", price: 2.00, calories: 230, includes: ["Baked Apple Filling", "Flaky Crust"] },
      { name: "Cherry Pie", price: 2.00, calories: 240, includes: ["Cherry Filling", "Flaky Crust"] },
      { name: "Chocolate Chip Cookie", price: 1.50, calories: 160, includes: ["Chocolate Chip Cookie"] },
      { name: "Oatmeal Raisin Cookie", price: 1.50, calories: 150, includes: ["Oatmeal Raisin Cookie"] },
      { name: "Apple Fritter", price: 3.00, calories: 510, includes: ["Apple Fritter", "Glaze"] },
      { name: "Hershey Pie", price: 2.00, calories: 310, includes: ["Chocolate Cream Filling", "Cookie Crust"] },
      { name: "Cinnamon Roll", price: 3.00, calories: 460, includes: ["Cinnamon Roll", "Cream Cheese Icing"] },
      { name: "Brownie", price: 2.99, calories: 340, includes: ["Chocolate Brownie"] },
      { name: "Strawberry Pie", price: 2.49, calories: 260, includes: ["Strawberry Filling", "Flaky Crust"] },
      { name: "Peach Cobbler", price: 3.79, calories: 350, includes: ["Peach Filling", "Cobbler Topping"] }
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
      ], includes: ["Strawberries", "Banana", "Low-Fat Yogurt", "Ice"] },
      { name: "Mango Pineapple Smoothie", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.49, calories: 200 },
        { size: "Medium", price: 4.29, calories: 260 },
        { size: "Large", price: 4.99, calories: 340 }
      ], includes: ["Mango", "Pineapple", "Low-Fat Yogurt", "Ice"] },
      { name: "Blueberry Pomegranate Smoothie", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.49, calories: 180 },
        { size: "Medium", price: 4.29, calories: 240 },
        { size: "Large", price: 4.99, calories: 320 }
      ], includes: ["Blueberries", "Pomegranate Juice", "Low-Fat Yogurt", "Ice"] },
      { name: "Mixed Berry Smoothie", price: 0, calories: 0, sizes: [
        { size: "Small", price: 3.49, calories: 185 },
        { size: "Medium", price: 4.29, calories: 245 },
        { size: "Large", price: 4.99, calories: 325 }
      ], includes: ["Strawberries", "Blueberries", "Raspberries", "Low-Fat Yogurt", "Ice"] }
    ]
  },
  {
    id: "international",
    name: "International Specials",
    emoji: "🌍",
    items: [
      { name: "McSpicy (Singapore)", price: 6.99, calories: 520, includes: ["Spicy Chicken Patty", "Lettuce", "Mayo", "Sesame Seed Bun"] },
      { name: "Teriyaki McBurger (Japan)", price: 6.49, calories: 480, includes: ["Beef Patty", "Teriyaki Sauce", "Lettuce", "Mayo", "Sesame Seed Bun"] },
      { name: "McAloo Tikki (India)", price: 4.99, calories: 350, includes: ["Spiced Potato Patty", "Tomato Mayo", "Onions", "Bun"] },
      { name: "Croque McDo (France)", price: 5.49, calories: 420, includes: ["Ham", "Emmental Cheese", "Bechamel Sauce", "Toasted Bread"] },
      { name: "McLobster (Canada)", price: 8.99, calories: 380, includes: ["Atlantic Lobster Meat", "Light Mayo", "Lettuce", "Hotdog-Style Roll"] },
      { name: "Samurai Pork Burger (Thailand)", price: 6.29, calories: 510, includes: ["Pork Patty", "Teriyaki Sauce", "Lettuce", "Mayo", "Sesame Seed Bun"] },
      { name: "McArabia (Middle East)", price: 7.49, calories: 560, includes: ["Grilled Chicken", "Onions", "Tomatoes", "Garlic Sauce", "Arabic Bread"] },
      { name: "Prosperity Burger (Malaysia)", price: 6.79, calories: 530, includes: ["Beef Patty", "Black Pepper Sauce", "Onions", "Sesame Seed Bun"] },
      { name: "Chicken Maharaja Mac (India)", price: 7.29, calories: 590, includes: ["Two Chicken Patties", "Special Sauce", "Lettuce", "Onions", "Sesame Seed Bun"] },
      { name: "Ebi Filet-O (Japan)", price: 5.99, calories: 340, includes: ["Shrimp Patty", "Thousand Island Sauce", "Lettuce", "Steamed Bun"] }
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
      { name: "McDouble", price: 2.49, calories: 400, includes: ["Two Beef Patties", "American Cheese", "Pickles", "Onions", "Ketchup", "Mustard"] },
      { name: "McChicken", price: 1.99, calories: 400, includes: ["Crispy Chicken Patty", "Lettuce", "Mayo"] },
      { name: "Junior Chicken", price: 1.79, calories: 350, includes: ["Crispy Chicken Patty", "Lettuce", "Mayo"] },
      { name: "Small Cheeseburger", price: 1.49, calories: 300, includes: ["Beef Patty", "American Cheese", "Pickles", "Onions", "Ketchup", "Mustard"] },
      { name: "4 Piece McNuggets", price: 2.39, calories: 180, includes: ["4 Chicken McNuggets"] },
      { name: "Value Fries", price: 1.49, calories: 220, includes: ["Small French Fries"] },
      { name: "Side Salad", price: 2.49, calories: 50, includes: ["Mixed Greens", "Cherry Tomatoes"] },
      { name: "Soft Drink", price: 1.00, calories: 0, sizes: [
        { size: "Any Size", price: 1.00, calories: 150 }
      ]},
      { name: "Hash Browns", price: 1.49, calories: 150, includes: ["Crispy Hash Brown"] },
      { name: "Apple Pie", price: 1.49, calories: 230, includes: ["Baked Apple Filling", "Flaky Crust"] },
      { name: "Vanilla Cone", price: 1.00, calories: 200, includes: ["Vanilla Soft Serve", "Cone"] },
      { name: "2 Cookie Bundle", price: 1.99, calories: 320, includes: ["Two Chocolate Chip Cookies"] },
      { name: "Sausage Biscuit", price: 1.99, calories: 460, includes: ["Sausage Patty", "Buttermilk Biscuit"] },
      { name: "Sausage McMuffin", price: 2.29, calories: 400, includes: ["Sausage Patty", "American Cheese", "English Muffin"] }
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
  { id: "ketchup", name: "Ketchup Packets", calories: 10, regularPrice: 0, extraPrice: 0.15 },
  { id: "mustard", name: "Mustard Packets", calories: 5, regularPrice: 0, extraPrice: 0.10 },
  { id: "mayo", name: "Mayo Packets", calories: 90, regularPrice: 0, extraPrice: 0.20 },
  { id: "bbq", name: "BBQ Sauce", calories: 15, regularPrice: 0, extraPrice: 0.25 },
  { id: "tangybbq", name: "Tangy BBQ Sauce", calories: 45, regularPrice: 0, extraPrice: 0.25 },
  { id: "smokybbq", name: "Smoky BBQ Sauce", calories: 50, regularPrice: 0, extraPrice: 0.25 },
  { id: "ranch", name: "Ranch Dressing", calories: 110, regularPrice: 0.35, extraPrice: 0.50 },
  { id: "buttermilkranch", name: "Buttermilk Ranch", calories: 120, regularPrice: 0.35, extraPrice: 0.50 },
  { id: "hotsauce", name: "Hot Sauce", calories: 0, regularPrice: 0, extraPrice: 0.10 },
  { id: "sweetsour", name: "Sweet & Sour Sauce", calories: 50, regularPrice: 0, extraPrice: 0.25 },
  { id: "honeymustard", name: "Honey Mustard", calories: 60, regularPrice: 0.30, extraPrice: 0.45 },
  { id: "hotmustard", name: "Hot Mustard", calories: 45, regularPrice: 0.25, extraPrice: 0.40 },
  { id: "spicymayo", name: "Spicy Mayo", calories: 100, regularPrice: 0.35, extraPrice: 0.50 },
  { id: "buffalo", name: "Buffalo Sauce", calories: 5, regularPrice: 0, extraPrice: 0.25 },
  { id: "spicybuffalo", name: "Spicy Buffalo Sauce", calories: 10, regularPrice: 0.25, extraPrice: 0.40 },
  { id: "chipotle", name: "Chipotle Sauce", calories: 25, regularPrice: 0.35, extraPrice: 0.50 },
  { id: "aioli", name: "Garlic Aioli", calories: 120, regularPrice: 0.40, extraPrice: 0.60 },
  { id: "teriyaki", name: "Teriyaki Sauce", calories: 35, regularPrice: 0.30, extraPrice: 0.45 },
  { id: "thousandisland", name: "Thousand Island", calories: 80, regularPrice: 0.35, extraPrice: 0.50 },
  { id: "sriracha", name: "Sriracha", calories: 5, regularPrice: 0.25, extraPrice: 0.40 },
  { id: "srirachamac", name: "Sriracha Mac Sauce", calories: 70, regularPrice: 0.40, extraPrice: 0.60 },
  { id: "creamysalsa", name: "Creamy Salsa", calories: 60, regularPrice: 0.35, extraPrice: 0.50 },
  { id: "tartar", name: "Tartar Sauce", calories: 90, regularPrice: 0.35, extraPrice: 0.50 },
  { id: "bigmacsauce", name: "Big Mac Sauce", calories: 80, regularPrice: 0.40, extraPrice: 0.60 },
  { id: "signature", name: "Signature Sauce", calories: 70, regularPrice: 0.40, extraPrice: 0.60 },
  { id: "marinara", name: "Marinara Sauce", calories: 25, regularPrice: 0, extraPrice: 0.25 },
  { id: "honeypacket", name: "Honey Packet", calories: 50, regularPrice: 0, extraPrice: 0.15 },
  { id: "jelly", name: "Grape Jelly", calories: 35, regularPrice: 0, extraPrice: 0.10 },
  { id: "strawberryjam", name: "Strawberry Jam", calories: 35, regularPrice: 0, extraPrice: 0.10 },
  { id: "butter", name: "Butter Packet", calories: 40, regularPrice: 0, extraPrice: 0.10 },
  { id: "creamcheese", name: "Cream Cheese", calories: 90, regularPrice: 0.50, extraPrice: 0.75 },
  { id: "maplesyrup", name: "Maple Syrup", calories: 180, regularPrice: 0, extraPrice: 0.25 },
  { id: "salt", name: "Salt Packets", calories: 0, regularPrice: 0, extraPrice: 0 },
  { id: "pepper", name: "Pepper Packets", calories: 0, regularPrice: 0, extraPrice: 0 },
  { id: "sugars", name: "Sugar Packets", calories: 15, regularPrice: 0, extraPrice: 0 },
  { id: "creamer", name: "Coffee Creamer", calories: 20, regularPrice: 0, extraPrice: 0.10 }
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
