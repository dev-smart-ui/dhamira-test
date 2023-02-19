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
    gap: [null, 2, 3, 4],
    height: "28px",
    marginRight: [null, 2, 3, 4],
  },
  listItem: {
    height: "100%",
    display: "flex",
    alignItems: "center",
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
          <li sx={styles.listItem}>
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
