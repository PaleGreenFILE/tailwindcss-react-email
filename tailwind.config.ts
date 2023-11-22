/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  //darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme: any) => ({
        "card-bg": "url('/images/bgCard.png')",
        "card-bg-predi": "url('/images/bgPredi.png')",
        "card-bg-new": "url('/images/newBack.png')",
      }),
    },
    screens: {
      "3xl": "1500px",
      "4xl": "1800px",
    },
  },
  plugins: [require("tailwind-scrollbar"), nextui()],
});
