import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { Container, Content, Icon, Button, Card, Picker, List, ListItem, Input, H2, InputGroup } from 'native-base';

export class MultilineTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            height: 72
        }
    }



    getDefaultStyles() {
        return {
            maxHeight: 144,
            minHeight: 72,
            borderWidth: 0.5,
            borderTopWidth: 0,
            borderColor: '#0f0f0f',
            flex: 0,
            fontSize: 13,
            padding: 5,
            marginBottom: 4,
            textAlignVertical: 'top'
        }
    }

    render() {
        return (<TextInput {...this.props} multiline={true}
            style={[this.getDefaultStyles(), { height: Math.max(this.getDefaultStyles().minHeight, Math.min(this.getDefaultStyles().maxHeight, this.state.height)) }]}
            onChange={(event) => {
                this.setState({
                    text: event.nativeEvent.text,
                    height: event.nativeEvent.contentSize.height
                })
            } }
            value={this.state.text}
            underlineColorAndroid='rgba(0,0,0,0)'
            />);
    }

}