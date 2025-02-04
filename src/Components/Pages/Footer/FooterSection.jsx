import React from "react";

const FooterSection = () => {

  const handleClickItems = (e) => {
    e.preventDefault()
  }
  return (
    <footer className="text-white py-4" style={{ backgroundColor: "#343a40" }} >
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5 className="text-uppercase">About MusicMingle</h5>
            <p>
              MusicMingle is your ultimate destination for discovering, sharing, and enjoying your favorite tunes. Stay connected and groove to the beats!
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="" className="text-white text-decoration-none" onClick={handleClickItems}>Home</a></li>
              <li><a href="" className="text-white text-decoration-none" onClick={handleClickItems}>Discover</a></li>
              <li><a href="" className="text-white text-decoration-none" onClick={handleClickItems}>Playlists</a></li>
              <li><a href="" className="text-white text-decoration-none" onClick={handleClickItems}>Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex">
              <a href="" className="text-white me-3" onClick={handleClickItems}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="" className="text-white me-3" onClick={handleClickItems}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="" className="text-white me-3" onClick={handleClickItems}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="" className="text-white" onClick={handleClickItems}>
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 MusicMingle. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
