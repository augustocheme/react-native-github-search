import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Favorites({screenProps}) {
  return (
    <View style={styles.container}>
      <Text>Showing favorites</Text>
      <ScrollView style={{width: '80%', paddingTop: 20, paddingBottom: 20}}>
        {screenProps.favorites.map(favorite => (
          <TouchableHighlight
            onPress={() =>
              Alert.alert(
                'Favorites',
                `Are you sure you want to remove ${favorite.name} from your favorites?`,
                [
                  {
                    text: 'Cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      screenProps.removeFromFavorites(favorite.id);
                    },
                  },
                ],
              )
            }
            key={favorite.id}>
            <View style={styles.box} key={favorite.id}>
              <Text>{favorite.name}</Text>
              <Text>Stars: {favorite.stargazers_count}</Text>
              <Text>Forks: {favorite.forks_count}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
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

export default Favorites;
