import { useEffect, useRef, useState } from "react";
import Header from "../common/Header";
import News from "./News";
import Pics from "./Pics";
import Vids from "./Vids";
import Visual from "./Visual";
import Btns from "./Btns";
import Anime from "../../asset/Anime";

function Main() {
    const main = useRef(null);
    const pos = useRef([]);
    let secs = null;
    const [Index, setIndex] = useState(0);
    const [Scrolled, setScrolled] = useState(0);

    const getPos = () => {
        pos.current = [];
        secs = main.current.querySelectorAll('.myScroll');
        for (const sec of secs) pos.current.push(sec.offsetTop);
        console.log(pos.current);
    }

    const activation = () => {
        const base = -window.innerHeight / 2;
        //const base = 0;
        const scroll = window.scrollY;
        const btns = main.current.querySelectorAll('.scroll_navi li');

        setScrolled(scroll);
        pos.current.map((pos, idx) => {
            //현재 스크롤한 값과 pos의 값을 비교해서
            if (scroll >= pos + base) {
                for (const btn of btns) btn.classList.remove('on');
                for (const sec of secs) sec.classList.remove('on');
                btns[idx].classList.add('on');
                secs[idx].classList.add('on');

            }
            //버튼을 활성화~
            //일단 모두 비활성화
            //특정 버튼을 활성
        });
    };

    useEffect(() => {
        getPos();
        //리사이즈 이벤트가 발생하면 스크롤 값을 다시 불러온다
        window.addEventListener('resize', getPos);
        window.addEventListener("scroll", activation);
        return () => {
            window.removeEventListener("resize", getPos);
            window.removeEventListener("scroll", activation);
        }
    }, []);

    useEffect(() => {
        new Anime(window, {
            prop: 'scroll',
            value: pos.current[Index],
            duration: 500,
        });
    }, [Index]);


    return (
        <main ref={main}>
            <Header type={'main'} />
            <Visual />
            <Pics Scrolled={Scrolled} start={pos.current[2]} />
            <News />
            <Vids />
            <Btns setIndex={setIndex} />
        </main>
    );
}

export default Main;