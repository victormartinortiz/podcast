import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Player from '../../components/Player';
import AudioClipsMock from '../../__mocks__/AudioClipsMock';

describe('<Player />', () => {
  it('renders Player unchanged', () => {
    const tree = create(<Player clip={AudioClipsMock[0]} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Player component', () => {
    const player = shallow(<Player clip={AudioClipsMock[0]} />);
    expect(player.length).toEqual(1);
  });

  it('check onClose modal', () => {
    const onClose = jest.fn()
    const wrapper = mount(<Player clip={AudioClipsMock[0]} onClose={onClose}/>)
    wrapper.find('a').simulate('click')
    expect(wrapper.find('.close')).toHaveLength(0)
  })
});
