import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import s from "../utils/getRelativeSize";

export default function Checkbox({ label, value, onValueChange, color = "#000" }) {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => onValueChange(!value)}>
            <View style={{ flexDirection: "row", alignItems: "flex-start", paddingHorizontal: s(5) }}>
                <View style={{ marginRight: s(13), marginTop: s(3) }}>
                    {value ? <FontAwesome5 name="check-square" size={s(18)} color={color} /> : <FontAwesome5 name="square" size={s(18)} color={color} />}
                </View>
                <Text style={{ fontSize: s(16), lineHeight: s(23.76), color: color }}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}
