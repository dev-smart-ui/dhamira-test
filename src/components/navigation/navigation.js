/** @jsx jsx */
import { jsx } from "theme-ui";

import { Link } from "gatsby";

export const navigation = [
  {
    name: "Blog",
    path: "/blog",
    active: true,
  },
  {
    name: "About",
    path: "/about",
    active: true,
  },
  {
    name: "Contact",
    path: "/contact",
    active: false,
  },
];

const styles = {
  listWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    height: "28px",
  },
  active: {
    color: "inherit",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    py: 2,
    "&.active": {
      color: "accent",
      cursor: "none",
      "::after": {
        content: '""',
        position: "absolute",
        left: "0",
        bottom: "0",
        width: "100%",
        height: "2px",
        backgroundColor: "accent",
        zIndex: "10",
      },
    },
  },
  disabled: {
    pointerEvents: "none",
    color: "lightGray",
  },
};

export const Navigation = () => {
  return (
    <ul sx={styles.listWrapper}>
      {navigation.map(({ name, path, active }) => {
        return (
          <li sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            <Link
              key={name}
              to={path}
              activeClassName="active"
              sx={active ? styles.active : styles.disabled}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
