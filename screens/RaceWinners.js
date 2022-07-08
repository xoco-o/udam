import { View, ScrollView, Text } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import { useEffect, useState } from "react";
import { raceTypes, raceWinners } from "../utils/sampleData";
import Tabs from "../components/Tabs";
import colors from "../utils/colors";
import UserAvatar from "../components/UserAvatar";

export default function RaceWinnersScreen({ navigation, route }) {
    const { title } = route?.params;
    const [typeId, setTypeId] = useState(1);

    useEffect(() => {
        navigation.setOptions({ headerTitle: title });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    paddingVertical: s(15),
                    backgroundColor: colors.white,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.0,
                    elevation: 1,
                    zIndex: 1,
                }}
            >
                <Tabs
                    value={typeId}
                    onChange={setTypeId}
                    items={raceTypes.map((type) => {
                        return {
                            label: type.name,
                            value: type.id,
                        };
                    })}
                    containerStyles={{ paddingHorizontal: s(15) }}
                />
            </View>

            <ScrollView>
                {raceWinners.map((winner) => (
                    <WinnerItem item={winner} key={winner.id} />
                ))}
                <View style={{ height: s(100) }} />
            </ScrollView>
        </View>
    );
}

function WinnerItem({ item }) {
    let winnerColor = "grey";

    if (item.position === 1) {
        winnerColor = "orange";
    } else if (item.position === 2) {
        winnerColor = "teal";
    } else if (item.position < 6) {
        winnerColor = "deepOrange";
    }

    return (
        <ListItem
            title={item.title}
            image={{ source: item.image.source, width: s(120), height: s(67.5) }}
            imageChild={
                <View
                    style={{
                        position: "absolute",
                        top: s(5),
                        left: s(5),
                        width: s(20),
                        height: s(20),
                        backgroundColor: colors[winnerColor][200],
                        borderRadius: s(10),
                        borderWidth: s(2),
                        borderColor: colors[winnerColor][300],
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: s(10), color: colors[winnerColor][900], fontWeight: "bold", textAlign: "center" }}>{item.position}</Text>
                </View>
            }
            textChild={
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: s(5) }}>
                    <UserAvatar size={s(30)} />
                    <View style={{ flex: 1, marginLeft: s(5) }}>
                        <Text style={{ fontSize: s(14) }}>Н. Батхуяг</Text>
                        <Text style={{ fontSize: s(12), color: colors.grey[600] }}>Тод манлай</Text>
                    </View>
                </View>
            }
        />
    );
}
