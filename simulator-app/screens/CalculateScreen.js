import React from 'react';
import { StyleSheet, View, ToolbarAndroid, TextInput } from 'react-native';
import ButtonRounded from '../components/ButtonRounded'
import InputText from '../components/InputText'

class CalculateScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTop} >
                    <ToolbarAndroid title="Simulador Renda Fixa Pós-Fixado" />
                </View>
                <View style={styles.containerForm} >
                    <InputText label="Quanto você gostaria de aplicar? *" placeHolder="R$" style={styles.inputText} />
                    <InputText label="Qual a data de vencimento do investimento? *" placeHolder="dia/mês/ano" style={styles.inputText}/>
                    <InputText label="Qual o percentual do CDI do investimento? *" placeHolder="100%" style={styles.inputText}/>
                </View>
                <View style={styles.containerBottom} >
                    <ButtonRounded
                        text="SIMULAR"
                        onPress={() => { }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerTop: {
        flex: .10,
        backgroundColor: 'red'
    },
    containerForm: {
        flex: .80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBottom: {
        flex: .10,
        justifyContent: 'center'
    },
    inputText: {
        marginTop: 8,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default CalculateScreen