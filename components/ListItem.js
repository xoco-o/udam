import { View, Text, Image, TouchableHighlight } from "react-native";
import s from "../utils/getRelativeSize";
import colors from "../utils/colors";
import noop from "../utils/noop";

export default function ListItem({ image, title, subtitle, underlayColor = colors.grey[100], onPress = noop, onLongPress = noop, children }) {
    return (
        <TouchableHighlight
            underlayColor={underlayColor}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
                backgroundColor: colors.white,

                marginHorizontal: s(10),
                marginBottom: s(10),
                padding: s(10),
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.0,

                elevation: 1,
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {image && (
                    <>
                        <Image source={image.source} style={{ width: image.width, height: image.height, resizeMode: "cover" }} />
                    </>
                )}

                <View style={{ padding: s(10), flex: 1 }}>
                    {title && (
                        <>
                            <Text style={{ marginBottom: s(5), fontSize: s(14) }}>{title}</Text>
                        </>
                    )}
                    {subtitle && (
                        <>
                            <Text style={{ marginBottom: s(5), fontSize: s(12), marginTop: s(5), color: colors.grey[600] }}>{subtitle}</Text>
                        </>
                    )}

                    {children}
                </View>
            </View>
        </TouchableHighlight>
    );
}
