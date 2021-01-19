import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Button, Divider, Overlay, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { GoBackButton, TextInput, PhoneNumberInput } from '../components';
import { useForm } from "react-hook-form";
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
    formView:
    {
        paddingLeft: '15%',
        top: 15,
    },
    button:
    {
        width: '80%',
        top: 10,
    },
    divider:
    {
        marginTop: 5,
        marginBottom: 5,
        width: '80%'
    },
    modal:
    {
        width: '80%',
        height: '55%'
    },
    modalTitle:
    {
        alignSelf: "center"
    },
    summaryView:
    {
        padding: 20,
    },
    acceptButton:
    {
        top: 10
    }
});

const BillingForm = ({ route }) =>
{
    const [type] = useState(route.params.type);
    const [formData, setFormData] = useState({});
    const [modal, setModal] = useState(false);

    const { handleSubmit, control, errors } = useForm();
    const navigation = useNavigation();

    const onSubmit = (data) =>
    {
        const newData = { ...data, phone: parseInt(data.phone, 10) };
        setFormData(newData);
        setModal(true);
    }

    const finishOrder = () =>
    {
        navigation.navigate('Home');
        navigation.goBack();
    }

    return <View style={styles.container}>
        <Header
            leftComponent={<GoBackButton navigation={navigation} />}
            centerComponent={{ text: 'BILLING FORM - ' + type, style: { color: '#fff', bottom: 5, fontWeight: 'bold' } }}
        />
        <View style={styles.formView}>
            <TextInput name="firstName" placeholder="  First name (*)" required control={control} errors={errors} disabled />
            <Divider style={styles.divider} />
            <TextInput name="lastName" placeholder="  Last name (*)" required control={control} errors={errors} />
            <Divider style={styles.divider} />
            <TextInput name="address" placeholder="  Address (*)" required control={control} errors={errors} />
            <Divider style={styles.divider} />
            <PhoneNumberInput name="phone" placeholder="  Phone number (*)" required control={control} errors={errors} />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} buttonStyle={styles.button} />
        </View>
        <View>
            <Overlay isVisible={modal} onBackdropPress={() => setModal(false)} overlayStyle={styles.modal}>
                <View>
                    <Text h4 h4Style={styles.modalTitle}>Order Summary</Text>
                    <Divider style={{ top: 10 }} />
                    <View style={styles.summaryView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>First Name:</Text>
                        <Text>{formData.firstName}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Last Name:</Text>
                        <Text>{formData.lastName}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Address:</Text>
                        <Text>{formData.address}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Phone Number:</Text>
                        <Text>{formData.phone}</Text>
                        <Divider style={{ top: 10 }} />
                        <Button icon={
                                <Icon
                                    name="check-square"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="  Accept"
                            buttonStyle={styles.acceptButton}
                            onPress={finishOrder}
                        />
                    </View>
                </View>
            </Overlay>
        </View>
    </View>
}

export default BillingForm;
