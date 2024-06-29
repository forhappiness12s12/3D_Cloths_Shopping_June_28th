import React, { useContext } from "react";
import { StyleProvider } from "./StyleproviderTshirt";
import { TshirtModel } from "./TshirtModel";
import { TshirtUIfabric } from "./TshirtUIfabric";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Tshirt = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-black justify-center items-center ">
                <div className="w-[80%] w-full h-[60%] md:h-[80%] mb-[90px] md:mb-[90px] md:mt-[99px] md:ml-[107px] mr-[0px] md:mr-[33px] bg-[#15171F] text-[white]">
                    <TshirtModel />
                </div>

                <div className="lg:w-[30%] lg:h-full w-[80%] h-[30%] overflow-y-auto bg-black m-[10px] md:mt-[17px] md:mr-[33px]">
                    <Selectoptiontotall />
                    <TshirtUIfabric />
                </div>
            </div>
        </StyleProvider>

    );
}