import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, View, Text, TextInput } from "react-native"

import Mask from "../util/MaskUtil"
import Validation from "../util/ValidationUtil"

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

        this.handleChangeText = this.handleChangeText.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleSelectionChange = this.handleSelectionChange.bind(this)

        this.bindViews()
    }

    bindViews() {
        switch (this.props.type) {
            case TYPE_CURRENCY: 0
                this.state.maxLength = 15
                break;
            case TYPE_DATE:
                this.state.maxLength = 10
                break;
            case TYPE_PERCENT:
                this.state.maxLength = 4
                break;
        }
    }

    handleChangeText = (value) => {
        this.setState({ text: value })
    }

    handleKeyPress = ({ key } = e.nativeEvent) => {
        if (key == KEY_CODE_BACKSPACE) return
        this.applyMask()
    }

    handleSelectionChange() {
        if (this.props.type == TYPE_PERCENT) {
            this.focusBeforePercent()
        }
    }

    focusBeforePercent() {
        this.myInput.setNativeProps({
            selection: {
                start: this.state.text.length - 1,
                end: this.state.text.length - 1
            }
        })
    }

    applyMask() {
        switch (this.props.type) {
            case TYPE_DATE:
                var masked = Mask.date(this.state.text)
                this.setState({ text: masked })
                break;
            case TYPE_PERCENT:
                var masked = Mask.percent(this.state.text)
                this.setState({ text: masked })
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    ref={input => this.myInput = input}
                    style={styles.textInput}
                    placeholder={this.props.placeholder}
                    maxLength={this.state.maxLength}
                    keyboardType={this.state.keyboardType}
                    value={this.state.text}
                    onChangeText={this.handleChangeText}
                    onKeyPress={this.handleKeyPress}
                    onSelectionChange={this.handleSelectionChange}
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