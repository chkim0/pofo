import { useEffect, useState } from "react";
import { useRef } from "react";
function News() {



    const getLocalData = () => {
        const dummyPosts = [
            { title: 'Can young children be dangerous psychopaths?', content: 'Her mother passed away when she was just over a year old, her father abused her and her brother. She was given up for adoption and soon began to demonstrate psychopathic behavior. She killed animals like cats and birds, pinched and hurt her younger brother. She said that she wanted to stick pins in her and that she wanted to stick a knife in her adoptive father while she slept.' },
            { title: 'What is it like to type extremely quickly?', content: 'It earned me a wife. She was an undergraduate, and I was a graduate student, and I offered to type all her term papers for her. I dont think anything I did earned more love and appreciation.' },
            { title: "Are H.P. Lovecraft’s stories actually scary or has he been overhyped?", content: "No disrespect to the other people who’ve answered this question, but they haven’t quite hit the mark. The answer is simple. Lovecraft’s stories are indeed very scary. But they’re scary in a different way than most of the stuff you’ve probably read.Because they were written for an entirely different" },
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
    const input = useRef(null);
    const textarea = useRef(null);
    const inputEdit = useRef(null);
    const textareaEdit = useRef(null);
    const [Posts, setPosts] = useState(getLocalData);
    const [Allowed, setAllowed] = useState(true);

    const resetForm = () => {
        input.current.value = '';
        textarea.current.value = '';
        //초기화 함수에서 해당모드 즉 해당 값을 참조했을 때만 초기화 되도록
        if (inputEdit.current) {
            inputEdit.current.value = '';
            textareaEdit.current.value = '';
        }
    }


    //조건 ? 참이면 이코드 : 거짓이면 이코드

    //글저장 함수
    const createPost = () => {

        if (!input.current.value.trim() || !textarea.current.value.trim()) {
            resetForm();
            return alert('제목과 본문을 모두 입력하세요');
        }

        setPosts([

            {
                title: input.current.value,
                content: textarea.current.value
            },
            ...Posts,
        ]);
        resetForm();
    };

    //글 삭제함수
    const deletePost = (index) => {
        console.log(index);

        setPosts(Posts.filter((_, idx) => idx !== index));
        /*
        filter() 메서드는 자바스크립트 배열의 내장함수이다
        주어진 함수의 테스트를 통과하는 모든 요소를 모아 true면 요소를 유지하고 false면 버린다
        새로운 배열로 변환하기 때문에 전개연산자를 쓰지 않아도 불변성이 유지된다
        처리할 대상이 되는 배열.filter((처리할 요소값, 요소의 인데스)=>조건값 즉 테스트값) 
        
        글삭제함수로 들어온 index는 밑에 delete버튼을 클릭한 특정인덱스값이다
        idx는 filter안에서 반복을 돌리고있는 순번을 나타낸다
        idx !== index 는 
        filter는 조건이 참이면 유지하고 거짓이면 지우기때문에 지워야하는 인덱스가 반복을 돌리고있는 인덱스와 같은 값이 되면 false라는 요건을 충족시켜야한다
        */
    };

    //글 수정모드 변경함수
    const enableUpdate = (index) => {
        if (!Allowed) return;  //false이면 return으로 막음
        setAllowed(false);
        setPosts(
            Posts.map((post, idx) => {
                if (idx === index) post.enableUpdate = true;
                return post;
            })
        );
    };

    const disableUpdate = (index) => {
        setAllowed(true);
        setPosts(
            Posts.map((post, idx) => {
                if (idx === index) post.enableUpdate = false;
                return post;
            })
        );
    };

    //실제 글 수정함수
    const updatePost = (index) => {
        if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
            resetForm();
            return alert('수정할 제목과 본문을 모두 입력하세요');
        }
        setAllowed(true);
        setPosts(
            Posts.map((post, idx) => {
                if (idx === index) {
                    post.title = inputEdit.current.value;
                    // 수정한곳(inputEdit의 값을 post의 값에다가 대입해줌)
                    post.content = textareaEdit.current.value;
                    //수정한곳(textareaEdit의 값을 post의 값에다가 대입해줌)
                    post.enableUpdate = false;
                    //수정불가능 false
                }
                return post;
            })
        );
    };


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
                    if (idx >= 3) return; //5개의 인덱스만 가져다 달라는 의미
                    /*날짜넣기*/
                    return (

                        <article key={idx}>
                            <figure className="bg">
                                <img src={process.env.PUBLIC_URL + '/img/post2.png'} />
                            </figure>
                            <h2>{post.date}</h2>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </article>


                    );
                })}

                <a className="newsbtn"> all news</a>
                <div className="newssec">
                    <figure className="pic">
                        <img src={process.env.PUBLIC_URL + '/img/newspo.jpg'} />
                    </figure>
                    <div className="inputBox">

                        <input type="text" placeholder="Please enter a title" ref={input} />
                        <br />
                        <textarea cols="30" rows="5" placeholder="Please enter the contents" ref={textarea}></textarea>
                        <br />
                        <div className="btnSet">
                            <button onClick={resetForm}>CANCEL</button>
                            <button onClick={createPost}>WRITE</button>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}
export default News;