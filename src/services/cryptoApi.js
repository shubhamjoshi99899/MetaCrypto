import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'e4240c8b40msh951488ee4c741a2p1cef6ejsnbfc3ade459df'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query:(coinuuId)=> createRequest(`/coin/${coinuuId}`),  
        })
    })
});

export const{useGetCryptosQuery, useGetCryptoDetailsQuery}=cryptoApi;