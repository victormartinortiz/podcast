import React from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Channel from '../components/Channel';
import Layout from '../components/Layout';

const channel = ({ channel, audioClips, series, statusCode }) => {
  if (statusCode !== 200) {return <Error statusCode={statusCode} />};
  return (
    <Layout pageHead={channel.title} pageHeader='Podcast'>
      <Channel channel={channel} audioClips={audioClips} series={series} />
    </Layout>
  );
};

channel.getInitialProps = async ({ query, res }) => {
  const idChannel = query.id;
  try {
    const [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    ]);
    if (reqChannel.status >= 400) {
      res.statusCode = reqChannel.status;
      return {
        channel: null,
        audioClips: null,
        series: null,
        statusCode: reqChannel.status
      };
    }

    const dataChannel = await reqChannel.json();
    const { channel } = dataChannel.body;

    const dataAudios = await reqAudios.json();
    const audioClips = dataAudios.body.audio_clips;

    const dataSeries = await reqSeries.json();
    const series = dataSeries.body.channels;

    return { channel, audioClips, series, statusCode: 200 }
  } catch (error) {
    return {
      channel: null,
      audioClips: null,
      series: null,
      statusCode: 503,
    }
  }
};

export default channel;
