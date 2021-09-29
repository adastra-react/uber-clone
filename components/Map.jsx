import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';
import MapViewDirections from 'react-native-maps-directions';


const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    return (
             <MapView
                mapType="mutedStandard"
                style={tw`flex-1`}
                initialRegion={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {origin && destination && (
                    <MapViewDirections
                        origin={origin.description}
                        destination={destination.description}
                        apikey="AIzaSyCDjDmBmPA2GvySnlA1jBWjtDxyYlwcFWo"
                        strokeColor='black'
                        strokeWidth={3}
                    />
                )}

                {origin?.location && (
                    <Marker
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng
                        }}
                        title="Origin"
                        description={origin.description}
                        identifier="origin"
                    />
                )}
            </MapView>
    );
}

export default Map

const styles = StyleSheet.create({})
