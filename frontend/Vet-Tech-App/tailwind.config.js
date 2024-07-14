/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // colores de app
        "primaryColor":"hsl(277, 62%, 51%)",
        "secondaryColor":"hsl(299, 51%, 53%)",
        "menuColor-1":"hsl(184, 65%, 52%)",
        "menuColor-2":"hsl(83, 78%, 51%)",
        "menuColor-3":"hsl(43, 92%, 57%)",
        "menuColor-4":"hsl(353, 100%, 81%)",
        "baseColor":"hsl(0, 0%, 90%)",
        
        //text
        "whiteText":"hsl(0, 3%, 94%)",
        "blackText":"hsl(0, 0%, 15%)",
    },
    },
  },
  plugins: [],
}

