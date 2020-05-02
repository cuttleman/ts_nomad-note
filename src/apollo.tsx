import {withClientState} from "apollo-link-state"
import {ApolloClient} from "apollo-client"
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloLink} from "apollo-link";
import {defaults, resolvers, typeDefs} from "clientState"

const cache: any = new InMemoryCache(); 
const stateLink: ApolloLink = withClientState({
    cache,
    resolvers,
    defaults,
    typeDefs
})

const client:ApolloClient<Cache> = new ApolloClient({
    cache,
    link: ApolloLink.from([stateLink]),
    resolvers
})

export default client;