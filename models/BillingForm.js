import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { GoBackButton } from '../components';
import Form, { TYPES } from 'react-native-basic-form';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
    form:
    {
        padding: 15,
    },
    button:
    {
        backgroundColor: '#0099ff'
    }
});

const BillingForm = ({ route }) =>
{
    const [type] = useState(route.params.type);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const fields = [
        { name: 'email', label: '   Email Address', required: true, type: TYPES.Email },
        { name: 'username', label: '   Username', required: true, autoCapitalize: "none", autoCorrect: false },
        { name: 'password', label: '  Password', required: true, secure: true },
    ];

    const onSubmit = (data) =>
    {
        setLoading(true);
    }

    return <View style={styles.container}>
        <Header
            leftComponent={<GoBackButton navigation={navigation} />}
            centerComponent={{ text: 'BILLING FORM - ' + type, style: { color: '#fff', bottom: 5, fontWeight: 'bold' } }}
        />
        <Form
            title="Pay"
            fields={fields}
            onSubmit={onSubmit}
            loading={loading}
            style={styles.form}
            buttonStyle={styles.button}
        />
    </View>
}

export default BillingForm;
