import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/core';

const RideOptionsCard = () => {

    const navigation = useNavigation();

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
           <FlatList/>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
