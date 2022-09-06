import { View, ScrollView } from "react-native";
import s from "../utils/getRelativeSize";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";
import React, {useEffect, useState} from "react";
import API from "../utils/API";

export default function RanksScreen({ navigation }) {
    const [ranks, setRanks] = useState();
    const [bool, setBool] = useState(false);

    useEffect(() => {
        API.get("legend/horse", (res) => {
            if (res.success) {
                setRanks(res.payload);
                setBool(true);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ margin: s(15) }}>
                    <Box color={colors.white}>
                        {
                            bool ?
                            ranks.map((rank, index) => (
                            <View key={rank.id}>
                                <MenuItem label={rank.horse.name} hasChevron onPress={() => navigation.navigate("RankedHorses", { title: rank.horse.name, id: rank.horse.id })} />
                                {ranks.length - 1 > index && <MenuBorder />}
                            </View>
                        )):<></>
                        }
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
