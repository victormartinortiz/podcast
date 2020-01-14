import React from 'react';
import fetch from 'isomorphic-unfetch';
import Channel from '../components/Channel';
import Layout from '../components/Layout';

const channel = ({ channel, audioClips, series }) => (
  <Layout pageHead={channel.title} pageHeader='Podcast'>
    <Channel channel={channel} audioClips={audioClips} series={series}/>
  </Layout>
);

  channel.getInitialProps = async ({ query }) => {
    const idChannel = query.id;

    const [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    ]);

    const dataChannel = await reqChannel.json();
    const channel = dataChannel.body.channel;

    const dataAudios = await reqAudios.json();
    const audioClips = dataAudios.body.audio_clips;

    const dataSeries = await reqSeries.json();
    const series = dataSeries.body.channels;

    return { channel, audioClips, series }
  }

export default channel;
