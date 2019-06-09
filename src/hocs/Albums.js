import React from 'react';

const url = 'https://picsum.photos/v2/list';


const defaultAlbumsValue = {
  loading: false,
  error: false,
  albums: null,
  page: -1,
  take: 24,
};

const MyContext = React.createContext(defaultAlbumsValue);

/* eslint-disable react/prop-types */
class RefetchClass extends React.Component {
  componentDidMount() {
    console.log('Refetch.componentDidMount called');
    const { onRefetch } = this.props;
    onRefetch();
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}
/* eslint-disable react/no-multi-comp */
export class AlbumsProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultAlbumsValue,
    };
  }

  onError = (err) => {
    console.log('err', err);
    this.setState({
      error: err || true,
      loading: false,
      refetching: false,
      albums: null,
    });
  }

  onSuccess = (albums) => {
    console.log('albums', albums);
    const { albums: albumsState } = this.state;
    this.setState({
      error: false,
      loading: false,
      refetching: false,
      albums: [...(albumsState || []), ...albums],
    });
  }

  fetch = (isRefetching) => {
    const {
      refetching, loading, page, take,
    } = this.state;
    this.setState({
      loading: !isRefetching,
      refetching: isRefetching,
      error: false,
    }, () => {
      if (!loading && !refetching) {
        fetch(`${url}?page=${page}&limit=${take}`)
          .then(x => x.json())
          .then(this.onSuccess)
          .catch(this.onError);
      }
    });
  }

  // onInitFetch = () => {
  //   const { loading } = this.state;
  //   if (!loading) {
  //     this.fetch();
  //   }
  // }

  onRefetch = () => {
    console.log('refetch');
    // const { page } = this.state;
    // if (page > 1) {
    //   return;
    // }

    const { loading } = this.state;
    if (!loading) {
      this.setState(state => ({
        page: state.page + 1,
      }), () => {
        const isRefetching = true;
        this.fetch(isRefetching);
      });
    }
  }

  // componentDidMount() {
  //   this.onInitFetch();
  // }

  render() {
    const { children } = this.props;
    const {
      refetching, loading: albumsLoading, error: albumsError, albums,
    } = this.state;

    const { onRefetch } = this;


    const Refetch = props => <RefetchClass onRefetch={onRefetch} {...props} />;


    return (
      <MyContext.Provider
        value={{
          albumsLoading,
          albumsRefetching: refetching,
          albumsError,
          // albums: shuffle(albums || []),
          albums: (
            (albums || []).filter((x, i) => i !== 0)
          ) || [],
          Refetch,
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}

const AlbumsConsumer = ({ children }) => (
  <MyContext.Consumer>
    {({
      Refetch,
      albumsLoading,
      albumsRefetching,
      albumsError,
      albums,
    }) => children({
      albumsLoading,
      albumsRefetching,
      albumsError,
      albums,
      Refetch,
    })}
  </MyContext.Consumer>
);


export const WithAlbums = Comp => props => (
  <AlbumsConsumer>
    { value => (
      <Comp
        {...props}
        {...value}
      />
    )}
  </AlbumsConsumer>
);
