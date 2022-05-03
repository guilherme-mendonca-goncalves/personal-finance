import NextLink from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes <HTMLAnchorElement> {
  href: string,
  children: ReactNode
}

const Link = ({children, href, ...props}: Props) => {

  return (
    <NextLink href={href}><a {...props} >{children}</a></NextLink>
  )
};

export default Link;