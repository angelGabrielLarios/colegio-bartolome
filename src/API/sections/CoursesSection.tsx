import { CardCourse, ShowAnimantion } from "../../components";
import { courses } from "../../constants";

export const CoursesSection = () => {
    return (
        <>
            <section className="section" id="courses">
                <ShowAnimantion>
                    <h2 className="mb-10 text-center text-navy">
                        Talleres
                    </h2>
                </ShowAnimantion>



                <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {
                        courses.map((course, index) => {
                            return (
                                <ShowAnimantion
                                    key={index}
                                >
                                    <CardCourse

                                        name={course.name}
                                        IconElement={course.IconElement}
                                    />
                                </ShowAnimantion>

                            )
                        })
                    }
                </article>

            </section>
        </>
    )
}
