/** @jsx jsx */
import { Fragment } from "react";
import { Avatar, jsx } from "theme-ui";
import { Navigation } from "../navigation/navigation";
import AVATAR_IMG from "../../images/avatar.jpg";
import { useOpen } from "../../hooks/useOpen";
import Burger from "./burgerMenu/Burger";

const styles = {
  header: {
    height: ["40px", "60px", "80px"],
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: [3, 5],
    fontWeight: "heading",
  },
  navigationWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: ["column-reverse", "row"],
    justifyContent: ["flex-end"],
    position: ["fixed", "static"],
    top: "40px",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "primary",
    zIndex: 2,
    transform: "translateX(-100%)",
    transition: "transform 0.3s",
    overflowY: "auto",
    p: [3, 0],
    active: {
      transform: "translateX(0)",
    },
  },
  avatar: {
    minHeight: "50px",
    minWidth: "50px",
  },
  menuButton: {
    display: [null, "none"],
  },
  mobileMenu: {
    position: "fixed",
    top: "40px",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "background",
    isOpenMenu: {
      display: ["block", "none"],
    },
  },
};

export default function Header() {
  const { isOpen, onClose, onToggle } = useOpen(false);

  const activeNav = isOpen
    ? { ...styles.navigationWrapper, ...styles.navigationWrapper.active }
    : styles.navigationWrapper;

  return (
    <Fragment>
      <header sx={styles.header}>
        <div sx={styles.logo}>My App</div>
        <nav sx={activeNav}>
          <Navigation />
          <Avatar src={AVATAR_IMG} alt="avatar" sx={styles.avatar} />
        </nav>
        <Burger burgerToggle={onToggle} burgerIsOpen={isOpen} />
      </header>
    </Fragment>
  );
}
