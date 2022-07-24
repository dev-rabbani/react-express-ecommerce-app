
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="inner-banner inner-banner--style-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-banner-content inner-banner-content--styl-1">
                <h2 className="banner-title">About Page</h2>
                <nav className="breadcrumb-wrap" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* inner-banner */}
    </>
  );
};

export default About;
