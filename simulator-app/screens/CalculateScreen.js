import React from 'react';
import { StyleSheet, View, ToolbarAndroid } from 'react-native';
import ButtonRounded from '../components/ButtonRounded'
import InputText from '../components/InputText'

class CalculateScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTop} >
                    <ToolbarAndroid
                        style={styles.toolbar}
                        title="Simulador Renda Fixa Pós-Fixado" />
                </View>
                <View style={styles.containerForm} >
                    <InputText label="Quanto você gostaria de aplicar? *" placeHolder="R$" style={styles.inputText} />
                    <InputText label="Qual a data de vencimento do investimento? *" placeHolder="dia/mês/ano" style={styles.inputText} />
                    <InputText label="Qual o percentual do CDI do investimento? *" placeHolder="100%" style={styles.inputText} />
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
        marginTop: 24,
        flex: .10
    },
    containerForm: {
        flex: .80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    containerBottom: {
        flex: .10,
        justifyContent: 'center',
        padding: 8
    },
    inputText: {
        marginTop: 16,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    toolbar: {
        backgroundColor: '#fff',
        height: '100%',
        elevation: 2
    }
})

export default CalculateScreen