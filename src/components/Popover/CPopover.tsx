import React, {FC} from 'react';
import {Box, IconButton, Popover, PopoverProps, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Props extends PopoverProps {
  isGoBack?: boolean,
  onGoBack?: () => void,
  title: string,
  handleClose: () => void,
}

const CPopover: FC<Props> = ({...props}) => {
  return (
    <Popover open={props.open}
             anchorEl={props.anchorEl}
             anchorOrigin={props.anchorOrigin}
             transformOrigin={props.transformOrigin}
             onClose={props.onClose}
             component='section'
             sx={{
               '& .MuiPopover-paper': {
                 borderRadius: "0.5rem",
                 padding: "12px"
               }
             }}
    >
      <header className='tw-grid tw-gap-3 tw-grid-cols-[min-content_1fr_min-content] tw-items-center tw-mb-2'>
        {
          props.isGoBack &&
            <IconButton className='tw-text-base' onClick={props.onGoBack}>
                <ArrowBackIosIcon fontSize='small'/>
            </IconButton>
        }
        {
          !props.isGoBack &&
            <Box className='tw-w-9 tw-h-9'/>
        }
        <Typography variant='h6'
                    className='tw-text-base tw-flex tw-justify-center'
        >
          {
            props.title
          }
        </Typography>
        <IconButton
          className='tw-text-base'
          onClick={props.handleClose}
        >
          <CloseIcon fontSize='small'/>
        </IconButton>
      </header>
      {
        props.children
      }
    </Popover>
  );
};

export default CPopover;