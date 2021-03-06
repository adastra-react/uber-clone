import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { setDestination } from '../slices/navSlice';
import NavFavorites from './NavFavorites';


const NavigationCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`} >
            <Text style={tw`text-center py-5 text-xl`} >Good Morning Sunskull</Text>
            <View style={[tw`border-t border-gray-200 flex-shrink`]} >
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where To"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location:details.geometry.location,
                                description: data.description
                            }));
                            navigation.navigate('RideOptionsCard')
                        }}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        styles={inputBoxStyles}
                        query={{
                            key: 'AIzaSyCDjDmBmPA2GvySnlA1jBWjtDxyYlwcFWo',
                            language: 'en'
                        }}
                    />
                </View>
                <NavFavorites/>
                <View style={tw`flex-row bg-white justify-evenly py-2 mt-9 border-t border-gray-100`} >
                    <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`} 
                        onPress={() => {
                            navigation.navigate("RideOptionsCard")
                        }}
                    >
                        <Icon
                            name="car"
                            type="font-awesome"
                            color="white"
                            size={16}
                        />
                        <Text style={tw`text-white text-center`} >Rides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full`} >
                        <Icon
                            name="fast-food-outline"
                            type="ionicon"
                            color="black"
                            size={16}
                        />
                        <Text style={tw`text-center`} >Eats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigationCard

const inputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
