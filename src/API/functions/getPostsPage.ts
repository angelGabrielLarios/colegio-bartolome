
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
    const response = await fetch("https://graph.facebook.com/v19.0/246471728550678/feed?access_token=EAAGZCUDWyeuoBO1T6QpU78L2u6P5epVI9rZAFi4fTdAAZARzZAtiZB8LFd6GEzSpRng84u8CI8ZB5VGKS5ohXWs5I3aj2pWZApN2yqJa2vkoLvT7MfZCylCooprSjTMaa7xvUzXGamPMzoVNCkGDvdjvL54pyX7vGV2ZCvOGkGfDXCwYalDUxhUviOLEeZBuMx2XZC1NyVD17qGAisxC69zhVBZA34UZD");





    try {
        const data = await response.json() as ResponsePosts
        return data
    } catch (error) {
        console.log(error)
        throw new Error('Something wrong')
    }

}
