/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
	theme: {
		extend: {
			colors: {
				primary: "#eb0029",
				secondary: "#010f1c",
				accent: "#f9f6f1",
			},

			fontFamily: {
				lobster: ["Lobster Two", "serif"],
				nunito: ["Nunito", "serif"],
			},
		},
	},
	plugins: [],
};
