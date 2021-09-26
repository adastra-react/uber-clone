import React from 'react'
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from "@env"

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={tw`bg-white h-full`} >
            <View style={tw`p-5`} >
                <Image 
                    style={{width: 100, height: 100, resizeMode: 'contain'}}
                    source={{uri: `https://links.papareact.com/gzs`}}
                />

                <GooglePlacesAutocomplete
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    placeholder="Where From?"
                />

                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    // text: {
    //     color: 'blue'
    // }
})
