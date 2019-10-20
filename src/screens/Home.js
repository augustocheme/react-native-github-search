import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';

function Home({navigation, screenProps}) {
  const [searchValue, setSearchvalue] = React.useState('');

  const handleSubmit = React.useCallback(() => {
    if (searchValue === '') {
      console.log('Please fill the form.');
      return false;
    }

    screenProps.searchRepos(searchValue);

    navigation.navigate('Repos');
  });

  return (
    <View style={styles.container}>
      <Text>
        {/* We have {this.props.screenProps.currentFriends.length} friends! */}
        Search for an user or organization on github.
      </Text>
      <TextInput
        style={styles.searchInput}
        autoCapitalize="none"
        onChangeText={text => setSearchvalue(text)}
      />
      {/* <Button title="Search" onPress={() => navigation.navigate('Repos')} /> */}
      <Button title="Search" onPress={handleSubmit} />
      <Button
        title="Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    paddingLeft: 15,
  },
});

export default Home;
