import React from 'react';
import ProfileDeleted from './ProfileDeleted.js';
import ReactDOM from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders without crashing', () => {
  const wrapper = shallow(<ProfileDeleted />);
});
