import useSWR from 'swr'
import {fetcher} from "../helpers/fetcher";



export const PodcastLayout = ({children}) => {

    const { data, error } = useSWR(
        "https://cat-fact.herokuapp.com/facts",
        fetcher
    );

    const text =  data && data[0]?.text;

    return (
        <main>
            <h1>
                Podcast Layout - {text}
            </h1>
            {children}
            <style jsx>{`
              main {
                padding: 30px;
                background: lightcoral;
              }
            `}</style>
        </main>
    );
}