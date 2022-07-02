import { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import Tabs from "../components/Tabs";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Card from "../components/Card";
import numeral from "numeral";
import RelativeTime from "../components/RelativeTime";
import BottomSheet from "../components/BottomSheet";
import MenuItem from "../components/MenuItem";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import MenuBorder from "../components/MenuBorder";

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

const sampleAds = [
    {
        id: 1,
        title: lorem.generateWords(10),
        description: lorem.generateWords(10),
        price: 10000000,
        created: Date.now() - 1000000,
        image: { source: require("../assets/temp/walkthrough/wt-1.jpg"), width: s(345), height: s(200) },
    },
    {
        id: 2,
        title: lorem.generateWords(10),
        description: lorem.generateWords(10),
        price: 23000000,
        created: Date.now() - 20000000,
        image: { source: require("../assets/temp/walkthrough/wt-2.jpg"), width: s(345), height: s(200) },
    },
    {
        id: 3,
        title: lorem.generateWords(10),
        description: lorem.generateWords(10),
        price: 15000000,
        created: Date.now() - 400000000,
        image: { source: require("../assets/temp/walkthrough/wt-3.jpg"), width: s(345), height: s(200) },
    },
    {
        id: 4,
        title: lorem.generateWords(10),
        description: lorem.generateWords(10),
        price: 5000000,
        created: Date.now() - 3000000000,
        image: { source: require("../assets/temp/walkthrough/wt-1.jpg"), width: s(345), height: s(200) },
    },
];

export default function AdScreen() {
    const [typeId, setTypeId] = useState("0");

    const renderItem = ({ item }) => <ListItem item={item} />;

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, paddingTop: getStatusBarHeight() }}>
            <FlatList
                ListFooterComponent={<View style={{ height: s(100) }} />}
                ListHeaderComponent={
                    <View style={{ paddingVertical: s(15) }}>
                        <Tabs value={typeId} onChange={setTypeId} items={sampleTypes} containerStyles={{ paddingHorizontal: s(15) }} />
                    </View>
                }
                data={sampleAds}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

function ListItem({ item }) {
    const [open, setOpen] = useState(false);
    const [closeRequested, setCloseRequested] = useState(false);

    function handleClose() {
        setOpen(false);
        setCloseRequested(false);
    }

    function handleAddPress(action) {
        console.log(action);
        setCloseRequested(true);
    }
    return (
        <>
            <TouchableOpacity style={{ width: s(345), marginLeft: s(15) }} activeOpacity={0.5} onPress={() => setOpen(true)}>
                <Card image={item.image} title={item.title} description={item.description} tag={`${numeral(item.price).format()} ₮`} date={<RelativeTime date={item.created} />} />
            </TouchableOpacity>

            <BottomSheet open={open} onClose={handleClose} closeRequested={closeRequested} height={s(50 * 3) + 25}>
                <View style={{ flex: 1 }}>
                    <MenuItem
                        icon={
                            <View style={{ width: s(25) }}>
                                <FontAwesome name="bookmark" color={colors.grey[600]} size={s(16)} />
                            </View>
                        }
                        label="Хадгалах"
                        onPress={() => handleAddPress("email")}
                    />

                    <MenuItem
                        icon={
                            <View style={{ width: s(25) }}>
                                <FontAwesome5 name="phone-alt" color={colors.grey[600]} size={s(16)} />
                            </View>
                        }
                        label="Холбоо барих"
                        value="99359299"
                        onPress={() => handleAddPress("email")}
                    />

                    <MenuItem
                        hasChevron
                        icon={
                            <View style={{ width: s(25) }}>
                                <FontAwesome5 name="horse" color={colors.grey[600]} size={s(16)} />
                            </View>
                        }
                        label="Удам үзэх"
                        onPress={() => handleAddPress("qrcode")}
                    />
                </View>
            </BottomSheet>
        </>
    );
}
