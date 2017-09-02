const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const { IS_PRODUCTION } = require('../config');
const schema = require('./schema');

module.exports = app => new Promise((resolve) => {
  if (!IS_PRODUCTION) {
    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
    }));
  }

  app.use('/graphql', graphqlExpress({
    schema,
  }));

  resolve(app);
});
