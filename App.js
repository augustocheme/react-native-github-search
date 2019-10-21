import React from 'react';
import AppNavigator from './src/AppNavigator';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      repos: [],
      favorites: [],
    };
  }

  searchRepos = searchValue => {
    this.setState({searchValue, repos: []});

    axios
      .get(`https://api.github.com/users/${searchValue}/repos`)
      .then(response => {
        this.setState({repos: response.data});
      })
      .catch(error => console.log(error));
  };

  getFavorites = () => {
    axios
      .get('http://localhost:3000/favorites')
      .then(response => {
        this.setState({favorites: response.data});
      })
      .catch(error => console.log(error));
  };

  getFavoriteById = repoId => {
    axios
      .get(`http://localhost:3000/favorites/${repoId}`)
      .catch(error => console.log(error));
  };

  addToFavorites = repo => {
    axios
      .post('http://localhost:3000/favorites', repo)
      .catch(error => console.log(error))
      .finally(this.getFavorites());
  };

  removeFromFavorites = repoId => {
    axios
      .delete(`http://localhost:3000/favorites/${repoId}`)
      .catch(error => console.log(error))
      .finally(this.getFavorites());
  };

  componentDidMount() {
    this.getFavorites();
  }

  render() {
    return (
      <AppNavigator
        screenProps={{
          searchValue: this.state.searchValue,
          repos: this.state.repos,
          favorites: this.state.favorites,
          searchRepos: this.searchRepos,
          addToFavorites: this.addToFavorites,
          removeFromFavorites: this.removeFromFavorites,
        }}
      />
    );
  }
}
