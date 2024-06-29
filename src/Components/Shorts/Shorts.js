import React, { useContext } from "react";
import { StyleProvider } from "./StyleproviderShorts";
import { ShortsModel } from "./ShortsModel";
import { ShortsUIfabric } from "./ShortsUIfabric";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";
import { ImprovedNoise } from "three/examples/jsm/Addons.js";

export const Shorts = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-black">
            <div className="lg:w-[70%] mt-[126px] w-full ml-[107px] mr-[33px] h-[83%] bg-[#15171F] text-[white] ">
                    <ShortsModel />
                </div>
                
                <div className="lg:w-[30%] lg:h-full w-full h-[30%] mr-[88px] overflow-y-auto bg-black my-[47px]">
                    <Selectoptiontotall/>
                    <ShortsUIfabric />

                </div>
            </div>
        </StyleProvider>

    );
}