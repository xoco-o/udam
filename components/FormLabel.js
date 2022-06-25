import { Text } from "react-native";
import s from "../utils/getRelativeSize";
import colors from "../utils/colors";

export default function FormLabel({ disabled, children, style }) {
    return <Text style={{ fontSize: s(16), marginLeft: s(5), lineHeight: s(22), marginBottom: s(5), color: disabled ? colors.grey[500] : colors.black, fontWeight: "500", ...style }}>{children}</Text>;
}
