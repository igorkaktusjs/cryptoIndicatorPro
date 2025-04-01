// tailwind.config.js


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [
    require("nativewind/preset"),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5',
        background: '#F8F9FA',
        blue: '#56A2D6',
        green: '#21b850',
        red: '#d36a35',
        black: '#19252b',
        gray: '#a9a9a9',
        accent: '#43A047',
        highlight: '#FFCA28',
        error: '#D32F2F',
        textPrimary: '#19252B',
        TextSecondary: '#757575'
      },
      
    },
  },
  plugins: [],
}


