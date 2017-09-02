const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const { IS_PRODUCTION } = require('../config');
const schema = require('./schema');
const createContext = require('./context');

module.exports = app => new Promise((resolve) => {
  if (!IS_PRODUCTION) {
    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
    }));
  }

  app.use('/graphql', graphqlExpress(req => ({
    schema,
    context: createContext(req),
  })));

  resolve(app);
});
