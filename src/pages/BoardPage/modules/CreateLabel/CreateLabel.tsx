'use client'

import React, {FC, useState} from 'react';
import {Color, useCreateLabelMutation, useFindAllColorsQuery} from "@/src/shared/graphql/generated/schema";
import {Box, Button, CircularProgress, PopoverProps, TextField, Tooltip, Typography} from "@mui/material";
import {CPopover} from "@/src/components/Popover";

interface Props{
  boardId: string,
  cardId: string,
  closeCreating: ()=>void,
}

const CreateLabel:FC<Props> = ({boardId, cardId, closeCreating}) => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [labelName, setLabelName] = useState<string>('');

  const {data, loading} = useFindAllColorsQuery();
  const [createLabel] = useCreateLabelMutation()

  return (
    <Box>
      <Box className='tw-p-8 tw-bg-card-bg tw-mb-3'>
        <Tooltip
          title={`Цвет: ${selectedColor ? selectedColor.name : 'нет'}, название: ${labelName ? labelName : 'нет'}`}
          placement='bottom'>
          <Box style={{backgroundColor: selectedColor ? selectedColor.color : 'transparent'}}
               className='tw-text-sm tw-text-text-light tw-h-8 tw-min-w-full tw-px-3 tw-rounded tw-flex tw-items-center'
          >
            <Box component='span'>
              {
                labelName
              }
            </Box>
          </Box>
        </Tooltip>
      </Box>
      <Box>
        <Box className='tw-mb-2'>
          <Typography className='tw-text-xs tw-text-text-subtitle tw-mb-1'>
            Название
          </Typography>
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
              }
            }
          }}
                     inputProps={{className: 'tw-text-text-light'}}
                     fullWidth
                     placeholder='Название метки'
                     variant="outlined"
                     type='text'
                     value={labelName}
                     onChange={(e) => {
                       setLabelName(e.target.value)
                     }}
          />
        </Box>
        <Box className='tw-mb-2'>
          <Typography className='tw-text-xs tw-text-text-subtitle tw-mb-1'>
            Цвета
          </Typography>
          {
            loading &&
              <Box className='tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center'>
                  <CircularProgress/>
              </Box>
          }
          {
            data &&
              <Box>
                  <Box className='tw-grid tw-grid-cols-5 tw-gap-1 tw-mb-2'>
                    {
                      data.findAllColors.map((color) => (
                        <Tooltip key={color._id} title={color.name} placement="bottom">
                          <Box className={'tw-w-12 tw-h-7 tw-rounded tw-cursor-pointer'}
                               style={{
                                 backgroundColor: color.color,
                                 border: selectedColor?._id === color._id ? '1px solid #1976d2' : 'none'
                               }}
                               onClick={() => {
                                 setSelectedColor(color)
                               }}
                          >

                          </Box>
                        </Tooltip>
                      ))
                    }
                  </Box>
                  <Button variant='contained'
                          onClick={()=>{
                            setSelectedColor(null)
                          }}
                          fullWidth
                          className='tw-bg-card-bg tw-text-xs tw-text-text-subtitle'
                  >
                      Без цвета
                  </Button>
              </Box>
          }
        </Box>
        <Button variant='contained'
                onClick={async ()=>{
                  await createLabel({
                    variables: {
                      boardId: boardId,
                      colorId: selectedColor?._id,
                      text: labelName
                    }
                  })
                  closeCreating();
                }}
                disabled={!(selectedColor)}
                fullWidth
        >
          Создать
        </Button>
      </Box>
    </Box>
  );
};

export default CreateLabel;