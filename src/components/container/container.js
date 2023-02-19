import * as React from "react";
import { Box } from "theme-ui";

const styles = {
  container: {
    px: [2, null, 3],
    mx: "auto",
    width: "100%",
    height: "100%",
    maxWidth: "1232px",
  },
};

export const Container = ({ children }) => {
  return <Box sx={styles.container}>{children}</Box>;
};
