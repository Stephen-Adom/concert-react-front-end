/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryGreen: "#97bf0f",
				primaryDark: "#151515",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
