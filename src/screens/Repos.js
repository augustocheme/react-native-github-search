import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Repos({ navigation, screenProps }) {
  return (
    <View style={styles.container}>
      <Text>Showing results for {screenProps.searchValue}</Text>
      <ScrollView style={{ width: '80%', paddingTop: 20, paddingBottom: 20 }}>
        {screenProps.repos.map((repo, index) => (
          <View style={styles.box} key={index}>
            <Text>{repo.name}</Text>
            <Text>Stars: {repo.stargazers_count}</Text>
            <Text>Forks: {repo.forks_count}</Text>
          </View>
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
    paddingBottom: 30
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    width: '100%'
  }
});

export default Repos;
