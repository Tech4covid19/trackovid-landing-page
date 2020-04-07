const path = require(`path`);

// exports.createPage({
//   path: `/o-meu-codigo-postal/cenas`,
//   component: path.resolve(`./src/pages/o-meu-codigo-postal.jsx`),
//   // The context is passed as props to the component as well
//   // as into the component's GraphQL query.
//   context: {
//     id: `123456`,
//   },
// });

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: `/o-meu-codigo-postal/:code/:id`,
    matchPath: "/o-meu-codigo-postal/:code/:id",
    component: path.resolve(`./src/pages/o-meu-codigo-postal.jsx`),
    // The context is passed as props to the component as well
    // as into the component's GraphQL query.
    context: {
      id: `123456`,
    },
  });
};
