import React from "react";

const FooterSection = () => {
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
              <li><a href="" className="text-white text-decoration-none">Home</a></li>
              <li><a href="" className="text-white text-decoration-none">Discover</a></li>
              <li><a href="" className="text-white text-decoration-none">Playlists</a></li>
              <li><a href="" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex">
              <a href="" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="" className="text-white">
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
