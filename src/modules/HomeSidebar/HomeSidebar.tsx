import {Button} from '@mui/material';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';

const HomeSidebar = () => {
  return (
    <nav className='tw-flex tw-flex-col tw-mr-3 tw-p-3 tw-items-start'>
      <Button fullWidth className='tw-mb-2' variant='contained' startIcon={<ViewColumnIcon/>}>Доски</Button>
      <Button fullWidth variant='contained' startIcon={<NotificationsIcon/>}>Активности</Button>
    </nav>
  );
};

export default HomeSidebar;