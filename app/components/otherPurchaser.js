import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail } from 'native-base';

import { CategoryName } from '../constants/categoryName';
import { categoryImageMapping } from '../constants/categoryImage'

export class OtherPurchaser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: this.props.orders,
            anonym: true
        }
    }

    render() {
        let list = [];
        let sortedOrders = this.sortOrdersByCategory(this.state.orders);

        Object.keys(sortedOrders).forEach((categoryKey) => {
            let category = sortedOrders[categoryKey];
            if (category.length <= 0)
                return
            let text = this.state.anonym ? this.renderSingularOrPluralPersonText(category, categoryKey) : this.renderSingularOrPluralNameText(category, categoryKey);

            let textItem = (<Text style={styles.text}>{text}</Text>)
            let thumbnail = (<Thumbnail source={{uri:categoryImageMapping[categoryKey]}} />);
            list.push({ text: textItem, thumbnail });
        });

        return (
            <Card style={styles.container}
                dataArray={list}
                renderRow={(item) =>
                    <CardItem onPress={() => { this.setState({ anonym: !this.state.anonym }) } }>
                        {item.thumbnail}
                        {item.text}
                    </CardItem>
                }
                onPress={() => { this.setState({ anonym: !this.state.anonym }) } }>
                {list}
            </Card>
        );
    }

    sortOrdersByCategory(orders) {
        let sortedOrders = { '1': [], '2': [], '3': [] }

        orders.forEach((order) => {
            sortedOrders[order.orderCategory].push(order);
        }, this);

        return sortedOrders;
    }

    renderSingularOrPluralPersonText(category, categoryKey) {
        if (category.length === 1)
            return `Heute bestellt ${category.length} Person ${CategoryName[categoryKey]}.`
        else
            return `Heute bestellen ${category.length} Personen ${CategoryName[categoryKey]}.`
    }

    renderSingularOrPluralNameText(category, categoryKey) {
        if (category.length === 1)
            return `Heute bestellt ${category[0].user.surname} ${CategoryName[categoryKey]}.`
        else
            return `Heute bestellen ${this.renderNamesAsCSL(category)} ${CategoryName[categoryKey]}.`
    }

    renderNamesAsCSL(category) {
        let nameList = '';
        category.forEach((order) => {
            if (nameList === '')
                nameList += order.user.surname;
            else
                nameList += ', ' + order.user.surname;
        }, this)
        return nameList
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',

    },
    text: {
        fontSize: 18
    }
});
