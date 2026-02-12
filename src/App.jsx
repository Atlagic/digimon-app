import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { DigimonsContainer } from "./containers/DigimonsContainer.jsx";

function App() {
  const client = new ApolloClient({
      link: new HttpLink({
          uri: 'https://digimon-graphql.vercel.app/' //https://graphql-pokemon2.vercel.app/
      }),
      cache: new InMemoryCache()
  })

  return (
      <ApolloProvider client={client}>
          <main>
              <DigimonsContainer />
          </main>
      </ApolloProvider>
  )
}

export default App

// https://digimon-graphql.vercel.app/
