/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,}", "./layout/**/*.{ejs,}"],
  theme: {
    container:{ 
      center: true,
      padding:"12px"
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '992px', // 修改這裡的值
        'xl': '1200px', // 修改這裡的值
        '2xl': '1320px', // 修改這裡的值
        '3xl': '1920px', // 修改這裡的值
      },
      spacing: {
        '15': '60px',
      },
      colors: {
        body: '#f3f1e5', // 自訂預設背景顏色
        "body": {
          DEFAULT:"#f3f1e5",
        },
        "primary": {
          DEFAULT:"#7000FF",
        },
        "primary-2": {
          DEFAULT:"#11002D",
        },
        "primary-3": {
          DEFAULT:"#6E01F8",
        },
        "primary-4": {
          DEFAULT:"#380C7E",
        },
        "primary-5": {
          DEFAULT:"#1F0F39",
        },
        "primary-6": {
          DEFAULT:"#030303",
        },
        "secondary": {
          DEFAULT:"#FBFF22"
        },
        "important": {
          DEFAULT:"#73451D"
        },
        "danger": {
          DEFAULT:"#C96464"
        },
        "white": {
          DEFAULT:"#ffffff"
        },
        "white-2":{
          DEFAULT:"#E9E2F3"
        },
        "hover": {
          DEFAULT:"#828282"
        }
      },
      fontFamily: {
        'noto': ['Noto Sans HK',],
        'shrikhand': ['Shrikhand',],
        'saira': ['Saira Extra Condensed',],
      },
      lineHeight: {
        '15': '3.75rem',
        'small-tight': '1.15',
      },
      fontSize: {
        64: ['64px',],
        32: ['32px',],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      rotate: {
        '4': '4deg',
      },
      backgroundImage: {
        'home': "url('./images/home_background.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', //圓形漸層 由內而外
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
