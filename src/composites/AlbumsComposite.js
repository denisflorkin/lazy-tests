import React from 'react';
import LazyLoad from 'react-lazyload';
import AppLayout from './AppLayout';
import Placeholder from '../leafs/Placeholder';
import Img from '../leafs/Img';

const toFixed = (n, nDecimal = 0) => Number.parseFloat(n).toFixed(nDecimal);

// const rowGap = 4;
// const rowHeight = 200;

const getR = (w, h) => {
  if (h <= (w * 0.6667)) {
    return 'landscape';
  }

  if (w <= (h * 0.6667)) {
    return 'portrait';
  }

  // if (h <= (w * 0.5)) {
  //   return 'wide';
  // }

  // if (w <= (h * 0.5)) {
  //   return 'tall';
  // }

  return 'square';
};


function AlbumsComposite(props) {
  const {
    albumsLoading,
    albumserror,
    albums,
    Refetch,
    albumsRefetching,
  } = props;

  // if (albumsLoading) {
  //   return 'Contacting satellites ...';
  // }

  if (albumserror) {
    return 'Could not fetch data ¯\\_(ツ)_/¯';
  }

  return (
    <div className="section">
      <AppLayout
        header={(<h1>Albums</h1>)}
        main={(
          <ul className="grid" style={{ height: '100%' }}>
            {
              (albums || []).map(({
                download_url, width, height,
              }) => {
                const smallWidth = toFixed(width / 10);
                const smallHeight = toFixed(height / 10);

                const sizedUrl = download_url
                  .replace(width, smallWidth)
                  .replace(height, smallHeight); // eslint-disable-line comma-dangle

                console.log('sizedUrl');

                // const gridRowEnd = getRatio(smallWidth, smallHeight);

                // return (
                //   <li key={download_url} style={{ height: '100%' }}>
                //     <Placeholder />
                //   </li>
                // );

                return (
                  <li
                    key={download_url}
                    style={{ height: '100%' }}
                    // className={getR(width, height)}
                  >
                    <LazyLoad
                      height={smallHeight}
                      offset={600}
                      placeholder={<Placeholder style={{ height: '100%' }} />}
                      // unmountIfInvisible
                    >
                      <Img
                        width={smallWidth}
                        height={smallHeight}
                        src={sizedUrl}
                      />
                    </LazyLoad>
                  </li>
                );
              })
            }
            {
              albumsRefetching
                ? [...new Array(24)].map(() => (
                  <LazyLoad
                    offset={0}
                    height={300}
                    placeholder={<Placeholder />}
                  >
                    <Placeholder />
                  </LazyLoad>
                ))
                : null
            }
          </ul>
        )}
        footer={(
          <div>
            {
              (!albumsLoading && !albumsRefetching)
                ? (
                  <LazyLoad
                    offset={1300}
                    Placeholder={Placeholder}
                    unmountIfInvisible
                  >
                    <Refetch>
                      <div>fetching more pics...</div>
                    </Refetch>
                  </LazyLoad>
                )
                : (<div>fetching more pics...</div>)
            }
          </div>
        )}
      />
    </div>
  );
}


export default AlbumsComposite;
