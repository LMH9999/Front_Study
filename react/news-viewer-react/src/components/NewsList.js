import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';

const NewsList = ({category}) => {
    const [articles,setArticles] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
            const fetchData = async () => {
                const query = (category=='all' ? '' : '&category='+ category);
                const apiUrl = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=2a3f86554a2140cab6fae81c466891fd'+query;
                const response = await axios.get(apiUrl);
                setArticles(response.data.articles);
                setLoading(false);
            }
            fetchData();
        },[category]
    );
    if(loading){
        return <>대기 중...</>
    }
    if(!articles){
        return null;
    }
    return (
        <>
            {articles.map((article)=>(<NewsItem article={article} key={article.url}/>))}
        </>
    );
};

export default NewsList;