/* eslint-disable import/named */
import React from 'react';
import SubChannels from '../SubChannels';
import Episodes from '../Episode';
import { Banner, Image } from './styles';

const Channel = ({ channel, audioClips, series }) => {
  return (
    <>
      <Banner>
        <Image
          src={
            channel.urls.banner_image.original ?
              channel.urls.banner_image.original :
              channel.urls.logo_image.original
          }
          alt='banner'
        />
      </Banner>

      {series.length > 0 && <SubChannels series={series} />}

      {audioClips.length > 0 && <Episodes podcasts={audioClips} />}
    </>
  );
};

export default Channel;
