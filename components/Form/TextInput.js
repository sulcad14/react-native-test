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

const TextInput = ({ name, required, control, errors, placeholder }) =>
{
    return (
        <View>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <NativeTextInput
                        blur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder={placeholder}
                        style={styles.input}
                    />
                )}
                name={name}
                rules={{ required: required }}
                defaultValue=""
            />
            {required && errors[name] && errors[name].type === 'required' ? <Text style={styles.text}>This field is required.</Text> : null}
        </View>
    );
}

export default TextInput;
