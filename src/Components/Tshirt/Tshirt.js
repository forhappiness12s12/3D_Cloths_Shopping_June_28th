import React, { useContext } from "react";
import { StyleProvider } from "./StyleproviderTshirt";
import { TshirtModel } from "./TshirtModel";
import { TshirtUIfabric } from "./TshirtUIfabric";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Tshirt = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-black">
                <div className="lg:w-[70%] lg:h-full w-full h-[70%] bg-[#141720] text-[white] ">
                    <TshirtModel />
                </div>

                <div className="lg:w-[30%] w-[80%] lg:h-full w-full h-[30%] overflow-y-auto bg-black lg:p-[10px] p-5">
                    <Selectoptiontotall />
                    <TshirtUIfabric />
                </div>
            </div>
        </StyleProvider>

    );
}