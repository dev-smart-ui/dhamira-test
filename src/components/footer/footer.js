/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Container } from "../container/container";
import { navigation } from "../navigation/navigation";

const styles = {
  footer: {
    color: "text",
    backgroundColor: "primary",
    height: "40px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    variant: "styles.footer",
    "@media screen and (min-width: 768px)": {
      height: "80px",
    },
  },
};

export const Footer = () => {
  return (
    <footer sx={styles.footer}>
      <Container>
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ul sx={{ display: "flex", gap: 3 }}>
            {navigation.map((item) => (
              <li>
                <Link to={item.path} sx={{ variant: "links.nav" }}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div sx={{ mx: "auto" }} />
          <div sx={{ p: 2, fontSize: 0 }}>(с) My App 2023</div>
        </div>
      </Container>
    </footer>
  );
};
