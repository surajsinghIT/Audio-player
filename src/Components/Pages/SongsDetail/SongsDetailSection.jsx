import axios from 'axios';
import React, { useEffect, useState } from 'react'


function SongsDetailSection(props) {

    const [Data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [remove, setRemove] = useState(true);
    const [currentAudio, setCurrentAudio] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = `https://v1.nocodeapi.com/surajsingh/spotify/zpXKiKxmnGkXmFkA/search?q=${keyword}&type=track`;
            const response = await axios.get(apiUrl);
            console.log("Response", response.data.tracks.items);
            setData(response.data.tracks.items);
          } catch (error) {
            console.log("Error:", error);
          }
        };
    
        fetchData();
      }, [keyword]);

      const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
        } else {
          return text;
        }
      };
    
    //   const handleOnclick = async (event) => {
    //     event.preventDefault();
    //     await getSpotifyTracks();
    //     setRemove(false);
    //   }
    
    //   const handleChange = (event) => {
    //     setKeyword(event.target.value);
    //   }
    
      const handleAudioPlay = (event) => {
        if (currentAudio && currentAudio !== event.target) {
          currentAudio.pause();
        }
        setCurrentAudio(event.target);
      }



    return (
        <div>
            <div className="container">
                <div className="row">
                    {Data && Data.map((e, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card">
                                <img className="card-img-top" src={e.album?.images[0]?.url} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{truncateText(e.album?.name, 20)}</h5>
                                    <p className="card-text">
                                        Artist: {e.artists[0]?.name}
                                    </p>
                                    <audio src={e.preview_url} controls style={{ width: '100%' }} onPlay={handleAudioPlay}></audio>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SongsDetailSection
