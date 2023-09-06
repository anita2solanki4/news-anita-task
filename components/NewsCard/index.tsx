import Image from 'next/image';
import styles from './card.module.css';
import { Box, Typography } from '@mui/material';

interface CardProps {
  tag: string;
  title: string;
  date: string;
  author: string;
}

function Card(props: CardProps) {
  const { tag, title, author, date } = props;
  return (
    <Box className={styles.cardMainContainer}>
      <Image
        src='https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'
        width={300}
        height={150}
        alt='Picture of the author'
        layout='responsive'
      />
      <Typography className={styles.tag} component='div'>
        {tag}
      </Typography>
      <Typography className={styles.title} variant='h6' component='div'>
        {title}
      </Typography>
      <Box className={styles.dateContainer}>
        <Typography
          className={styles.date}
          variant='body2'
          color='text.secondary'
        >
          {date}
        </Typography>
        <Box className={styles.horizontalLine} />
        <Typography className={styles.author} component='div'>
          {author}
        </Typography>
      </Box>
    </Box>
  );
}

export default Card;
