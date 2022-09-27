import { View, FlatList } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import { SecondaryButton } from "../components/Buttons";
import React, {useEffect, useState} from "react";
import { horses } from "../utils/sampleData";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";
import API from "../utils/API";
import urls from "../utils/urls";
import {ModalLoader} from "../components/Loaders";
import {useNavigation} from "@react-navigation/native";

export default function HorsesScreen({ navigation, route }) {
    const { title, alias } = route?.params;
    const [data, setData] = useState([]);
    let url;
    if(alias==='ALL')url='client/horse';
    else url=`client/horse/horseAge/${alias}`;
    useEffect(() => {
        API.get(url, (res) => {
            if (res.success) {
                setData(res.payload);
            }
        });
        navigation.setOptions({ headerTitle: title });
    }, []);
    const renderItem = ({ item }) => <HorseListItem item={item} />;

    return (
        <View style={{ flex: 1 }}>
            {data?
                <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} ListFooterComponent={<View style={{ height: s(100) }} />} />: <ModalLoader text="Уншиж байна" />
            }
            {/*<View style={{ position: "absolute", bottom: s(25), right: s(15) }}>
                <SecondaryButton containerStyles={{ height: s(60), width: s(60), borderRadius: s(30) }} icon={<AntDesign name="plus" size={s(20)} color={colors.white} />} />
            </View>*/}
        </View>
    );
}

function HorseListItem({ item }) {
    const navigation = useNavigation();
    return <ListItem title={item.name} /*subtitle={item.subtitle}*/ image={{ source: typeof item.image !== 'undefined' ? item.image.path : 'no-image', width: s(120), height: s(67.5) }}
                     onPress={() => navigation.navigate("ViewItems", { url: 'horse/'+item.id })}
    />;
}
