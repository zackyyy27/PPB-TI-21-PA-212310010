import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default function Bicycle() {
    const city = "south west";
    const peoples = [{ name: 'Farah', fams: 'Sister' }, { name: 'Aulia', fams: 'Brother' }];
    return (
        <View>
            <Text>Hi i'm a Bicycle</Text>
            <TakeARide sabeb={peoples} />
            {Place2Go(city)}
            <View>
                <Text>Sepeda Gunung</Text>
                <Image source={{ uri: "https://trexsporting.com/images/products/187-o_oPoPoG3u.png" }} style={{ width: 250, height: 200 }} />
            </View>

            <View>
                <Text>Sepeda Lipat</Text>
                <Image source={require("../../assets/pacific-2990.jpg")} style={{ width: 300, height: 200 }} />

            </View>
        </View>
    )
}

const TakeARide = ({ sabeb }) => {
    return (
        <View>
            <Text>Let's go riding with us:</Text>
            {sabeb.map((v, index) => (
                <View key={index}>
                    <Text>{v.name} / my {v.fams}</Text>
                </View>
            ))}
        </View>
    )
};

function Place2Go(value) {
    return <Text>We'r going to {value} now, come on</Text>
}