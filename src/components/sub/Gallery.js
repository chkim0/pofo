import Layout from "../common/Layout";
import Popup from "../common/Popup";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-component';
import * as types from '../../redux/actionType';

export default function Gallery() {
  //FLICKR_START타입의 액션전달할 dispatch함수 활성화
  const dispatch = useDispatch();
  //store 부터 전역 flickr데이터를 가져옴
  const Items = useSelector(store => store.flickrReducer.flickr);
  const masonryOptions = { transitionDuration: '0.5s' };
  //액션객체에 담아서 saga에 전달한 Opt값을 state로 생성
  const [Opt, setOpt] = useState({ type: 'user', user: '196642495@N03' });
  const [Loading, setLoading] = useState(true);
  const [EnableClick, setEnableClick] = useState(true);
  const [Index, setIndex] = useState(0);
  const frame = useRef(null);
  const input = useRef(null);
  const pop = useRef(null);


  const showSearch = () => {
    const result = input.current.value.trim();
    input.current.value = '';

    if (!result) return alert('검색어를 입력하세요');

    if (!EnableClick) return;
    setEnableClick(false);
    setLoading(true);
    frame.current.classList.remove('on');
    //axios함수에 적용될 Opt state값을 변경
    setOpt({ type: 'search', tags: result, });
  };

  const showInterest = () => {
    if (!EnableClick) return;
    setEnableClick(false);
    setLoading(true);
    frame.current.classList.remove('on');
    //axios함수에 적용될 Opt state값을 변경
    setOpt({ type: 'interest' });
  }

  const showMine = () => {
    if (!EnableClick) return;
    setEnableClick(false);
    setLoading(true);
    frame.current.classList.remove('on');
    //axios함수에 적용될 Opt state값을 변경
    setOpt({ type: 'user', user: '196642495@N03' });
  }

  const showUser = (e) => {
    if (!EnableClick) return;
    setEnableClick(false);
    setLoading(true);
    frame.current.classList.remove('on');
    //axios함수에 적용될 Opt state값을 변경
    setOpt({ type: 'user', user: e.target.innerText });
  }


  //Opt state값이 변경될떄마다 해당 구문 호출되면서
  //dispatch로 saga에 'FLICKR_START라는 액션타입으로 Opt 정보값을 전달
  useEffect(() => {
    dispatch({ type: types.FLICKR.start, Opt })
  }, [Opt])


  //store로부터 최종 데이터가 전달이 되면
  //컨텐츠 보이도록 처리
  useEffect(() => {
    setTimeout(() => {
      frame.current.classList.add('on');
      setLoading(false);
      setEnableClick(true);
    }, 500);

  }, [Items])


  return (
    <>
      <Layout name={'Gallery'}>
        {Loading && (
          <img
            className="loading"
            src={`${process.env.PUBLIC_URL}/img/loading1.gif`}
          />
        )}
        <p className="subtext">The second part of that message  spelled out in speech announcing partial mobilization  <br></br>is that any attack on what is considered invites the full range of retaliation.</p>

        <div className="controls">
          <nav>
            <button onClick={showInterest}>Interest Gallery</button>
            <button onClick={showMine}>My Gallery</button>
          </nav>

          <div className="searchBox">
            <input type="text" ref={input} placeholder='검색어를 입력하세요'
              onKeyUp={(e) => {
                if (e.key === 'Enter') showSearch();
              }} />
            <button onClick={showSearch}>Search</button>
          </div>
        </div>



        <div className="frame" ref={frame}>
          <Masonry elementType={'div'} options={masonryOptions}>


            {Items.map((item, idx) => {
              return (
                <article key={idx}>
                  <div className="inner">
                    <div className="pic"
                      onClick={() => {
                        pop.current.open();
                        setIndex(idx);
                      }}
                    >
                      <img
                        src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                        alt={item.title} />
                    </div>
                    <h2>{item.title}</h2>

                    <div className="profile">
                      <img src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`} alt={item.owner}
                        onError={(e) => {
                          e.target.setAttribute(
                            'src',
                            'https://www.flickr.com/images/buddyicon.gif'
                          );
                        }}
                      />
                      <span onClick={showUser}>{item.owner}</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </Masonry>
        </div>
      </Layout>

      <Popup ref={pop}>
        {Items.length !== 0 && (

          <img
            src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
            alt={Items[Index].title} />
        )

        }

      </Popup>
    </>
  );
}
/*
? 형태는 쿼리스트링하는 형태의 방법이다
쿼리스트링은 ??
사용자가 입력 데이터를 전달하는 방법중의 하나로 url주소에 미리 협의된 데이터를 파라미터를 통해 넘기는 것을 말한다
파라미터는 물음표 뒤에 = 으로 연결된 key value 부분을 말한다
url에 붙여서 추가적인 정보를 서버측에 전달하는 내용이다
클라이언트가 어떤 특정 리소스에 접근하고 싶어하는지의 정보를 담는것
형식(방법)
- 정해진 엔드포인트 주소이후에 ?를 쓰는것으로 쿼리스트링이 시작함을 알린다
- parameter = value 로 필요한 파라미터의 값을 적는다
- 파라미터가 여러개일경우 &를 붙여서 여러개의 파라미터를 넘길수 있다
- 엔드포인트주소/추가적인주소 ? 파라미터=값&파라미터=값
*/