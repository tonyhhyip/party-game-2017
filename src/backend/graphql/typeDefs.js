const fs = require('fs');

const GRAPHQL_SCHEMA = `${__dirname}/party.graphqls`;

const typeDefs = fs.readFileSync(GRAPHQL_SCHEMA, 'utf8');

module.exports = typeDefs;
