/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "rgb(11,13,23)",
        light: "rgb(208,214,249)",
      },
      backgroundImage: {
        homemob: "url('./assets/home/background-home-mobile.jpg')",
        hometabl: "url('./assets/home/background-home-tablet.jpg')",
        homedesk: "url('./assets/home/background-home-desktop.jpg')",
      },
      gap: {
        32: "-2rem",
      },
      maxWidth: {
        46: "46rem",
      },
      letterSpacing: {
        15: "2px",
      },
      fontSize: {
        28: [
          "1.75rem",
          {
            letterSpacing: ".125em",
          },
        ],
        80: [
          "5rem",
          {
            letterSpacing: ".125em",
          },
        ],
      },
      height: {
        374: "23.375rem",
        272: "272px",
      },
      width: {
        272: "272px",
      },
    },
  },
  plugins: [],
};
