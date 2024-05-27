import axios from 'axios';
import { useState } from 'react';
import '../../src/style.css'
import music2 from './music2.webp';

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
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div style={{ background: '#eba7a7', padding: '20px' }}>
          <h1>Welcome to MusicMingle</h1>
          <p>Discover your favorite songs here!</p>
          <p>Use the search bar above to find tracks.</p>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12">
        <img
          className="img-fluid"
          style={{ height: 'auto', width: '100%' }}
          src={music2}
          alt="Music"
        />
      </div>
    </div>
  </div>
</div>

)}

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

export default Navbar;
