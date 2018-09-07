import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class InputText extends React.Component {
    render() {
        const { label, text, placeHolder } = this.props;

        return (
            <View>
                <Text>{label}</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder={placeHolder}
                    value={text}
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
    textStyle: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },
    buttonStyle: {
        margin: 10,
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(0, 200, 179, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderRadius: 30,
        elevation: 2
    }
});

export default InputText