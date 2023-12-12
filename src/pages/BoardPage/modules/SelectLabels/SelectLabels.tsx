'use client'

import React, {FC, useState} from 'react';
import {CPopover} from "@/src/components/Popover";
import {Box, Button, PopoverProps, Checkbox, IconButton, CssBaseline} from "@mui/material";
import {CreateLabel} from "@/src/pages/BoardPage/modules/CreateLabel";
import {
  Board,
  Card,
  useAddLabelToCardMutation,
  useDeleteLabelFromCardMutation,
  useDeleteLabelMutation
} from "@/src/shared/graphql/generated/schema";
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  popOverProps: PopoverProps,
  handleClose: () => void,
  boardId: string,
  listId: string,
  cardId: string,
  cardLabels: Card['labels'],
  labels: Board['labels']
}

const SelectLabels: FC<Props> = (props) => {
  const [deleteLabelFromBoard] = useDeleteLabelMutation();
  const [addLabelToCard] = useAddLabelToCardMutation();
  const [removeLabelFromCard] = useDeleteLabelFromCardMutation();

  const [isCreating, setIsCreating] = useState<boolean>(false);

  return (
    <>
      <CssBaseline/>
      <CPopover
        title={isCreating ? 'Создание метки' : 'Метки'}
        open={props.popOverProps.open}
        anchorEl={props.popOverProps.anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={props.handleClose}
        handleClose={props.handleClose}
        isGoBack={isCreating}
        onGoBack={() => {
          setIsCreating(false)
        }}
      >
        {
          isCreating &&
            <CreateLabel
                boardId={props.boardId}
                cardId={props.cardId}
                closeCreating={() => {
                  setIsCreating(false)
                }}
            />
        }
        {
          !isCreating &&
            <Box className='tw-max-w-xs tw-min-w-full'>
                <Box
                    component='ul'
                    className='tw-grid tw-grid-cols-1 tw-mb-3 tw-list-none tw-mt-0 tw-px-0 tw-w-full'
                >
                  {
                    props.labels?.map((elem) => (
                      <Box
                        component='li'
                        className='tw-max-w-xs tw-grid tw-grid-cols-[min-content_1fr_min-content] tw-items-center tw-mb-2'
                        key={elem._id}
                      >
                        <Checkbox checked={props.cardLabels?.includes(elem._id)}
                                  onChange={async () => {
                                    if (props.cardLabels?.includes(elem._id)) {
                                      //remove
                                      await removeLabelFromCard({
                                        variables: {
                                          boardId: props.boardId,
                                          listId: props.listId,
                                          cardId: props.cardId,
                                          labelId: elem._id
                                        }
                                      })
                                    } else {
                                      //add
                                      await addLabelToCard({
                                        variables: {
                                          boardId: props.boardId,
                                          listId: props.listId,
                                          cardId: props.cardId,
                                          labelId: elem._id
                                        }
                                      })
                                    }
                                  }}
                                  size='small'
                                  className='tw-mr-2'
                        />
                        <Box
                          style={{backgroundColor: elem.colorInfo?.color ? elem.colorInfo?.color : 'transparent'}}
                          className='tw-text-sm tw-h-8 tw-w-full tw-max-w-full tw-px-3 tw-rounded tw-flex tw-items-center'
                        >
                          <Box component='span'
                               className='tw-truncate tw-inline-block tw-max-w-full'
                          >
                            {
                              elem.text
                            }
                          </Box>
                        </Box>
                        <IconButton onClick={async () => {
                          await deleteLabelFromBoard({
                            variables: {
                              bid: props.boardId,
                              labelId: elem._id
                            }
                          })
                        }}
                        >
                          <DeleteIcon/>
                        </IconButton>
                      </Box>
                    ))
                  }
                </Box>
                <Button variant='contained'
                        fullWidth
                        onClick={() => {
                          setIsCreating(true)
                        }}
                >
                    Создать метку
                </Button>
            </Box>
        }
      </CPopover>
    </>
  );
};

export default SelectLabels;