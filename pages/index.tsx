import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import News from '../components/News';
import Resources from '../components/Resources';

import ContentfulServiceClient from '../lib/contentfulService';
import AlgoliaServiceClient from '../lib/algoliaService';

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [companyLogo, setCompanyLogo] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [searchLabel, setSearchLabel] = useState<string>('');
  const [news, setNews] = useState<any>();
  const [totalNews, setTotalNews] = useState<any>([]);

  const index = AlgoliaServiceClient.initIndex('news');

  /**
   * Get the contentful service data
   */
  const getConfigData = async () => {
    ContentfulServiceClient.getEntries()
      .then((entry: any) => {
        setCompanyLogo(entry.items[0].fields.logo.fields.file.url);
        setTitle(entry.items[0].fields.title);
        setSearchLabel(entry.items[0].fields.searchLabel);
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   * Get the news data from algolia using client
   */
  const searchQuery = async () => {
    const { hits, nbHits } = await index.search(searchText);
    setNews(hits);
    setTotalNews(nbHits);
  };

  useEffect(() => {
    // Filter data data based on search
    searchQuery();
  }, [searchText]);

  useEffect(() => {
    getConfigData();
  }, []);

  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar companyLogo={companyLogo} />
        <News title={title} />
        <Resources
          searchLabel={searchLabel}
          setSearch={setSearchText}
          search={searchText}
          newsData={news}
          totalNews={totalNews}
        />
      </main>
    </div>
  );
};

export default Home;
