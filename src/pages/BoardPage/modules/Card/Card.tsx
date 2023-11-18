import {Box, Tooltip, Typography} from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import {Board, Card as CardType} from '@/src/shared/graphql/generated/schema'
import {Draggable} from 'react-beautiful-dnd';
import {useRouter} from "next/navigation";
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import {useReactiveVar} from "@apollo/client";
import {currentBoardVar} from "@/src/shared/lib/apollo-wrapper";

interface Props {
  boardId: string,
  listId: string,
  card: CardType,
  index: number,
}

const Card: FC<Props> = ({boardId, listId, card, index}) => {
  const board = useReactiveVar(currentBoardVar);
  const [labels, setLabels] = useState<Board['labels'] | null>(null);

  useEffect(() => {
    if (board?.labels) {
      setLabels(() => board.labels?.filter((elem) => card.labels?.includes(elem._id)));
    }
  }, [board?.labels, card.labels]);

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
                (labels) &&
                  <Box className='tw-grid tw-grid-cols-5 tw-gap-1 tw-w-full'>
                    {
                      labels.map((elem) => (
                        <Tooltip
                          key={`${card._id}_${elem}`}
                          title={`Цвет: ${elem.colorInfo?.name ? elem.colorInfo?.name : 'нет'}, название: ${elem.text ? elem.text : 'нет'}`}
                          placement='bottom'
                        >
                          <Box>
                            <Box component='span'
                                 className='tw-h-2 tw-w-full tw-rounded tw-inline-block'
                                 style={{backgroundColor: elem.colorInfo?.color ? elem.colorInfo?.color : '#22272B'}}
                            >

                            </Box>
                          </Box>
                        </Tooltip>
                      ))
                    }
                  </Box>
              }
              {
                card.name &&
                  <Typography variant='h6'
                              className='tw-truncate tw-max-w-full tw-text-text-light tw-text-sm tw-text-ellipsis'>
                    {
                      card.name
                    }
                  </Typography>
              }
              <Box className='tw-max-w-full tw-text-text-subtitle tw-mt-3 tw-flex'>
                {
                  card.description &&
                    <Tooltip title='Есть описание' placement='bottom'>
                        <DescriptionIcon className='tw-mr-2' fontSize='small'/>
                    </Tooltip>
                }
                {
                  (card.dueDate || card.startDate) &&
                    <Tooltip title='Есть ограничение по времени' placement='bottom'>
                        <Box className='tw-flex tw-items-center'>
                            <AccessTimeIcon className='tw-mr-1' fontSize='small'/>
                            <Typography className='tw-text-xs'>
                              {
                                (card.startDate && !card.dueDate) &&
                                'Дата начала: ' + dayjs(card.startDate).locale('ru').format('D MMM YYYY')
                              }
                              {
                                (!card.startDate && card.dueDate) &&
                                dayjs(card.dueDate).locale('ru').format('D MMM YYYY')
                              }
                              {
                                (card.startDate && card.dueDate) &&
                                dayjs(card.startDate).locale('ru').format('D MMM YYYY') + ' - ' + dayjs(card.dueDate).locale('ru').format('D MMM YYYY')
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