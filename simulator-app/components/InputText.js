import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class InputText extends React.Component {
    render() {
        const { label, text, placeHolder } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeHolder}
                    value={text}
                    keyboardType='numeric'
                    maxLength={10} 
                />
            </View>
        );
    }
}

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string,
    placeHolder: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 8
    },
    label: {
        marginLeft: 3,
        fontSize: 16
    },
    textInput: {
        marginTop: 8,
        fontSize: 20,
        paddingBottom: 6,
        paddingLeft: 3
    }
});

export default InputText