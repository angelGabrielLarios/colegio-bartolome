import { url_facebook } from "../urls"

export const getAcessPage = async ({ access_token }: { access_token: string }) => {
    const userId = import.meta.env.VITE_USER_ID
    try {
        const response = await fetch(`${url_facebook}/${userId}/accounts?access_token=${access_token}`)

        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}
