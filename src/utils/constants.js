
export const YOUTUBE_API_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ 
process.env.REACT_APP_GOOGLE_API_KEY;
export const  YOUTUBE_SEARCH_API ="https://www.googleapis.com/youtube/v3/search"+process.env.REACT_APP_GOOGLE_API_KEY;

export const OFFSET_LIVE_CHAT = 100;




