/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Este es un color de prueba, con el tiempo diseñare y añadire mas contenido. Por ahora solo aprendo.
        "django-primary":'#44b78b',
        "django-second":'#0C4B33',
        "bluedemon":'#61dafb',
      }
    },
    boxShadow: {
      navbar:"0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    
  ],
}
