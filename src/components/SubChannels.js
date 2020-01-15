import React from 'react';
import Link from 'next/link';
import slug from '../utils/slug';
import '../assets/styles/components/Channel.scss';


const SubChannels = ({ series }) => (
  <>
    <h2 className="subtitle">Series</h2>
    <div className="channels">
      {series.map(serie => (
        <Link
          href={`/channel?id=${serie.id}`}
          as={`/${slug(serie.title)}`}
          key={serie.id}
        >
          <a className="channel">
            <img src={serie.urls.logo_image.original} alt="image" />
            <h2 className="subtitle">{serie.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  </>
);

export default SubChannels;
