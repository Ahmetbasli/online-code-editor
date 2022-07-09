import "./index.scss";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Popup from "./components/Popup/Popup.js";

const main = new Main();
const header = new Header();
const popup = new Popup();

header.apply();
main.apply();
