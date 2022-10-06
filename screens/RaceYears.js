import {View, ScrollView, Text} from "react-native";
import s from "../utils/getRelativeSize";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";
import React, {useEffect, useState} from "react";
import API from "../utils/API";

export default function RaceYearsScreen({ navigation, route }) {
    const { title, id } = route?.params;
    const [raceYears, setRaceYears] = useState([]);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        API.get('horse/festival?categoryId='+id, (res) => {
            if (res.success) {
                setRaceYears(res.payload);
                setBool(true);
            }
        });
        navigation.setOptions({ headerTitle: title });
    }, []);

    return (
        bool ?
            <View style={{ flex: 1 }}>
                <Text style={{ marginLeft: s(15),marginTop: s(15),fontWeight: '500', }}>Нийт: {raceYears.length}</Text>
                <ScrollView>
                    <View style={{ margin: s(15) }}>
                        <Box color={colors.white}>
                            {

                                raceYears.map((race, index) => (
                                    <View key={race.id}>
                                        <MenuItem label={race.name} hasChevron onPress={() => navigation.navigate("RaceWinners", { title: race.name, id: race.id })} />
                                        {raceYears.length - 1 > index && <MenuBorder />}
                                    </View>
                                ))
                            }
                        </Box>
                    </View>
                </ScrollView>
            </View>
            :
            <></>
    );
}
