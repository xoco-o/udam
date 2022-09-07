import { ScrollView, View } from "react-native";
import ListItem from "../components/ListItem";
import s from "../utils/getRelativeSize";
import { users } from "../utils/sampleData";

export default function OneTeamsScreen({ route }) {
    const { club } = route.params;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {users.map((item) => (
                    <ListItem
                        key={item.id}
                        title={item.name}
                        subtitle={item.description}
                        image={{ source: item.image.source, width: s(80), height: s(80), style: { borderRadius: s(40) } }}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
