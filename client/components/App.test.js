import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from './App.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe('image event handlers', () => {

  test('check single photo view', () => {

  });

  test('check multi photo view', () => {
    const mockFn = jest.fn();
    const button = shallow(<Button onClick={mockFn} />);
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();


  });
});