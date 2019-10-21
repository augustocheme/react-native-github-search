import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';

function Repos({navigation, screenProps}) {
  return (
    <View style={styles.container}>
      <Text>Showing results for {screenProps.searchValue}</Text>
      <ScrollView style={{width: '80%', paddingTop: 20, paddingBottom: 20}}>
        {screenProps.repos.map(repo => (
          <TouchableHighlight
            onPress={() =>
              Alert.alert(
                'Favorites',
                `Are you sure you want to add ${repo.name} to your favorites?`,
                [
                  {
                    text: 'Cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      screenProps.addToFavorites(repo);
                    },
                  },
                ],
              )
            }
            key={repo.id}>
            <View style={styles.box}>
              <Text>{repo.name}</Text>
              <Text>Stars: {repo.stargazers_count}</Text>
              <Text>Forks: {repo.forks_count}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
      <Button
        title="Make another search"
        onPress={() => navigation.navigate('Home')}
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
    paddingTop: 30,
    paddingBottom: 30,
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    width: '100%',
  },
});

export default Repos;
