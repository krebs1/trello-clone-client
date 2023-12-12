import React, {FC} from 'react';
import {CModal} from "@/src/components/Modal";
import {Box, Button, IconButton, MenuItem, Select, Typography} from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import {
  useChangeDefaultRoleMutation,
  useCreateInviteLinkMutation,
  useDeleteInviteLinkMutation,
  useFindAllRolesQuery
} from "@/src/shared/graphql/generated/schema";
import {LeftContentButton} from "@/src/ui/LeftContentButton";
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  open: boolean,
  onClose: () => void,
  inviteLink: string | null,
  defaultRole: string,
  boardId: string
}

const AddUserModal: FC<Props> = ({open, onClose, inviteLink, defaultRole, boardId}) => {
  const {data: {findAllRoles} = {}, loading} = useFindAllRolesQuery();

  const [createInviteLink] = useCreateInviteLinkMutation();
  const [deleteInviteLink] = useDeleteInviteLinkMutation();
  const [changeDefaultRole] = useChangeDefaultRoleMutation();

  return (
    <CModal open={open} onClose={onClose} header='Поделиться доской'>
      <Box
        className='tw-flex tw-flex-column'
      >
        {
          !loading &&
            <Box className='tw-flex tw-items-center tw-justify-between'>
                <Box className='tw-flex tw-items-center'>
                    <LinkIcon className='tw-mr-2'/>
                    <Box className='tw-flex tw-flex-col tw-justify-center'>
                      {
                        inviteLink &&
                          <>
                              <Typography className='tw-text-sm tw-whitespace-nowrap'>
                                  Все, у кого есть ссылка на доску
                              </Typography>
                              <LeftContentButton
                                  className='tw-text-xs tw-p-0'
                                  onClick={async () => {
                                    await navigator.clipboard.writeText(inviteLink)
                                  }}
                              >
                                  Копировать ссылку
                              </LeftContentButton>
                          </>
                      }
                      {
                        !inviteLink &&
                          <>
                              <Typography className='tw-text-sm tw-whitespace-nowrap'>
                                  Создать ссылку на эту доску
                              </Typography>
                              <LeftContentButton
                                  className='tw-text-xs tw-p-0'
                                  onClick={async () => {
                                    await createInviteLink({variables: {boardId: boardId}})
                                  }}
                              >
                                  Создать ссылку
                              </LeftContentButton>
                          </>
                      }
                    </Box>
                  {
                    inviteLink &&
                      <IconButton
                          className='tw-mr-4 tw-ml-2'
                          onClick={async () => {
                            await deleteInviteLink({variables: {boardId: boardId}})
                          }}
                      >
                          <DeleteIcon/>
                      </IconButton>
                  }
                </Box>
              {
                (inviteLink && !loading) &&
                  <Select
                      value={defaultRole}
                      onChange={async (event) => {
                        await changeDefaultRole({variables: {boardId: boardId, roleId: event.target.value}})
                      }}
                      fullWidth
                  >
                    {
                      findAllRoles!
                        .filter((role) => role.name !== 'Администратор')
                        .map((role) => (
                          <MenuItem
                            key={role._id}
                            value={role._id}
                          >
                            {
                              role.canBeName
                            }
                          </MenuItem>
                        ))
                    }
                  </Select>
              }
            </Box>
        }
      </Box>
    </CModal>
  );
};

export default AddUserModal;