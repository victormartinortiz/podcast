/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { MdPlayArrow } from 'react-icons/md';

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

export const Channel = styled.a`
  position: relative;
  margin-bottom: 0.5em;
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  padding: 5px;
  font-size: 0.9em;
  font-weight: 600;
  margin: 0;
  text-align: center;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  @media (min-width: 1024px) {
    ${Channel}:hover & {
      opacity: 30%;
    }
  }
`;

export const PlayCircleOutline = styled(MdPlayArrow)`
  position: absolute;
  border-radius: 50px;
  font-size: 50px;
  color: #000;
  background-color: #ffffff;
  bottom: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  @media (min-width: 1024px) {
    ${Channel}:hover & {
      opacity: 1;
    }
  }
`;
