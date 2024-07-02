import React, { useContext } from "react";
import { StyleProvider } from "./StyleproviderTshirt";
import { TshirtModel } from "./TshirtModel";
import { TshirtUIfabric } from "./TshirtUIfabric";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Tshirt = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-black justify-center items-center">
                <div className="lg:w-[70%] lg:h-[90%] lg:ml-[30px] w-[90%] h-[55%] mb-3 mt-[10px] bg-[#141720] text-[white]">
                    <TshirtModel />
                </div>
                <div className="lg:w-[30%] lg:h-full w-full h-[45%] overflow-y-auto bg-black lg:p-[10px] p-4">
                    <Selectoptiontotall />
                    <TshirtUIfabric />
                </div>
            </div>
        </StyleProvider>

    );
}