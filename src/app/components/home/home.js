import React, { Component } from "react";
import Fold from "../../../core/components/fold" ;
import ReactLogo from "../../../resources/images/Toast.jpg";
import SmallImage from "../../../resources/images/Toast.jpg?sizes=100w+200w+400w+800w&placeholder";
import Picture from "../../../core/components/picture/picture";


export default class Home extends Component {
  render() {
    return (
      <div className="mt-4">
        <img style={{ maxWidth: "150px" }} className="img-fluid mx-auto d-block" src={ReactLogo} alt="ReactJS"/>
        <h1 className="h2 text-center mt-3">Toastr</h1>
        <p>
          Welcome to toastr
        </p>
        <Fold placeholder={() => <div className="text-center mt-3 mb-3">Loading folded content.. Please wait..</div>}>
          <form>
            <input type={"text"} placeholder={"Twitter Post"}/>
            <button>
              submit
            </button>
          </form>
          <p>Image sample converted to webp, uploaded/coded as jpg</p>

        </Fold>
      </div>
    );
  }
}
