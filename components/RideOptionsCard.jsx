import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/core';

const RideOptionsCard = () => {

    const navigation = useNavigation();

    const data = [
        {
            id: "Uber-X-123",
            title: "Uber X",
            multiplier: 1,
            image: "https://links.papareact.com/3pn"
        },
        {
            id: "Uber-X-456",
            title: "Uber XL",
            multiplier: 1.2,
            image: "https://links.papareact.com/5w8"
        },
        {
            id: "Uber-X-789",
            title: "Uber LUX",
            multiplier: 1.7,
            image: "https://links.papareact.com/7pf"
        },
    ]

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View >
                <TouchableOpacity onPress={() => navigation.navigate('NavigationCard')}
                    style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type="fontawesom"/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`} >Select a Ride</Text>
            </View>
           <FlatList data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image } }) => (
                    <TouchableOpacity style={tw`flex-row items-center justify-between px-10`} >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain"
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`} >
                            <Text style={tw`text-xl font-semibold`} >{title}</Text>
                            <Text>travel time</Text>
                        </View>
                        <Text style={tw`text-xl`} >$300</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
