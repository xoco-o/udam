import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import noop from "../utils/noop";
import { horses } from "../utils/sampleData";
import BottomSheet from "./BottomSheet";
import { SolidButton } from "./Buttons";
import FormField from "./FormField";
import ListItem from "./ListItem";
import TextField from "./TextField";

export default function HorsePicker({ label, placeholder, help, value, onChange, disabled }) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    let selectedLabel = placeholder;

    const [closeRequested, setCloseRequested] = useState(false);

    function handleClose() {
        setOpen(false);
        setCloseRequested(false);
    }

    return (
        <FormField help={help} label={label}>
            <TouchableOpacity activeOpacity={disabled ? 1 : 0.5} onPress={disabled ? noop : () => setOpen(true)}>
                <View
                    style={{
                        flexDirection: "row",
                        paddingVertical: s(15),
                        borderRadius: s(15),
                        borderColor: open ? colors.blue[400] : colors.grey[400],
                        borderWidth: s(1),
                        backgroundColor: disabled ? colors.grey[200] : colors.white,
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: s(17),
                        paddingRight: s(17),
                    }}
                >
                    <Text
                        style={{
                            fontSize: s(15),
                            color: colors.grey[400],
                            flex: 1,
                        }}
                    >
                        {selectedLabel}
                    </Text>
                    <FontAwesome5 name="chevron-down" size={s(16)} />
                </View>
            </TouchableOpacity>

            <BottomSheet open={open} onClose={handleClose} closeRequested={closeRequested} height={Dimensions.get("window").height - s(150)}>
                <View style={{ flex: 1, height: Dimensions.get("window").height - s(150) }}>
                    <View style={{ paddingHorizontal: s(20), borderBottomWidth: s(1), borderBottomColor: colors.grey[300] }}>
                        <TextField placeholder="Хайх..." value={query} onChangeText={setQuery} />
                    </View>

                    <View style={{ flexGrow: 1, backgroundColor: colors.grey[100] }}>
                        <ScrollView style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0 }}>
                            {horses.map((item) => (
                                <ListItem title={item.title} subtitle={item.subtitle} image={{ source: item.image.source, width: s(120), height: s(67.5) }} />
                            ))}
                            <View style={{ height: s(100) }} />
                        </ScrollView>
                    </View>

                    <View style={{ padding: s(20), borderTopWidth: s(1), borderTopColor: colors.grey[300] }}>
                        <SolidButton>Морь шинээр нэмэх</SolidButton>
                    </View>
                </View>
            </BottomSheet>
        </FormField>
    );
}
