import imageOne from "./Image-5-180x180.png";
import chefOne from "./chef-1.jpg";
import chefTwo from "./chef-2.jpg";
import chefThree from "./chef-3.jpg";
import chefFour from "./chef-4.jpg";
import chefFive from "./chef-5.jpg";

export const MainFoodMenu = [
	{
		id: 1,
		name: "Classic Cheeseburger",
		category: "Burgers",
		image: imageOne,
		price: 8.99,
		description:
			"A juicy beef patty topped with cheddar cheese, lettuce, tomato, and our secret sauce.",
		amountInStore: 15,
	},
	{
		id: 2,
		name: "Margherita Pizza",
		category: "Pizza",
		image: imageOne,
		price: 12.99,
		description:
			"A classic Italian pizza with fresh tomatoes, basil, and mozzarella cheese.",
		amountInStore: 10,
	},
	{
		id: 3,
		name: "Chicken Caesar Salad",
		category: "Salads",
		image: imageOne,
		price: 9.99,
		description:
			"Crisp romaine lettuce, grilled chicken, parmesan, and Caesar dressing.",
		amountInStore: 20,
	},
	{
		id: 4,
		name: "BBQ Chicken Wings",
		category: "Appetizers",
		image: imageOne,
		price: 7.49,
		description:
			"Tender chicken wings tossed in smoky BBQ sauce, served with ranch dip.",
		amountInStore: 30,
	},
	{
		id: 5,
		name: "Chocolate Brownie",
		category: "Desserts",
		image: imageOne,
		price: 4.99,
		description:
			"A rich, fudgy brownie served with a scoop of vanilla ice cream.",
		amountInStore: 25,
	},
	{
		id: 6,
		name: "Strawberry Smoothie",
		category: "Drinks",
		image: imageOne,
		price: 5.99,
		description: "A refreshing blend of fresh strawberries, yogurt, and honey.",
		amountInStore: 18,
	},
	{
		id: 7,
		name: "Pepperoni Pizza",
		category: "Pizza",
		image: imageOne,
		price: 14.99,
		description:
			"Crispy crust topped with spicy pepperoni and gooey mozzarella cheese.",
		amountInStore: 12,
	},
	{
		id: 8,
		name: "Grilled Salmon",
		category: "Main Course",
		image: imageOne,
		price: 18.99,
		description:
			"A perfectly grilled salmon fillet served with lemon butter sauce and veggies.",
		amountInStore: 8,
	},
	{
		id: 9,
		name: "Iced Coffee",
		category: "Drinks",
		image: imageOne,
		price: 3.99,
		description: "Chilled brewed coffee with a splash of milk and sweetener.",
		amountInStore: 40,
	},
	{
		id: 10,
		name: "Tiramisu",
		category: "Desserts",
		image: imageOne,
		price: 6.99,
		description:
			"An Italian classic with espresso-soaked ladyfingers and mascarpone cream.",
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
