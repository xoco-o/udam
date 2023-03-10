import { View, ScrollView, Text } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import React, { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import colors from "../utils/colors";
import UserAvatar from "../components/UserAvatar";
import API from "../utils/API";
import {useNavigation} from "@react-navigation/native";

export default function RaceWinnersScreen({ navigation, route }) {
    const { title, id } = route?.params;
    const [typeId, setTypeId] = useState();
    const [raceTypes, setRaceTypes] = useState();
    const [raceWinners, setRaceWinners] = useState([]);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        API.get('horse/festival/'+id+'/horseTournament', (res) => {
            if (res.success) {
                setRaceTypes(res.payload);
                setTypeId(res.payload[0].id);
                setBool(true);
            }
        });
        navigation.setOptions({ headerTitle: title });
    }, []);
    useEffect(() => {
        API.get('horseTournament/'+typeId+'/reward', (res) => {
            if (res.success) {
                setRaceWinners(res.payload);
            }
        });
    }, [typeId]);

    return (
        <View style={{ flex: 1 }}>
            {/*{console.log('------', typeId, '+++++', raceWinners)}*/}
            <View
                style={{
                    paddingVertical: s(15),
                    backgroundColor: colors.white,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.0,
                    elevation: 1,
                    zIndex: 1,
                }}
            >
                {
                    bool?
                        <Tabs
                            value={typeId}
                            onChange={setTypeId}
                            items={
                                raceTypes.map((type) => {
                                    return {
                                        label: type.horseAge,
                                        value: type.id,
                                    };
                                })
                            }
                            containerStyles={{ paddingHorizontal: s(15) }}
                        /> : <Text style={{ margin: 20, fontSize: 16, color: '#ccc'}}>???????????? ??????????.</Text>
                }
            </View>
            {
                raceWinners?
                    <View>
                        <Text style={{ marginLeft: s(15),marginTop: s(15),fontWeight: '500', }}>????????: {raceWinners.length}</Text>
                        <ScrollView>
                            {
                                raceWinners.map((winner) => (
                                    <WinnerItem item={winner} key={winner.id} />
                                ))}
                            <View style={{ height: s(100) }} />
                        </ScrollView>
                    </View>
                    :
                    <></>
            }
        </View>
    );
}

function WinnerItem({ item }) {
    const navigation = useNavigation();
    let winnerColor = "deepOrange";
    if (item.name === '?????????? ????????????') {
        winnerColor = "orange";
    } else if (item.name === '???????? ??????????') {
        winnerColor = "grey";
    } else if (item.position < 6) {
        winnerColor = "deepOrange";
    }

    return (
        <ListItem
            title={item.horse.name}
            image={{ source: typeof item.image !== 'undefined' ? item.image.name +'_s.'+ item.image.ext : 'no-image', width: s(120), height: s(67.5) }}
            //ezelsen bair oruulaagui tul tailbar bolgow
            /*imageChild={
                <View
                    style={{
                        position: "absolute",
                        top: s(5),
                        left: s(5),
                        width: s(20),
                        height: s(20),
                        backgroundColor: colors[winnerColor][200],
                        borderRadius: s(10),
                        borderWidth: s(2),
                        borderColor: colors[winnerColor][300],
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: s(10), color: colors[winnerColor][900], fontWeight: "bold", textAlign: "center" }}>{item.position}</Text>
                </View>
            }*/
            textChild={
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: s(5) }}>
                    <UserAvatar userImage={item.horse.coach.image && item.horse.coach.image.name+'_s.'+item.horse.coach.image.ext} size={s(30)} />
                    <View style={{ flex: 1, marginLeft: s(5) }}>
                        <Text style={{ fontSize: s(14) }}>{typeof item.horse.coach !== 'undefined'?item.horse.coach.name:''}</Text>
                        {/*<Text style={{ fontSize: s(12), color: colors.grey[600] }}>?????? ????????????</Text>*/}
                    </View>
                </View>
            }
            onPress={() => navigation.navigate("ViewItems", { url: 'horse/'+item.horse.id })}
        />
    );
}
