/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from '../../../routes';
import slug from '../../utils/slug';
import Player from '../Player';
import Layout from '../Layout';
import {
  Episode,
  EpisodeTitle,
  EpisodeLink,
  Meta,
  SubTitle,
  Wrapper,
  WrapperOrderList,
  Image,
  PodcastIcon,
  PlayCircleOutline
} from './styles';

const Episodes = ({ podcasts }) => {
  const [podcast, setPodcast] = useState(null);

  const episodeOnClick = (event, episode) => {
    event.preventDefault();
    setPodcast(episode);
  };

  const closeOnClick = event => {
    event.preventDefault();
    setPodcast(null);
  };
  return (
    <>
      <SubTitle>Ultimos Episodios</SubTitle>
      <hr />
      <WrapperOrderList>
        {podcasts.map(episode => (
          <Episode key={episode.id}>
            <Link
              route='podcast'
              params={{
                slug: slug(episode.title),
                id: episode.id,
                slugChannel: slug(episode.channel.title),
                idChannel: episode.channel.id
              }}
            >
              <EpisodeLink onClick={event => episodeOnClick(event, episode)}>
                <Wrapper>
                  <Image src={episode.urls.image} alt='banner' />
                  <PodcastIcon />
                  <PlayCircleOutline />
                  <EpisodeTitle>{episode.title}</EpisodeTitle>
                  <Meta>{Math.ceil(episode.duration / 60)} minutes</Meta>
                </Wrapper>
              </EpisodeLink>
            </Link>
          </Episode>
        ))}
      </WrapperOrderList>
      {podcast && (
        <Layout
          pageHead={`${podcast.title} - ${podcast.description} - ${podcast.channel.title}`}
        >
          <Player clip={podcast} onClose={closeOnClick} />
        </Layout>
      )}
    </>
  );
};

export default Episodes;
