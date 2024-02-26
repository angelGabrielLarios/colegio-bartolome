import { useState } from "react";
import { ShowAnimantion } from "../../components"


export const MainSection = () => {
    const [loading, setLoading] = useState(true);


    const handleImageLoaded = () => {
        setLoading(false);
    };
    return (
        <>
            <main id="home" className={`section main-section flex items-center justify-center`}>


                <article className="space-y-5 text-center">

                    {loading && <span className="loading loading-ball loading-md"></span>}

                    <ShowAnimantion>

                        <img
                            src="/images/logo_bartolome_de_medina-bg.webp"
                            alt="logo del Colegio Bartolomé de Medina"
                            className="block mx-auto animate-fade-right animate-duration-[2000ms]  w-20 md:w-[10rem]"
                            onLoad={handleImageLoaded}
                        />
                    </ShowAnimantion>



                    <ShowAnimantion>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl lg:py-2 text-gradient animate-fade-right animate-duration-[2000ms] ">
                            Colegio Bartolomé de Medina

                        </h1>
                    </ShowAnimantion>


                    <ShowAnimantion>
                        <p className={` text-sm md:text-base leading-relaxed animate-fade-right animate-duration-[2000ms] w-full mx-auto md:w-[48rem]`}>
                            Bienvenido al <span className="font-bold text-navy">Colegio Bartolomé de Medina</span>, donde cada niño encuentra un espacio para crecer, aprender y alcanzar su máximo potencial. Nuestra institución está dedicada a brindar una educación integral y de calidad que combine la excelencia académica con el desarrollo personal y emocional de nuestros estudiantes.
                        </p>
                    </ShowAnimantion>



                </article>



            </ main>
        </>
    )
}
