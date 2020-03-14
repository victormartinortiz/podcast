import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('render header unchanged', () => {
    const tree = create(<Header />);
    expect(tree.toJSON()).toMatchSnapshot()
  });

  it('renders Header component', () => {
    const header = shallow(<Header />);
    expect(header.length).toEqual(1);
  });

  it('renders Header title', () => {
    const header = mount(<Header />);
    expect(header.find('a').text()).toEqual('');
  });
});
