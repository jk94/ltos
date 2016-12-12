import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { Container, Content, Icon, Button, Picker, H2 } from 'native-base';

import { MultilineTextInput } from './multilineTextbox'

import { CategoryName } from '../constants/categoryName';
const Item = Picker.Item;

export class NewOrder extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            selectedCategory: 1
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.orderInput}>
                    <H2>Bestellung für {this.renderDate(new Date())}</H2>
                    <View>
                        <Text>Kategorie:</Text>
                        {this.renderCategoryPicker()}
                    </View>


                    <Text>Bestellung:</Text>
                    <TextInput placeholder="z.B. Pizza Salami" style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' />

                    <Text>Wünsche:</Text>
                    <MultilineTextInput placeholder="z.B. keine Pilze"></MultilineTextInput>

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
        flexDirection: 'column',
        justifyContent: 'space-between'
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
        flexDirection: 'row',
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
        marginBottom: 15
    },
    input: {
        flexDirection:'row',
        borderWidth: 0.5,
        borderTopWidth: 0,
        borderColor: '#0f0f0f',
        flex: 0,
        fontSize: 13,
        padding: 4,
        marginBottom: 4,
    }
});