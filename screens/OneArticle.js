import { useEffect, useState } from "react";
import {ImageBackground, ScrollView, Text, useWindowDimensions, View} from "react-native";
import RenderHTML from "react-native-render-html";
import { BlockLoader } from "../components/Loaders";
import RelativeTime from "../components/RelativeTime";
import API from "../utils/API";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import urls from "../utils/urls";

export default function OneArticleScreen({ route }) {
    const [article, setArticle] = useState(route.params.article);
    const [articleText, setArticleText] = useState(null);

    const { width } = useWindowDimensions();

    useEffect(() => {
        API.get(`a/${article.id}`, (res) => {
            if (res.success) {
                setArticle(res.payload);
                setArticleText(res.payload.text.replace("/resource/", urls.resource))
            }
        });
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <ScrollView>
                <View style={{ margin: s(20) }}>
                    <Text style={{ marginBottom: s(10), fontSize: s(20), fontWeight: "bold" }}>{article.name}</Text>
                    <Text style={{ fontSize: s(16), color: colors.grey[600] }}>
                        <RelativeTime date={article.published} />
                    </Text>
                </View>
                <ImageBackground
                    source={{uri: urls.resource + article.image.name +'_s.'+ article.image.ext}}
                    style={{width: '100%', height: 250,resizeMode: "cover"}}
                >
                </ImageBackground>

                {articleText ? (
                    <View style={{ paddingHorizontal: s(20) }}>
                        <RenderHTML
                            contentWidth={width}
                            source={{
                                html: articleText,
                            }}
                            baseStyle={{ fontSize: s(16), lineHeight: s(22.5) }}
                        />
                    </View>
                ) : (
                    <BlockLoader />
                )}
            </ScrollView>
        </View>
    );
}
