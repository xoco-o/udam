import React from "react";
import { View } from "react-native";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";

export default function MenuBorder({ color = colors.grey[300] }) {
    return <View style={{ borderTopWidth: s(1), borderColor: color }} />;
}
