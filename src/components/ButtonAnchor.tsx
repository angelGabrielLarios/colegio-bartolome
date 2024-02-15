

interface Props {
    text: string
    href: string

}
export const ButtonAnchor = ({ text = "", href = "" }: Props) => {

    return <>
        <a target="_blank" href={href} className={`inline-block py-4 px-6 font-poppins font-medium text-base text-primary bg-blue-gradient rounded-[10px] outline-none`}>
            {text}
        </a>
    </>
}





