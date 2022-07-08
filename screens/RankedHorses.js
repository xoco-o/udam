import { View, FlatList, Text } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import { useEffect } from "react";
import { rankedHorses } from "../utils/sampleData";
import colors from "../utils/colors";
import UserAvatar from "../components/UserAvatar";

export default function RankedHorsesScreen({ navigation, route }) {
    const { title } = route?.params;

    useEffect(() => {
        navigation.setOptions({ headerTitle: title });
    }, []);

    const renderItem = ({ item, index }) => <RankedHorseItem item={item} index={index} />;

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={rankedHorses} renderItem={renderItem} keyExtractor={(item) => item.id} ListFooterComponent={<View style={{ height: s(100) }} />} />
        </View>
    );
}

function RankedHorseItem({ item, index }) {
    return (
        <ListItem
            title={`${index + 1}. ${item.title}`}
            image={{ source: item.image.source, width: s(120), height: s(67.5) }}
            imageChild={
                <View style={{ position: "absolute", top: s(5), left: s(5), flexDirection: "row" }}>
                    <Medals color="orange" count={item.gold} />
                    <Medals color="teal" count={item.silver} />
                    <Medals color="deepOrange" count={item.bronze} />
                </View>
            }
            textChild={
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: s(5) }}>
                    <UserAvatar size={s(30)} />
                    <View style={{ flex: 1, marginLeft: s(5) }}>
                        <Text style={{ fontSize: s(14) }}>Н. Батхуяг</Text>
                        <Text style={{ fontSize: s(12), color: colors.grey[600] }}>Тод манлай</Text>
                    </View>
                </View>
            }
        />
    );
}

function Medals({ color, count }) {
    if (!count) return null;

    return (
        <View
            style={{
                width: s(20),
                height: s(20),
                backgroundColor: colors[color][200],
                borderRadius: s(10),
                borderWidth: s(2),
                borderColor: colors[color][300],
                justifyContent: "center",
                alignItems: "center",
                marginRight: s(5),
            }}
        >
            <Text style={{ fontSize: s(10), color: colors[color][900], fontWeight: "bold", textAlign: "center" }}>{count}</Text>
        </View>
    );
}