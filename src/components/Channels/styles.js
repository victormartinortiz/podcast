/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

export const Channel = styled.a`
  display: block;
  margin-bottom: 0.5em;
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;

export const Image = styled.img`
  border-radius: 3px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
`;

export const SubTitle = styled.h2`
  margin: 0;
  padding: 5px;
  text-align: center;
  font-size: 0.9em;
  font-weight: 600;
  color: #ffffff;
`;
