import { useEffect, useState } from "react";
import {ImageBackground, ScrollView, Text, View} from "react-native";
import API from "../utils/API";
import colors, {darkText} from "../utils/colors";
import s from "../utils/getRelativeSize";
import urls from "../utils/urls";
import Box from "../components/Box";
import {BlockLoader} from "../components/Loaders";
import MenuBorder from "../components/MenuBorder";
import ListItem from "../components/ListItem";
import RelativeTime from "../components/RelativeTime";

export default function OneAdScreen({ route }) {
    const [url, setUrl] = useState(route.params);
    const [data, setData] = useState();

    useEffect(() => {
        API.get(url, (res) => {
            if (res.success) {
                setData(res.payload);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1}}>
            <ScrollView>
                {
                    data ?
                        <View style={{margin: s(10)}}>
                            <Box color={colors.white}>
                                <ImageBackground
                                    source={typeof data.images[0] !== 'undefined' ? { uri: urls.resource + data.images[0].name +'_s.'+ data.images[0].ext } : require("../assets/no-image.png")}
                                    style={{ backgroundColor: colors.grey[300], width: '100%', height: 260, resizeMode: "cover"}}
                                >
                                </ImageBackground>
                            </Box>
                            <Box color={colors.white}>
                                    {
                                        typeof data.name !== 'undefined' ?
                                            <View >
                                                <Text style={{margin: 10,fontSize: 22, fontWeight: '500' , color: darkText.secondary}}>
                                                    {data.name}
                                                </Text>
                                                <MenuBorder/>
                                            </View>:<></>
                                    }
                                <View style={{margin: 10}}>
                                    {data.text && <DescText name={'Тайлбар: '} desc={data.text}/>}
                                    {data.price && <DescText name={'Үнэ: '} desc={data.price}/>}
                                    {data.phone && <DescText name={'Утас : '} desc={data.phone}/>}
                                    {data.readCount && <DescText name={'Үзсэн тоо: '} desc={data.readCount}/>}
                                    <Text style={{fontSize: 18,color: darkText.secondary}}>
                                        {'Нийтлэгдсэн: '}<RelativeTime date={data.published} />
                                    </Text>
                                </View>
                            </Box>
                            {data.coach &&
                                <ListItem
                                    key={data.coach.id}
                                    title={data.coach.name}
                                    image={{ source: typeof data.coach.image !== 'undefined' ? data.coach.image.name +'_s.'+ data.coach.image.ext : 'no-image', width: s(80), height: s(80), style: { borderRadius: s(40)}}}
                                />
                            }
                        </View>
                        :<BlockLoader />
                }
            </ScrollView>
        </View>
    );
    function DescText({name, desc}){
        return(
            <Text style={{fontSize: 18,color: darkText.secondary}}>
                {name+desc+'\n'}
            </Text>
        )
    }
}
