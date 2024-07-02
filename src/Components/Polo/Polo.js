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


            <div className="flex lg:flex-row flex-col h-full bg-black justify-center items-center">
                <div className="lg:w-[70%] lg:h-[90%] lg:ml-[30px] w-[90%] h-[55%] mb-3 mt-[10px] bg-[#141720] text-[white]">
                    <PoloModel />
                </div>

                <div className="lg:w-[30%] lg:h-full w-full h-[45%] overflow-y-auto bg-black lg:p-[10px] p-4">
                    <Selectoptiontotall />
                    <PoloUIfabric />
                    <PoloStyleChange />
                </div>
            </div>
        </StyleProvider>

    );
}