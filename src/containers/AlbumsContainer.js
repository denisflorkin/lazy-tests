import React from 'react';
import AlbumsComposite from '../composites/AlbumsComposite';
import { AlbumsProvider, WithAlbums } from '../hocs/Albums';

const AlbumsCompositeWithAlbums = WithAlbums(AlbumsComposite);

function AlbumsContainer() {
  return (
    <AlbumsProvider>
      <AlbumsCompositeWithAlbums />
    </AlbumsProvider>
  );
}

export default AlbumsContainer;
