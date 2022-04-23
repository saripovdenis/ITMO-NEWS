import React from 'react';
import Head from "next/head";
import { Header } from '../components/layout';

const Home: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>ITMO News</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <Header />

            <main className={'container'}>
            </main>

            <footer>
            </footer>
        </>
    );
}

export default Home;
