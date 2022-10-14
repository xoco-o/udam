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
import {useNavigation} from "@react-navigation/native";

export default function ViewItemsScreen({ route }) {
    const [url, setUrl] = useState(route.params.url);
    const [data, setData] = useState();
    const navigation = useNavigation();
    useEffect(() => {
        API.get(url, (res) => {
            if (res.success) {
                setData(res.payload);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1}}>
            {/*{console.log('url ', url,'data------', data)}*/}
            <ScrollView>
                {
                    data ?
                        <View style={{margin: s(10)}}>
                            <Box color={colors.white}>
                                <ImageBackground
                                    source={typeof data.image !== 'undefined' ? { uri: urls.resource + data.image.name +'_s.'+ data.image.ext } : require("../assets/no-image.png")}
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
                                    {data.bio && <DescText name={'Төрөл: '} desc={data.bio}/>}
                                    {data.horseAge && <DescText name={'Нас: '} desc={data.horseAge}/>}
                                    {data.birthYear && <DescText name={'Төрсөн жил: '} desc={data.birthYear}/>}
                                    {data.city && <DescText name={'Төрсөн нутаг : '} desc={data.city.name}/>}
                                    {data.color && <DescText name={'Зүс: '} desc={data.color}/>}
                                    {data.club && <DescText name={'Галын нэр: '} desc={data.club.name}/>}
                                </View>
                            </Box>
                            {data.coach &&
                                <ListItem
                                    key={data.coach.id}
                                    title={data.coach.name}
                                    onPress={() => navigation.navigate('Coach', data.coach.id)}
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
