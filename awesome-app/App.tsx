import {StatusBar} from 'expo-status-bar';
import React, {useRef, useState} from "react";
import {Searchbar} from "react-native-paper";
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    SafeAreaView,
    Image,
    FlatList,
} from 'react-native';

const SECTION = [
    {
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/10/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1002/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1006/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1008/200',
            },
        ],
    },
    {
        title: 'Shops',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/10/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1002/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1006/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1008/200',
            },
        ],
    },
    {
        title: 'Restaurants',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Burgers',
                uri: 'https://cdn.icon-icons.com/icons2/1555/PNG/512/fast-food-icons-freeburger_107425.png',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1012/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1013/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1015/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1016/200',
            },
        ],
    },
    {
        title: 'Promos',
        horizontal: false,
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1020/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1024/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1027/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1035/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1038/200',
            },
        ],
    },
];

export type SectionArrayType = {
    title: string
    horizontal: boolean
    data: ArrayDataType[]
}

export type ArrayDataType = {
    key: string
    text: string
    uri: string
}


export default function App() {
    const [titleText, setTitleText] = useState('Eats');
    const [searchQuery, setSearchQuery] = useState('');

    const onPressTitle = () => {
        setTitleText("Eats [pressed]");
    };
    const onChangeSearch = (query: any) => setSearchQuery(query);

    const ListItem = ({ item }: any) => {
        return (
            <View style={styles.item}>
                <Image
                    source={{
                        uri: item.uri,
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        );
    };



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
            <SafeAreaView style={{ flex: 1 }}>
                <SectionList
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    stickySectionHeadersEnabled={false}
                    sections={SECTION}
                    renderSectionHeader={({ section }) => (
                        <>
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                            {section.horizontal ? (
                                <FlatList
                                    horizontal
                                    data={section.data}
                                    renderItem={({ item }) => <ListItem item={item} />}
                                    showsHorizontalScrollIndicator={false}
                                />
                            ) : null}
                        </>
                    )}
                    renderItem={({ item, section }) => {
                        if (section.horizontal) {
                            return null;
                        }
                        return <ListItem item={item} />;
                    }}
                />
            </SafeAreaView>
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
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#121212',
        marginTop: 20,
        marginBottom: 5,
    },
    item: {
        margin: 10,
    },
    itemPhoto: {
        width: 400,
        height: 300,
    },
    itemText: {
        color: '#1f1c1c',
        marginTop: 5,
    },
});
