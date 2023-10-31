'use client'

import {Box, Button, IconButton, TextField} from '@mui/material';
import React, {FC, useState} from 'react';
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import {signIn} from "next-auth/react";
import {useFormik} from 'formik';
import {createListSchema} from "@/src/pages/BoardPage/modules/CreateList/yup/createListSchema";
import {useCreateListMutation} from "@/src/shared/graphql/generated/schema";

interface Props {
  boardId: string,
}

const CreateList: FC<Props> = ({boardId}) => {
  const [createList] = useCreateListMutation();

  const [isCreating, setIsCreating] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      boardName: ''
    },
    validationSchema: createListSchema,
    onSubmit: async values => {
      await createList({
        variables: {
          boardId: boardId,
          name: values.boardName
        }
      });
      values.boardName = '';
      setIsCreating(false);
    }
  })


  return (
    <Box className='tw-min-h-full tw-min-w-[272px] tw-px-1.5'>
      <Box className='tw-w-full tw-bg-list-bg tw-rounded-xl tw-pb-2'>
        <Box className='tw-p-2 tw-pb-0'>
          {
            !isCreating &&
              <Button onClick={() => setIsCreating(true)} size='small'
                      className='tw-rounded-xl tw-p-2 tw-text-text-subtitle tw-w-full' startIcon={<AddIcon/>}>
                  Добавить список
              </Button>
          }
          {
            isCreating &&
              <Box className='tw-w-full' component='form' onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}>
                  <TextField sx={{"& fieldset": {border: 'none'}}}
                             inputProps={{className: 'tw-text-text-light'}}
                             fullWidth className='tw-mb-2'
                             placeholder='Название списка'
                             variant="outlined"
                             autoFocus
                             id='boardName'
                             name='boardName'
                             type='text'
                             value={formik.values.boardName}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             error={formik.touched.boardName && Boolean(formik.errors.boardName)}
                             helperText={formik.touched.boardName && formik.errors.boardName}
                  />
                  <Box className='tw-flex tw-w-full'>
                      <Button type='submit' className='tw-text-text-light tw-mr-3' variant='contained'>
                          Создать
                      </Button>
                      <IconButton className='tw-text-text-light' onClick={() => setIsCreating(false)}>
                          <CloseIcon/>
                      </IconButton>
                  </Box>
              </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default CreateList;