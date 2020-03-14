import React from 'react';
import { create } from 'react-test-renderer';
import SubChannels from '../../components/SubChannels';
import ChannelMock from '../../__mocks__/ChannelMock';

describe('<SubChannels />', () => {
  it('renderer SubChannels unchanged', () => {
    const tree = create(<SubChannels series={ChannelMock} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
