import { View, FlatList, Text } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import RelativeTime from "../components/RelativeTime";
import {useEffect, useState} from "react";
import API from "../utils/API";

export default function ArticlesScreen() {
    const [articles, setArticles] = useState();

    useEffect(() => {
        API.get("a", (res) => {
            if (res.success) {
                setArticles(res.payload);
            }
        });
    }, []);
    const renderItem = ({ item }) => <ArticleListItem item={item} />;

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={articles} renderItem={renderItem} keyExtractor={(item) => item.id} ListFooterComponent={<View style={{ height: s(100) }} />} />
        </View>
    );
}

function ArticleListItem({ item }) {
    return <ListItem title={item.name} subtitle={<RelativeTime date={item.created} />} image={{ source: typeof item.image !== 'undefined' ? item.image.name +'_s.'+ item.image.ext : 'no-image', width: s(120), height: s(67.5) }} />;
}
