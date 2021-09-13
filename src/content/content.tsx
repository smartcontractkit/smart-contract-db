import React from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { CategoryList } from '../shared/category-list';
import { communities } from '@/data/resources/communities';
import { HeroBanner } from '../hero-banner';

export const Content: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <Typography variant="h5">
        <Box textAlign="left" paddingTop="4rem">
          Communities
        </Box>
      </Typography>
      <CategoryList data={communities} />
    </div>
  );
};
