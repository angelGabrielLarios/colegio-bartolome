
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
    const response = await fetch("https://graph.facebook.com/v19.0/246471728550678/feed?access_token=EAAGZCUDWyeuoBO5DTlBOVnv7Coa0EoK4Imv9N7TAasPSZBZADSOzUINaepIKsNlUpBYuzqL0gs2ISJZBAnrNmUCiZAVTXZC0w8GmLEw9q8tfRmCf5B5eIZBtp3zLXmBbDVEKczChWRztFeQT8RQqFTtKy27EU0EfPsUMRR2SAupZB85zceuXIE6sv2kZCLV4ZCpVPfxzVLFsNIZBy1xfd8sYP3PFaEZD");



    try {
        const data = await response.json() as ResponsePosts
        return data
    } catch (error) {
        console.log(error)
        throw new Error('Something wrong')
    }

}
