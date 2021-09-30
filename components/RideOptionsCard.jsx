import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const RideOptionsCard = () => {


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View>
                <TouchableOpacity>
                    <Icon name="chevron-left" type="fontawesom" />
                </TouchableOpacity>
            </View>
            <Text style={tw`text-center py-5 text-xl`} >Select a Ride</Text>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
