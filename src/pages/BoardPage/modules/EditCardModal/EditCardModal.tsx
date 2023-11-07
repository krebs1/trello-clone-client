'use client'

import React, {FC, useEffect, useState} from 'react';
import {CModal} from "@/src/components/Modal";
import {useRouter} from "next/navigation";
import {Box, Button, TextField, Typography} from "@mui/material";
import {useReactiveVar} from "@apollo/client";
import {currentBoardVar} from "@/src/shared/lib/apollo-wrapper";
import {Card, useChangeCardDescriptionMutation, useRenameCardMutation} from "@/src/shared/graphql/generated/schema";
import DescriptionIcon from '@mui/icons-material/Description';
import TitleIcon from '@mui/icons-material/Title';
import LabelIcon from '@mui/icons-material/Label';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ShareIcon from '@mui/icons-material/Share';
import ArchiveIcon from '@mui/icons-material/Archive';
import {LeftContentButton} from '@/src/ui/LeftContentButton';
import {CPopover} from "@/src/components/Popover";
import SelectLabels from "@/src/pages/BoardPage/modules/SelectLabels/SelectLabels";

interface Props {
  boardId: string,
  cardId: string,
}

const EditCardModal: FC<Props> = ({cardId, boardId}) => {
  const [renameCard] = useRenameCardMutation();
  const [changeDescription] = useChangeCardDescriptionMutation();

  const router = useRouter();
  const board = useReactiveVar(currentBoardVar);

  const [card, setCard] = useState<Card | null>(null)
  const [listId, setListId] = useState<string | null>(null)
  const [cardName, setCardName] = useState<string>('')
  const [cardDescription, setCardDescription] = useState<string>('')

  useEffect(() => {
    if (board) {
      setCard(() => {
        let card: Card | null = null

        board.lists?.forEach((elem) => {
          const list = elem

          elem.cards?.forEach((elem) => {
            if (elem._id === cardId) {
              card = elem;
              setListId(list._id);
              return;
            }
          })
        })
        return card
      })
    }
  }, [board, cardId]);
  useEffect(() => {
    setCardName(card ? card.name : '')
    setCardDescription(card ? (card.description ? card.description : '') : '')
  }, [card]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <CModal className='tw-max-w-3xl tw-w-full' header="Изменение карточки" open={true} onClose={() => {
      router.back()
    }}>
      <Box className='tw-grid tw-grid-cols-12 gap-4 tw-w-full'>
        <Box className='tw-col-span-9 tw-pr-6'>
          <Box className='tw-w-full'>
            <Box className='tw-flex tw-items-center tw-content-center tw-w-full tw-mb-3'>
              <TitleIcon className='tw-mr-2 tw-text-text-subtitle'/>
              <Box className='tw-w-full tw-flex tw-items-start tw-content-center'>
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
                           fullWidth
                           placeholder='Название карточки'
                           variant="outlined"
                           type='text'
                           value={cardName}
                           onChange={(e) => {
                             setCardName(e.target.value)
                           }}
                           onBlur={async () => {
                             if (boardId && listId && cardId)
                               await renameCard({
                                 variables: {
                                   boardId: boardId,
                                   listId: listId,
                                   cardId: cardId,
                                   name: cardName
                                 }
                               })
                           }}
                />
              </Box>
            </Box>
            <Box className='tw-flex tw-items-start tw-content-center tw-w-full'>
              <DescriptionIcon className='tw-mr-2 tw-text-text-subtitle tw-mt-1.5'/>
              <Box className='tw-w-full'>
                <Typography variant='h5' className='tw-p-1.5 tw-pl-3 tw-text-text-light tw-text-base'>
                  Описание
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
                           fullWidth
                           placeholder='Описание карточки'
                           multiline
                           minRows={4}
                           variant="outlined"
                           type='text'
                           value={cardDescription}
                           onChange={(e) => {
                             setCardDescription(e.target.value)
                           }}
                           onBlur={async () => {
                             if (boardId && listId && cardId)
                               await changeDescription({
                                 variables: {
                                   boardId: boardId,
                                   listId: listId,
                                   cardId: cardId,
                                   description: cardDescription,
                                 }
                               })
                           }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className='tw-col-span-3'>
          <Box className='tw-flex tw-flex-col tw-mb-4'>
            <Typography className='tw-text-text-light tw-mb-2'>
              Добавить на карточку
            </Typography>
            <LeftContentButton className='tw-mb-2'
                               variant='contained'
                               startIcon={<LabelIcon/>}
                               onClick={(e) => handlePopoverOpen(e)}
            >
              Метки
            </LeftContentButton>
            <SelectLabels popOverProps={{open: open, anchorEl: anchorEl}}
                          handleClose={handlePopoverClose}
                          boardId={boardId}
                          cardId={cardId}
            />
            <LeftContentButton className='tw-mb-2' variant='contained' startIcon={<AccessTimeIcon/>}>
              Даты
            </LeftContentButton>
            <LeftContentButton className='tw-mb-2' variant='contained' startIcon={<PersonIcon/>}>
              Пользователи
            </LeftContentButton>
            <LeftContentButton className='tw-mb-2' variant='contained' startIcon={<AttachFileIcon/>}>
              Вложения
            </LeftContentButton>
          </Box>
          <Box className='tw-flex tw-flex-col'>
            <Typography className='tw-text-text-light tw-mb-2'>
              Действия
            </Typography>
            <LeftContentButton className='tw-mb-2' variant='contained' startIcon={<ArchiveIcon/>}>
              Архивировать
            </LeftContentButton>
            <LeftContentButton variant='contained' startIcon={<ShareIcon/>}>
              Поделиться
            </LeftContentButton>
          </Box>
        </Box>
      </Box>
    </CModal>
  );
};

export default EditCardModal;