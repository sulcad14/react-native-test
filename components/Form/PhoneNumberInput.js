import React, { useState } from 'react';
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

const PhoneNumberInput = ({ name, required, control, errors, placeholder }) =>
{
    const [value, setVal] = useState(null);

    return (
        <View>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <NativeTextInput
                        blur={onBlur}
                        onChangeText={(value) => { onChange(value); setVal(value)}}
                        value={value}
                        placeholder={placeholder}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                )}
                name={name}
                rules={{ required: required, maxLength: 9 }}
                defaultValue=""
            />
            {required && errors[name] && errors[name].type === 'required' ? <Text style={styles.text}>This field is required.</Text> : null}
            {value && value.length !== 9 ? <Text style={styles.text}>Phone number has to be nine numbers</Text> : null}
        </View>
    );
}

export default PhoneNumberInput;
