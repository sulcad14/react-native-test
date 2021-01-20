import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Text, Header, Card } from 'react-native-elements';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
    card:
    {
        height: '40%'
    },
    textView:
    {
        textAlign: "center"
    }
});

const Homepage = () =>
{
    const redirect = () =>
    {
        Linking.openURL('https://reactnative.dev/');
    }

    return (
        <View style={styles.container}>
            <Header centerComponent={{ text: 'HOMEPAGE', style: { color: '#fff', bottom: 5, fontWeight: 'bold' } }} />
            <Card containerStyle={styles.card}>
                <Card.Title>Welcome</Card.Title>
                <Card.Divider />
                <View style={styles.textView}>
                    <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Mauris dictum facilisis augue. Aliquam erat volutpat. Mauris metus. Aenean id metus id velit ullamcorper pulvinar.</Text>
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <Card.Title>React Native</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" }} onPress={redirect} />
            </Card>
        </View>
    );
}

export default Homepage;
