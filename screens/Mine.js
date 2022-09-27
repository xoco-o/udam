import { View, ScrollView } from "react-native";
import s from "../utils/getRelativeSize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";
import { horseTypes } from "../utils/sampleData";
import {useEffect, useState} from "react";
import API from "../utils/API";

export default function MineScreen({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.get("client/horse/report/horseAge", (res) => {
            if (res.success) {
                setData(res.payload);
            }
        });
    }, []);
    return (
        <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
            <ScrollView>
                <View style={{ margin: s(15) }}>
                    <Box color={colors.white}>
                        {data.map((type, index) => (
                            <View key={index}>
                                <MenuItem label={`${type.label} (${type.count})`} hasChevron onPress={() => navigation.navigate("Horses", { title: `${type.label} (${type.count})`,alias: `${type.alias}` })} />
                                {type.length - 1 > index && <MenuBorder />}
                            </View>
                        ))}
                        <MenuItem label={`Бүгд`} hasChevron onPress={() => navigation.navigate("Horses", { title: 'Бүгд',alias: 'ALL' })} />
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
