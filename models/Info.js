import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Header, Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
    card:
    {
        height: '82%'
    },
    textView:
    {
        top: 20,
    }
});

const Info = () =>
{
    return <View>
        <Header centerComponent={{ text: 'INFO', style: { color: '#fff', bottom: 5, fontWeight: 'bold' } }} />
        <Card containerStyle={styles.card}>
            <Card.Title>BASIC CARD</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://i.pinimg.com/originals/9b/fa/58/9bfa584a03ae6fe75ed0cea27b155e53.png' }} />
            <View style={styles.textView}>
                <Text style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Aliquam in lorem sit amet leo accumsan lacinia.
                </Text>
            </View>
        </Card>
    </View>
}

export default Info;
