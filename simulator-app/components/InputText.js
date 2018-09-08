import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, TextInput } from "react-native";

import Mask from "../util/MaskUtil"

const TYPE_CURRENCY = "Currency"
const TYPE_DATE = "Date"
const TYPE_PERCENT = "Percent"

const KEY_CODE_BACKSPACE = "Backspace"

class InputText extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            text: "",
            maxLength: 0,
            keyboardType: "default"
        }

        this.onKeyPress = this.onKeyPress.bind(this)
        this.onChangeText = this.onChangeText.bind(this)

        this.bindViews()
    }

    bindViews() {
        switch (this.props.type) {
            case TYPE_CURRENCY: 0
                this.state.maxLength = 15
                this.state.keyboardType = "numeric"
                break;
            case TYPE_DATE:
                this.state.maxLength = 10
                this.state.keyboardType = "numeric"
                break;
            case TYPE_PERCENT:
                this.state.maxLength = 4
                this.state.keyboardType = "numeric"
                break;
        }
    }

    onKeyPress = ({ nativeEvent: { key: keyValue } }) => {
        if (keyValue === KEY_CODE_BACKSPACE) {
            //do nothing
        }
    }

    onChangeText = (value) => {
        switch (this.props.type) {
            case TYPE_DATE:
                var masked = Mask.date(value)
                this.setState({ text: masked })
                console.log("value %s <===> masked %s", value, masked)
                break;
            case TYPE_PERCENT:
                var masked = Mask.percent(value)
                this.setState({ text: masked })
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    style={styles.textInput}
                    text={this.state.text}
                    placeholder={this.props.placeholder}
                    maxLength={this.state.maxLength}
                    keyboardType={this.state.keyboardType}
                    onChangeText={this.onChangeText}
                    onKeyPress={this.onKeyPress}
                />
            </View>
        );
    }
}

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["Currency", "Date", "Percent"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
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