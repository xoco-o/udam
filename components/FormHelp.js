import { View, Text } from "react-native";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";

export default function FormHelp({ disabled, children }) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: s(2), marginRight: s(5) }}>
            <Text style={{ textAlign: "right", flex: 1, fontSize: s(12), color: disabled ? colors.grey[400] : colors.grey[700] }}>{children}</Text>
        </View>
    );
}
