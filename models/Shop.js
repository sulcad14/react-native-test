import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { PricingCard, Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

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

const Shop = () =>
{
    const navigation = useNavigation();

    const openModal = (type) =>
    {
        navigation.navigate('BillingForm', { type: type });
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
                    onButtonPress={() => openModal("Starter")}
                />
                <PricingCard
                    color="#3333cc"
                    title="Pro"
                    price="$50"
                    info={['20 Users', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED' }}
                    onButtonPress={() => openModal("Pro")}
                />
            </ScrollView>
        </View>
    );
}

export default Shop;
