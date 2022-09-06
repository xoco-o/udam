import { View, Text, ImageBackground, TouchableHighlight } from "react-native";
import s from "../utils/getRelativeSize";
import colors from "../utils/colors";
import noop from "../utils/noop";
import urls from "../utils/urls";

export default function ListItem({ image, title, subtitle, underlayColor = colors.grey[100], onPress = noop, onLongPress = noop, rootChild, imageChild, textChild }) {
    return (
        <TouchableHighlight
            underlayColor={underlayColor}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
                backgroundColor: colors.white,
                marginHorizontal: s(10),
                marginTop: s(10),
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
                        <ImageBackground source={{ uri: urls.resource + image.source}} style={{ backgroundColor: colors.grey[300], width: image.width, height: image.height, resizeMode: "cover" }}>
                            {imageChild}
                        </ImageBackground>
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

                    {textChild}
                </View>

                {rootChild}
            </View>
        </TouchableHighlight>
    );
}
