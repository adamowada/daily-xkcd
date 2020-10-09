import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props){
    return(
        <div className="hello">
            <Header />
            <h1>XKCD</h1>
            <p>{props.comic.title}</p>
            <style>{`
            .hello {
                font: 15px Helvetica, Ariel, sans-serif;
                background: #eee;
                text-align: center;
                padding: 100px;
            }
            `}
            </style>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context){
    const response = await fetch('https://xkcd.com/info.0.json');
    const data = response.json();
    return{
        props: {
            comics: data
        }
    }
}
