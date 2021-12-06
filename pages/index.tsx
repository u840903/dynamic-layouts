import type {ReactElement} from 'react'
import {Layout} from '../components/Layout'
import {PodcastLayout} from '../components/PodcastLayout'
import Link from 'next/link'

export default function Page() {
    return (
        <h1>Hello world</h1>
    );
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>

            <h1>Start Page</h1>
            <nav>
                <Link href="/podcasts/1">Podcast 1</Link>
            </nav>
        </Layout>
    )
}