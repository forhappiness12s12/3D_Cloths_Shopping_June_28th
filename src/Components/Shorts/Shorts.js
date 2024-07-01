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
                <div className="lg:w-[70%] lg:h-full w-full h-[70%] bg-[#141720] text-[white] ">
                    <ShortsModel />
                </div>

                <div className="lg:w-[30%] w-[80%] lg:h-full w-full h-[30%] overflow-y-auto bg-black lg:p-[10px] p-5">
                    <Selectoptiontotall />
                    <ShortsUIfabric />
                </div>
            </div>
        </StyleProvider>

    );
}