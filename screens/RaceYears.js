import { View, ScrollView } from "react-native";
import s from "../utils/getRelativeSize";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";
import { raceYears } from "../utils/sampleData";
import { useEffect } from "react";

export default function RaceYearsScreen({ navigation, route }) {
    const { title } = route?.params;

    useEffect(() => {
        navigation.setOptions({ headerTitle: title });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ margin: s(15) }}>
                    <Box color={colors.white}>
                        {raceYears.map((year, index) => (
                            <View key={year.id}>
                                <MenuItem label={year.name} hasChevron onPress={() => navigation.navigate("RaceWinners", { title: year.name })} />
                                {raceYears.length - 1 > index && <MenuBorder />}
                            </View>
                        ))}
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
