import React from 'react';
import { StyleSheet, ScrollView, TextInput, View, Image } from 'react-native';
import { Text, Header, Avatar, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
});

const Contacts = () => 
{
    const contactList = [
        {
            name: 'Amy Farha',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            subtitle: 'Vice Chairman'
        },
      ]

    return (
        <View style={styles.container}>
            <Header centerComponent={{ text: 'CONTACTS', style: { color: '#fff', bottom: 5, fontWeight: 'bold' } }} />
            <ScrollView>
                {contactList.map((contact, index) => (
                    <ListItem key={index} bottomDivider>
                        <Avatar icon={{ name: 'user', type: 'font-awesome', color: 'black', size: 40 }} />
                        <ListItem.Content>
                            <ListItem.Title>{contact.name}</ListItem.Title>
                            <ListItem.Subtitle>{contact.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ScrollView>
        </View>
    );
}

export default Contacts;