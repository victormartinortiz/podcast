import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Episode from '../../components/Episode';
import AudioClipsMock from '../../__mocks__/AudioClipsMock';

describe('<Episode />', () => {
  it('renderer Episode unchanged', () => {
    const tree = create(<Episode podcasts={AudioClipsMock} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Player component', () => {
    const episode = shallow(<Episode podcasts={AudioClipsMock} />);
    expect(episode.length).toEqual(1);
  });

  it('check episode onClick event', () => {
    const wrapper = mount(
      <Episode podcasts={AudioClipsMock}/>
    );
    wrapper.find('li').simulate('click');
    expect(wrapper.find('Layout')).toHaveLength(1);
  });
});
