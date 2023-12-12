import {Box, Button, IconButton, Paper, TextField, Typography} from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import {Card} from '../Card';
import AddIcon from "@mui/icons-material/Add";
import {List as ListType, useCreateCardMutation, useRenameListMutation} from '@/src/shared/graphql/generated/schema'
import CloseIcon from "@mui/icons-material/Close";
import {useFormik} from "formik";
import {createCardSchema} from "@/src/pages/BoardPage/modules/List/yup/createCardSchema";
import {Draggable, Droppable} from 'react-beautiful-dnd';

interface Props {
  list: ListType,
  boardId: string,
}

const List: FC<Props> = ({list, boardId}) => {
  const [createCard] = useCreateCardMutation()
  const [renameList] = useRenameListMutation()

  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [listName, setListName] = useState<string>(list.name);

  const formik = useFormik({
    initialValues: {
      cardName: ''
    },
    validationSchema: createCardSchema,
    onSubmit: async values => {
      await createCard({
        variables: {
          boardId: boardId,
          listId: list._id,
          name: values.cardName,
        }
      });
      values.cardName = '';
      setIsCreating(false);
    }
  })

  useEffect(() => {
    setListName(list.name)
  }, [list.name])

  return (
    <Box className='tw-min-h-full tw-min-w-[272px] tw-px-1.5' component='li'>
      <Droppable droppableId={`list:${list._id}`}>
        {
          provided => (
            <Paper
              ref={provided.innerRef}
              {...provided.droppableProps}
              variant='elevation'
              elevation={5}
              className='tw-w-full tw-rounded-xl tw-pb-2'
            >
              <Box className='tw-p-2 tw-pb-0 tw-flex tw-flex-row'>
                <Typography variant='h5' className='tw-p-1.5 tw-pl-3 tw-text-sm tw-hidden'>
                  {listName}
                </Typography>
                <TextField
                  sx={{
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
                  fullWidth className='tw-mb-2'
                  placeholder='Название списка'
                  variant="outlined"
                  type='text'
                  value={listName}
                  onChange={(e) => {
                    setListName(e.target.value)
                  }}
                  onBlur={async () => {
                    await renameList({variables: {boardId: boardId, listId: list._id, name: listName}})
                  }}
                />
              </Box>
              <Box component='ol' className='tw-py-0.5 tw-px-1 tw-my-0 tw-mx-1 tw-list-none'>
                {
                  list.cards &&
                  list.cards.map(
                    (card, index) =>
                      <Card index={index}
                            key={`card:${card._id}`}
                            boardId={boardId}
                            listId={list._id}
                            card={card}
                      />
                  )
                }
                {provided.placeholder}
              </Box>
              <Box className='tw-p-2 tw-pb-0'>
                {
                  !isCreating &&
                    <Button onClick={() => {
                      setIsCreating(true)
                    }} size='small' className='tw-rounded-xl tw-p-2' startIcon={<AddIcon/>}>
                        Добавить карточку
                    </Button>
                }
                {
                  isCreating &&
                    <Box className='tw-w-full' component='form' onSubmit={(e) => {
                      e.preventDefault();
                      formik.handleSubmit();
                    }}>
                        <TextField
                            sx={{"& fieldset": {border: 'none'}}}
                            fullWidth className='tw-mb-2'
                            placeholder='Название карточки'
                            variant="outlined"
                            autoFocus
                            id='cardName'
                            name='cardName'
                            type='text'
                            value={formik.values.cardName}
                            onChange={formik.handleChange}
                            onBlur={() => {
                              formik.handleBlur;
                            }}
                            error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                            helperText={formik.touched.cardName && formik.errors.cardName}
                        />
                        <Box className='tw-flex tw-w-full'>
                            <Button type='submit' className='tw-mr-3' variant='contained'>
                                Создать
                            </Button>
                            <IconButton className='' onClick={() => setIsCreating(false)}>
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                }
              </Box>
            </Paper>
          )
        }
      </Droppable>
    </Box>
  );
};

export default List;