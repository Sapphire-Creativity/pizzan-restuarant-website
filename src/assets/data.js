import chefOne from "./chef-1.jpg";
import chefTwo from "./chef-2.jpg";
import chefThree from "./chef-3.jpg";
import chefFour from "./chef-4.jpg";
import chefFive from "./chef-5.jpg";

import imageOne from "./Image-5-180x180.png";
import bbqChicken from "./bbq-chicken.png";
import beefBurger from "./beef-burger.png";
import blackCoffee from "./black-cold-coffee.png";
import blackTea from "./black-tea.png";
import briefPizza from "./brief-pizza.png";
import CacciatorePasta from "./Cacciatore Pasta.png";
import chickenBarger from "./Chicken Barger.png";
import chickenSalad from "./Chicken Salad.png";
import ChineeseCoffee from "./Chinise Art Coffee.png";
import friedEgg from "./Fried Egg.png";
import italianPasta from "./Italian Pasta.png";
import lemonTea from "./Lemon Tea.png";
import SpaghettiSauce from "./Spaghetti Sauce.png";
import TuscanChicken from "./Tuscan Chicken.png";
import SalisburySteak from "./Salisbury Steak.png";
import VeggieStirFry from "./Veggie Stir Fry.png";

export const MainFoodMenu = [
	{
		id: 1,
		name: "Classic Cheeseburger",
		category: "Burgers",
		image: beefBurger,
		price: 8.99,
		description:
			"A juicy beef patty topped with cheddar cheese, lettuce, tomato, and our secret sauce.",
		amountInStore: 15,
	},
	{
		id: 2,
		name: "BBQ Chicken Pizza",
		category: "Pizza",
		image: bbqChicken,
		price: 12.99,
		description:
			"A smoky BBQ sauce base topped with grilled chicken, red onions, and mozzarella cheese.",
		amountInStore: 10,
	},
	{
		id: 3,
		name: "Chicken Salad",
		category: "Salads",
		image: chickenSalad,
		price: 9.99,
		description:
			"Crisp romaine lettuce, grilled chicken, parmesan, and Caesar dressing.",
		amountInStore: 20,
	},
	{
		id: 4,
		name: "Salisbury Steak",
		category: "Main Course",
		image: SalisburySteak,
		price: 7.49,
		description:
			"Juicy ground beef steak smothered in a rich mushroom and onion gravy, served with mashed potatoes.",
		amountInStore: 30,
	},
	{
		id: 5,
		name: "Chicken Burger",
		category: "Burgers",
		image: chickenBarger,
		price: 4.99,
		description:
			"A crispy or grilled chicken fillet topped with fresh lettuce, tomato, and a tangy mayo sauce.",
		amountInStore: 25,
	},
	{
		id: 6,
		name: "Black Coffee",
		category: "Drinks",
		image: blackCoffee,
		price: 5.99,
		description: "A bold and rich freshly brewed black coffee with no additives.",
		amountInStore: 18,
	},
	{
		id: 7,
		name: "Pepperoni Pizza",
		category: "Pizza",
		image: briefPizza,
		price: 14.99,
		description:
			"Crispy crust topped with spicy pepperoni and gooey mozzarella cheese.",
		amountInStore: 12,
	},
	{
		id: 8,
		name: "Veggie Stir Fry",
		category: "Main Course",
		image: VeggieStirFry,
		price: 18.99,
		description:
			"A colorful mix of fresh vegetables stir-fried in a savory garlic-ginger sauce, served with rice or noodles.",
		amountInStore: 8,
	},
	{
		id: 9,
		name: "Black Tea",
		category: "Drinks",
		image: blackTea,
		price: 3.99,
		description: "A refreshing cup of strong black tea, served hot or iced.",
		amountInStore: 40,
	},
	{
		id: 10,
		name: "Fried Egg",
		category: "Appetizers",
		image: friedEgg,
		price: 6.99,
		description:
			"A perfectly fried egg with a crispy edge and a soft yolk, served with toast.",
		amountInStore: 22,
	},
	{
		id: 11,
		name: "Beef Burger",
		category: "Burgers",
		image: beefBurger,
		price: 6.99,
		description:
			"A delicious beef burger layered with lettuce, tomato, cheese, and house sauce.",
		amountInStore: 22,
	},
	{
		id: 12,
		name: "Beef Pizza",
		category: "Pizza",
		image: briefPizza,
		price: 6.99,
		description:
			"A flavorful pizza topped with seasoned ground beef, onions, and melted cheese.",
		amountInStore: 22,
	},
	{
		id: 13,
		name: "Cacciatore Pasta",
		category: "Pasta",
		image: CacciatorePasta,
		price: 6.99,
		description:
			"A rustic Italian pasta dish with chicken, bell peppers, tomatoes, and a rich herb-infused sauce.",
		amountInStore: 22,
	},
	{
		id: 14,
		name: "Chinese Coffee",
		category: "Drinks",
		image: ChineeseCoffee,
		price: 6.99,
		description:
			"A unique Chinese-style coffee brewed for a smooth and aromatic taste.",
		amountInStore: 22,
	},
	{
		id: 15,
		name: "Italian Pasta",
		category: "Pasta",
		image: italianPasta,
		price: 6.99,
		description:
			"A classic Italian pasta dish with a rich tomato sauce, garlic, and fresh basil.",
		amountInStore: 22,
	},
	{
		id: 16,
		name: "Lemon Tea",
		category: "Drinks",
		image: lemonTea,
		price: 6.99,
		description:
			"A soothing blend of black tea with fresh lemon juice and a hint of honey.",
		amountInStore: 22,
	},
	{
		id: 17,
		name: "Spaghetti with Marinara Sauce",
		category: "Pasta",
		image: SpaghettiSauce,
		price: 6.99,
		description:
			"A hearty spaghetti dish with a classic marinara sauce made from ripe tomatoes and fresh herbs.",
		amountInStore: 22,
	},
	{
		id: 18,
		name: "Tuscan Chicken",
		category: "Main Course",
		image: TuscanChicken,
		price: 6.99,
		description:
			"Juicy grilled chicken breasts in a creamy Tuscan garlic sauce with sun-dried tomatoes and spinach.",
		amountInStore: 22,
	},
];


// Chef Data

export const chefsData = [
	{
		id: 1,
		name: "Chef John Doe",
		position: "Head Chef",
		image: chefOne,
	},
	{
		id: 2,
		name: "Chef Jane Smith",
		position: "Sous Chef",
		image: chefTwo,
	},
	{
		id: 3,
		name: "Chef Mike Lee",
		position: "Pastry Chef",
		image: chefThree,
	},
	{
		id: 4,
		name: "Chef Sarah Williams",
		position: "Grill Master",
		image: chefFour,
	},
	{
		id: 5,
		name: "Chef Mary",
		position: "Supervisor",
		image: chefFive,
	},
];
