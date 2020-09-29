import React, {Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import {Card} from 'react-native-elements';

export default function Contact(props) {
    return (
        <Card>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider/>

            {/* Our Address */}

            <Text>121, Clear Water Bay Road</Text>
            <Text>Clear Water Bay, Kowloon</Text>
            <Text>HONG KONG</Text>
            <Text>Tel: +852 1234 5678</Text>
            <Text>Fax: +852 8765 4321</Text>
            <Text>Email:confusion@food.net</Text>
        </Card>
    )
}
