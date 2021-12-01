import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders= {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'e47f61730amsh524504782e9bf0bp191edcjsn8438b97bdc25'
  }
  const baseUrl='https://bing-news-search1.p.rapidapi.com';

  const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

  export const cryptoNewsApi=createApi({
    reducerPath: 'crytpoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews :builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})
export const{
    useGetCryptoNewsQuery,
}=cryptoNewsApi;