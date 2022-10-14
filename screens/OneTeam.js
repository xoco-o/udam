import { ScrollView, View } from "react-native";
import ListItem from "../components/ListItem";
import s from "../utils/getRelativeSize";
import {useEffect, useState} from "react";
import API from "../utils/API";
import {useNavigation} from "@react-navigation/native";

export default function OneTeamsScreen({ route }) {
    const { club } = route.params;
    const [coach, setCoach] = useState();
    const navigation = useNavigation();

    useEffect(() => {
        API.get('club/horse/'+club.id+'/coach', (res) => {
            if (res.success) {
                setCoach(res.payload);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {
                    coach ?
                        coach.map((item) => (
                    <ListItem
                        key={item.id}
                        title={item.name}
                        subtitle={item.club.name}
                        location={item.city.id!==1? item.city.name+' аймаг' : item.city.name}
                        image={{ source: typeof item.image !== 'undefined' ? item.image.name +'_s.'+ item.image.ext : 'no-image', width: s(80), height: s(80), style: { borderRadius: s(40)}}}
                        onPress={()=>navigation.navigate('Coach',item.id)}
                    />
                )):<></>
                }
            </ScrollView>
        </View>
    );
}
