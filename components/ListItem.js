import { ImageBackground, Text, TouchableHighlight, View } from "react-native";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import noop from "../utils/noop";
import urls from "../utils/urls";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

export default function ListItem({
    image,
    title,
    subtitle,
    underlayColor = colors.grey[100],
    onPress = noop,
    onLongPress = noop,
    rootChild,
    imageChild,
    location,
    textChild,
}) {
    // console.log('33333333',urls.resource + image.source)
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
                        <ImageBackground
                            source={image.source !== "no-image" ? { uri: urls.resource + image.source } : require("../assets/no-image.png")}
                            style={{ backgroundColor: colors.grey[300], width: image.width, height: image.height, resizeMode: "cover", ...image.style }}
                        >
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
                    {location && (
                        <>
                            <Text style={{ marginBottom: s(5), fontSize: s(13), marginTop: s(5), color: colors.grey[600] }}><MaterialCommunityIcons name="map-marker" size={s(15)} color={colors.grey[600]} /> {location}</Text>
                        </>
                    )}
                    {textChild}
                </View>
                {rootChild}
            </View>
        </TouchableHighlight>
    );
}
