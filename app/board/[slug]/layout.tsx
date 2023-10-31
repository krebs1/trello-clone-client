import React from "react";

export default async function Layout(
  props: {
    children: React.ReactNode,
    card: React.ReactNode
  }
) {
  return (
    <>
      {props.children}
      {props.card}
    </>
  )
}