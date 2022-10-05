import { View, ScrollView, Text, ImageBackground } from "react-native";
import colors from "../utils/colors";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import s, { designWidth } from "../utils/getRelativeSize";
import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import lorem from "../utils/lorem";

export default function GuestHomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: colors.grey[900] }}>
            <View style={{ flex: 1 }}>
                <Walkthrough />
            </View>
            <View style={{ position: "absolute", right: 0, left: 0, bottom: s(30) }}>
                <View style={{ flexDirection: "row", marginHorizontal: s(10) }}>
                    <View style={{ flex: 1, marginRight: s(15) }}>
                        <PrimaryButton onPress={() => navigation.navigate("GuestLogin")}>Нэвтрэх</PrimaryButton>
                    </View>
                    <View style={{ flex: 1 }}>
                        <SecondaryButton onPress={() => navigation.navigate("GuestSignup")}>Бүртгүүлэх</SecondaryButton>
                    </View>
                </View>
            </View>
            <StatusBar style="light" />
        </View>
    );
}

const sampleList = [
    {
        id: 1,
        image: require("../assets/sample/2.jpg"),
        name: lorem.generateWords(3),
        description: lorem.generateWords(20),
    },
    {
        id: 2,
        image: require("../assets/sample/3.jpg"),
        name: lorem.generateWords(3),
        description: lorem.generateWords(15),
    },
    {
        id: 3,
        image: require("../assets/sample/4.jpg"),
        name: lorem.generateWords(4),
        description: lorem.generateWords(20),
    },
];

function Walkthrough() {
    const [active, setActive] = useState(0);
    const scrollElement = useRef(null);

    return (
        <>
            <ScrollView
                ref={scrollElement}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => setActive(Math.floor(event.nativeEvent.contentOffset.x / s(designWidth)))}
            >
                <View style={{ flexDirection: "row" }}>
                    {sampleList.map((item) => (
                        <WalkthroughItem item={item} key={item.id} />
                    ))}
                </View>
            </ScrollView>

            <View style={{ flexDirection: "row", position: "absolute", right: 0, left: 0, bottom: s(110), justifyContent: "center" }}>
                {sampleList.map((_, index) => (
                    <PageIndicator key={index} isActive={index === active} />
                ))}
            </View>
        </>
    );
}

function WalkthroughItem({ item }) {
    return (
        <ImageBackground source={item.image} resizeMode="cover" style={{ width: s(designWidth), alignItems: "center", justifyContent: "flex-end" }}>
            {/*<View style={{ padding: s(20), marginBottom: s(130) }}>
                <Text style={{ color: colors.white, textAlign: "center", fontSize: s(16), fontWeight: "bold", marginBottom: s(10) }}>{item.name}</Text>
                <Text style={{ color: colors.white, textAlign: "center", fontSize: s(14) }}>{item.description}</Text>
            </View>*/}
        </ImageBackground>
    );
}

function PageIndicator({ isActive }) {
    return <View style={{ width: s(10), height: s(10), backgroundColor: isActive ? "#fff" : "rgba(255,255,255,0.5)", borderRadius: s(5), marginHorizontal: s(5) }} />;
}
