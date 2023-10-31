'use client'

import React, {FC, useCallback, useEffect, useState} from 'react';
import {CModal} from "@/src/components/Modal";
import {
  BoardModifiedDocument,
  BoardModifiedSubscription,
  BoardModifiedSubscriptionVariables,
  Card as CardType,
  useFindCardByIdQuery, useRenameCardMutation, useRenameListMutation
} from '@/src/shared/graphql/generated/schema'
import {useRouter, useParams} from "next/navigation";
import {Box, TextField, Typography} from "@mui/material";

interface Props {
  boardId: string,
  cardId: string,
}

const EditCardModal:FC<Props> = ({cardId, boardId}) => {
  const router = useRouter();

  const {data: {findCardById} = {}} = useFindCardByIdQuery({variables:{_id: cardId}});
  const [renameCard] = useRenameCardMutation();
  const [cardName, setCardName] = useState<string>('');

  useEffect(()=>{
    setCardName(findCardById!.name)
  }, [findCardById!.name])

  return (
    <CModal header="Изменение карточки" open={true} onClose={()=>{router.back()}}>
      <Box className='tw-pb-2'>
        <Typography variant='h5' className='tw-p-1.5 tw-pl-3 tw-text-text-light tw-text-sm tw-hidden'>
          {cardName}
        </Typography>
        <TextField sx={{
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              border: "1px solid #1976D2"
            }
          },
          "& .MuiOutlinedInput-root": {
            "& > input": {
              fontSize: "14px",
              padding: "0.375rem",
              paddingLeft: "0.750rem"
            },
            "& > fieldset": {
              border: "none",
            }
          }
        }}
                   inputProps={{className: 'tw-text-text-light'}}
                   fullWidth className='tw-mb-2'
                   placeholder='Название списка'
                   variant="outlined"
                   type='text'
                   value={cardName}
                   onChange={(e)=>{setCardName(e.target.value)}}
                   onBlur={async () => {
                     // @ts-ignore
                     await renameCard({variables: {boardId: boardId, listId: findCardById!.lists[0]._id, name: cardName}})
                   }}
        />
      </Box>
    </CModal>
  );
};

export default EditCardModal;