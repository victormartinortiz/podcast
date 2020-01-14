import React from 'react';
import Link from 'next/link';
import '../assets/styles/components/Player.scss';

const Player = ({ clip }) => (
  <>
    <div className="modal">
      <div className="clip">
        <nav>
          <Link href={`/channel?id=${clip.channel.id}`}>
            <a className="close">&lt; Volver</a>
          </Link>
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