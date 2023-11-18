import React, {FC, useEffect, useState} from 'react';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {LeftContentButton} from "@/src/ui/LeftContentButton";
import {CPopover} from "@/src/components/Popover";
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {Box, Button, Checkbox, Typography} from "@mui/material";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useChangeCardDateMutation} from "@/src/shared/graphql/generated/schema";
import 'dayjs/locale/ru';

interface Props {
  boardId: string,
  listId: string,
  cardId: string,
  startDate: Date | null,
  dueDate: Date | null
}

const AddDate: FC<Props> = (props) => {
  const [changeCardDate] = useChangeCardDateMutation();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <LeftContentButton className='tw-mb-2'
                         variant='contained'
                         startIcon={<AccessTimeIcon/>}
                         onClick={(e) => {
                           handlePopoverOpen(e)
                         }}
      >
        Даты
      </LeftContentButton>
      <CPopover title='Даты'
                handleClose={handlePopoverClose}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}
                              dateFormats={{
                                keyboardDateTime24h: 'DD:MM:YYYY HH:MM'
                              }}
                              adapterLocale='ru'
        >
          <Box className='tw-mb-2'>
            <Typography className='tw-text-text-subtitle tw-text-xs tw-mb-1'>
              Начало
            </Typography>
            <DateTimePicker className='tw-text-text-light tw-border-text-light'
                            format='DD.MM.YYYY hh:mm'
                            value={startDate}
                            onChange={(value) => {
                              setStartDate(value)
                            }}
                            ampm={false}
                            sx={{
                              "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                  border: "1px solid #1976D2"
                                }
                              },
                              "& .MuiOutlinedInput-root": {
                                "& > input": {
                                  fontSize: "14px",
                                  color: "#dadade"
                                },
                                "& > fieldset": {
                                  border: "1px solid #dadade",
                                },
                                "& > div": {
                                  "& .MuiIconButton-root": {
                                    color: "#dadade"
                                  },
                                }
                              }
                            }}
            />
          </Box>
          <Box className='tw-mb-2'>
            <Typography className='tw-text-text-subtitle tw-text-xs tw-mb-1'>
              Конец
            </Typography>
            <Box>
              <DateTimePicker className='tw-text-text-light tw-border-text-light'
                              format='DD.MM.YYYY hh:mm'
                              value={dueDate}
                              onChange={(value) => {
                                setDueDate(value)
                              }}
                              ampm={false}
                              sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                  "& > fieldset": {
                                    border: "1px solid #1976D2"
                                  }
                                },
                                "& .MuiOutlinedInput-root": {
                                  "& > input": {
                                    fontSize: "14px",
                                    color: "#dadade"
                                  },
                                  "& > fieldset": {
                                    border: "1px solid #dadade",
                                  },
                                  "& > div": {
                                    "& .MuiIconButton-root": {
                                      color: "#dadade"
                                    },
                                  }
                                }
                              }}
              />
            </Box>
          </Box>
          <Button onClick={async () => {
            await changeCardDate({
              variables: {
                boardId: props.boardId,
                listId: props.listId,
                cardId: props.cardId,
                startDate: startDate,
                dueDate: dueDate,
              }
            })
          }}
                  fullWidth
                  variant='contained'
          >
            Сохранить
          </Button>
        </LocalizationProvider>
      </CPopover>
    </>
  );
};

export default AddDate;