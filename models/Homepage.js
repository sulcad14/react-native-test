import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { Text, Header } from 'react-native-elements';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
    img:
    {
        width: 120,
        height: 120,
        top: 10
    },
    inner:
    {
        alignItems: 'center',
    }
});

const Homepage = () =>
{
  return (
    <View style={styles.container}>
        <Header centerComponent={{ text: 'HOMEPAGE', style: { color: '#fff', bottom: 5, fontWeight: 'bold' } }} />
        <View style={styles.inner}>
            <Text h2>React Native App</Text>
            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.img} />
        </View>
    </View>
  );
}

export default Homepage;
