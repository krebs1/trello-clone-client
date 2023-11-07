import React, {FC} from 'react';
import {Alert, Box, Button, TextField} from "@mui/material";
import {CModal} from "@/src/components/Modal";
import {useFormik} from "formik";
import {useSession} from "next-auth/react";
import {createSchema} from "@/src/pages/BoardsPage/modules/CreateModal/yup/createSchema";
import {useMutation} from "@apollo/client";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {LeftContentButton} from "@/src/ui/LeftContentButton";

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
      await createBoard();
      onCreate();
      onClose();
    }
  })

  const [createBoard, {data, loading, error}] = useMutation(createBoardMutation, {
    variables: {
      createBoardInput: {
        name: formik.values.name,
        // @ts-ignore
        userId: session?.user.id
      }
    }
  })


  return (
    <CModal header='Создать доску' open={open} onClose={onClose}>
      <Box
        component='form'
        onSubmit={e => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
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
              border: "1px solid #1976D2",
              "&:hover":{
                border: "1px solid #1976D2",
              }
            }
          }
        }}
                   inputProps={{className: 'tw-text-text-light'}}
                   margin='normal'
                   required
                   fullWidth
                   autoFocus
                   id='name'
                   name='name'
                   type='text'
                   value={formik.values.name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   error={formik.touched.name && Boolean(formik.errors.name)}
                   helperText={formik.touched.name && formik.errors.name}
        />
        {error && <Alert severity='error'>{error.message}</Alert>}

        <Button
          className='text-text-light'
          type='submit'
          fullWidth
          variant='contained'
          sx={{mt: 3, mb: 2}}
          disabled={!formik.isValid}
        >
          Создать
        </Button>
      </Box>
    </CModal>
  );
};

export default CreateModal;