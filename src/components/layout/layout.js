/** @jsx jsx */
import React from "react";
import { Box, Global, jsx } from "theme-ui";
import { globalStyles } from "../../gatsby-plugin-theme-ui/globalStyles";
import Header from "../header/header";
import { Footer } from "../footer/footer";
import { Content } from "../content/content";

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
};

export const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Box sx={styles.layout}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Box>
    </>
  );
};
