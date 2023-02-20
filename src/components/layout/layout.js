/** @jsx jsx */
import { Box, Global, jsx } from "theme-ui";
import { globalStyles } from "../../gatsby-plugin-theme-ui/globalStyles";
import Header from "../header/header";
import { Footer } from "../footer/footer";
import { Container } from "../container/container";

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    gap: [1, null, 3],
    width: "100%",
  },
  content: {
    width: "100%",
    flex: "1 1 auto",
    position: "relative",
  },
  inside: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  main: {
    height: "100%",
    overflow: "auto",
  },
};

export const Layout = ({ children }) => {
  return (
    <Container>
      <Global styles={globalStyles} />
      <div sx={styles.layout}>
        <Header />
        <div sx={styles.content}>
          <div sx={styles.inside}>
            <main sx={styles.main}>{children}</main>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};
