/** @jsx jsx */
import { Avatar, Box, MenuButton, jsx } from "theme-ui";
import { Navigation } from "../navigation/navigation";
import { Container } from "../container/container";
import AVATAR_IMG from "../../images/avatar.jpg";

const styles = {
  header: {
    height: ["40px", "60px", "80px"],
    width: "100%",
  },
  logo: {
    fontSize: [3, 5],
    fontWeight: "heading",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navigationWrapper: {
    display: ["none", "flex"],
    alignItems: "center",
  },
  avatar: {
    marginLeft: "16px",
    height: "56px",
    width: "56px",
  },
  menuButton: {
    display: [null, "none"],
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
