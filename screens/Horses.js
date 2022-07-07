import { View, FlatList } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import { SecondaryButton } from "../components/Buttons";
import { useEffect } from "react";
import { horses } from "../utils/sampleData";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";

export default function HorsesScreen({ navigation, route }) {
    const { title } = route?.params;

    useEffect(() => {
        navigation.setOptions({ headerTitle: title });
    }, []);

    const renderItem = ({ item }) => <HorseListItem item={item} />;

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={horses} renderItem={renderItem} keyExtractor={(item) => item.id} ListFooterComponent={<View style={{ height: s(100) }} />} />

            <View style={{ position: "absolute", bottom: s(25), right: s(15) }}>
                <SecondaryButton containerStyles={{ height: s(60), width: s(60), borderRadius: s(30) }} icon={<AntDesign name="plus" size={s(20)} color={colors.white} />} />
            </View>
        </View>
    );
}

function HorseListItem({ item }) {
    return <ListItem title={item.title} subtitle={item.subtitle} image={{ source: item.image.source, width: s(120), height: s(67.5) }} />;
}
