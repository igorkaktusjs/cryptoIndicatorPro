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
        primary: '#6d70cd',
        background: '#f5f4ef',
        backgroundTineLight:'#f0eee7',
        backgroundDark: '#eae7dc',
        backgroundLight: '#faf9f5',
        blue: '#56A2D6',
        green: '#5cdb95',
        red: '#d35a35',
        black: '#292929',
        gray: '#a9a9a9',
        accent: '#43A047',
        highlight: '#FFCA28',
        error: '#e85a4f',
        textPrimary: '#292929',
        TextSecondary: '#757575'
      },
      
    },
  },
  plugins: [],
}


