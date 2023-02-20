/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { navigation } from "../navigation/navigation";

const styles = {
  footer: {
    color: "text",
    backgroundColor: "primary",
    height: ["40px", "80px"],
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  linkList: {
    display: "flex",
    flexWrap: "wrap",
    gap: [2, 3, 4],
  },
  licence: {
    fontSize: 0,
  },
};

export const Footer = () => (
  <footer sx={styles.footer}>
    <div sx={styles.wrapper}>
      <ul sx={styles.linkList}>
        {navigation.map((item) => (
          <li>
            <Link to={item.path} sx={{ variant: "links.nav" }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div sx={styles.licence}>(с) My App 2023</div>
    </div>
  </footer>
);
