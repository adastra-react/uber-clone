import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
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
