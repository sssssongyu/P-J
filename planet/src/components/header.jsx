import React from "react";
import icon from '../images/common/icon.json'
import Lottie from 'react-lottie-player'

import '../css/header.css'
const Edit =()=> {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../images/common/icon.json'),
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div id="body" class="header">
            <div class="middle">
                <span class="header_left">PLANET</span>
                <span class="header_middle">
                    <Lottie
                        loop
                        animationData={icon}
                        play
                        style={{ width: 250, height: 250,display:"inline-block"}}
                    />
                </span>
                <span class="header_right">JOURNALIST</span>
            </div>
            <div class="nav">
                <div class="navBox">
                    <span class="navEle">HOME</span>
                    <span class="dot">&#183;</span>
                    <span class="navEle">EDIT</span>
                    <span class="dot">&#183;</span>
                    <span class="navEle">HISTORY</span>
                </div>
            </div>
        </div>
    )
};

export default Edit;