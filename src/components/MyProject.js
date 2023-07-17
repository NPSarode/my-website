import React from "react";
import { Link } from "react-router-dom";

export default function MyProject() {
  return (
    <div className="container-flex project mx-3 px-3   text-center">
      {/* Start of Container div */}

      <div className="row">
        {/* Start of Row div */}

        <div className="col my-3">
          {/* Start of Column div */}

          <div className="card card1">
            <div className="card-header">
              <h4>City Finder</h4>
            </div>
            <div className="card-body">
              <h6 className="card-title">
                Finding the capital of the city using React Js.
              </h6>
              <p className="card-text">Example of state props and routes.</p>
            </div>
            <div className="butn my-3 ">
              <Link
                to="https://find-capital.vercel.app/"
                style={{ textDecoration: "none" }}
              >
                <button type="button" className="btn btn-outline-light ">
                  View
                </button>
              </Link>

              <Link
                to="https://github.com/NPSarode/capital-finder.git"
                style={{ textDecoration: "none" }}
              >
                <button type="button" className="btn btn-outline-light">
                  Source Code
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* End of Column div */}

        
      </div>
      {/* End of Row div */}
    </div>
  );
}
