import React from "react";
import { Link } from "react-router-dom";

export default function MyProject() {
  return (
    <div class="container-flex project mx-3 px-3   text-center">
      {/* Start of Container div */}

      <div class="row">
        {/* Start of Row div */}

        <div class="col my-3">
          {/* Start of Column div */}

          <div class="card card1">
            <div class="card-header">
              <h4>City Finder</h4>
            </div>
            <div class="card-body">
              <h6 class="card-title">
                Finding the capital of the city using React Js.
              </h6>
              <p class="card-text">Example of state props and routes.</p>
            </div>
            <div className="butn my-3 ">
              <Link
                to="https://find-capital.vercel.app/"
                style={{ textDecoration: "none" }}
              >
                <button type="button" class="btn btn-outline-light ">
                  View
                </button>
              </Link>

              <Link
                to="https://github.com/NPSarode/capital-finder.git"
                style={{ textDecoration: "none" }}
              >
                <button type="button" class="btn btn-outline-light">
                  Source Code
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* End of Column div */}

        <div class="col my-3">
          {/* Start of Column div */}

          <div class="card card2">
            <div class="card-header">
              <h4>Text Utility</h4>
            </div>
            <div class="card-body">
              <h6 class="card-title">
                Performing different functionality on the text.
              </h6>
              <p class="card-text">Example of state and props.</p>
            </div>
            <div className="butn my-3 ">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
              >
                <button type="button" class="btn btn-outline-light ">
                  View
                </button>
              </Link>

              <Link
                to="/"
                style={{ textDecoration: "none" }}
              >
                <button type="button" class="btn btn-outline-light">
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
