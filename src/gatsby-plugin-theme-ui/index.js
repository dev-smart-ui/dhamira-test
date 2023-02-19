const theme = {
  colors: {
    text: "#000000",
    background: "#fff",
    primary: "#fff",
    accent: "#414BB2",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "system-ui, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [576, 768, 1024, 1440, 1720].map(
    (n) => `@media screen and (min-width: ${n}px)`
  ),
  links: {
    nav: {
      fontWeight: "body",
      color: "text",
      textDecoration: "none",
      py: 2,
    },
  },
};

export default theme;
