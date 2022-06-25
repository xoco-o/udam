import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import s from "../utils/getRelativeSize";
import ClassicModal from "./ClassicModal";
import FormField from "./FormField";
import MenuItem from "./MenuItem";
import colors from "../utils/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import noop from "../utils/noop";

export default function SelectField({ label, placeholder, help, items, value, onChange, disabled }) {
    const [open, setOpen] = useState(false);

    const selectedItem = items.find((item) => item.value === value);

    let selectedLabel = placeholder;
    if (selectedItem) {
        selectedLabel = selectedItem.label;
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
                            color: selectedItem ? colors.black : colors.grey[400],
                            flex: 1,
                        }}
                    >
                        {selectedLabel}
                    </Text>
                    <FontAwesome5 name="chevron-down" size={s(16)} />
                </View>
            </TouchableOpacity>

            <ClassicModal visible={open} onDismiss={() => setOpen(false)}>
                <View style={{ width: s(300), paddingVertical: s(10) }}>
                    {items.length === 0 && <Text style={{ textAlign: "center", paddingVertical: s(10) }}>Хоосон</Text>}
                    {items.map((item) => (
                        <MenuItem
                            key={item.value}
                            label={item.label}
                            onPress={() => {
                                setOpen(false);
                                onChange(item.value);
                            }}
                        />
                    ))}
                </View>
            </ClassicModal>
        </FormField>
    );
}
