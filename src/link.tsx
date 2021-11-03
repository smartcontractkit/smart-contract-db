/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as'> {
  to: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
  href?: NextLinkProps['href'];
}

export const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(function NextLinkComposed(
  props,
  ref
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { to, linkAs, href, replace, scroll, passHref, shallow, prefetch, locale, ...other } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps['as'];
  href: NextLinkProps['href'];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    href,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    role, // Link don't have roles.
    ...other
  } = props;

  const router = useRouter();

  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.asPath === pathname && activeClassName,
  });

  const isExternal = typeof href === 'string' && (href.indexOf('https') === 0 || href.indexOf('mailto:') === 0);

  if (isExternal) {
    return (
      <a
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        href={href as string}
        ref={ref as any}
        {...other}
      />
    );
  }

  return <NextLinkComposed className={className} ref={ref as any} to={href} {...other} />;
});

export default Link;
