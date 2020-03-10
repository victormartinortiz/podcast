/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

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

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

export const Channel = styled.a`
  display: block;
  margin-bottom: 0.5em;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  border-radius: 3px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
`;
