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
            <div className="flex lg:flex-row flex-col h-full bg-black justify-center items-center ">
                <div className="w-[80%] w-full h-[60%] md:h-[80%] mb-[90px] md:mb-[90px] md:mt-[99px] md:ml-[107px] mr-[0px] md:mr-[33px] bg-[#15171F] text-[white]">
                    <ShortsModel />
                </div>

                <div className="lg:w-[30%] lg:h-full w-[80%] h-[30%] overflow-y-auto bg-black m-[10px] md:mt-[17px] md:mr-[33px]">
                    <Selectoptiontotall/>
                    <ShortsUIfabric />
                </div>
            </div>
        </StyleProvider>

    );
}