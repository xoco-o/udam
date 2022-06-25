import React, { useState } from "react";
import { View, TextInput } from "react-native";
import s from "../utils/getRelativeSize";
import FormField from "./FormField";
import colors from "../utils/colors";

const TextField = React.forwardRef(({ label, help, disabled, children, multiline, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    return (
        <FormField disabled={disabled} help={help} label={label}>
            <View
                style={{
                    position: "relative",
                    flexDirection: "row",
                    paddingVertical: s(15),
                    minHeight: multiline ? s(100) : undefined,
                    borderRadius: s(15),
                    borderColor: focused ? colors.blue[400] : colors.grey[400],
                    borderWidth: s(1),
                    backgroundColor: disabled ? colors.grey[200] : colors.white,
                }}
            >
                <TextInput
                    ref={ref}
                    multiline={multiline}
                    onBlur={() => setFocused(false)}
                    onFocus={() => setFocused(true)}
                    editable={!disabled}
                    style={{
                        fontSize: s(15),
                        color: colors.black,
                        flex: 1,
                        paddingLeft: s(17),
                        paddingRight: s(17),
                    }}
                    {...props}
                />

                {children}
            </View>
        </FormField>
    );
});

export default TextField;
