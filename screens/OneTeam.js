import { ScrollView, View } from "react-native";
import ListItem from "../components/ListItem";
import s from "../utils/getRelativeSize";
import {useEffect, useState} from "react";
import API from "../utils/API";

export default function OneTeamsScreen({ route }) {
    const { club } = route.params;
    const [horse, setHorse] = useState();

    useEffect(() => {
        API.get("horse?club="+club.id, (res) => {
            if (res.success) {
                setHorse(res.payload);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {
                    horse ?
                    horse.map((item) => (
                    <ListItem
                        key={item.id}
                        title={item.name}
                        subtitle={item.club.name}
                        image={{ source: typeof item.image !== 'undefined' ? item.image.name +'_s.'+ item.image.ext : 'no-image', width: s(80), height: s(80), style: { borderRadius: s(40) } }}
                    />
                )):<></>
                }
            </ScrollView>
        </View>
    );
}
