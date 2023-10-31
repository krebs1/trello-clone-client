'use client'

import {Box, CircularProgress, Container, CssBaseline} from '@mui/material';
import React, {FC, useEffect} from 'react';
import {List} from './modules/List'
import {Lists} from '@/src/pages/BoardPage/modules/Lists'
import {FindBoardByIdQuery} from "@/src/shared/graphql/generated/schema";

interface Props {
  subscribeToBoardModified: (() => () => void) | null,
  data: NonNullable<FindBoardByIdQuery['findBoardById']>
}

const BoardPage: FC<Props> = ({subscribeToBoardModified, data}) => {
  // @ts-ignore

  return (
    <Box className='tw-min-h-full tw-min-w-full tw-relative'>
      {
        data &&
          <Lists lists={data.lists} boardId={data._id}/>
      }
    </Box>
  );
};

export default BoardPage;