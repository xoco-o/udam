import {useEffect, useRef, useState} from "react";
import {ImageBackground, ScrollView, Text, View} from "react-native";
import API from "../utils/API";
import colors, {darkText} from "../utils/colors";
import s, {designWidth} from "../utils/getRelativeSize";
import urls from "../utils/urls";
import Box from "../components/Box";
import {BlockLoader} from "../components/Loaders";
import MenuBorder from "../components/MenuBorder";
import ListItem from "../components/ListItem";
import RelativeTime from "../components/RelativeTime";

export default function OneAdScreen({ route }) {
    const [url, setUrl] = useState(route.params);
    const [data, setData] = useState();
    const scrollElement = useRef(null);
    const [active, setActive] = useState(0);

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
                            <View style={{marginBottom: s(15), borderRadius: s(10), overflow: "hidden" }}>
                                <ScrollView
                                    ref={scrollElement}
                                    horizontal
                                    style={{width: '100%', height: 260}}
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}
                                    onMomentumScrollEnd={(event) => setActive(Math.floor(event.nativeEvent.contentOffset.x / s(designWidth-20)))}
                                >
                                    <View style={{ flexDirection: "row" }}>
                                        {data.images.map((item) => (
                                            <ScrollItem item={item} key={item.id} />
                                        ))}
                                    </View>
                                </ScrollView>
                                <View style={{ flexDirection: "row", position: "absolute", right: 0, left: 0, bottom: s(10), justifyContent: "center" }}>
                                    {data.images.map((_, index) => (
                                        <PageIndicator key={index} isActive={index === active} />
                                    ))}
                                </View>
                            </View>
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
    function ScrollItem({ item }) {
        // console.log('-------',active);
        return (
                <ImageBackground
                    source={{uri: urls.resource + item.name +'_s.'+ item.ext}}
                    style={{width: s(designWidth-20),resizeMode: "cover"}}
                >
                </ImageBackground>
        );
    }

    function PageIndicator({ isActive }) {
        console.log('-------==',isActive);
        return <View style={{ width: s(7), height: s(7), backgroundColor: isActive ? "#fff" : "rgba(255,255,255,0.5)", borderRadius: s(3), marginHorizontal: s(5) }} />;
    }
}
