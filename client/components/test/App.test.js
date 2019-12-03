import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.jsx'
import Image from '../Image.jsx';

configure({ adapter: new Adapter() });

describe('App component', () => {

  it('check for initial view to be main', () => {
    const wrapper = shallow(<App />);
    const viewState = wrapper.state().view;
    expect(viewState).toEqual('main');
  });

  it('check for styled components Container, Carousel, and Button to be rendered', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('container')).toHaveLength(1);
    expect(wrapper.find('carousel')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('check for view components to not be initially rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('single')).toHaveLength(0);
    expect(wrapper.find('multi')).toHaveLength(0);
  });

  it('check for styled Button click handler to render multi view', () => {
    const wrapper = shallow(<App />);
    wrapper.find('button').simulate('click');
    const viewState = wrapper.state().view;
    expect(viewState).toEqual('multi');
  });

  it('check number of photos for button is correct', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ imageUrls: [0,1,2,3,4,5,6,7,8,9]})
    expect(wrapper.find('button').text()).toEqual('10 photos +');
  });

  it('check number of images rendered in carousel', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ imageUrls: [0,1,2,3,4,5,6,7,8,9]})
    expect(wrapper.find(Image)).toHaveLength(10);
  });
});