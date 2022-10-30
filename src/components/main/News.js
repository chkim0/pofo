import { useEffect, useState } from "react";

function News() {



    const getLocalData = () => {
        const dummyPosts = [
            { title: 'Can young children be dangerous psychopaths?', content: 'Her mother passed away when she was just over a year old, her father abused her and her brother. She was given up for adoption and soon began to demonstrate psychopathic behavior. She killed animals like cats and birds, pinched and hurt her younger brother. She said that she wanted to stick pins in her and that she wanted to stick a knife in her adoptive father while she slept.' },
            { title: 'What is it like to type extremely quickly?', content: 'It earned me a wife. She was an undergraduate, and I was a graduate student, and I offered to type all her term papers for her. I dont think anything I did earned more love and appreciation.' },
            { title: "Are H.P. Lovecraft’s stories actually scary or has he been overhyped?", content: "No disrespect to the other people who’ve answered this question, but they haven’t quite hit the mark. The answer is simple. Lovecraft’s stories are indeed very scary. But they’re scary in a different way than most of the stuff you’ve probably read.Because they were written for an entirely different"},
            { title: 'What are the books that were left out of the Bible, but added later on as apocrypha?', content: 'You cant expect so much from us, we are trying but being a teenager is really hard. Im sorry we arent always able to please you.' },
            { title: 'What fictional weapon are you glad is not real, and why?', content: 'The Speaking Gun is not even a gun at all, but a contraption of flesh, bone, and cartilage made to look like a gun and infused with both the power of Lilith and the ancient words that God used at the beginning of time to create the universe, "Let there be Light."' },

        ];
        const data = localStorage.getItem('post');

        if (data) {
            return JSON.parse(data);
        } else {
            return dummyPosts;
        }


    };
    //  const [Posts, setPosts] = useState([]);

    const [Posts] = useState(getLocalData());





    useEffect(() => {
        localStorage.setItem('post', JSON.stringify(Posts));
    }, []);

    return (
        <main id="news" className='myScroll'>
            <div className="inner">
                <div className="newsheader">
            <span>OUR NEWS</span>
            <h1>What's New?</h1>
            </div>
            {Posts.map((post, idx) => {
                if (idx >= 5) return; //5개의 인덱스만 가져다 달라는 의미
                 /*날짜넣기*/   
                return (
                    <article key={idx}>
                        <h2>{post.date}</h2>   
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </article>
                    
                );
            })};
            <a className="newsbtn"> all news</a>
            <div className="newssec">
                
            </div>
        </div>
        </main>
    );
}
export default News;