/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from '../../../routes';
import slug from '../../utils/slug';
import {
  Modal,
  Episode,
  Nav,
  NavLink,
  Picture,
  Image,
  PlayerControl,
  PlayerTitle,
  PlayerSubTitle,
  PlayerAudio
} from './styles';

const Player = ({ clip, onClose }) => (
  <>
    <Modal>
      <Episode>
        <Nav>
          {onClose ? (
            <NavLink onClick={onClose}>&lt; Volver </NavLink>
          ) : (
            <Link
              route='channel'
              params={{ slug: slug(clip.channel.title), id: clip.channel.id }}
            >
              <NavLink className='close'>&lt; Volver</NavLink>
            </Link>
          )}
        </Nav>
        <Picture>
          <Image src={clip.urls.image} alt='episodeimage' />
        </Picture>
        <PlayerControl>
          <PlayerTitle>{clip.title}</PlayerTitle>
          <PlayerSubTitle>{clip.channel.title}</PlayerSubTitle>
          <PlayerAudio controls>
            <source src={clip.urls.high_mp3} type='audio/mpeg' />
          </PlayerAudio>
        </PlayerControl>
      </Episode>
    </Modal>
  </>
);

export default Player;
