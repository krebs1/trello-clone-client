import React, {FC} from 'react';
import {Box, Divider, IconButton, Modal, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
};

interface Props {
  open: boolean,
  onClose: () => void,
  header: string,
  children: React.ReactNode
}

const CModal: FC<Props> = ({open = false, onClose, header = '', children}) => {
  return (
    <Modal open={open}
           onClose={onClose}
    >
      <Box component='section' sx={style} className='tw-rounded tw-p-4'>
        <header className='tw-flex tw-flex-row tw-items-center tw-justify-between tw-mb-2'>
          {
            header &&
              <Typography variant='h5' className='tw-mr-1'>{header}</Typography>
          }
          <IconButton onClick={onClose}><CloseIcon/></IconButton>
        </header>
        <Divider className='tw-mb-1'/>
        <main>
          {children}
        </main>
      </Box>
    </Modal>
  );
};

export default CModal;