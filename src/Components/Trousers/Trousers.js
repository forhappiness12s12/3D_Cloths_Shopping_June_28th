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

            <div className="flex lg:flex-row flex-col h-full bg-black">
                <div className="lg:w-[70%] w-full mt-[126px] ml-[107px] mr-[33px] h-[80%] bg-[#15171F] text-[white]">
                    <TrousersModel />
                </div>

                <div className="lg:w-[30%] lg:h-full w-full h-[30%] mr-[88px] overflow-y-auto bg-black my-[47px]">
                    <Selectoptiontotall />
                    <TrousersUIfabric />
                    <TrousersStyleChange />
                </div>
            </div>
        </StyleProvider>

    );
}