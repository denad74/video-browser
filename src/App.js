import {useEffect, useState} from 'react'
import './App.css';
import SearchBar from './components/SearchBar';
import YouTubeAPI from './API/YouTubeAPI'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
function App() {

  const [videoData, setVideoData] = useState({
    videos: [],
    selectedVideo: null
  });
  // const [selectedVideo, setSelectedVideo]= useState(null)

  
  useEffect(() => {
    onSearch('axios')
  },[])

   
  const onSearch = async (titleSearch) => {

    const response = await YouTubeAPI.get('/search', {
      params: {
        q:titleSearch
      }
    }) 
    // console.log((response));
    setVideoData({...videoData, videos: response.data.items, selectedVideo: response.data.items[0].id.videoId})
    // setVideoData(response.data.items);
    // setSelectedVideo(response.data.items[0].id.videoId)
    console.log(videoData.videos);
    console.log(videoData.selectedVideo);
  }




  const onSelectedVideo = (videoId) => {
    setVideoData({...videoData, selectedVideo: videoId})
  }
  console.log(videoData);
  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <VideoList
        videos={videoData.videos}
        onSelectedVideo={onSelectedVideo}
      />
      <VideoDetail videoId={ videoData.selectedVideo}/>
      
    </div>
  );
}

export default App;
