import { styles } from "../style"

export const WhatIsView = () => {
    return (
        <>
            <section id="whatis" className={`p-4 sm:p-6 md:p-8 lg:p-10`}>
                {/* gradient start */}
                {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
                {/* gradient end */}

                <article className="w-full md:w-[44rem] md:mx-auto">
                    <h1 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-6xl text-white text-center mb-4 animate-fade-right animate-duration-[2000ms]">
                        ¿Que{" "}
                        <span className="text-gradient">es?</span>
                    </h1>


                    <p className={`${styles.paragraph} text-sm md:text-base animate-fade-right animate-duration-[2000ms]`}>

                        El desarrollo frontend moderno es la práctica de construir la interfaz de usuario de aplicaciones web utilizando tecnologías y enfoques contemporáneos. Se caracteriza por el uso de frameworks y bibliotecas avanzadas como React, Angular o Vue.js, la adopción de características recientes de JavaScript (ECMAScript 6 y posteriores), y el desarrollo basado en componentes para modularidad y reutilización eficiente del código. La construcción de aplicaciones de una sola página (SPA) con enrutamiento del lado del cliente, la implementación de modelos reactivos y la gestión del estado global son elementos clave. Además, se enfoca en prácticas como pruebas automáticas, diseño responsivo, optimización del rendimiento y despliegue continuo, garantizando así interfaces de usuario eficientes, atractivas y alineadas con las tendencias y estándares actuales del desarrollo web
                    </p>


                </article>



            </section >
        </>
    )
}
