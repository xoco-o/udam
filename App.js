import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Components from "./screens/Components";
import { RecoilRoot, useRecoilValue } from "recoil";
import { userState } from "./utils/recoilAtoms";
import GuestScreen from "./screens/Guest";

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

function Main() {
    return (
        <>
            <Components />
            <StatusBar style="dark" />
        </>
    );
}
