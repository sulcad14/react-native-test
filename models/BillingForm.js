import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    }
});

const BillingForm = () =>
{
    return <View style={styles.container}>
        <Header
            centerComponent={{ text: 'BILLING FORM', style: { color: '#fff', bottom: 5, fontWeight: 'bold' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    </View>
}

export default BillingForm;
