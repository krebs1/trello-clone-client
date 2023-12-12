import React from 'react';
import {BoardPage} from "@/src/pages/BoardPage";

const Page = ({params}: { params: { slug: string } }) => {
  return (
    <BoardPage boardId={params.slug}/>
  );
};

export default Page;