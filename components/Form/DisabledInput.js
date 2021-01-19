import React from 'react';
import { StyleSheet, View, TextInput as NativeTextInput, Text } from 'react-native';
import { Controller } from "react-hook-form";

const styles = StyleSheet.create({
    input:
    {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 5,
        height: 40,
    }
});

const DisabledTextInput = ({ name, required, control, errors, placeholder, defaultVal }) =>
{
    return (
        <View>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <NativeTextInput
                        blur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        editable={false}
                        style={styles.input}
                    />
                )}
                name={name}
                rules={{ required: required }}
                defaultValue={defaultVal}
            />
            {required && errors[name] ? <Text style={styles.text}>This field is required.</Text> : null}
        </View>
    );
}

export default DisabledTextInput;
