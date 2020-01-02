import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import App from 'src/App';

configure({ adapter: new Adapter() });

describe('App entry', () => {
  it('test for Entry', () => {
    const wrapper = render(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
