'use client'

import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";
import {getMainDefinition} from "@apollo/client/utilities";

import {ApolloLink, HttpLink, makeVar, split} from '@apollo/client'
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import React from "react";
import {FindBoardByIdQuery} from "@/src/shared/graphql/generated/schema";

export const currentBoardVar = makeVar<FindBoardByIdQuery['findBoardById'] | null>(null);

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'http://localhost:7000/graphql',
    credentials: 'include'
  })

  const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:7000/graphql',
  }))

  const splitLink = split(
    ({query}) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: splitLink
    // typeof window === 'undefined'
    // ? ApolloLink.from([
    //   new SSRMultipartLink({
    //     stripDefer: true
    //   }),
    //   httpLink
    // ])
    // : httpLink
  })
}

export function ApolloWrapper({children}: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
