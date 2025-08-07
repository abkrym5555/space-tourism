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

        destmob:
          "url('./assets/destination/background-destination-mobile.jpg')",
        desttabl:
          "url('./assets/destination/background-destination-tablet.jpg')",
        destdesk:
          "url('./assets/destination/background-destination-desktop.jpg')",

        cerwmob: "url('./assets/crew/background-crew-mobile.jpg')",
        cerwtabl: "url('./assets/crew/background-crew-tablet.jpg')",
        cerwdesk: "url('./assets/crew/background-crew-desktop.jpg')",

        techmob: "url('./assets/technology/background-technology-mobile.jpg')",
        techtabl: "url('./assets/technology/background-technology-tablet.jpg')",
        techdesk:
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
      gap: {
        32: "-2rem",
      },
      maxWidth: {
        46: "46rem",
        446: "27.8125rem",
      },
      letterSpacing: {
        15: "2px",
      },
      fontSize: {
        32: "2rem",
        40: "2.5rem",
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
        56: "3.5rem",
        28: "1.75rem",
        15: [
          "15px",
          {
            lineHeight: "1.8",
          },
        ],
      },
      height: {
        374: "23.375rem",
        272: "272px",
        moonh: "150px",
        moonhlg: "25rem",
        dotsm: "10px",
        340: "340px",
        crwimgh: "560px",
      },
      width: {
        272: "272px",
        moonw: "150px",
        moonwlg: "25rem",
        dotsm: "10px",
        maxcreww: "1110px",
      },
    },
  },
  plugins: [],
};
