import {Box, Tooltip, Typography} from '@mui/material';
import React, {FC} from 'react';
import {Card as CardType} from '@/src/shared/graphql/generated/schema'
import {Draggable} from 'react-beautiful-dnd';
import {useRouter} from "next/navigation";
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface Props {
  boardId: string,
  listId: string,
  card: CardType,
  index: number,
}

const Card: FC<Props> = ({boardId, listId, card, index}) => {
  const router = useRouter()

  return (
    <Draggable draggableId={`card:${card._id}`} index={index}>
      {
        provided => (
          <Box className='tw-max-w-full tw-pb-2' component='li'
               ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
               onClick={() => {
                 router.push(`${boardId}/card/${card._id}`)
               }}
          >
            <Box className='tw-max-w-full tw-px-3 tw-pt-2 tw-pb-1 tw-bg-card-bg tw-rounded-lg'>
              {
                card.labels &&
                  <Box>

                  </Box>
              }
              {
                card.name &&
                  <Typography variant='h6' className='tw-truncate tw-max-w-full tw-text-text-light tw-text-sm tw-text-ellipsis'>
                    {
                      card.name
                    }
                  </Typography>
              }
              <Box className='tw-max-w-full tw-text-text-light tw-mt-3'>
                {
                  card.description &&
                  <Tooltip title='Есть описание' placement='bottom'>
                      <DescriptionIcon fontSize='small'/>
                  </Tooltip>
                }
                {
                  (card.dueDate || card.startDate) &&
                    <Tooltip title='Есть ограничение по времени' placement='bottom'>
                        <Box>
                            <AccessTimeIcon fontSize='small'/>
                            <Typography>
                              {
                                card.startDate &&
                                card.startDate + ' - '
                              }
                              {
                                card.dueDate &&
                                card.dueDate
                              }
                            </Typography>
                        </Box>
                    </Tooltip>
                }
              </Box>
            </Box>
          </Box>
        )
      }
    </Draggable>
  );
};

export default Card;