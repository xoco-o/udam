import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Components from "./screens/Components";
import { RecoilRoot, useRecoilValue } from "recoil";
import { userState } from "./utils/recoilAtoms";
import GuestScreen from "./screens/Guest";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import s from "./utils/getRelativeSize";
import { primaryColor } from "./utils/constants";
import MineScreen from "./screens/Mine";
import InfoScreen from "./screens/Info";
import SettingsScreen from "./screens/Settings";

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
            </Stack.Navigator>
            <StatusBar style="dark" />
        </>
    );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
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
                name="Mine"
                component={MineScreen}
                options={{ tabBarLabel: "Миний", tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "person-circle" : "person-circle-outline"} color={color} size={size} /> }}
            />
            <Tab.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    tabBarLabel: "Мэдээлэл",
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ tabBarLabel: "Тохиргоо", tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "settings" : "settings-outline"} color={color} size={size} /> }}
            />
        </Tab.Navigator>
    );
}
