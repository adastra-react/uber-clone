import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';


const Map = () => {
    const origin = useSelector(selectOrigin)

    return (
             <MapView
                mapType="mutedStandard"
                style={tw`flex-1`}
                initialRegion={{
                    latitude: origin.location.lat,
                    longitude: origin.location.long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
    )
}

export default Map

const styles = StyleSheet.create({})
