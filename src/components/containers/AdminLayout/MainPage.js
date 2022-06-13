import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faMoneyBillTrendUp,
  faAd,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RecentCustomers from "./RecentCustomers";
import Cardbox from "./Cardbox";
import ListUsers from "./Users";

const MainPage = () => {

  const [showUsers, setShowUsers] = useState(false);
  const [showPrices, setShowPrices] = useState(false);
  const handleClickUsers = event => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    setShowUsers(current => !current);
    // 👇️ щоб по кліку тільки відкривалось 
    // setIsShown(true);
  };
  const handleClickPrices = event => {
    setShowPrices(current => !current);
  };

  return (
    <>
    {/* {showPrices && <Cardbox />}  */}
    </>

  );
};
export default MainPage;
