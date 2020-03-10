/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
`;

export const Episode = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #8756ca;
  color: white;
`;

export const Nav = styled.nav`
  background: none;
`;

export const NavLink = styled.a`
  display: inline-block;
  padding: 15px;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

export const Picture = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1;
  flex-direction: column;
  width: auto;
  padding: 10%;
`;

export const Image = styled.image`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => props.src})
`;

export const PlayerControl = styled.div`
  padding: 30px;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const PlayerTitle = styled.h3`
  margin: 0;
`;

export const PlayerSubTitle = styled.h6`
  margin: 0;
  margin-top: 1em;
`;

export const PlayerAudio = styled.audio`
  margin-top: 2em;
  width: 100%;
`;
