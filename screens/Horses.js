import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import lorem from "../utils/lorem";
import { useEffect } from "react";

export default function HorsesScreen({ navigation, route }) {
    useEffect(() => {
        navigation.setOptions({ headerTitle: "Гүү" });
    }, []);

    return (
        <View style={{ flex: 1, paddingTop: s(10) }}>
            <ListItem title={lorem.generateWords(5)} subtitle={lorem.generateWords(5)} image={{ source: require("../assets/temp/walkthrough/wt-1.jpg"), width: s(120), height: s(67.5) }} />
            <ListItem>
                <Text>heeloo</Text>
            </ListItem>
            <ListItem />
        </View>
    );
}
