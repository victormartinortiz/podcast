/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FaPodcast } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';

export const Episode = styled.div`
  display: block;
  margin: 10px auto;
  text-decoration: none;
  color: #ffffff;
  border-radius: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #2a2a2a;
`;

export const WrapperOrderList = styled.ol`
  padding: 15px;
  margin: 0 auto;
`;

export const EpisodeLink = styled.li`
  padding: 15px;
  list-style: none;
`;

export const Wrapper = styled.div`
  display: grid;
  align-items: baseline;
  grid-template-columns: repeat(auto-fill, 20px);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  grid-column: 1 / 3;
  grid-row: 1;
  border-radius: 5px;
`;

export const EpisodeTitle = styled.h3`
  grid-column: 3 / 12;
  grid-row: 1;
  margin: 0;
  align-self: center;
`;

export const SubTitle = styled.h2`
  padding: 5px;
  font-size: 0.9em;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const Meta = styled.div`
  grid-column: 2 / 6;
  grid-row: 2;
  color: #9b9b9b;
  margin-top: 0.5em;
  font-size: 0.8em;
`;

export const PodcastIcon = styled(FaPodcast)`
  grid-column: 1 / 2;
  grid-row: 2;
  font-size: 25px;
  ${Episode}:hover & {
    display: none;
  }
`;

export const PlayCircleOutline = styled(MdPlayArrow)`
  display: none;
  grid-column: 1 / 2;
  grid-row: 2;
  border-radius: 25px;
  font-size: 25px;
  background-color: #ffffff;
  color: #000;

  ${Episode}:hover & {
    display: block;
  }
`;
