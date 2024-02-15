

import { Params, useMatches } from "react-router-dom";
import { styles } from "../style";





const IconBreadcrumb = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-greater stroke-blue-400 mx-2" width={15} height={15} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 18l14 -6l-14 -6" />
</svg>

interface IMatches {
    id: string;
    pathname: string;
    params: Params<string>;
    data: unknown;
    handle: unknown;
}
type HandleType = {
    crumb: (param?: string) => React.ReactNode;
}

export const Breadcrumbs = () => {

    const matches: IMatches[] = useMatches();
    const crumbs = matches
        .filter((match) =>
            Boolean(match.handle && (match.handle as
                HandleType).crumb)
        )
        .map((match) => {
            const crumb = (match.handle as HandleType).crumb(
                match.data as string | undefined
            );
            return crumb as React.ReactNode;
        });

    return (
        <nav className={`${styles.paddingX} text-xs md:text-sm font-poppins`}>
            {/*  {crumbs.map((crumb, index) => (
                <li key={index}>{crumb}</li>
            ))} */}
            {crumbs.map((crumb, index) => (
                <span key={index} className="inline-flex items-center">{crumb} {index !== crumbs.length - 1 && IconBreadcrumb}</span>
            ))}
        </nav>
    );
}
