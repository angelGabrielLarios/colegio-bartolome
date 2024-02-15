
import { ICourse } from '../constants';


interface Props extends ICourse { }
export const CardCourse = ({ name, IconElement }: Props) => {

    const classNameIcon = "block mx-auto  size-16"
    return (
        <>

            {/* <span className='size-28'></span> */}
            <div className="card card-compact shadow-xl bg-white transition-all ease-in">

                <div className="card-body text-blueCustom">
                    <IconElement className={`${classNameIcon} transition-all ease-in`} />
                    <h3 className="text-center text-base lg:text-lg transition-all ease-in">{name}</h3>
                </div>
            </div>
        </>
    )
}
