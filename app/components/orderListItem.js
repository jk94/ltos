import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Header, Title, Icon, Button, Footer, Content, Card } from 'native-base';

import { categoryImageMapping } from '../constants/categoryImage'

export class OrderListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orderCategory: this.props.orderItem.orderCategory,
            title: this.props.orderItem.orderTitle,
            wishes: this.props.orderItem.wishes,
            orderTime: this.props.orderItem.orderTime
        }
    }



    render() {

        return (<Card style={[styles.container]}>
            <View style={[styles.categoryImageContainer]}>
                <Image source={{ uri: categoryImageMapping[this.state.orderCategory] }} style={styles.categoryImage} />
            </View>

            <View style={styles.detailContainer}>
                <View style={styles.detailTopLine}>
                    <Text style={styles.orderTitle}>{this.state.title}</Text>
                    <Text>{this.renderDate(this.state.orderTime)}</Text>
                </View>
                <View><Text style={styles.wishesConainer}>{this.state.wishes}</Text></View>

            </View>
        </Card>)
    }

    renderDate(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return day + "." + month + "." + year
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 110
    },
    redBorder: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
    },
    detailContainer: {
        flex: 8,
        flexDirection: 'column',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    categoryImageContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 4
    },
    wishesConainer:{
        overflow: 'hidden',
        maxHeight: 83
    },
    detailTopLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryImage: {
        height: 100,
        width: 100
    },

    orderTitle: {
        fontWeight: 'bold',
        fontSize: 16
    }
});
