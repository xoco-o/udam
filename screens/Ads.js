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
import { ads, horseTypes } from "../utils/sampleData";

export default function AdsScreen() {
    const [typeId, setTypeId] = useState("0");

    const renderItem = ({ item }) => <AdItem item={item} />;

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, paddingTop: getStatusBarHeight() }}>
            <FlatList
                ListFooterComponent={<View style={{ height: s(100) }} />}
                ListHeaderComponent={
                    <View style={{ paddingVertical: s(15) }}>
                        <Tabs
                            value={typeId}
                            onChange={setTypeId}
                            items={horseTypes.map((type) => {
                                return {
                                    label: `${type.name} (${type.count})`,
                                    value: type.id,
                                };
                            })}
                            containerStyles={{ paddingHorizontal: s(15) }}
                        />
                    </View>
                }
                data={ads}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

function AdItem({ item }) {
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
