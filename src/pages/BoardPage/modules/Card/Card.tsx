import {Box, Typography} from '@mui/material';
import React, {FC} from 'react';
import {Card as CardType} from '@/src/shared/graphql/generated/schema'
import {Draggable} from 'react-beautiful-dnd';
import {useRouter} from "next/navigation";

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
          <Box className='tw-pb-2' component='li'
               ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
               onClick={() => {
                 router.push(`${boardId}/card/${card._id}`)
               }}
          >
            <Box className='tw-px-3 tw-pt-2 tw-pb-1 tw-bg-card-bg tw-rounded-lg'>
              {
                card.labels &&
                  <Box>

                  </Box>
              }
              {
                card.name &&
                  <Typography variant='h6' className='tw-text-text-light tw-text-sm'>
                    {
                      card.name
                    }
                  </Typography>
              }
            </Box>
          </Box>
        )
      }
    </Draggable>
  );
};

export default Card;