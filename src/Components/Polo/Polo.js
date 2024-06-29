import React, { useContext } from "react";
import { PoloModel } from "./PoloModel";
import { PoloUIfabric } from "./PoloUIfabric";
import { StyleProvider } from "./StyleProviderPolo";
import { Selectoption } from "../Selectoption";
import { PoloStyleChange } from "./PoloStyle";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Polo = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-black">
            <div className="lg:w-[70%] mt-[126px] w-full ml-[107px] mr-[33px] h-[80%] bg-[#15171F] text-[white] ">
                    <PoloModel />
                </div>
                <div className="lg:w-[30%] lg:max-h-[100vh] w-full mr-[88px] overflow-y-auto bg-black my-[47px]">
                    <Selectoptiontotall/>
                    <PoloUIfabric />
                    <PoloStyleChange />
                </div>
            </div>
        </StyleProvider>

    );
}