import React from 'react';

const Layout = (props: { children: React.ReactNode, card: React.ReactNode }) => {
  return (
    <>
      {
        props.children
      }
      {
        props.card
      }
    </>
  );
};

export default Layout;