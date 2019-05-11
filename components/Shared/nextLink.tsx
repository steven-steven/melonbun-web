import Link from 'next/link';

interface IProps{
    className?: string;
    href:string;
    hrefAs?:string;
    children:any;
}

export const NextLink: React.SFC<any> = ({ className, href, hrefAs, children}:IProps) => {
    return(
        <Link href={href} as={hrefAs} prefetch>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
};