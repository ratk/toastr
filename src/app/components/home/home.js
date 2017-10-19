import React, { Component } from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import Fold from "../../../core/components/fold" ;
import ReactLogo from "../../../resources/images/Toast.jpg";
import SmallImage from "../../../resources/images/Toast.jpg?sizes=100w+200w+400w+800w&placeholder";
import Picture from "../../../core/components/picture/picture";
import * as firebase from "firebase";
import Example from "./dropdown";

var config = {
  apiKey: "AIzaSyCJhlG41Yk_si3ah4c2M1JhPudlhoXM5q4",
  authDomain: "toastr-429e1.firebaseapp.com",
  databaseURL: "https://toastr-429e1.firebaseio.com",
  projectId: "toastr-429e1",
  storageBucket: "toastr-429e1.appspot.com",
  messagingSenderId: "224130504877"
};
firebase.initializeApp(config);



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
