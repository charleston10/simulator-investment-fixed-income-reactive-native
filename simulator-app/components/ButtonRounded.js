import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

class ButtonRounded extends React.Component {
    render() {
        const { text, onPress } = this.props;

        return (
            <View>
                <TouchableOpacity style={styles.button}
                    onPress={() => onPress()}>
                    <Text style={styles.text}>{text}</Text>

                </TouchableOpacity>
            </View >
        );
    }
}

ButtonRounded.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 50,
    },
    button: {
        margin: 8,
        height: 50,
        backgroundColor: 'rgba(0, 200, 179, 1)',
        borderRadius: 30,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ButtonRounded