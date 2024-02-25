import { url_facebook } from "../urls"


export const getAccessToken = async () => {
    const appId = import.meta.env.VITE_APP_ID
    const appSecret = import.meta.env.VITE_APP_SECRET
    try {
        const response = await fetch(`${url_facebook}/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&grant_type=client_credentials`)

        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}
