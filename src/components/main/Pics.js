import {useSelector} from 'react-redux';
import Masonry from 'react-masonry-component';
function Pics({Scrolled, start}){
    const Pics = useSelector(store=>store.flickrReducer.flickr);
    //변수 = 특정값 || 대체값;
    //변수에 대입되는 특정값이 undefined, NaN 같이 비정상인값이 들어올때 대신 적용될 대체값을 설정해주는것

    const position = Scrolled - start || 0;

    //position => 전체 스크롤값에서 해당 섹션요소의 세로 위치값을 뺀것으로 처음섹션의 초입에는 0이 된다 
    const masonryOptions = { transitionDuration: '0.5s' };

    return(
        <main id="pics" className="myScroll">
       <p 
       style = {{
        left : 900 + position, 
       }}
        >Wtat we can do for you?</p>
        <h3
        style={{
            left : 700 + position / 2,
        }}>Wtat we can do for you?</h3>
       
       
        <ul>
     
        {Pics.map((pic, idx)=>{
            if(idx >=5) return;
            return(
                <Masonry elementType={'div'} options={masonryOptions}>
                <li key={pic.id}>
                    <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} />
                    
                </li>
                </Masonry>
            )
        })}
        </ul>
       
       </main>
    );
}

export default Pics;