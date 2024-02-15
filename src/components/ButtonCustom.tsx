
interface Props {
    text: string
}
export const ButtonCustom = ({ text }: Props) => (
    <button type="button" className={`inline-block py-4 px-6 font-poppins font-medium text-base text-primary bg-blue-gradient rounded-[10px] outline-none`}>
        {text}
    </button>
);


