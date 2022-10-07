import { View, Text } from "react-native";
import s from "../utils/getRelativeSize";
import colors from "../utils/colors";
import React from "react";

export default function Medals({ color, count }) {
    if (!count) return null;

    return (
        <View
            style={{
                width: s(20),
                height: s(20),
                backgroundColor: colors[color][200],
                borderRadius: s(10),
                borderWidth: s(2),
                borderColor: colors[color][300],
                justifyContent: "center",
                alignItems: "center",
                marginRight: s(5),
            }}
        >
            <Text style={{ fontSize: s(10), color: colors[color][900], fontWeight: "bold", textAlign: "center" }}>{count}</Text>
        </View>
    );
}
