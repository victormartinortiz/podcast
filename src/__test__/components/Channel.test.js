import React from 'react';
import { create } from 'react-test-renderer';
import Channel from '../../components/Channel';
import ChannelMock from '../../__mocks__/ChannelMock';
import AudioClipsMock from '../../__mocks__/AudioClipsMock';

describe('<Channel />', () => {
  it('renderer Channel unchanged', () => {
    const tree = create(<Channel channel={ChannelMock[0]} series={ChannelMock} audioClips={AudioClipsMock}/>);
    expect(tree.toJSON()).toMatchSnapshot();
  })
});
