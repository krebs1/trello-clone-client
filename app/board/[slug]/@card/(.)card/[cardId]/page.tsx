'use client'

import React from 'react';
import {EditCardModal} from "@/src/pages/BoardPage/modules/EditCardModal";

const Page = ({params}: { params: { slug: string, cardId: string } }) => {
  return (
    <EditCardModal cardId={params.cardId} boardId={params.slug}/>
  );
};

export default Page;