import {View, Text, ScrollView, useWindowDimensions} from "react-native";
import Box from "../components/Box";
import colors from "../utils/colors";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import s from "../utils/getRelativeSize";
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import React, {useEffect, useState} from "react";
import API from "../utils/API";
import RenderHTML from "react-native-render-html";

export default function StaticPageScreen({route}) {
    const [response, setResponse] = useState();
    const { width } = useWindowDimensions();

    useEffect(() => {
        API.get(route.params.url, (res) => {
            if (res.success) {
                setResponse(res.payload.text);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
            <ScrollView>
                <View style={{ marginHorizontal: s(10) }}>
                    <Box color={colors.white}>
                        <View style={{paddingHorizontal: s(5)}}>
                            {
                                response &&
                                <RenderHTML
                                    contentWidth={width}
                                    source={{
                                        html: response,
                                    }}
                                    baseStyle={{ fontSize: s(16), lineHeight: s(22.5) }}
                                />
                            }
                        </View>
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
