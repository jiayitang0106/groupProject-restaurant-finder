import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from './Image.jsx';
import Single from './Single.jsx';
import Multi from './Multi.jsx';

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
`

const Carousel = styled.div`
  max-width: 2600px;
  height: 384px;
  position: relative;
  overflow: hidden;
  display: flex;
`

const Button = styled.button`
  background-color: rgba(16,24,32,.75);
  height: 40px;
  padding-right: 10px;
  padding-left: 16px;
  right: 40px;
  top: calc(50% - 20px);
  color: white;
  letter-spacing: .125em;
  text-transform: uppercase;
  z-index: 2;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'main',
      id: '',
      imageUrls: ['https://loremflickr.com/600/400/restaurant', 'https://loremflickr.com/600/401/restaurant', 'https://loremflickr.com/600/402/restaurant', 'https://loremflickr.com/600/403/restaurant', 'https://loremflickr.com/600/404/restaurant', 'https://loremflickr.com/600/405/restaurant', 'https://loremflickr.com/600/406/restaurant', 'https://loremflickr.com/600/407/restaurant', 'https://loremflickr.com/600/408/restaurant', 'https://loremflickr.com/600/409/restaurant'],
      single: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/api/restaurants/1')
  //     .then(res => {
  //       const { id, imageUrls } = res.data[0];
  //       this.setState({
  //         id,
  //         imageUrls,
  //       });
  //     });
  // }

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
    if (view === 'temp') {
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
    const { imageUrls, single, view }= this.state;
    return (
      <div>
        {this.renderView()}
        <Container>
          <Carousel>
            {imageUrls.map((url, idx) => <Image src={url} idx={idx} handleClick={this.handleClick} key={idx} imageUrls={imageUrls} />)}
            <div>

             <Button onClick={() => this.handleView('multi')}>{imageUrls.length} photos +</Button>
            </div>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default App;