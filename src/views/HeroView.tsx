
import { styles } from "../style.ts";
export const HeroView = () => {
    return (
        <>
            <section id="home" className={`p-4 sm:p-6 md:p-8 lg:p-10`}>


                <article className="grid md:grid-cols-2 gap-4 content-center items-center">
                    <div>
                        <h1 className="flex-1 font-poppins font-semibold text-3xl md:text-4xl lg:text-6xl text-white ss:leading-[100.8px]  animate-fade-right animate-duration-[2000ms]">
                            Desarollo Frontend Con<br className="sm:block hidden" />{" "}
                            <span className="text-gradient">Frameworks Modernos</span>{" "}
                        </h1>


                        <p className={`${styles.paragraph} text-sm md:text-base leading-relaxed mt-5 animate-fade-right animate-duration-[2000ms]`}>
                            Bienvenido al fascinante mundo del desarrollo frontend, donde la creación de experiencias de usuario cautivadoras se convierte en arte. En este espacio dinámico, los frameworks modernos se han convertido en las herramientas esenciales que potencian la eficiencia y la innovación.
                        </p>
                    </div>


                    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                        <img src={`/images/hero_image.svg`} alt="billing" className="block animate-fade-left animate-duration-[2000ms]" />

                        {/* gradient start */}
                        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                        {/* gradient end */}
                    </div>
                </article>



            </section >
        </>
    );
};