import React, {FC, useEffect, useState} from 'react';
import {Alert, Box, Button, CircularProgress, ImageList, ImageListItem, TextField, Typography} from "@mui/material";
import {CModal} from "@/src/components/Modal";
import {useFormik} from "formik";
import {useSession} from "next-auth/react";
import {createSchema} from "@/src/pages/BoardsPage/modules/CreateModal/yup/createSchema";
import CheckIcon from '@mui/icons-material/Check';
import {
  FindAllBackgroundsQuery,
  useCreateBoardMutation,
  useFindAllBackgroundsQuery
} from "@/src/shared/graphql/generated/schema";
import {Background} from '@/src/shared/graphql/generated/schema'


interface Props {
  open: boolean,
  onClose: () => void,
  onCreate: () => void,
}

const CreateModal: FC<Props> = ({open = false, onClose, onCreate}) => {
  const {data: session, status, update} = useSession();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: createSchema,
    onSubmit: async values => {
      await createBoard({
        variables: {
          boardName: values.name,
          userId: session?.user.id!,
          backgroundId: selectedBackground?._id!
        }
      });
      onCreate();
      onClose();
    }
  })

  const [createBoard, {error}] = useCreateBoardMutation();
  const {data:{findAllBackgrounds} = {}, loading} = useFindAllBackgroundsQuery();
  const [selectedBackground, setSelectedBackground] = useState<Background|null>(null);
  useEffect(() => {
    if(!loading && !selectedBackground) {
      setSelectedBackground(findAllBackgrounds![0]);
    }
  }, [loading]);

  return (
    <CModal header='Создать доску' open={open} onClose={onClose} className='tw-max-w-xs'>
      <Box className='tw-mb-4 tw-flex tw-items-center tw-justify-center'>
        <Box
          sx={{
            //TODO: `add env`
            backgroundImage: `url(http://localhost:7000/${selectedBackground?.previewPath})`,
          }}
          className='tw-w-52 tw-p-4 tw-bg-cover tw-flex tw-items-center tw-justify-center tw-rounded'
        >
          {
            //TODO: `add env`
          }
          <img src={`http://localhost:3000/14cda5dc635d1f13bc48.svg`}/>
        </Box>
      </Box>
      <Box
        component='form'
        onSubmit={e => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
        <Box className='tw-mb-2'>
          <Typography className='tw-text-xs tw-mb-1'>
            Цвета
          </Typography>
          {
            loading &&
              <Box className='tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center'>
                  <CircularProgress/>
              </Box>
          }
          {
            findAllBackgrounds &&
              <Box className='tw-grid tw-grid-cols-4 tw-gap-2 tw-w-full'>
                {
                  findAllBackgrounds.map(elem => (
                    <Box key={elem._id}
                         sx={{
                           //TODO: `add env`
                           backgroundImage: `url(http://localhost:7000/${elem.previewPath})`,
                           filter: selectedBackground?._id === elem._id ? 'grayscale(50%);' : 'none',
                           '&:hover': {
                             filter: 'grayscale(50%);'
                           }
                         }}
                         className='tw-rounded tw-cursor-pointer tw-h-14 tw-bg-cover tw-flex tw-items-center tw-justify-center'
                         onClick={()=>{
                           setSelectedBackground(elem)
                         }}
                    >
                      {
                        selectedBackground?._id === elem._id &&
                          <CheckIcon/>
                      }
                    </Box>
                  ))
                }
              </Box>
          }
        </Box>
        <TextField margin='normal'
                   required
                   fullWidth
                   autoFocus
                   id='name'
                   name='name'
                   type='text'
                   label='Название'
                   value={formik.values.name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   error={formik.touched.name && Boolean(formik.errors.name)}
                   helperText={formik.touched.name && formik.errors.name}
        />
        {error && <Alert severity='error'>{error.message}</Alert>}

        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{mt: 3, mb: 2}}
          disabled={!formik.isValid || !selectedBackground}
        >
          Создать
        </Button>
      </Box>
    </CModal>
  );
};

export default CreateModal;