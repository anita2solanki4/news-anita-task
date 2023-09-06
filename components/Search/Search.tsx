import * as React from 'react';
import { IconButton, Typography, Box, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css';

interface SearchProps {
  setSearch: (value: string) => void;
  search: string;
  searchLabel?: string;
}
const Search = (props: SearchProps) => {
  const { setSearch, search, searchLabel } = props;
  return (
    <Box className={styles.searchWrapper}>
      <Typography className={styles.searchTitle} component='div'>
        {searchLabel}
      </Typography>

      <OutlinedInput
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
        className={styles.inputWrapper}
        color='info'
        size='small'
        placeholder='Search'
        endAdornment={
          <IconButton>
            <SearchIcon />
          </IconButton>
        }
      />
    </Box>
  );
};

export default Search;
