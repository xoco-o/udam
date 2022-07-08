import { View, ScrollView } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import { teams } from "../utils/sampleData";

export default function TeamsScreen() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {teams.map((team) => (
                    <TeamItem item={team} key={team.id} />
                ))}
                <View style={{ height: s(100) }} />
            </ScrollView>
        </View>
    );
}

function TeamItem({ item }) {
    return <ListItem title={item.name} image={{ source: item.image.source, width: s(70), height: s(70) }} />;
}
