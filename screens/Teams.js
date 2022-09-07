import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import ListItem from "../components/ListItem";
import API from "../utils/API";
import s from "../utils/getRelativeSize";

export default function TeamsScreen() {
    const [club, setClub] = useState();

    useEffect(() => {
        API.get("club", (res) => {
            if (res.success) {
                setClub(res.payload);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {club ? club.map((team) => <TeamItem item={team} key={team.id} />) : <></>}
                <View style={{ height: s(100) }} />
            </ScrollView>
        </View>
    );
}

function TeamItem({ item }) {
    const navigation = useNavigation();

    return (
        <ListItem
            title={item.name}
            image={{ source: typeof item.image !== "undefined" ? item.image.name + "_s." + item.image.ext : "no-image", width: s(70), height: s(70) }}
            onPress={() => navigation.navigate("OneTeam", { club: item })}
        />
    );
}
