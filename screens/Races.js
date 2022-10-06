import {View, ScrollView, Text} from "react-native";
import React, {useEffect, useState} from 'react';
import s from "../utils/getRelativeSize";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";
import API from "../utils/API";


export default function RacesScreen({ navigation }) {
    const [races, setRaces] = useState([]);
    let n;
    useEffect(() => {
        API.get("festival/category", (res) => {
            if (res.success) {
                setRaces(res.payload);
            }
        });
    }, []);
    return (
        races ?
            <View style={{ flex: 1 }}>
                <Text style={{ marginLeft: s(15),marginTop: s(15),fontWeight: '500', }}>Нийт: {races.length}</Text>
                <ScrollView>
                    <View style={{ margin: s(15) }}>
                        {
                            races.map((race, index) => (
                                <View key={race.id}>
                                    <MenuItem label={index+1+'. '+race.name} hasChevron onPress={() => navigation.navigate("RaceYears", { title: race.name, id: race.id })} />
                                    {races.length - 1 > index && <MenuBorder />}
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>

            </View>
            :
            <></>
    );
}
