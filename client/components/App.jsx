import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from './Image.jsx';
import Single from './Single.jsx';
import Multi from './Multi.jsx';

const Carousel = styled.div`
  width: 100%;
  height: 200px;
  color: green;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'main',
      id: '',
      imageUrls: [],
      single: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  componentDidMount() {
    axios.get('/api/restaurants/1')
      .then(res => {
        const { id, imageUrls } = res.data[0];
        this.setState({
          id,
          imageUrls,
        });
      });
  }

  handleClick(idx) {
    this.setState({
      view: 'single',
      single: idx,
    })
  }

  handleView(view) {
    this.setState({
      view,
    })
  }

  renderView() {
    const { imageUrls, single, view }= this.state;
    if (view === 'main') {
      return (
        <Carousel>
          {imageUrls.map((url, idx) => <Image src={url} idx={idx} handleClick={this.handleClick} key={idx} />)}
          <button onClick={() => this.handleView('multi')}>Multi</button>
        </Carousel>
      );
    } else if (view === 'single') {
      return (
        <Single url={imageUrls[single]} idx={single} total={imageUrls.length} handleClick={this.handleClick} handleView={this.handleView} />
      );
    } else if (view === 'multi') {
      return (
        <Multi imageUrls={imageUrls} handleClick={this.handleClick} handleView={this.handleView} />
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;