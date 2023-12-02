import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const PlaylistScreen = () => {
  const [playlists, setPlaylists] = useState([
    { id: '1', name: 'Chill Vibes' },
    { id: '2', name: 'Upbeat Hits' },
    { id: '3', name: 'Rock Classics' },
    { id: '4', name: 'Christmas Classics' },
    { id: '5', name: 'Jazz in the Background' },
    { id: '6', name: 'Christmas Hits' },
    { id: '7', name: 'Classic Road Trip Songs' },
    { id: '8', name: 'Cooking Jazz & Bossa' },
    { id: '9', name: 'Bossa Nova Covers' },
    // Add more playlists as needed
  ]);

  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity style={styles.playlistItem} onPress={() => handlePlaylistPress(item)}>
      <Text style={styles.playlistName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handlePlaylistPress = (playlist) => {
    // Handle the press event, e.g., navigate to the playlist details screen
    console.log(`Selected playlist: ${playlist.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Playlist</Text>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={renderPlaylistItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playlistItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  playlistName: {
    fontSize: 16,
  },
});

export default PlaylistScreen;
