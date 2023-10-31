'use client'

import React from 'react';
import {EditCardModal} from "@/src/pages/BoardPage/modules/EditCardModal";

const Page = ({params}: { params: { slug: string } }) => {

  return (
    <EditCardModal cardId={'reiukbsjfd'}/>
  );
};

export default Page;