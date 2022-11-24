import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const stationApi = createApi({
  reducerPath: 'stationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.open-notify.org/' }),
  endpoints: (builder) => ({
    getPosition: builder.query({
      query: () => `iss-now.json`,
    }),
    getAstros: builder.query({
        query: () => `astros.json`,
      }),
  }),
})

export const { useGetPositionQuery, useGetAstrosQuery } = stationApi