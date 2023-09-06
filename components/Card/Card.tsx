import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import styles from './Card.module.css';

type Topic = {
  id: string;
  title: string;
};

type Organization = {
  fields: {
    name: string;
    reviewStatus: string;
    slug: string;
  };
};

interface CardProps {
  topics: Topic[];
  name: string;
  description: string;
  organization: Organization[];
  publicationDate: Date;
  imageUrl: string;
}

dayjs.locale('en');
const Card = (props: CardProps) => {
  const { topics, name, description, organization, publicationDate, imageUrl } =
    props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box className={styles.cardImage} component='img' src={imageUrl} />
      </Grid>
      <Grid item xs={8} className={styles.cardDetailsWrapper}>
        <Typography className={styles.cardType} component='div'>
          {topics[0]?.title}
        </Typography>
        <Typography className={styles.cardTitle} variant='h6' component='div'>
          {name}
        </Typography>
        <Typography
          className={styles.cardDescription}
          variant='body2'
          color='text.secondary'
        >
          {description}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant='body2' color='text.secondary'>
              {dayjs(publicationDate).format('MMM D, YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='body2' className={styles.cardType}>
              {organization[0]?.fields?.name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Card);
