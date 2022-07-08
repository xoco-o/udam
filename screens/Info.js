import { View, ScrollView, Image } from "react-native";
import s from "../utils/getRelativeSize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import MenuItem from "../components/MenuItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Box from "../components/Box";
import colors from "../utils/colors";

export default function InfoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
            <ScrollView>
                <View style={{ margin: s(15) }}>
                    <Box color={colors.white}>
                        <Image source={require("../assets/sample/1.jpg")} style={{ width: 345, height: 200, resizeMode: "cover" }} />
                    </Box>

                    <Box color={colors.white}>
                        <MenuItem
                            label="Мэдээ, нийтлэл"
                            icon={<MaterialCommunityIcons name="newspaper-variant-outline" size={s(20)} color={colors.blue[600]} />}
                            hasChevron
                            onPress={() => navigation.navigate("Articles")}
                        />
                    </Box>
                    <Box color={colors.white}>
                        <MenuItem label="Цуваа" icon={<MaterialCommunityIcons name="flag-checkered" size={s(20)} color={colors.grey[600]} />} hasChevron onPress={() => navigation.navigate("Races")} />
                    </Box>
                    <Box color={colors.white}>
                        <MenuItem
                            label="Төрийн түмэн эхүүд"
                            icon={<MaterialCommunityIcons name="medal-outline" size={s(20)} color={colors.orange[400]} />}
                            hasChevron
                            onPress={() => navigation.navigate("Ranks")}
                        />
                    </Box>
                    <Box color={colors.white}>
                        <MenuItem label="Галууд" icon={<MaterialCommunityIcons name="account-group-outline" size={s(20)} color={colors.green[400]} />} hasChevron onPress={() => alert("Тун удахгүй...")} />
                    </Box>
                    <Box color={colors.white}>
                        <MenuItem label="Бичлэг" icon={<MaterialCommunityIcons name="video-outline" size={s(20)} color={colors.red[400]} />} hasChevron onPress={() => alert("Тун удахгүй...")} />
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
