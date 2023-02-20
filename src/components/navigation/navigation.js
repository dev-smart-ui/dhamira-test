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
    flexDirection: ["column", "row"],
    alignItems: ["left", "center"],
    gap: [2, 2, 3, 4],
    marginRight: [null, 2, 3, 4],
    width: ["100%", null],
    mt: [2, 0],
  },
  listItem: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    borderBottom: ["1px solid black", "none"],
  },
  btn: {
    color: "inherit",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    py: 2,
    "&.active": {
      color: "accent",
      cursor: "none",
      "::after": [
        null,
        {
          content: '""',
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "100%",
          height: "2px",
          backgroundColor: "accent",
          zIndex: "10",
        },
      ],
    },
  },
  disabled: {
    pointerEvents: "none",
    color: "lightGray",
    py: 2,
  },
};

export const Navigation = () => {
  return (
    <ul sx={styles.listWrapper}>
      {navigation.map(({ name, path, active }) => {
        const btnStyles = active
          ? styles.btn
          : { ...styles.btn, ...styles.disabled };
        return (
          <li sx={styles.listItem}>
            <Link key={name} to={path} activeClassName="active" sx={btnStyles}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
