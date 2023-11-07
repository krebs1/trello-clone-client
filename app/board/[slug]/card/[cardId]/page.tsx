import React from 'react';
import {redirect, useRouter} from "next/navigation";

const Page = ({params}: { params: { slug: string, cardId: string } }) => {
  return(
    <div>
      test {params.cardId}
    </div>
  )
};

export default Page;