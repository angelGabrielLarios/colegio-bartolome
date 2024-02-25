import { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { motion } from "framer-motion";

export const GallerySection = () => {

    const [index, setIndex] = useState(-1)

    const photos: SlideImage[] = [
        { src: "/images/children_1.jpeg" },
        { src: "/images/children_2.jpg" },
        { src: "/images/children_3.jpg" },
        { src: "/images/children_4.jpg" },
        { src: "/images/children_5.jpeg" },
        { src: "/images/children_6.jpeg" },
    ];
    return (
        <section className="section" id="gallery">
            <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ once: true }}
            >

                <h2 className="mb-10 text-center text-navy">
                    Galería
                </h2>
            </motion.div>




            <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto ">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
                                    src={photos[0].src}
                                    onClick={() => setIndex(0)}
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
                                    src={photos[1].src}
                                    onClick={() => setIndex(1)}
                                />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
                                    src={photos[2].src}
                                    onClick={() => setIndex(2)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
                                    src={photos[3].src}
                                    onClick={() => setIndex(3)}
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
                                    src={photos[4].src}
                                    onClick={() => setIndex(4)}
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
                                    src={photos[5].src}
                                    onClick={() => setIndex(5)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>




            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
            />





        </section>
    )
}
