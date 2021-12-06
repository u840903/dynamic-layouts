import Link from "next/link";
import {useRouter} from "next/router";
import type {ReactElement} from 'react'
import useSWR from "swr";
import {Layout} from '../../components/Layout'
import {PodcastLayout} from '../../components/PodcastLayout'
import {fetcher} from "../../helpers/fetcher";

export default function PodcastPage() {
    const {query} = useRouter();

    const { data, error } = useSWR(
        "https://cat-fact.herokuapp.com/facts",
        fetcher
    );

    const id = Number(query.id);
    // @ts-ignore
    const text =  data && data[id]?.text;

    return (
        <article>
            <h1>{text}</h1>
            <ul>
                <li><Link href="/podcasts/1">Podcast 1</Link></li>
                <li><Link href="/podcasts/2">Podcast 2</Link></li>
                <li><Link href="/podcasts/3">Podcast 3</Link></li>
                <li><Link href="/">Startpage</Link></li>
            </ul>
            <style jsx>{`
              nav {
                padding: 30px;
                background: lightcoral;
              }
            `}</style>
        </article>
    );
}

PodcastPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <PodcastLayout>{page}</PodcastLayout>
        </Layout>
    )
}