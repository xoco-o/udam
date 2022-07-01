import { View, Text } from "react-native";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";

const initialContainerStyles = {
    flexDirection: "row",
    paddingVertical: s(8),
    paddingHorizontal: s(16),
    borderRadius: s(15),
    borderWidth: s(1),
    borderColor: colors.grey[200],
    backgroundColor: colors.grey[200],
    marginRight: s(8),
};

const initialTextStyles = {
    fontSize: s(12),
    lineHeight: s(12),
    color: colors.black,
};

export function BaseTag({ children, containerStyles = {}, textStyles = {} }) {
    return (
        <View style={{ ...initialContainerStyles, ...containerStyles }}>
            <Text numberOfLines={1} style={{ ...initialTextStyles, ...textStyles }}>
                {children}
            </Text>
        </View>
    );
}

export function SolidTag({ children, color = colors.black, containerStyles, textStyles, ...props }) {
    return (
        <BaseTag containerStyles={{ borderColor: color, backgroundColor: color, ...containerStyles }} textStyles={{ color: colors.white, ...textStyles }} {...props}>
            {children}
        </BaseTag>
    );
}
