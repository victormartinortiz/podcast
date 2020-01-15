import React from 'react';
import { Link } from '../../routes';
import slug from '../utils/slug';
import '../assets/styles/components/Channel.scss';

const Episodes = ({ podcasts }) => (
  <>
    <h2 className="subtitle">Ultimos Episodios</h2>
    {podcasts.map(episode => (
      <div className="podcast" key={episode.id}>
        <Link
          route="podcast"
          params={{
            slug: slug(episode.channel.title),
            id: episode.id,
            slugChannel: slug(episode.channel.title),
            idChannel: episode.channel.id
          }}
        >
          <a>
            <img src="/static/play-button2.svg" alt="play icon"></img>
            {episode.title}
          </a>
        </Link>
      </div>
    ))}
  </>
);

export default Episodes;
