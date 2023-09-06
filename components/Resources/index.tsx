import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Search from '../Search/Search';
import Card from '../Card/Card';

import styles from './Resources.module.css';

interface FooterProps {
  setSearch: (value: string) => void;
  search: string;
  newsData: any;
  totalNews: number;
  searchLabel?: string;
}
const Footer = (props: FooterProps) => {
  const { search, setSearch, newsData, totalNews, searchLabel } = props;
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3} className={styles.mainWrapper}>
        <Grid item xs={4} sm={4} md={3} position='sticky'>
          <Search
            searchLabel={searchLabel}
            setSearch={setSearch}
            search={search}
          />
        </Grid>
        <Grid item xs={8} sm={8} md={9} spacing={3}>
          <Typography className={styles.totalSearch} component='div'>
            {totalNews} Resources Found
          </Typography>
          <Box className={styles.cardWrapper}>
            {newsData?.map((news: any) => (
              <Card {...news} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
