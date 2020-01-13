import React from 'react';
import Link from 'next/link';
import '../assets/styles/components/Channels.scss';

const Channels = ({ getChannels }) => (
    <div className="channels">
      {getChannels.map(channel => (
        <Link href={`/channel?id=${channel.id}`} key={channel.id}>
          <a className="channel">
            <img src={channel.urls.logo_image.original} alt="image" />
            <h2>{channel.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );

export default Channels;
