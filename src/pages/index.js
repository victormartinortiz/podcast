import React from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import Channels from '../components/Channels';

const Home = ({ channels }) => (
  <Layout pageHeader='PODCAST' pageHead='Podcast'>
    <Channels getChannels={channels}/>
  </Layout>
);

Home.getInitialProps = async ({ res }) => {
  try {
    const req = await fetch('https://api.audioboom.com/channels/recommended');
    const { body: channels } = await req.json();
    return { channels }

  } catch (error) {
    res.statusCode = 503;
    channels = null;
    return <Error/>
  }
}

export default Home;
