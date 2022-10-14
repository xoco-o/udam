import {View, Text, ScrollView, Alert, TouchableOpacity} from "react-native";
import Box from "../components/Box";
import colors, {blueGrey, grey} from "../utils/colors";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import s from "../utils/getRelativeSize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserAvatar from "../components/UserAvatar";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { userState } from "../utils/recoilAtoms";
import {useRecoilState, useSetRecoilState,} from "recoil";
import React, {useEffect, useRef, useState} from "react";
import API from "../utils/API";
import urls from "../utils/urls";
import ListItem from "../components/ListItem";
import Medals from "../components/Medals";
import {useNavigation} from "@react-navigation/native";

export default function CoachScreen({ route }) {
    const [data, setData] = useState([]);
    const [horses, setHorses] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        API.get('coach/'+route.params, (res) => {
            if (res.success) {
                setData(res.payload);
            }
        });
        API.get('coach/horse/'+route.params+'/list', (res) => {
            if (res.success) {
                setHorses(res.payload);
            }
        });
    }, []);

    return (
        data?
        <View style={{ flex: 1}}>
            <ScrollView>
                <View style={{ marginHorizontal: s(10) }}>
                    <View style={{ alignItems: "center", marginVertical: s(30) }}>
                        <UserAvatar size={s(100)}  userImage={typeof data.image !== 'undefined' ? data.image.name +'_s.'+ data.image.ext : null}/>
                        <Text style={{ fontSize: s(16), marginTop: s(10), fontWeight: '500' }}>{data.name}</Text>
                    </View>

                    <Box color={colors.white}>
                        <MenuItem
                            label={typeof data.degree !== 'undefined' ?data.degree.name:''}
                            icon={<MaterialCommunityIcons name="trophy" size={s(20)} color={colors.yellow[600]} />}
                        />
                        <MenuItem label={typeof data.city !== 'undefined' ? data.city.id!== 1 ? data.city.name+' аймаг' : data.city.name:''} icon={<MaterialCommunityIcons name="map-marker" size={s(20)} color={colors.red[400]} />}/>
                        <MenuItem
                            label={typeof data.club !== 'undefined' ?data.club.name:''}
                            icon={<MaterialCommunityIcons name="fire" size={s(20)} color={colors.orange[600]}/>}
                        />
                        <MenuBorder />
                        <Text style={{ fontSize: s(16), margin: s(15), fontWeight: '500' }}>Морьд</Text>
                        {
                            horses?
                                horses.map((horse, index) => (
                                    <ListItem
                                        title={`${horse.name}`}
                                        image={{ source: typeof horse.image !== 'undefined' ? horse.image.path : 'no-image', width: s(120), height: s(67.5) }}
                                        imageChild={
                                            <View style={{ position: "absolute", top: s(5), left: s(5), flexDirection: "row" }}>
                                                <Medals color="orange" count={horse.rewardGoldCount} />
                                                <Medals color="grey" count={horse.rewardSilverCount} />
                                                <Medals color="deepOrange" count={horse.rewardBronzeCount} />
                                            </View>
                                        }
                                        onPress={() => navigation.navigate("ViewItems", { url: 'horse/'+horse.id })}
                                    />
                                ))
                                :<></>
                        }
                    </Box>
                </View>
            </ScrollView>
        </View>:<></>
    );
}
