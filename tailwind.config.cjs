/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
    daisyui: {
        themes: ["light", "dark", "business"],
      },
	plugins: [require("daisyui")],
};
