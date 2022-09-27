import {useEffect, useState} from "react";
import { View, FlatList, TouchableOpacity, Linking } from "react-native";
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
// import { ads, horseTypes } from "../utils/sampleData";
import API from "../utils/API";
import {useNavigation} from "@react-navigation/native";

export default function AdsScreen() {
    // const [typeId, setTypeId] = useState("0");
    const [ads, setAds] = useState();

    useEffect(() => {
        API.get("ad/list", (res) => {
            if (res.success) {
                setAds(res.payload.thisPageElements);
            }
        });
    }, []);
    const renderItem = ({ item }) => <AdItem item={item} />;

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, paddingTop: getStatusBarHeight() }}>
            <FlatList
                ListFooterComponent={<View style={{ height: s(100) }} />}
                /*ListHeaderComponent={
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
                }*/
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
    const navigation = useNavigation();

    function handleClose() {
        setOpen(false);
        setCloseRequested(false);
    }

    function handleAddPress(action, adUrl) {
        navigation.navigate(action, adUrl);
        setCloseRequested(true);
    }
    return (
        <>
            <TouchableOpacity style={{ width: s(345), marginLeft: s(15) }} activeOpacity={0.5} onPress={() => setOpen(true)}>
                <Card image={{source: typeof item.images[0] !== 'undefined' ? item.images[0].name +'_s.'+ item.images[0].ext : 'no-image', width: s(345), height: s(200)}} title={item.name} description={item.category.name} tag={`${numeral(item.price).format()} ₮`} date={<RelativeTime date={item.published} />} />
            </TouchableOpacity>

            <BottomSheet open={open} onClose={handleClose} closeRequested={closeRequested} height={s(50 * 2) + 25}>
                <View style={{ flex: 1 }}>
                    {/*<MenuItem
                        icon={
                            <View style={{ width: s(25) }}>
                                <FontAwesome name="bookmark" color={colors.grey[600]} size={s(16)} />
                            </View>
                        }
                        label="Хадгалах"
                        onPress={() => handleAddPress("email")}
                    />*/}
                    <MenuItem
                        icon={
                            <View style={{ width: s(25) }}>
                                <FontAwesome5 name="horse" color={colors.grey[600]} size={s(16)} />
                            </View>
                        }
                        label="Зар үзэх"
                        onPress={() => handleAddPress('OneAd', `ad/${item.id}`)}
                    />

                    <MenuItem
                        icon={
                            <View style={{ width: s(25) }}>
                                <FontAwesome5 name="phone-alt" color={colors.grey[600]} size={s(16)} />
                            </View>
                        }
                        label="Холбоо барих"
                        value={item.phone}
                        onPress={() => {
                            Linking.openURL(`tel:${item.phone}`);
                            setCloseRequested(true);
                        }}
                    />
                    {/*<MenuItem
                        hasChevron
                        icon={
                            <View style={{ width: s(25) }}>
                                <FontAwesome5 name="horse" color={colors.grey[600]} size={s(16)} />
                            </View>
                        }
                        label="Удам үзэх"
                        onPress={() => handleAddPress("qrcode")}
                    />*/}
                </View>
            </BottomSheet>
        </>
    );
}
