import { View, ScrollView } from "react-native";
import s from "../utils/getRelativeSize";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";
import { races } from "../utils/sampleData";

export default function RacesScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ margin: s(15) }}>
                    <Box color={colors.white}>
                        {races.map((race, index) => (
                            <View key={race.id}>
                                <MenuItem label={race.name} hasChevron onPress={() => navigation.navigate("RaceYears", { title: race.name })} />
                                {races.length - 1 > index && <MenuBorder />}
                            </View>
                        ))}
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
