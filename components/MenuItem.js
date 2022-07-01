import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MenuItem({ icon, label, onPress, onLongPress, underlayColor = colors.grey[300], hasChevron = false, value = "" }) {
    return (
        <TouchableHighlight underlayColor={underlayColor} onPress={onPress} onLongPress={onLongPress}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: s(15), paddingHorizontal: s(20) }}>
                {icon && <View style={{ marginRight: s(20) }}>{icon}</View>}

                <Text style={{ fontSize: s(16), fontSize: s(16), flex: 1 }}>{label}</Text>

                {!!value && <Text style={{ fontSize: s(13), color: colors.grey[400] }}>{value}</Text>}

                {hasChevron && (
                    <View style={{ marginLeft: s(15) }}>
                        <FontAwesome5 name="chevron-right" size={s(15)} color={colors.grey[400]} />
                    </View>
                )}
            </View>
        </TouchableHighlight>
    );
}
