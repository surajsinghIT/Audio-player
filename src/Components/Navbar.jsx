import axios from 'axios';
import { useState } from 'react';
import '../../src/style.css'

const Navbar = () => {
  const [Data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [remove, setRemove] = useState(true);
  const [currentAudio, setCurrentAudio] = useState(null); // Track the currently playing audio

  const getSpotifyTracks = async () => {
    try {
      const apiUrl = `https://v1.nocodeapi.com/surajsingh/spotify/zpXKiKxmnGkXmFkA/search?q=${keyword}&type=track`
      const response = await axios.get(apiUrl)
      console.log("Response", response.data.tracks.items)
      setData(response.data.tracks.items);
      return response;

    } catch (error) {
      console.log("error", error)
      console.log(error.message)
    }
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  const handleOnclick = async (event) => {
    event.preventDefault();
    await getSpotifyTracks();
    setRemove(false);
  }

  const handleChange = (event) => {
    setKeyword(event.target.value);
  }

  const handleAudioPlay = (event) => {
    if (currentAudio && currentAudio !== event.target) {
      currentAudio.pause();
    }
    setCurrentAudio(event.target);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MusicMingle
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search" style={{ width: '90%' }}>
              <input
                value={keyword}
                onChange={handleChange}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" style={{ color: 'red', background: 'white' }} onClick={handleOnclick}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav><br />
      {remove && (
        <div className="homepage" style={{ textAlign: 'center' }}>
          <div style={{ background: '#eba7a7', position: 'relative', left: '166px', width: '950px' }}>
            <h1>Welcome to MusicMingle</h1>
            <p>Discover your favorite songs here!</p>
            <p>Use the search bar above to find tracks.</p>
          </div>
          <img height={'350px'} width={'949px'} src='/music2.webp' alt="Music" />
        </div>
      )}
      <span style={{ position: 'relative', left: '34px' }}>
        {Data && (
          <>
            {Data.map((e, index) => (
              <div key={index} style={{ display: 'inline-block', padding: '3px' }}>
                <div className="card" style={{ width: "18rem" }}>
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
          </>
        )}
      </span>
    </div>
  )
}

export default Navbar;
