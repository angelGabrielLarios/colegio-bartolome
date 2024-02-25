
import { motion } from "framer-motion"
import { ReactElement } from "react"

interface Props {
    children: ReactElement
}
export const ShowAnimantion = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeIn' }}
        >
            {children}
        </motion.div>
    )
}
