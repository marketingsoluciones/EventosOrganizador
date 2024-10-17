import axios, { AxiosInstance, AxiosResponse } from 'axios'

type Fetching = {
    graphql: CallableFunction
}
const instance: AxiosInstance = axios.create({ baseURL: "https://api.bodasdehoy.com" })

export const api: Fetching = {
    graphql: async (data: object): Promise<AxiosResponse> => {
        return await instance.post("/graphql", data, {
            headers: {
                Development: "4net"
            }
        })

    },

}