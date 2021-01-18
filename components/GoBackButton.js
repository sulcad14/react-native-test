import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    button:
    {
        height: 20,
        bottom: 2
    }
});

const GoBackButton = ({ navigation }) =>
{
    const goBack = () =>
    {
        navigation.goBack();
    }

    return <Button icon={<Icon name="arrow-left" size={15} color="white" />} onPress={goBack} buttonStyle={styles.button} />
}

export default GoBackButton;
