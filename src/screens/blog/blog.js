import * as React from "react";
import { Layout } from "../../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";

export const Blog = () => {
  return (
    <Layout>
      <StaticImage
        src="../../images/template.png"
        alt="content"
        layout="fullWidth"
      />
    </Layout>
  );
};
