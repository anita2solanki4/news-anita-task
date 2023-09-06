import { useRef, useState } from 'react';
import { AccountCircle, ArrowDropDown } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import './Home.module.css';
import styles from './Navbar.module.css';

interface NavbarProps {
  companyLogo: string;
}

function Navbar(props: NavbarProps) {
  const { companyLogo } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const logoutRef = useRef(null);
  const handleIconClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Box className={styles.cardImage} component='img' src={companyLogo} />
        </div>
        <div className={styles.ctn2}>
          <Typography color='text.secondary' component='div'>
            News
          </Typography>
          <div className={styles.accountname}>
            <AccountCircle />
            <Typography
              variant='h6'
              className={styles.authorWrapper}
              component='div'
            >
              Jhon Doe
            </Typography>
            <div onClick={handleIconClick}>
              <ArrowDropDown />
            </div>
            <div
              className={isVisible ? styles.logout : styles.hide}
              ref={logoutRef}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fullLine} />
    </>
  );
}

export default Navbar;
