import React from 'react';
import 'isomorphic-unfetch';
import Player from '../components/Player';
import Layout from '../components/Layout';

const Podcast = ({ clip }) => (
  <Layout pageHead={clip.title} pageHeader='Podcast'>
    <Player clip={clip}/>
  </Layout>
);

Podcast.getInitialProps = async ({ query }) => {
  let id = query.id;
  let fetchClip = await fetch(
    `https://api.audioboom.com/audio_clips/${id}.mp3`
  );
  let clip = (await fetchClip.json()).body.audio_clip;
  return { clip };
}

export default Podcast;
