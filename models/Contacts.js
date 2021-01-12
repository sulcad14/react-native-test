import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, Header, Avatar, ListItem, Badge, SearchBar } from 'react-native-elements';

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
    badge: 
    {
        bottom: 20,
        right: 25
    },
    search: 
    {
        backgroundColor: '#DDDDDD',   
    }
});

const Contacts = () => 
{
    const [search, setSearch] = useState('');
    const onSearchChange = (search) => 
    {
        setSearch(search);
    }

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
            <SearchBar placeholder="Search" onChangeText={onSearchChange} value={search} lightTheme containerStyle={styles.search} />
            <ScrollView>
                {contactList.map((contact, index) => (
                    <ListItem key={index} bottomDivider containerStyle={styles.container}>
                        <Avatar icon={{ name: 'user', type: 'font-awesome', color: 'black', size: 40 }} />
                        {contact.name === "Amy Farha" ?
                            <Badge status="error" value="2" containerStyle={styles.badge} />
                        :
                            null
                        }
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