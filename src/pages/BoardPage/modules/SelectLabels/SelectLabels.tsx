'use client'

import React, {FC, useState} from 'react';
import {CPopover} from "@/src/components/Popover";
import {Box, Button, PopoverProps} from "@mui/material";
import {CreateLabel} from "@/src/pages/BoardPage/modules/CreateLabel";
import {boolean} from "yup";

interface Props {
  popOverProps: PopoverProps,
  handleClose: () => void,
  boardId: string,
  cardId: string
}

const SelectLabels: FC<Props> = (props) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);

  return (
    <CPopover title={isCreating ? 'Создание метки' : 'Метки'}
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
          <CreateLabel boardId={props.boardId} cardId={props.cardId} closeCreating={()=>{setIsCreating(false)}}/>
      }
      {
        !isCreating &&
          <Box>
              <Box className='tw-mb-3'>
                  labels
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
  );
};

export default SelectLabels;