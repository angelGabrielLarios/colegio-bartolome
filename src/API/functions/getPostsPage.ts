
export interface ResponsePosts {
    data: Datum[];
    paging: Paging;
}

export interface Datum {
    created_time: string;
    id: string;
}

export interface Paging {
    cursors: Cursors;
}

export interface Cursors {
    before: string;
    after: string;
}

export const getPostsPage = async () => {
    const response = await fetch("https://graph.facebook.com/v19.0/246471728550678/feed?access_token=EAAGZCUDWyeuoBOzHVWln2NjBxBRFvDlLKvUJY73i9UcxFRc2A1w4lHieBKTjNZAUZBPRKOoFFb7EinboZBU4YW3ZCrFnwDiLZCWbuYcFuMGkVCB5t7DhuHo3vXbZCyM9kOOkZArpbeQ1HKqQ1ZA6ZBdxTSYLsLOm1k8ZCcJYI3wwEPZAOBrwnLVuZAgPOslZAEtaR5qcxZCMJIhYI6uOaeIDagz6yr5ZA9wZD");



    try {
        const data = await response.json() as ResponsePosts
        return data
    } catch (error) {
        console.log(error)
        throw new Error('Something wrong')
    }

}
