import React, { useEffect, useState } from "react";
import { View, Text, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Calculator = () => {
    //hooks useState
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');

    // Reinicia el resultado cada vez que los números cambian
    useEffect(() => {
        setResult('');
    }, [num1, num2]);

    // Validación y cálculo
    const handleCalculate = () => {
        if (num1 === '' || num2 === '') {
            Alert.alert('Error', 'Por favor, rellena ambos campos');
            return;
        }

        let res;
        switch (operation) {
            case '+':
                res = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                res = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                res = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                res = parseFloat(num1) / parseFloat(num2);
                break;
            default:
                return;
        }
        setResult(res.toString());
    };

    return (
        <View>
            <TextInput
                label="Número 1"
                value={num1}
                onChangeText={(text) => setNum1(text)}
                style={{ width: 200, marginBottom: 20 }}
                keyboardType="numeric"
            />

            <TextInput
                label="Número 2"
                value={num2}
                onChangeText={(text) => setNum2(text)}
                style={{ width: 200, marginBottom: 20 }}
                keyboardType="numeric"
            />

            <Button
                mode='contained'
                onPress={() => setOperation('+')}
                style={{ width: 100, marginBottom: 20 }}
            >
                +
            </Button>
            <Button
                mode='contained'
                onPress={() => setOperation('-')}
                style={{ width: 100, marginBottom: 20 }}
            >
                -
            </Button>
            <Button
                mode='contained'
                onPress={() => setOperation('*')}
                style={{ width: 100, marginBottom: 20 }}
            >
                *
            </Button>
            <Button
                mode='contained'
                onPress={() => setOperation('/')}
                style={{ width: 100, marginBottom: 20 }}
            >
                /
            </Button>
            <Button
                mode='contained'
                onPress={handleCalculate}
                style={{ width: 100, marginBottom: 20 }}
            >
                =
            </Button>

            <Text>{result}</Text>
        </View>
    );
};

export default Calculator;
