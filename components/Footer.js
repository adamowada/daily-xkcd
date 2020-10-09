import Link from 'next/Link'

export default function Footer(props){
    const currentNum = props.comicNum;
    const nums = [];

    for(let i = currentNum; i > currentNum-10; i--){
        nums.push(i)
    }

    return (
        <footer>
            <h2>Previous {nums.length}</h2>
            <ul>
                {nums.map(num => (
                    <li key={num}>
                        <Link href=''>
                            <a>#(num)</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}