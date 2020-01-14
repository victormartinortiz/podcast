import React from 'react';
import Link from 'next/link';
import '../assets/styles/components/Channel.scss';

const Channel = ({ channel, audioClips, series }) => (
  <>
    <h1>{channel.title}</h1>

    {series.length > 0 && (
      <div>
        <h2>Series</h2>
        <div className="channels">
          {series.map(serie => (
            <Link href={`/channel?id=${serie.id}`}>
              <a className="channel">
                <img src={serie.urls.logo_image.original} alt="image" />
                <h2>{serie.title}</h2>
              </a>
            </Link>
          ))}
        </div>
      </div>
    )}

    <h2>Ultimos Podcasts</h2>
    {audioClips.map(clip => (
      <div className="podcast" key={clip.id}>
        <Link href={`/podcast?id=${clip.id}`}>
          <a>{clip.title}</a>
        </Link>
      </div>
    ))}
  </>
);

export default Channel;
