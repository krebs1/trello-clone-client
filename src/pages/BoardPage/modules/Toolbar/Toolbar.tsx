import React, {FC, useEffect, useState} from 'react';
import {Avatar, Box, Button, CssBaseline, IconButton, Paper, TextField, Tooltip, Typography} from "@mui/material";
import {Board, useRenameBoardMutation} from "@/src/shared/graphql/generated/schema";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {AddUserModal} from "@/src/pages/BoardPage/modules/AddUserModal";

interface Props {
  boardData: Board
}

const Toolbar: FC<Props> = ({boardData}) => {
  const [renameBoard, {error}] = useRenameBoardMutation()
  useEffect(() => {
    console.log(error?.message)
  }, [error]);
  const [boardName, setBoardName] = useState<string>(boardData.name)

  const [inviteModalOpened, setInviteModalOpened] = useState<boolean>(false);

  useEffect(() => {
    setBoardName(boardData.name)
  }, [boardData.name])

  return (
    <>
      <CssBaseline/>
      <Paper
        variant='elevation'
        elevation={0}
        square
        className='tw-w-full tw-h-14 tw-p-3 tw-grid tw-grid-cols-[max-content_1fr] tw-gap-2 tw-backdrop-opacity-10 tw-backdrop-invert tw-bg-white/30'
      >
        <Box>
          <Typography variant='h5' className='tw-hidden'>
            {boardName}
          </Typography>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #1976D2"
                }
              },
              "& .MuiOutlinedInput-root": {
                "& > input": {
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: "0.375rem",
                  paddingLeft: "0.750rem"
                },
                "& > fieldset": {
                  border: "none",
                }
              }
            }}
            fullWidth
            placeholder='Название доски'
            variant="outlined"
            type='text'
            value={boardName}
            onChange={(e) => {
              setBoardName(e.target.value)
            }}
            onBlur={async () => {
              await renameBoard({variables: {boardId: boardData._id, boardName: boardName}})
            }}
          />
        </Box>
        <Box
          className='tw-flex tw-items-center tw-justify-end'
        >
          <Box className='tw-flex tw-flex-row tw-items-center'>
            {
              boardData.members?.map((member) => (
                <Tooltip
                  key={member._id}
                  title={member.userInfo.name}
                  placement='bottom'
                >
                  <Avatar
                    alt={`Аватар пользователя: ${member.userInfo.name}`}
                    src={member.userInfo.image}
                    sx={{width: 28, height: 28}}
                    className='tw-mr-1'
                  />
                </Tooltip>
              ))
            }
            <Tooltip
              title='Добавить пользователя'
              placement='bottom'
            >
              <IconButton
                className='tw-h-7'
                aria-label='Добавить пользователя'
                onClick={() => {
                  setInviteModalOpened(true)
                }}
              >
                <PersonAddAlt1Icon/>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Paper>
      <AddUserModal
        open={inviteModalOpened}
        onClose={()=>{setInviteModalOpened(false)}}
        inviteLink={boardData.inviteLink!}
        defaultRole={boardData.defaultRole}
        boardId={boardData._id}
      />
    </>
  );
};

export default Toolbar;