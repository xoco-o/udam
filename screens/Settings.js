import { View, Text, ScrollView, Alert } from "react-native";
import Box from "../components/Box";
import colors from "../utils/colors";
import MenuItem from "../components/MenuItem";
import MenuBorder from "../components/MenuBorder";
import s from "../utils/getRelativeSize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserAvatar from "../components/UserAvatar";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { userState } from "../utils/recoilAtoms";
import {useRecoilState, useSetRecoilState,} from "recoil";
import {useNavigation} from "@react-navigation/native";

export default function SettingsScreen() {
    const [user,setUser] = useRecoilState(userState);
    const navigation = useNavigation();

    function logout() {
        Alert.alert("Гарах уу?", "", [
            { text: "Болих", style: "cancel", onPress: () => {} },
            {
                text: "Гарах",
                style: "destructive",
                onPress: () => {
                    setUser(null);
                },
            },
        ]);
    }

    return (
        <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
            <ScrollView>
                <View style={{ marginHorizontal: s(10) }}>
                    <View style={{ alignItems: "center", marginVertical: s(30) }}>
                        <UserAvatar size={s(100)} />
                        <Text style={{ fontSize: s(16), marginTop: s(10) }}>{user.givenName!==undefined? user.givenName : user.loginName!==undefined?user.loginName:''}</Text>
                        <Text style={{ fontSize: s(12), marginTop: s(5), color: colors.grey[600] }}>{user.email !== undefined ? user.email:''}</Text>
                    </View>

                    <Box color={colors.white}>
                        <MenuItem
                            label="Мэдээлэл засах"
                            icon={<MaterialCommunityIcons name="account-edit-outline" size={s(20)} color={colors.orange[400]} />}
                            hasChevron
                            onPress={() => alert("Тун удахгүй...")}
                        />
                    </Box>

                    <Box color={colors.white}>
                        <MenuItem label="Холбоо барих" icon={<MaterialCommunityIcons name="phone-outline" size={s(20)} color={colors.blue[400]} />} hasChevron onPress={() => navigation.navigate('StaticPage', {headTitle: 'Холбоо барих', url: 'p/1'})} />
                        <MenuBorder />
                        <MenuItem
                            label="Нууцлалын бодлого"
                            icon={<MaterialCommunityIcons name="shield-account-outline" size={s(20)} color={colors.blue[400]} />}
                            hasChevron
                            onPress={() => navigation.navigate('StaticPage', {headTitle: 'Нууцлалын бодлого', url: 'p/2'})}
                        />
                        <MenuBorder />
                        <MenuItem label="Үйлчилгээний нөхцөл" icon={<MaterialCommunityIcons name="playlist-check" size={s(20)} color={colors.blue[400]} />} hasChevron onPress={() => navigation.navigate('StaticPage', {headTitle: 'Үйлчилгээний нөхцөл', url: 'p/3'})} />
                       {/* <MenuBorder />
                        <MenuItem label="Аппын хувилбар" icon={<MaterialCommunityIcons name="information-outline" size={s(20)} color={colors.blue[400]} />} value="0.23.1" />*/}
                    </Box>

                    <Box color={colors.white}>
                        <MenuItem label="Гарах" icon={<MaterialCommunityIcons name="logout" size={s(20)} color={colors.red[400]} />} onPress={logout} />
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
