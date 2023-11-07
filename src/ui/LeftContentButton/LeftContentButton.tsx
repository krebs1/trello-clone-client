import { styled } from '@mui/material/styles';
import React from 'react';
import Button, {ButtonProps} from "@mui/material/Button";

const LeftContentButton = styled(Button)<ButtonProps>(({ theme }) => ({
  justifyContent: 'start',
  textTransform: 'none',
}));

export default LeftContentButton