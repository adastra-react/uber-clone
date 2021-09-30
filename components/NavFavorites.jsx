import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK"
    },
];

const NavFavorites = () => {
    return (
        <View>
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={(item) => {
                    <TouchableOpacity>
                        yo
                    </TouchableOpacity>
                }}
             />
        </View>
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
