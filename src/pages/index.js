import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Channels from '../components/Channels';

const Home = ({ channels }) => (
  <Layout pageHeader='Podcast' pageHead='Podcast'>
    <Channels getChannels={channels}/>
  </Layout>
);

Home.getInitialProps = async () => {
    const req = await fetch('https://api.audioboom.com/channels/recommended');
    const { body: channels } = await req.json();
    return { channels }
}

export default Home;
