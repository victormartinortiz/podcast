import React from 'react';
import SubChannels from './SubChannels';
import Episodes from './Episodes';
import '../assets/styles/components/Channel.scss';

const Channel = ({ channel, audioClips, series }) => (
  <>
    <div
      className="banner"
      style={{
        backgroundImage: `url(${channel.urls.banner_image.original})`
      }}
    />

    {series.length > 0 && <SubChannels series={series} />}

    {audioClips.length > 0 && <Episodes podcasts={audioClips} />}
  </>
);

export default Channel;
