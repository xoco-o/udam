import { EvilIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import BottomSheet from "./components/BottomSheet";
import MenuItem from "./components/MenuItem";
import AdsScreen from "./screens/Ads";
import ArticlesScreen from "./screens/Articles";
import Components from "./screens/Components";
import CreateAdScreen from "./screens/CreateAd";
import CreateHorseScreen from "./screens/CreateHorse";
import GuestScreen from "./screens/Guest";
import HorsesScreen from "./screens/Horses";
import InfoScreen from "./screens/Info";
import MineScreen from "./screens/Mine";
import OneArticleScreen from "./screens/OneArticle";
import OneTeamsScreen from "./screens/OneTeam";
import RacesScreen from "./screens/Races";
import RaceWinnersScreen from "./screens/RaceWinners";
import RaceYearsScreen from "./screens/RaceYears";
import RankedHorsesScreen from "./screens/RankedHorses";
import RanksScreen from "./screens/Ranks";
import SettingsScreen from "./screens/Settings";
import TeamsScreen from "./screens/Teams";
import { primaryColor } from "./utils/constants";
import s from "./utils/getRelativeSize";
import { addSheetOpenState, userState } from "./utils/recoilAtoms";
import ViewItemsScreen from "./screens/ViewItems";

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <UserProvider>
                    <Main />
                </UserProvider>
            </NavigationContainer>
        </RecoilRoot>
    );
}

function UserProvider({ children }) {
    const user = useRecoilValue(userState);
    if (!user) return <GuestScreen />;
    return children;
}

const Stack = createNativeStackNavigator();

function Main() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Components" component={Components} />
                <Stack.Screen name="Horses" component={HorsesScreen} options={{ headerBackTitle: "", headerTitle: "" }} />
                <Stack.Screen name="Races" component={RacesScreen} options={{ headerBackTitle: "", headerTitle: "Уралдаанууд" }} />
                <Stack.Screen name="RaceYears" component={RaceYearsScreen} options={{ headerBackTitle: "", headerTitle: "" }} />
                <Stack.Screen name="RaceWinners" component={RaceWinnersScreen} options={{ headerBackTitle: "", headerTitle: "" }} />
                <Stack.Screen name="Articles" component={ArticlesScreen} options={{ headerBackTitle: "", headerTitle: "Мэдээ, нийтлэл" }} />
                <Stack.Screen name="OneArticle" component={OneArticleScreen} options={{ headerBackTitle: "", headerTitle: "Мэдээ" }} />
                <Stack.Screen name="Ranks" component={RanksScreen} options={{ headerBackTitle: "", headerTitle: "Төрийн түмэн эхүүд" }} />
                <Stack.Screen name="RankedHorses" component={RankedHorsesScreen} options={{ headerBackTitle: "", headerTitle: "" }} />
                <Stack.Screen name="Teams" component={TeamsScreen} options={{ headerBackTitle: "", headerTitle: "Галууд" }} />
                <Stack.Screen name="ViewItems" component={ViewItemsScreen} options={{ headerBackTitle: "", headerTitle: "" }} />
                <Stack.Screen
                    name="OneTeam"
                    component={OneTeamsScreen}
                    options={({ route }) => ({ headerBackTitle: "", headerTitle: route.params.club.name })}
                />
                <Stack.Screen name="CreateAd" component={CreateAdScreen} options={{ headerBackTitle: "", headerTitle: "Зар нэмэх" }} />
                <Stack.Screen name="CreateHorse" component={CreateHorseScreen} options={{ headerBackTitle: "", headerTitle: "Адуу нэмэх" }} />
            </Stack.Navigator>
            <StatusBar style="dark" />
            <AddSheet />
        </>
    );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
    const setAddSheetOpen = useSetRecoilState(addSheetOpenState);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: primaryColor,
                tabBarInactiveTintColor: `rgba(0,0,0,0.4)`,
                tabBarLabelStyle: { textTransform: "uppercase", fontSize: s(8), marginBottom: s(5), fontWeight: "bold" },
            }}
        >
            <Tab.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    tabBarLabel: "Мэдээлэл",
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "newspaper" : "newspaper-outline"} color={color} size={size - 3} />,
                }}
            />
            <Tab.Screen
                name="Ads"
                component={AdsScreen}
                options={{
                    tabBarLabel: "Зар",
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "megaphone" : "megaphone-outline"} color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Add"
                component={View}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => <EvilIcons name="plus" color={color} size={s(45)} />,
                    tabBarLabelStyle: { display: "none" },
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        setAddSheetOpen(true);
                    },
                }}
            />
            <Tab.Screen
                name="Mine"
                component={MineScreen}
                options={{
                    tabBarLabel: "Миний",
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "person-circle" : "person-circle-outline"} color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Тохиргоо",
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "settings" : "settings-outline"} color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
}

function AddSheet() {
    const [addSheetOpen, setAddSheetOpen] = useRecoilState(addSheetOpenState);
    const [closeRequested, setCloseRequested] = useState(false);
    const navigation = useNavigation();

    function handleClose() {
        setAddSheetOpen(false);
        setCloseRequested(false);
    }

    function handleAddPress(name) {
        switch (name) {
            case "horse":
                navigation.navigate("CreateHorse");
                break;
            case "ad":
                navigation.navigate("CreateAd");
                break;
            case "club":
                break;
        }

        setCloseRequested(true);
    }

    const itemCount = 3;

    return (
        <BottomSheet open={addSheetOpen} onClose={handleClose} closeRequested={closeRequested} height={s(50 * itemCount) + 25}>
            <View style={{ flex: 1 }}>
                <MenuItem
                    hasChevron
                    icon={
                        <View style={{ width: s(25) }}>
                            <FontAwesome5 name="horse" size={s(16)} />
                        </View>
                    }
                    label="Морь нэмэх"
                    onPress={() => handleAddPress("horse")}
                />
                <MenuItem
                    hasChevron
                    icon={
                        <View style={{ width: s(25) }}>
                            <FontAwesome5 name="adversal" size={s(16)} />
                        </View>
                    }
                    label="Зар нэмэх"
                    onPress={() => handleAddPress("ad")}
                />
                <MenuItem
                    hasChevron
                    icon={
                        <View style={{ width: s(25) }}>
                            <FontAwesome5 name="users" size={s(16)} />
                        </View>
                    }
                    label="Гал нэмэх"
                    onPress={() => handleAddPress("club")}
                />
            </View>
        </BottomSheet>
    );
}
