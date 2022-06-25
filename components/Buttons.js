import { TouchableHighlight, Text, TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import noop from "../utils/noop";

const initialContainerStyles = {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: s(25),
    paddingVertical: s(15),
    borderRadius: s(15),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: s(1),
    borderColor: colors.grey[200],
    backgroundColor: colors.grey[200],
};

const initialTextStyles = {
    fontWeight: "700",
    fontSize: s(13),
    lineHeight: s(13),
    marginTop: s(4),
    textTransform: "uppercase",
    color: colors.black,
};

export function BaseButton({ disabled = false, children, onPress = noop, onLongPress = noop, underlayColor, Touchable = TouchableOpacity, containerStyles = {}, textStyles = {} }) {
    return (
        <Touchable
            onPress={disabled ? noop : onPress}
            onLongPress={disabled ? noop : onLongPress}
            activeOpacity={underlayColor ? 1 : 0.5}
            underlayColor={underlayColor}
            style={{
                ...initialContainerStyles,
                ...containerStyles,
                opacity: disabled ? 0.5 : 1,
            }}
        >
            <Text style={{ ...initialTextStyles, ...textStyles }}>{children}</Text>
        </Touchable>
    );
}

export function SolidButton({ disabled, children, onPress, onLongPress, color = colors.black }) {
    return (
        <BaseButton disabled={disabled} onPress={onPress} onLongPress={onLongPress} containerStyles={{ borderColor: color, backgroundColor: color }} textStyles={{ color: colors.white }}>
            {children}
        </BaseButton>
    );
}

export function OutlinedButton({ disabled, children, onPress, onLongPress, color = colors.black }) {
    return (
        <BaseButton disabled={disabled} onPress={onPress} onLongPress={onLongPress} containerStyles={{ borderColor: color, backgroundColor: "transparent" }} textStyles={{ color: color }}>
            {children}
        </BaseButton>
    );
}

export function TextButton({ disabled, children, onPress, onLongPress, color = colors.black }) {
    return (
        <BaseButton
            disabled={disabled}
            Touchable={TouchableHighlight}
            underlayColor={colors.grey[300]}
            onPress={onPress}
            onLongPress={onLongPress}
            containerStyles={{ borderColor: "transparent", backgroundColor: "transparent" }}
            textStyles={{ color: color }}
        >
            {children}
        </BaseButton>
    );
}

export function PrimaryButton({ children, ...props }) {
    return (
        <SolidButton color={colors.orange[400]} {...props}>
            {children}
        </SolidButton>
    );
}

export function SecondaryButton({ children, ...props }) {
    return (
        <SolidButton color={colors.blue[400]} {...props}>
            {children}
        </SolidButton>
    );
}
