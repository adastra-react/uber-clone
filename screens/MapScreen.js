import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationCard from '../components/NavigationCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("HomeScreen")
            }}
             style={tw`bg-gray-100 p-1 absolute top-16 left-8 z-50 rounded-full shadow-lg`}>
                <Icon
                    name="home"
                />
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigationCard"
                        component={NavigationCard}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
