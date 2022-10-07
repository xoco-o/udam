import {View, FlatList, Text, TouchableOpacity} from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import React, {useEffect, useState} from "react";
import colors from "../utils/colors";
import UserAvatar from "../components/UserAvatar";
import API from "../utils/API";
import {useNavigation} from "@react-navigation/native";
import Medals from "../components/Medals";

export default function RankedHorsesScreen({ navigation, route }) {
    const { title, alias } = route?.params;
    const [rankedHorses, setRankedHorses] = useState([]);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        API.get("legend/horse?typeAlias="+alias, (res) => {
            if (res.success) {
                setRankedHorses(res.payload);
                setBool(true);
            }
        });
        navigation.setOptions({ headerTitle: title });
    }, []);

    const renderItem = ({ item, index }) => <RankedHorseItem item={item} index={index} />;

    return (
        bool?
        <View style={{ flex: 1 }}>
            <Text style={{ marginLeft: s(15),marginTop: s(15),fontWeight: '500', }}>Нийт: {rankedHorses.length}</Text>
            <FlatList data={rankedHorses} renderItem={renderItem} keyExtractor={(item) => item.id} ListFooterComponent={<View style={{ height: s(100) }} />} />
        </View>
            :
            <></>
    );
}

function RankedHorseItem({ item, index }) {
    const navigation = useNavigation();
    // console.log('-------+++11',item); api-s horse medal irehgui bga
    return (
        <ListItem
            title={`${item.horse.name}`}
            image={{ source: typeof item.horse.image !== 'undefined' ? item.horse.image.name +'_s.'+ item.horse.image.ext : 'no-image', width: s(120), height: s(67.5) }}
            imageChild={
                <View style={{ position: "absolute", top: s(5), left: s(5), flexDirection: "row" }}>
                    <Medals color="orange" count={item.horse.rewardGoldCount} />
                    <Medals color="grey" count={item.horse.rewardSilverCount} />
                    <Medals color="deepOrange" count={item.horse.rewardBronzeCount} />
                </View>
            }
            textChild={
            item.horse.coach &&
                <TouchableOpacity onPress={() => navigation.navigate("Coach", item.horse.coach.id)}>
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: s(5) }}>
                        <UserAvatar userImage={item.horse.coach.image && item.horse.coach.image.name+'_s.'+item.horse.coach.image.ext} size={s(30)} />
                        <View style={{ flex: 1, marginLeft: s(5) }}>
                            <Text style={{ fontSize: s(14) }}>{item.horse.coach.name}</Text>
                            {/*<Text style={{ fontSize: s(12), color: colors.grey[600] }}>Тод манлай</Text>*/}
                        </View>
                    </View>
                </TouchableOpacity>
            }
            onPress={() => navigation.navigate("ViewItems", { url: 'horse/'+item.horse.id })}
        />
    );
}
