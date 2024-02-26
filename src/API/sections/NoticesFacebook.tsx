import { useEffect, useState } from "react";
import { FacebookEmbed } from "react-social-media-embed"
import { Datum, getPostsPage } from "../functions/getPostsPage";
import { ShowAnimantion } from "../../components";


export const NoticesFacebook = () => {
    const [posts, setPosts] = useState<Datum[]>([])

    useEffect(() => {
        (async () => {
            try {

                const { data } = await getPostsPage()
                console.log(data)
                setPosts(data ?? [])

            } catch (error) {
                setPosts([])
                console.error(error)
            }

        })();
    }, [])
    return (
        <>
            <section
                className="section"
                id="notices"
            >

                <h2
                    className="mb-10 text-center text-navy"
                >
                    Avisos
                </h2>


                <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {
                        !posts.length
                            ? <p>Cargando</p>
                            : posts.map((post) => {
                                const copyPostId = post.id
                                const postIdForEmbed = copyPostId.split("_")[1]
                                return (
                                    <>
                                        <ShowAnimantion
                                            key={post.id}
                                        >
                                            <FacebookEmbed

                                                url={`https://www.facebook.com/20531316728/posts/${postIdForEmbed}`}
                                            />
                                        </ShowAnimantion>
                                    </>
                                )
                            })
                    }
                </article>




            </section>
        </>
    )
}
