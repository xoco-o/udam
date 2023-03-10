import { View, ScrollView } from "react-native";
import s from "../utils/getRelativeSize";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";

export default function RanksScreen({ navigation }) {
    const ranks = [
        { id: "1", name: "Азарга", alias: 'AZARGA' },
        { id: "2", name: "Их нас", alias: 'IKHNAS' },
        { id: "3", name: "Сонгомол дээд", alias: 'SONGOMOL' },
    ];
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ margin: s(15) }}>
                    <Box color={colors.white}>
                        {ranks.map((rank, index) => (
                            <View key={rank.id}>
                                <MenuItem label={rank.name} hasChevron onPress={() => navigation.navigate("RankedHorses", { title: rank.name, alias: rank.alias })} />
                                {ranks.length - 1 > index && <MenuBorder />}
                            </View>
                        ))}
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
