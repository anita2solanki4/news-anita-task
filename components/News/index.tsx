import React from 'react';

import Card from '../NewsCard';

import styles from './News.module.css';

interface NewsProps {
  title: string;
}

function News(props: NewsProps) {
  const { title } = props;
  return (
    <>
      <div className={styles.MainSection}>
        <div className={styles.SectionTitle}>{title}</div>
        <div className={styles.CardContainer}>
          <Card
            tag='CoronaVirus News & info'
            title='How to find tour sweet spot for self-care'
            date='Dec 01,2021'
            author='CNN'
          />
          <Card
            tag='CoronaVirus News & info'
            title='How to find tour sweet spot for self-care'
            date='Dec 01,2021'
            author='Psychology Today'
          />
          <Card
            tag='CoronaVirus News & info'
            title='How to find tour sweet spot for self-care'
            date='Dec 01,2021'
            author='CNN'
          />
        </div>
      </div>
      <div className={styles.fullLine} />
    </>
  );
}

export default React.memo(News);
