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

  loadFavorites = () => {
    axios
      .get('http://localhost:3000/favorites')
      .then(response => {
        this.setState({favorites: response.data});
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.loadFavorites();
  }

  render() {
    return (
      <AppNavigator
        screenProps={{
          searchValue: this.state.searchValue,
          repos: this.state.repos,
          searchRepos: this.searchRepos,
          favorites: this.state.favorites,
        }}
      />
    );
  }
}
