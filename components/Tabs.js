import { View, TouchableOpacity, ScrollView } from "react-native";
import { BaseTag, SolidTag } from "./Tags";
import s from "../utils/getRelativeSize";
import { primaryColor } from "../utils/constants";

export default function Tabs({ value, onChange, items = [], containerStyles = {} }) {
    return (
        <View style={{ overflow: "hidden", height: s(30) }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", ...containerStyles }}>
                    {items.map((item) => (
                        <TouchableOpacity onPress={() => onChange(item.value)} key={item.value}>
                            {value === item.value ? <SolidTag color={primaryColor}>{item.label}</SolidTag> : <BaseTag>{item.label}</BaseTag>}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
