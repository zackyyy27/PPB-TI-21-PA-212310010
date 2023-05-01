import React, { Component } from 'react'
import { Text, View } from 'react-native'

var name = "Honda";
const types = { type: 'Matic', model: 'Scopy', harga: 25000000 }
export default function Motorcycle() {
    return (
        <View>
            <Text>Hi I'm a motorcycle</Text>
            <Text>Merek : {name}</Text>
            <Text>Type : {types.type}</Text>
            <Text>Model : {types.model}</Text>
            <Text>Harga : {types.harga}</Text>
        </View>
    )
}