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
            <div className="lg:w-[70%] mt-[126px] w-full ml-[107px] mr-[33px] h-[80%] bg-[#15171F] text-[white] ">
                    <TshirtModel />
                </div>
                
                <div className="lg:w-[30%] lg:h-full w-full mr-[88px] h-[30%] overflow-y-auto bg-black my-[47px]">
                    <Selectoptiontotall/>
                    <TshirtUIfabric />

                </div>
            </div>
        </StyleProvider>

    );
}