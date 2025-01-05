// tailwind.config.js

const customUtilities = require('./utilities');

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
        background: '#F1F8E9',
        blue: '#56A2D6',
        red: '#CB4650',
        black: '#19252b',
        gray: '#a9a9a9',
        accent: '#43A047',
        highlight: '#FFCA28',
        error: '#D32F2F',
        textPrimary: '#19252B',
        TextSecondary: '#757575'
      },
      spacing: {
        10: '10px',
        16: '16px',
        20: '20px',
        14: '14px',
        40: '40px',
        60: '60px',
      },
      fontSize: {
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        36: '36px',
        40: '40px',
      },
      borderRadius: {
        16: '16px',
        20: '20px',
        40: '40px',
      },
      gap: {
        20: '20px',
      },
      extendUtilities: {
        '.pill-button': {
          padding: '10px',
          height: '60px',
          borderRadius: '40px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        },
        '.pill-button-small': {
          paddingHorizontal: '20px',
          height: '40px',
          borderRadius: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        },
        '.container-bg': {
          flex: 1,
          backgroundColor: '#eaf5fc',
          padding: '16px',
        },
        '.header-text': {
          fontSize: '40px',
          fontWeight: '700',
        },
        '.link-text': {
          color: '#4b81bf',
          fontSize: '18px',
          fontWeight: '500',
        },
        '.description-text': {
          fontSize: '18px',
          marginTop: '20px',
          color: '#a9a9a9',
        },
        '.button-text': {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '500',
        },
        '.button-text-small': {
          color: '#fff',
          fontSize: '16px',
          fontWeight: '500',
        },
        '.section-header': {
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '20px',
          marginBottom: '10px',
        },
        '.block-style': {
          marginHorizontal: '20px',
          padding: '14px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          gap: '20px',
        },
      },
    },
  },
  plugins: [],
}


