import React from 'react';
import EventDetailsLoggedIn from './EventDetailsLoggedIn';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventDetailsLoggedIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders without crashing', () => {
  shallow(<EventDetailsLoggedIn match={{ params: { id: number } }} />);
});
