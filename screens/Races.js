import { View, ScrollView } from "react-native";
import React, {useEffect, useState} from 'react';
import s from "../utils/getRelativeSize";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";
import API from "../utils/API";


export default function RacesScreen({ navigation }) {
    const [races, setRaces] = useState();

    useEffect(() => {
        API.get("festival/category", (res) => {
            if (res.success) {
                setRaces(res.payload);
            }
        });
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ margin: s(15) }}>
                    <Box color={colors.white}>
                        {
                            races ?
                            races.map((race, index) => (
                            <View key={race.id}>
                                <MenuItem label={race.name} hasChevron onPress={() => navigation.navigate("RaceYears", { title: race.name, id: race.id })} />
                                {races.length - 1 > index && <MenuBorder />}
                            </View>
                        )):<></>

                        }
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
