/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
	  extend: {
		colors: {
			primary: '#030014',
			secondary: '#151312', 
			background: '#FDFDFD',
			box:'#F9F9F9',
			box_border:'#D9D9D9',
			light: {
				100:'#D6C6FF',
				200:'#A8B5DB',
				300:'#9CA4ABF',

			},
			dark: {
				100:'#221F3d',
				200:'#0f0d23',
			},
			accent: '#8285EC',
			greenAccent:'#A0C4A7'

		},
		fontFamily: {
        lato: ["Lato", "sans-serif"],
        sans: ["Lato", "System"],
		poppins: ["Poppins", "sans-serif"]
      },
	  },
	},
	plugins: [],
  }