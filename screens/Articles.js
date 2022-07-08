import { View, FlatList, Text } from "react-native";
import s from "../utils/getRelativeSize";
import ListItem from "../components/ListItem";
import { articles } from "../utils/sampleData";
import RelativeTime from "../components/RelativeTime";

export default function ArticlesScreen() {
    const renderItem = ({ item }) => <ArticleListItem item={item} />;

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={articles} renderItem={renderItem} keyExtractor={(item) => item.id} ListFooterComponent={<View style={{ height: s(100) }} />} />
        </View>
    );
}

function ArticleListItem({ item }) {
    return <ListItem title={item.title} subtitle={<RelativeTime date={item.created} />} image={{ source: item.image.source, width: s(120), height: s(67.5) }} />;
}
