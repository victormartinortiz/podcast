/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from '../../../routes';
import slug from '../../utils/slug';
import {
  Title,
  Grid,
  Channel,
  Image,
  PlayCircleOutline,
  Overlay
} from './styles';

const SubChannels = ({ series }) => (
  <>
    <Title>Series</Title>
    <Grid>
      {series.map(serie => (
        <Link
          route='channel'
          params={{ slug: slug(serie.title), id: serie.id }}
          key={serie.id}
        >
          <Channel>
            <Image src={serie.urls.logo_image.original} alt='image' />
            <Overlay>
              <PlayCircleOutline />
            </Overlay>
            <Title>{serie.title}</Title>
          </Channel>
        </Link>
      ))}
    </Grid>
  </>
);

export default SubChannels;
