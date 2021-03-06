import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props): ReactElement => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/" />
        <Link href="/about" />
        <Link href="/users" />
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Im here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
