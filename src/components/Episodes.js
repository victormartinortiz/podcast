import React, { useState } from 'react';
import { Link } from '../../routes';
import slug from '../utils/slug';
import Player from './Player';
import Layout from './Layout';
import '../assets/styles/components/Channel.scss';

const Episodes = ({ podcasts }) => {
  const [podcast, setPodcast] = useState(null);
  
  const episodeOnClick = (event, episode) => {
    event.preventDefault();
    setPodcast(episode);
    console.log(episode);
  };

  const closeOnClick = (event) => {
    event.preventDefault();
    setPodcast(null);
  }
  return (
    <>
      <h2 className="subtitle">Ultimos Episodios</h2>
      {podcasts.map(episode => (
        <div className="podcast" key={episode.id}>
          <Link
            route="podcast"
            params={{
              slug: slug(episode.title),
              id: episode.id,
              slugChannel: slug(episode.channel.title),
              idChannel: episode.channel.id
            }}
          >
            <a onClick={event => episodeOnClick(event, episode)}>
              <img src="/static/play-button2.svg" alt="play icon"></img>
              {episode.title}
            </a>
          </Link>
        </div>
      ))}
      {podcast && (
        <Layout pageHead={`${podcast.title} - ${podcast.description} - ${podcast.channel.title}`} pageHeader="Podcast">
          <Player clip={podcast} onClose={closeOnClick} />
        </Layout>
      )}
    </>
  );
}

export default Episodes;
