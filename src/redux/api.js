import axios from 'axios';

export const getFlickr = async (opt) => {
  const key = 'f33beb75eca0692aab7280b1e240c75a';
  const method_interest = "flickr.interestingness.getList";
  const method_search = "flickr.photos.search";
  const method_user = "flickr.people.getPhotos";
  const num = 20;
  let url = '';

  if (opt.type === 'interest') {
    url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
  }
  if (opt.type === 'search') {
    url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
  }
  if (opt.type === 'user') {
    url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
  }

  return await axios.get(url);
};

export const getYoutube = async () => {
  const key = 'AIzaSyBFLAU4DL_bNMTCPBWvqtiTwRwd24rWKgU';
  const playlist = "PLBVGGbELl6gh8ndmjShLbbt44ignPvcrd";
  const num = 6;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

  return await axios.get(url);
}

export const getMembers = async () => {
  const url = process.env.PUBLIC_URL + '/DB/members.json';
  return await axios.get(url);
}
/*
  redux로 관리되는 파일들은 컴포넌트 외부에서 전역으로 동작하기 때문에 부수효과를 발생시키지 않는 순수함수 형태로 제작
  부수효과 (Side Effect) : DOM같이 컴포넌트가 직접 제어해야 되는 화면의 변경점을 야기시키는 효과 
  순수함수 (Pure Function) : 부수효과를 발생시키지 않는 순수 자바스크립트로만 구현 가능한 함수
*/