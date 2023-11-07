import React, {FC} from 'react';
import {Box, Divider, IconButton, Modal, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

interface Props {
  open: boolean,
  onClose: () => void,
  header: string,
  children: React.ReactNode,
  className?: string
}

const CModal: FC<Props> = ({open = false, onClose, header = '', children, className=''}) => {
  return (
    <Modal open={open}
           onClose={onClose}
    >
      <Box component='section' sx={style} className={'tw-rounded-lg tw-p-4 tw-bg-card-bg' +` ${className}`}>
        <header className='tw-flex tw-flex-row tw-items-center tw-justify-between tw-mb-1'>
          {
            header &&
              <Typography variant='h6' className='tw-mr-1 tw-text-text-light'>{header}</Typography>
          }
          <IconButton className='tw-text-text-light' onClick={onClose}><CloseIcon/></IconButton>
        </header>
        <main>
          {children}
        </main>
      </Box>
    </Modal>
  );
};

export default CModal;