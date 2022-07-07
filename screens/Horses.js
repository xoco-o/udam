import { View, FlatList } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import lorem from "../utils/lorem";
import { useEffect } from "react";
import { horses } from "../utils/sampleData";

export default function HorsesScreen({ navigation, route }) {
    const { title } = route?.params;

    useEffect(() => {
        navigation.setOptions({ headerTitle: title });
    }, []);

    const renderItem = ({ item }) => <HorseListItem item={item} />;

    return (
        <View style={{ flex: 1, paddingVertical: s(10) }}>
            <FlatList data={horses} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
    );
}

function HorseListItem({ item }) {
    return <ListItem title={item.title} subtitle={item.subtitle} image={{ source: item.image.source, width: s(120), height: s(67.5) }} />;
}
