import { View, Text } from "react-native";
import s from "../utils/getRelativeSize";
import colors from "../utils/colors";

export default function Box({ title, children, color = colors.grey[100] }) {
    return (
        <View style={{ marginBottom: s(15) }}>
            {title && <Text style={{ color: colors.grey[400], fontSize: s(12), marginBottom: s(5), marginLeft: s(10) }}>{title}</Text>}
            <View style={{ backgroundColor: color, borderRadius: s(10), overflow: "hidden" }}>{children}</View>
        </View>
    );
}
