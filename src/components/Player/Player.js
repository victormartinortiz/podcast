import React from 'react';
import { Link } from '../../routes';
import slug from '../utils/slug';
import '../assets/styles/components/Player.scss';

const Player = ({ clip, onClose }) => (
  <>
    <div className="modal">
      <div className="clip">
        <nav>
        { onClose ?
          <a onClick={onClose}>&lt; Volver</a>
          :
          <Link
            route="channel"
            params={{ slug: slug(clip.channel.title), id: clip.channel.id }}
          >
            <a className="close">&lt; Volver</a>
          </Link>
        }
        </nav>

        <picture>
          <div
            style={{
              backgroundImage: `url(${clip.urls.image ||
                clip.channel.urls.logo_image.original})`
            }}
          />
        </picture>

        <div className="player">
          <h3>{clip.title}</h3>
          <h6>{clip.channel.title}</h6>
          <audio controls>
            <source src={clip.urls.high_mp3} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  </>
);

export default Player;
