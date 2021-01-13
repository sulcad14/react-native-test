import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { PricingCard, Header, Text, Overlay, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BillingForm from './';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
    modal:
    {
        width: '90%',
        height: '90%'
    },
    innerView:
    {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Stack = createStackNavigator();

const Shop = () =>
{
    const [modal, setModal] = useState(false);
    const [type, setType] = useState(null);
    const navigation = useNavigation();

    const openModal = (type) =>
    {
        setModal(true);
        setType(type);
    }

    return (
        <View style={styles.container}>
            <Header centerComponent={{ text: 'SHOP', style: { color: '#fff', bottom: 5, fontWeight: 'bold' } }} />
            <ScrollView>
                <PricingCard
                    color="#4f9deb"
                    title="Free"
                    price="$0"
                    info={['1 User', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED' }}
                    onButtonPress={() => openModal("Free")}
                />
                <PricingCard
                    color="#9900cc"
                    title="Starter"
                    price="$20"
                    info={['5 Users', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED' }}
                    onButtonPress={() => navigation.navigate('BillingForm')}
                />
                <PricingCard
                    color="#3333cc"
                    title="Pro"
                    price="$50"
                    info={['20 Users', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED' }}
                />
                <Overlay isVisible={modal} onBackdropPress={() => setModal(false)} overlayStyle={styles.modal}>
                    <View style={styles.innerView}>
                        <Text h3>Billing Form</Text>
                        <Input placeholder='Name' leftIcon={<Icon name='user' size={20} color='black' />} />
                        <Input placeholder='Surname' leftIcon={<Icon name='user' size={20} color='black' />} />
                    </View>
                </Overlay>
            </ScrollView>
        </View>
    );
}

export default Shop;
