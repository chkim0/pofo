import { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
export default function Community() {



    const getLocalData = () => {
        const dummyPosts = [
            { title: 'Can young children be dangerous psychopaths?', content: 'Her mother passed away when she was just over a year old, her father abused her and her brother. She was given up for adoption and soon began to demonstrate psychopathic behavior. She killed animals like cats and birds, pinched and hurt her younger brother. She said that she wanted to stick pins in her and that she wanted to stick a knife in her adoptive father while she slept.' },
            { title: 'What is it like to type extremely quickly?', content: 'It earned me a wife. She was an undergraduate, and I was a graduate student, and I offered to type all her term papers for her. I dont think anything I did earned more love and appreciation.' },
            { title: "Are H.P. Lovecraft’s stories actually scary or has he been overhyped?", content: "No disrespect to the other people who’ve answered this question, but they haven’t quite hit the mark. The answer is simple. Lovecraft’s stories are indeed very scary. But they’re scary in a different way than most of the stuff you’ve probably read.Because they were written for an entirely different"},
            { title: 'What are the books that were left out of the Bible, but added later on as apocrypha?', content: 'You cant expect so much from us, we are trying but being a teenager is really hard. Im sorry we arent always able to please you.' },
            { title: 'What fictional weapon are you glad is not real, and why?', content: 'The Speaking Gun is not even a gun at all, but a contraption of flesh, bone, and cartilage made to look like a gun and infused with both the power of Lilith and the ancient words that God used at the beginning of time to create the universe, "Let there be Light."' },

        ];
        let data = localStorage.getItem('post');

        data = data ? JSON.parse(data) : dummyPosts;
        return data;

    };
    /*
    보통 데이터들은 새로고침이나 재접속시 초기화 된다. < --- session storage 브라우저를 종료하면 날라가는 휘발성 저장공간
    이러한 데이터를 기억하기 위해서는
    1. 서버로 보내서 데이터 베이스에 저장
    2. 브라우저가 가지고 있는 임시저장공간 즉 localstorage에 저장한다
    브라우저를 청소하거나 직접 localstorage를 지우지 않는한 사라지지 않음 5MB정도 '텍스트'를 저장할 수 있음
    
    */




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


    //Posts의 값이 변경될때마다 콘솔출력해서 우리가 볼 수 있는 
    useEffect(() => {
        console.log(Posts);

        /*
        데이터를 스토리지에 저장하기 : setItem('key','value');
        JSON.stringify(Posts) 메소드로 문자화 시켜서 저장해야 한다
        */
        localStorage.setItem('post', JSON.stringify(Posts));

    }, [Posts]);

    return (
        <Layout name={"Community"}>
            <div className="inputBox">
                <input type="text" placeholder="제목을 입력하세요" ref={input} />
                <br />
                <textarea cols="30" rows="5" placeholder="본문을 입력하세요" ref={textarea}></textarea>
                <br />
                <div className="btnSet">
                    <button onClick={resetForm}>CANCEL</button>
                    <button onClick={createPost}>WRITE</button>
                </div>

            </div>

            <div className="showBox">
                {Posts.map((post, idx) => {
                    return (
                        <article key={idx}>

                            {
                                post.enableUpdate ? (
                                    //반복도는 post에서 enableUpdate=true값이 있으면 수정모드로 랜더링
                                    <>
                                        <div className="editTxt">
                                            <input type="text" defaultValue={post.title} ref={inputEdit} />
                                            <br />
                                            <textarea cols='30' rows='4' defaultValue={post.content} ref={textareaEdit}>

                                            </textarea>
                                        </div>
                                        <div className="btnSet">
                                            <button onClick={() => disableUpdate(idx)}>CANCEL</button>
                                            <button onClick={() => updatePost(idx)}>UPDATE</button>
                                        </div>
                                    </>
                                ) : (
                                    //반복도는 post에서 enableUpdate=false거나 없으면 일반 출력모드로 랜더링
                                    <>
                                        <div className="txt">
                                            <h2>{post.title}</h2>
                                            <p>{post.content}</p>
                                        </div>
                                        <div className="btnSet">
                                            <button onClick={() => enableUpdate(idx)}>EDIT</button>
                                            <button onClick={() => deletePost(idx)}>DELELTE</button>
                                        </div>
                                    </>
                                )


                            }

                            {/* <div className="txt">
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                            </div>
                            <div className="btnSet">
                                <button onClick={() => enableUpdate(idx)}>EDIT</button>
                                <button onClick={() => deletePost(idx)}>DELELTE</button>
                            </div> */}
                        </article>
                    );

                })}
            </div>
        </Layout>
    );
}