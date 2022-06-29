import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import Box from "../components/Box";
import colors from "../utils/colors";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import s from "../utils/getRelativeSize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserAvatar from "../components/UserAvatar";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function SettingsScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ marginHorizontal: s(10), paddingTop: getStatusBarHeight() }}>
                    <View style={{ alignItems: "center", marginVertical: s(30) }}>
                        <UserAvatar size={s(100)} />
                        <Text style={{ fontSize: s(16), marginTop: s(10) }}>Эрдэнэцогт Амгаланбаатар</Text>
                        <Text style={{ fontSize: s(12), marginTop: s(5), color: colors.grey[600] }}>a.erdenetsogt@gmail.com</Text>
                    </View>

                    <Box color={colors.white}>
                        <MenuItem
                            label="Мэдээлэл засах"
                            icon={<MaterialCommunityIcons name="account-edit-outline" size={s(20)} color={colors.orange[400]} />}
                            hasChevron
                            onPress={() => alert("onPress")}
                            onLongPress={() => alert("onLongPress")}
                        />
                    </Box>

                    <Box color={colors.white}>
                        <MenuItem
                            label="Холбоо барих"
                            icon={<MaterialCommunityIcons name="phone-outline" size={s(20)} color={colors.blue[400]} />}
                            hasChevron
                            onPress={() => alert("onPress")}
                            onLongPress={() => alert("onLongPress")}
                        />
                        <MenuBorder />
                        <MenuItem
                            label="Нууцлалын бодлого"
                            icon={<MaterialCommunityIcons name="shield-account-outline" size={s(20)} color={colors.blue[400]} />}
                            hasChevron
                            onPress={() => alert("onPress")}
                            onLongPress={() => alert("onLongPress")}
                        />
                        <MenuBorder />
                        <MenuItem
                            label="Үйлчилгээний нөхцөл"
                            icon={<MaterialCommunityIcons name="playlist-check" size={s(20)} color={colors.blue[400]} />}
                            hasChevron
                            onPress={() => alert("onPress")}
                            onLongPress={() => alert("onLongPress")}
                        />
                        <MenuBorder />
                        <MenuItem label="Аппын хувилбар" icon={<MaterialCommunityIcons name="information-outline" size={s(20)} color={colors.blue[400]} />} value="0.23.1" />
                    </Box>

                    <Box color={colors.white}>
                        <MenuItem label="Гарах" icon={<MaterialCommunityIcons name="logout" size={s(20)} color={colors.red[400]} />} onPress={() => alert("onPress")} />
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
