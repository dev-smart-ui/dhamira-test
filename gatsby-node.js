exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/blog`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
