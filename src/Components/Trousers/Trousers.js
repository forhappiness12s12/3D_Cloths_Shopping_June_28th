import React, { useContext } from "react";
import { TrousersUIfabric } from "./TrousersUIfabric";
import { TrousersStyleChange } from "./TrousersStyle";
import { TrousersModel } from "./TrousersModel";
import { StyleProvider } from "./StyleProvider";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Trousers = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-black justify-center items-center ">
                <div className="w-[80%] w-full h-[60%] md:h-[70%] mb-[90px] md:mb-[90px] md:mt-[99px] md:ml-[107px] mr-[0px] md:mr-[33px] bg-[#15171F] text-[white]">
                    <TrousersModel />
                </div>

                <div className="lg:w-[30%] lg:h-full w-[80%] h-[40%] overflow-y-auto bg-black m-[10px] md:mt-[17px] md:mr-[33px]">
                    <Selectoptiontotall />
                    <TrousersUIfabric />
                    <TrousersStyleChange />
                </div>
            </div>
        </StyleProvider>

    );
}