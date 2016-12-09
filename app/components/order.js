import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { Container, Content, Icon, Button, Picker, H2 } from 'native-base';

import { MultilineTextInput } from './customTextbox'

import { CategoryName } from '../constants/categoryName';
const Item = Picker.Item;

export class NewOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: 1
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.orderInput}>
                    <H2>Bestellung für {this.renderDate(new Date())}</H2>
                    {this.renderCategoryPicker()}

                    <Text>Bestellung:</Text>
                    <TextInput inlineLabel label="Bestellung" placeholder="Pizza Salami" style={styles.input} />

                    <Text>Wünsche</Text>
                    <MultilineTextInput></MultilineTextInput>

                </View>

                <View style={styles.buttonGroup}>
                    <View style={styles.buttonGroupView}><Button large block capitalize style={styles.buttonCancel}>Cancel</Button></View>
                    <View style={styles.buttonGroupView}><Button large block capitalize style={styles.buttonSubmit}>Submit</Button></View>
                </View>
            </View>
        );
    }

    renderDate(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return day + "." + month + "." + year
    }

    renderCategoryPicker() {
        let categories = [];
        Object.keys(CategoryName).forEach((categoryKey) => {
            categories.push((<Item key={categoryKey} label={CategoryName[categoryKey]} value={categoryKey} />));
        });

        return (<Picker
            iosHeader="Wähle Kategorie"
            mode="dropdown"
            selectedValue={this.state.selectedCategory}
            onValueChange={this.onCategoryValueChange.bind(this)}>
            {categories}
        </Picker>)
    }

    onCategoryValueChange(value) {
        this.setState({
            selectedCategory: value
        });
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        paddingBottom: 10,

    },
    text: {
        fontSize: 18
    },
    buttonCancel: {
        backgroundColor: '#384850'
    },
    buttonSubmit: {
        backgroundColor: '#00c497'
    },
    buttonGroup: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonGroupView: {
        flex: 1,
        marginLeft: 3,
        marginRight: 3
    },
    categorySelect: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    orderInput: {
        justifyContent: 'flex-start'
    },
    multiline: {
        maxHeight: 80,
    },
    input: {
        borderWidth: 0.5,
        borderTopWidth: 0,
        borderColor: '#0f0f0f',
        flex: 1,
        fontSize: 13,
        padding: 4,
        marginBottom: 4,
    }
});