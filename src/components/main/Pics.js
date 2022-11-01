import {useSelector} from 'react-redux';

function Pics({Scrolled, start}){
    const Pics = useSelector(store=>store.flickrReducer.flickr);
    //변수 = 특정값 || 대체값;
    //변수에 대입되는 특정값이 undefined, NaN 같이 비정상인값이 들어올때 대신 적용될 대체값을 설정해주는것

    const position = Scrolled - start || 0;

    //position => 전체 스크롤값에서 해당 섹션요소의 세로 위치값을 뺀것으로 처음섹션의 초입에는 0이 된다 
    console.log(Scrolled);
    return(
        <main id="pics" className="myScroll">
       <p 
       style = {{
        left : 100 + position, 
       }}
    //    <p 
    //    style={
    //         position >=0
    //         ?{ left: 100 + position, }
    //         : null
        >Wtat we can do for you?</p>
        <h3
        style={{
            left : 100 + position / 2,
        }}>Wtat we can do for you?</h3>
        <ul>
        {Pics.map((pic, idx)=>{
            if(idx >=5) return;
            return(
                
                <li key={pic.id}>
                    <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} />
                    
                </li>
            )
        })}
        </ul>
       </main>
    );
}

export default Pics;