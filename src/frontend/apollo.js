import Vue from 'vue';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import VueApollo from 'vue-apollo';


export default () => {
  // Install the vue plugin
  Vue.use(VueApollo);

  // Create the apollo client
  const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: '/graphql',
    }),
    connectToDevTools: true,
  });

  return new VueApollo({
    defaultClient: apolloClient,
  });
};
