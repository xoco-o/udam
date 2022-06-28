import { TouchableHighlight, Text, TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import noop from "../utils/noop";

const initialContainerStyles = {
    flexDirection: "row",
    width: "100%",
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
            <Text numberOfLines={1} style={{ ...initialTextStyles, ...textStyles }}>
                {children}
            </Text>
        </Touchable>
    );
}

export function SolidButton({ children, color = colors.black, containerStyles, textStyles, ...props }) {
    return (
        <BaseButton containerStyles={{ borderColor: color, backgroundColor: color, ...containerStyles }} textStyles={{ color: colors.white, ...textStyles }} {...props}>
            {children}
        </BaseButton>
    );
}

export function OutlinedButton({ children, color = colors.black, containerStyles, textStyles, ...props }) {
    return (
        <BaseButton containerStyles={{ borderColor: color, backgroundColor: "transparent", ...containerStyles }} textStyles={{ color: color, ...textStyles }} {...props}>
            {children}
        </BaseButton>
    );
}

export function TextButton({ children, underlayColor = colors.grey[100], color = colors.black, containerStyles, textStyles, ...props }) {
    return (
        <BaseButton
            Touchable={TouchableHighlight}
            underlayColor={underlayColor}
            containerStyles={{ borderColor: "transparent", backgroundColor: "transparent", ...containerStyles }}
            textStyles={{ color: color, ...textStyles }}
            {...props}
        >
            {children}
        </BaseButton>
    );
}

export function InlineTextButton({ children, color = colors.black, containerStyles, textStyles, ...props }) {
    return (
        <BaseButton
            containerStyles={{ borderColor: "transparent", backgroundColor: "transparent", paddingVertical: s(5), paddingHorizontal: s(5), width: "auto", ...containerStyles }}
            textStyles={{ color: color, ...textStyles }}
            {...props}
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
