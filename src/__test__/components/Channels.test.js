import React from 'react';
import { create } from 'react-test-renderer';
import Channels from '../../components/Channels';
import ChannelMock from '../../__mocks__/ChannelMock';

describe('<Channels />', () => {
  it('renders Channels unchanged', () => {
    const tree = create(
      <Channels getChannels={ChannelMock} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  })
});
