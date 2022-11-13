import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-component';
function Pics({ Scrolled, start }) {
  const Pics = useSelector(store => store.flickrReducer.flickr);
  //변수 = 특정값 || 대체값;
  //변수에 대입되는 특정값이 undefined, NaN 같이 비정상인값이 들어올때 대신 적용될 대체값을 설정해주는것

  const position = Scrolled - start || 0;

  //position => 전체 스크롤값에서 해당 섹션요소의 세로 위치값을 뺀것으로 처음섹션의 초입에는 0이 된다 
  const masonryOptions = { transitionDuration: '0.5s' };

  return (
    <main id="pics" className="myScroll">
      <div className="inner">
        <p style={{
          left: 900 + position,
        }} className="mtxt"
        >Wtat we can do for you?</p>
        <h3
          style={{
            left: 700 + position / 2,
          }}>Wtat we can do for you?</h3>


        <ul>
          {Pics.map((pic, idx) => {
            if (idx >= 4) return;
            return (

              <li key={pic.id}>
                <figure className="bg">
                  <img src={process.env.PUBLIC_URL + '/img/pngg.png'} className="picbg" />
                  <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} className='picp' />

                </figure>


              </li>

            )
          })}

          <div className="txt-wrap1">
            <div className="num">01</div>
            <div className="tit">
              Movies & advertising videos
            </div>
            <p className="txt">
              All at once everything looks different, now that I see you
              Some people are worth melting for
              As Alexander Baunov at the Carnegie Endowment put it last week, the message from the Kremlin
            </p>
          </div>

          <div className="txt-wrap2">
            <div className="num">02</div>
            <div className="tit">
              Clips & music videos
            </div>
            <p className="txt">
              An engaged woman is always more agreeable than a disengaged. She is satisfied with herself. Her cares are over, and she feels that she may exert all her powers of pleasing without suspicion.


            </p>
          </div>

          <div className="txt-wrap3">
            <div className="num">03</div>
            <div className="tit">
              Short film productions
            </div>
            <p className="txt">
              A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.

              Happiness in this world, when it comes, comes incidentally. Make it the object of pursuit, and it leads us a wild-goose chase, and is never attained.
            </p>
          </div>

          <div className="txt-wrap4">
            <div className="tit">
              Remember you're the one who can fill the world with sunshine
            </div>
            <p className="txt">
              The second part of that message spelled out in Putin’s speech announcing partial mobilization
              To most observers, such dire warnings are a desperate gambit.
            </p>
          </div>
        </ul>
      </div>

    </main>
  );
}

export default Pics;