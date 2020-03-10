/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from '../../../routes';
import slug from '../../utils/slug';
import { Grid, Channel, Image, SubTitle } from './styles';

const Channels = ({ getChannels }) => (
  <Grid>
    {getChannels.map(channel => (
      <Link
        route='channel'
        params={{ slug: slug(channel.title), id: channel.id }}
        key={channel.id}
      >
        <Channel>
          <Image src={channel.urls.logo_image.original} alt='image' />
          <SubTitle>{channel.title}</SubTitle>
        </Channel>
      </Link>
    ))}
  </Grid>
);

export default Channels;
