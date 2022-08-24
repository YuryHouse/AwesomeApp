import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from "react";
import {Searchbar} from "react-native-paper";
import {ParallaxImage} from "react-native-snap-carousel";

export default function App() {
    const [titleText, setTitleText] = useState('Eats');
    const [searchQuery, setSearchQuery] = useState('');

    const onPressTitle = () => {
        setTitleText("Eats [pressed]");
    };
    const onChangeSearch = (query: any) => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Yandex_Eats_icon.svg/48px-Yandex_Eats_icon.svg.png',
                        }}
                    />
                    <Text style={styles.titleText} onPress={onPressTitle}>
                        {titleText}
                    </Text>
                </View>
                <Text>{'Delivery time >'}</Text>
            </View>
            <View>
            <Searchbar
                placeholder="Search your meal"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        marginTop: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        alignItems: 'center',
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});
