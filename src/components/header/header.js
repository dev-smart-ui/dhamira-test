/** @jsx jsx */
import { Avatar, Box, MenuButton, jsx } from "theme-ui";
import { Navigation } from "../navigation/navigation";
import { Container } from "../container/container";
import AVATAR_IMG from "../../images/avatar.jpg";

const styles = {
  header: {
    height: "40px",
    width: "100%",
    "@media screen and (min-width: 768px)": {
      height: "80px",
    },
  },
  logo: {
    fontSize: 3,
    fontWeight: "heading",
    "@media screen and (min-width: 768px)": {
      fontSize: 5,
    },
  },
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navigationWrapper: {
    display: "none",
    alignItems: "center",
    "@media screen and (min-width: 768px)": {
      display: "flex",
    },
  },
  avatar: {
    marginLeft: "16px",
    height: "56px",
    width: "56px",
  },
  menuButton: {
    "@media screen and (min-width: 768px)": {
      display: "none",
    },
  },
};

export default function Header() {
  return (
    <header sx={styles.header}>
      <Container>
        <Box sx={styles.wrapper}>
          <div sx={styles.logo}>My App</div>
          <Box sx={styles.navigationWrapper}>
            <Navigation />
            <Avatar src={AVATAR_IMG} alt="avatar" sx={styles.avatar} />
          </Box>
          <MenuButton aria-label="Toggle Menu" sx={styles.menuButton} />
        </Box>
      </Container>
    </header>
  );
}
