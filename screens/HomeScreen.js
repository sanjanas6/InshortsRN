import { View, ScrollView, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Article from "../component/Article";
import axios from "axios";
import { FlatList } from "react-native";
const HomeScreen = () => {
  const [news, setNews] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9",
        {
          params: { category: "technology" },
        }
      )
      .then((res) => setNews(res.data.articles))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <FlatList 
      data={news} 
      renderItem={({item})=>
      <Article
        urlToImage = {item.urlToImage}
        title = {item.title}
        content = {item.description}
        author = {item.author}
        publishedAt = {item.publishedAt}
        sourceName = {item.source.name}
        url={item.url}
     />}
    //  keyExtractor= {({item}) => item.title}
    />
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {},
});
