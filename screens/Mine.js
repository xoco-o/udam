import { useNavigation } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import s from "../utils/getRelativeSize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import colors from "../utils/colors";
import { horseTypes } from "../utils/sampleData";

export default function MineScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
            <ScrollView>
                <View style={{ margin: s(15) }}>
                    <Box color={colors.white}>
                        {horseTypes.map((type, index) => (
                            <View key={type.id}>
                                <MenuItem label={`${type.name} (${type.count})`} hasChevron onPress={() => navigation.navigate("Horses", { title: `${type.name} (${type.count})` })} />
                                {horseTypes.length - 1 > index && <MenuBorder />}
                            </View>
                        ))}
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
