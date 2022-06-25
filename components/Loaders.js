import React from "react";
import { View, ActivityIndicator, Text, Modal } from "react-native";
import s from "../utils/getRelativeSize";
import colors from "../utils/colors";

export function BaseLoader({ text, size = "large", color = colors.black, textColor = colors.grey[600], containerStyle }) {
    return (
        <View style={containerStyle}>
            <ActivityIndicator size={size} color={color} />
            {!!text && <Text style={{ marginTop: s(5), color: textColor }}>{text}</Text>}
        </View>
    );
}

export function BlockLoader(props) {
    return <BaseLoader containerStyle={{ alignItems: "center", justifyContent: "center" }} {...props} />;
}

export function ScreenLoader(props) {
    return <BaseLoader containerStyle={{ flex: 1, alignItems: "center", justifyContent: "center" }} {...props} />;
}

export function ModalLoader(props) {
    return (
        <Modal animationType="fade" transparent={true} visible={true}>
            <BaseLoader containerStyle={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.5)" }} {...props} />
        </Modal>
    );
}
