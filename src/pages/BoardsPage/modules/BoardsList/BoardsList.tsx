'use client'

import {Box, Button, CircularProgress, CssBaseline, Grid, Link, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import AddIcon from "@mui/icons-material/Add";
import {useQuery, gql, useLazyQuery} from "@apollo/client";
import {useSession} from "next-auth/react";
import {CreateModal} from '../CreateModal';
import {findBoardByUserIdQuery} from "@/src/pages/BoardsPage/modules/BoardsList/gql/findBoardByUserIdQuery";
import {
  useAggregateBoardByIdLazyQuery, useAggregateBoardByUserIdLazyQuery,
  useAggregateBoardByUserIdQuery,
  useFindBoardByUserIdLazyQuery
} from "@/src/shared/graphql/generated/schema";

const BoardsList = () => {
  const {data: session, status, update} = useSession();
  const [getBoards, {data, loading, refetch, error}] = useAggregateBoardByUserIdLazyQuery();

  const [isCreateBoardModalOpened, setIsCreateBoardModalOpened] = useState<boolean>(false);

  useEffect(() => {
    if (status === 'authenticated') {
     getBoards({
       variables: {
         userId: session?.user.id
       }
     })
    }
  }, [
    getBoards,
    session?.user.id,
    status
  ]);

  if (error) return (<p>{error.message}</p>);

  return (
    <Box className='tw-p-3 tw-w-full'>
      {
        (loading || status === 'loading') &&
          <Box className='tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center'>
              <CircularProgress/>
          </Box>
      }
      {
        (status === 'unauthenticated') &&
          <Box className='tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center'>
              <p>Вы не авторизованы</p>
          </Box>
      }
      {(data && status === 'authenticated') &&
          <>
              <CreateModal
                  open={isCreateBoardModalOpened}
                  onClose={() => {
                    setIsCreateBoardModalOpened(false)
                  }}
                  onCreate={async () => {
                    await refetch()
                  }}
              />
              <CssBaseline/>
              <Typography variant='h4'>Ваши доски</Typography>
              <Grid container spacing={2} className='tw-mt-0'>
                  <Grid item xl={3} md={4} className='tw-aspect-2/1'>
                      <Button variant='outlined' className='tw-w-full tw-h-full tw-rounded-md'
                              onClick={() => setIsCreateBoardModalOpened(true)}
                              startIcon={<AddIcon/>}>Создать</Button>
                  </Grid>
                {
                  data.aggregateBoardByUserId.map((elem) => (
                    <Grid item key={elem._id} xl={3} md={4} className="tw-aspect-[2/1]">
                      <Link href={`board/${elem._id}`} underline='none'>
                        <Box
                          sx={{
                            //TODO: `add env`
                            backgroundImage: `url(http://localhost:7000/${elem.backgroundInfo.previewPath})`,
                            '&:hover': {
                              filter: 'grayscale(50%);'
                            }
                          }}
                          className="tw-p-3 tw-rounded-md tw-h-full tw-w-full tw-bg-cover"
                        >
                          <Typography className='tw-text-white tw-text-sm' variant='h5' component='h5'>
                            {elem.name}
                          </Typography>
                        </Box>
                      </Link>
                    </Grid>
                  ))
                }
              </Grid>
          </>
      }
    </Box>
  )
};

export default BoardsList;