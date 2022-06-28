import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuestHomeScreen from "./GuestHome";
import GuestLoginScreen from "./GuestLogin";
import GuestSignupScreen from "./GuestSignup";

const Stack = createNativeStackNavigator();

export default function GuestScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GuestHome" component={GuestHomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="GuestLogin" component={GuestLoginScreen} options={{ headerBackTitle: "", headerTitle: "Нэвтрэх" }} />
            <Stack.Screen name="GuestSignup" component={GuestSignupScreen} options={{ headerBackTitle: "", headerTitle: "Бүртгүүлэх" }} />
        </Stack.Navigator>
    );
}
