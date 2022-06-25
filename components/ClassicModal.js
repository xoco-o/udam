import React from "react";
import { View, Modal, TouchableWithoutFeedback, ScrollView } from "react-native";
import s, { designWidth } from "../utils/getRelativeSize";

export default function ClassicModal({ visible = false, onDismiss, children }) {
    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", width: s(designWidth) }}>
                    <TouchableWithoutFeedback onPress={onDismiss}>
                        <View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }} />
                    </TouchableWithoutFeedback>
                    <View
                        style={{
                            backgroundColor: "white",
                            borderRadius: s(2),
                            marginVertical: s(30),
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                    >
                        {children}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
}
