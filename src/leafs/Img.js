import React from 'react';
import Placeholder from './Placeholder';

class Img extends React.Component {
  constructor(props) {
    super(props);

    // const hasIdleCallback = (window !== undefined && window.requestIdleCallback);
    // work with ssr
    let hasIdleCallback = false;
    if (typeof window !== 'undefined') {
      if (window.requestIdleCallback) {
        hasIdleCallback = true;
      }
    }


    this.state = {
      loaded: !(hasIdleCallback),
      hasIdleCallback,
    };

    this.onLoadHandler = this.onLoadHandler.bind(this);
  }

  componentDidMount() {
    const { src } = this.props;
    const { hasIdleCallback } = this.state;

    if (hasIdleCallback) {
      this.idleCBRef = window.requestIdleCallback(() => {
        const img = new Image();
        img.addEventListener('load', this.onLoadHandler);
        img.src = src;
      }, { timeout: 1500 });
    }
  }

  componentWillUnmount() {
    if (this.idleCBRef && !this.state.loaded) {
      if (cancelIdleCallback) {
        cancelIdleCallback(this.idleCBRef);
      }
    }
  }

  onLoadHandler() {
    this.setState({
      loaded: true,
    });
  }

  hancleClick = (e) => {
    window.addEventListener('scroll', (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
    });
  }

  render() {
    const { loaded } = this.state;
    const {
      src,
      alt,
      width,
      height,
    } = this.props;

    // const loaded = true;

    if (!loaded) {
      return <Placeholder />;
    }

    return (
      <div
        onClick={this.hancleClick}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#cecece',
        }}
      >
        <figure
          className={`no-visible ${loaded ? 'visible' : 'not-visible'} `}
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >

          <img
            style={{
              opacity: 0,
            }}
            className="img"
            src={src}
            alt={alt || 'image without an alt attribute'}
          />
        </figure>
      </div>
    );
  }
}

export default Img;
