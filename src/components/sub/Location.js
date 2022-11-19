import { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout"

export default function Location() {

    const { kakao } = window;

    const info = [
        {
            title: 'SEOUL AWARDS',
            latlng: new kakao.maps.LatLng(37.5725254, 126.9756429),
            imgUrl: `${process.env.PUBLIC_URL}/img/marker1.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
            adress: '175, Sejong-daero, Jongno-gu, Seoul'
        },
        {
            title: 'BUSAN AWARDS',
            latlng: new kakao.maps.LatLng(35.1711778, 129.1271956),
            imgUrl: `${process.env.PUBLIC_URL}/img/marker2.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
            adress: '120 Suyeonggangbyeon-daero, Haeundae-gu, Busan'
        },
        {
            title: ' GANGNEUNG AWARDS',
            latlng: new kakao.maps.LatLng(37.7547654, 128.8966476),
            imgUrl: `${process.env.PUBLIC_URL}/img/marker3.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
            adress: '220 Olympic Road, Pyeongchang-gun, Gangwon-do'
        },
        {
            title: ' JECHEON AWARDS',
            latlng: new kakao.maps.LatLng(37.149082, 128.2159946),
            imgUrl: `${process.env.PUBLIC_URL}/img/marker2.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
            adress: '110 Cheongjeon-dong, Jecheon-si, Chungcheongbuk-do'
        },
        {
            title: ' JEONJU AWARDS',
            latlng: new kakao.maps.LatLng(35.8183495, 127.1425492),
            imgUrl: `${process.env.PUBLIC_URL}/img/marker1.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
            adress: '22 Jeonju Guesthouse 3-gil, Wansan-gu, Jeonju-si'
        },
    ];

    const container = useRef(null);
    const btns = useRef(null);
    const [Location, setLocation] = useState(null);

    const [Traffic, setTraffic] = useState(false);
    // Traffic 토글 기능 구현을 위한 state을 추가, 불림값을 부여한다. 스위치가 가능한 불린값을 주는것
    const [Info] = useState(info);
    //setInfo 는 info가 바뀔 일이 없으므로 필요가 없다
    const [Index, setIndex] = useState(0);
    //인덱스가 변화될때 렌더링이 필요하므로 useState에 담아 관리한다

    const option = {
        center: Info[Index].latlng, //기존 0에서 Index로 변경해준다
        level: 3
    };
    const markerPosition = Info[Index].latlng;
    const imageSrc = Info[Index].imgUrl;
    const imageSize = Info[Index].imgSize
    const imageOption = Info[Index].imgPos;

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });



    useEffect(() => {
        container.current.innerHTML = '';

        const map_instance = new kakao.maps.Map(container.current, option);

        marker.setMap(map_instance);
        setLocation(map_instance);

        const mapTypeControl = new kakao.maps.MapTypeControl();
        map_instance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);


        const zoomControl = new kakao.maps.ZoomControl();
        map_instance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


        for (const btn of btns.current.children) btn.classList.remove("on");
        btns.current.children[Index].classList.add("on");


        window.addEventListener("resize", () => {
            map_instance.setCenter(Info[Index].latlng);
        });
    }, [Index]); //<--- 기존 컴포넌트가 처음 마운트 되었을 때만 지도를 출력하던 방식에서, Index 가 변경될때 지도가 다시 렌더링 되는 방식으로 바꿈


    //트래픽 토글전용 useEffect  => 
    useEffect(() => {
        if (!Location) return;
        //Location state의 값은 두번째 호출부터 값이 담겨 사이클이 돌아가므로 처음 값이 존재하지 않는 초기 오류방지를 위해 조건문 처리함

        //트레픽값에 따라서 생성과 삭제로 나누어서 코드를 제공, 구현
        Traffic
            ? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
            : Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    }, [Traffic]); //<--- traffic state의 값이 변경될때 마다 실행이 되는 구문



    return (
        <Layout name={"Location"}>
            <div className="inner">
                <p className="subtext">"Donetsk and Luhansk are home to two that Moscow has backed since 2014,
                    <br></br>while Kherson and parts of  have been controlled by since shortly after the invasion began in late February."</p>
                <div className="locationsec">
                    <div className="btnSet">
                        {/* <button onClick={() => { setTraffic(!Traffic) }
                    }>
                        Traffic의 값에 따라서 버튼의 내용도 변경 
                        {Traffic ? 'Traffic OFF' : 'Traffic ON'}
                    </button> */}
                        <ul className="branch" ref={btns}>
                            {
                                Info.map((el, idx) => {
                                    return (
                                        <li key={idx} onClick={() => setIndex(idx)}>
                                            <h2>{el.title}</h2>
                                            <p>{el.adress}</p>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div id="map" ref={container}></div>
                </div>
            </div>







        </Layout>
    );
}