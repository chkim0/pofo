import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';
import { useRef, useState } from 'react';

function Vids() {
	const pop = useRef(null);
	const sw = useRef(null);
	const [Index, setIndex] = useState(0);
	const { youtube } = useSelector((store) => store.youtubeReducer);
	console.log(youtube)

	return (
		<>
			<main id="vids" className='myScroll'>
				{youtube.length !== 0 && (
					<Swiper
						ref={sw}
						modules={[Pagination, Navigation, Autoplay]}
						pagination={
							{
								clickable: true,
							}
						}
						spaceBetween={60}
						navigation={true}
						loop={true}
						slidesPerView={'auto'}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						//min-width 값을 설정해서 브라우저 폭마다 swiper 옵션설정 변경가능
						breakpoints={{
							320: {
								slidesPerView: 1
							},
							580: {
								slidesPerView: 'auto'
							}

						}}
					>
						{
							youtube.map((vid, idx) => {
								return (
									<SwiperSlide key={idx}>
										<div className="inner">
											<div className="pic" onClick={() => {
												pop.current.open();
												setIndex(idx);
												sw.current.swiper.autoplay.stop();

											}}>
												<img src={vid.snippet.thumbnails.standard.url} />
											</div>
											<h2>{vid.snippet.title}</h2>
										</div>
									</SwiperSlide>
								)
							})}
					</Swiper>
				)}
			</main>

			<Popup ref={pop}>
				{youtube.length !== 0 && (
					<iframe src={`https://www.youtube.com/embed/${youtube[Index].snippet.resourceId.videoId}`} frameBorder='0'></iframe>
				)}
			</Popup>
		</>
	);
}
export default Vids;