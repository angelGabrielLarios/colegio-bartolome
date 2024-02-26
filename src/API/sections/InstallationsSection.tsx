import { IconChalkboard, IconCpu, IconSoccerField, IconToolsKitchen } from "@tabler/icons-react";
import { ShowAnimantion } from "../../components";

export const InstallationsSection = () => {
    return (
        <>
            <section className="section" id="installations">
                <ShowAnimantion>
                    <h2 className="mb-10 text-center text-navy">
                        Instalaciones
                    </h2>
                </ShowAnimantion>

                <article className="space-y-2 md:flex md:items-stretch md:gap-4">

                    <div className="p-6 bg-white rounded-xl  md:basis-[400px] flex flex-col justify-center">
                        <ul className="text-sm md:text-base">
                            <li className="flex items-center gap-2">
                                <IconChalkboard /> 4 salones
                            </li>
                            <li className="flex items-center gap-2">
                                <IconSoccerField /> 1 cancha
                            </li>
                            <li className="flex items-center gap-2">
                                <IconToolsKitchen /> 1 comedor
                            </li>
                            <li className="flex items-center gap-2">
                                <IconCpu /> 1 laboratorio de computo
                            </li>
                        </ul>
                    </div>


                    <div
                        className=" rounded-xl md:grow"
                    >

                        <ShowAnimantion>
                            <img
                                src="/images/escuela_1.jpg"
                                alt="escuela"
                                className="block w-full rounded-3xl"
                            />
                        </ShowAnimantion>

                    </div>
                </article>

            </section>
        </>
    )
}
