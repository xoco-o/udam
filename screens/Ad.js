import { useState } from "react";
import { View } from "react-native";
import Tabs from "../components/Tabs";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import { getStatusBarHeight } from "react-native-status-bar-height";

const sampleTypes = [
    { value: "0", label: "Нийт (43)" },
    { value: "1", label: "Азарга (13)" },
    { value: "2", label: "Морь (10)" },
    { value: "3", label: "Гүү (3)" },
    { value: "4", label: "Хязаалан үрээ (7)" },
    { value: "5", label: "Хязаалан байдас (0)" },
    { value: "6", label: "Шүдлэн үрээ (9)" },
    { value: "7", label: "Шүдлэн байдас (0)" },
    { value: "8", label: "Эр даага (1)" },
];

export default function AdScreen() {
    const [typeId, setTypeId] = useState("0");

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, paddingTop: getStatusBarHeight() }}>
            <View style={{ paddingVertical: s(15) }}>
                <Tabs value={typeId} onChange={setTypeId} items={sampleTypes} containerStyles={{ paddingHorizontal: s(15) }} />
            </View>
        </View>
    );
}
