import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import SearchBar from "../component/SearchBar";
import axios from "axios";
import Article from "../component/Article";
const SearchScreen = () => {
  const [searchText, setSearchtext] = useState("");
  const [news , setNews] = useState([]);
  function searchArticle(){
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9",
        {
          params: { category: "technology" , q: searchText },
        }
      )
      .then((res) => setNews(res.data.articles))
      .catch((e) => console.log(e));
  }
  
  return (
    <View>
      <SearchBar searchText={searchText} setSearchtext={setSearchtext} onSubmit={searchArticle}/>
      {/* <Text>{searchText}</Text> */}
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

    </View>
    
  );
};

export default SearchScreen;
