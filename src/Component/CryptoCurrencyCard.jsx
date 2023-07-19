import React from 'react';
import { Card, CardContent, Typography, Box, IconButton, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SkipNextOutlined } from '@mui/icons-material';

const CustomIconButton = styled(IconButton)({
  position: 'absolute',
  top: 8,
  right: 8,
  borderRadius: '50%',
  background: '#f50057',
  padding: 1,
});

const CustomCard = styled(Card)({
  maxWidth: 600,
  margin: 'auto',
});
const CryptoCurrencyCard = (props) => {
  const { coinName , subTitleone , subTitleTwo , volume , iconLink , symBol} = props;
  return (
    <CustomCard>
      {/* <CardHeader> */}
      {/* <CustomIconButton> */}
        <img style={{
          // position: 'relative',
          // top: 8,
          // right: 8,
          borderRadius: '50%',
          // background: '#f50057',
          // padding: 1,
        }} />
        {/* <SkipNextOutlined/> */}
      {/* </CustomIconButton> */}
      {/* </CardHeader> */}
      <CardContent>
        <Typography variant="h5" gutterBottom>
           {coinName}
        </Typography>
        <Typography                                                                                       pography variant="subtitle1" color="textSecondary">
        {symBol}&nbsp;{subTitleone}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {subTitleTwo}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {volume}
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

export default CryptoCurrencyCard;
