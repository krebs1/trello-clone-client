import React, {FC} from 'react';
import {Box, Divider, IconButton, Modal, Paper, Typography} from "@mui/material";
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

const CModal: FC<Props> = ({open = false, onClose, header = '', children, className = ''}) => {
  return (
    <Modal open={open}
           onClose={onClose}
    >
      <Paper component='section'
             sx={style}
             className={'tw-p-4'}
             variant='elevation'
             elevation={3}
      >
        <header className='tw-flex tw-flex-row tw-items-center tw-justify-between tw-mb-1'>
          <Typography variant='h6' className='tw-mr-1 tw-text-text-light tw-grow'>{header}</Typography>
          <IconButton className='' onClick={onClose}><CloseIcon/></IconButton>
        </header>
        <main>
          {children}
        </main>
      </Paper>
      {/*<Box component='section' sx={style} className={'tw-rounded-lg tw-p-4' +` ${className}`}>*/}
      {/*  */}
      {/*</Box>*/}
    </Modal>
  );
};

export default CModal;