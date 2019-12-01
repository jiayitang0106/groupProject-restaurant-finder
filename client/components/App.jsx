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
  font: 9px/11px 'Arial';
  color: white;
  letter-spacing: .125em;
  text-transform: uppercase;
  position: absolute;
  z-index: 2;
  border: none;

  &:hover {
    background-color: #101820;
  }
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'single',
      id: '',
      imageUrls: ['https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/cf1fc09b841c2cad285098ae6706abd7.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/a4d0f78538230312c8583678e63eda07.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/8aac959c1d24e2999f63874ebe69240b.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/291ec0b6706672daa36a419c460de71b.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/472430f685d12ccdb2f8037ca74a3d87.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/4e58170bc998d7841c07cfeabab83ee6.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/5ef095e5ad71e00af66c620752696fe3.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/5edc382381cb37b8bb8e7366a27da902.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/68d451b98aa74cd2f4816968e70ce0e4.jpg?max-w=1400&auto=format', 'https://zagat-photos.imgix.net/ChIJwQUfOTEXhIARSxZB2ZmuF8o/23ddb647cca2a06e84d323c922a85c77.jpg?max-w=1400&auto=format'],
      single: 3,
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
    if (view === 'single') {
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
    document.onkeydown = null;
    const { imageUrls, single, view }= this.state;
    return (
      <React.Fragment>
        {this.renderView()}
        <Container>
          <Carousel>
            {imageUrls.map((url, idx) => <Image src={url} idx={idx} handleClick={this.handleClick} key={idx} imageUrls={imageUrls} />)}
            <Button onClick={() => this.handleView('multi')}>{imageUrls.length} photos +</Button>
          </Carousel>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;