import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { Container, Content, Icon, Button, Card, Picker, List, ListItem, Input, H2, InputGroup } from 'native-base';

export class MultilineTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 36
        }
    }



    static getDefaultStyles() {
        return {
            maxHeight: 90,
            minHeight: 36,
            borderWidth: 0.5,
            borderTopWidth: 0,
            borderColor: '#0f0f0f',
            flex: 1,
            fontSize: 13,
            padding: 4,
            marginBottom: 4,
        }
    }

    render() {
        return (<TextInput style={[this.props.style, MultilineTextInput.getDefaultStyles(), { height: this.state.height }]}
            multiline={true} onChangeText={(text) => this.calculateHeight(text, this)} />);
    }

    calculateHeight(text, _this) {
        console.log(_this);

        let fontSize = MultilineTextInput.getDefaultStyles().fontSize;
        let maxHeight = MultilineTextInput.getDefaultStyles().maxHeight;
        let minHeight = MultilineTextInput.getDefaultStyles().minHeight;

        let lines = text.split("\n").length;

        let height = (fontSize + 5) * lines;

        height = height < minHeight ? minHeight : height;
        height = height > maxHeight ? maxHeight : height;


        _this.setState({ height: height });

        return height;

    }
}