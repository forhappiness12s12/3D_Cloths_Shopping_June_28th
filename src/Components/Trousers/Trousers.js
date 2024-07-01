import React, { useContext } from "react";
import { TrousersUIfabric } from "./TrousersUIfabric";
import { TrousersStyleChange } from "./TrousersStyle";
import { TrousersModel } from "./TrousersModel";
import { StyleProvider } from "./StyleProvider";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Trousers = () => {

    return (
        // <StyleProvider>
        //     <div className="flex lg:flex-row flex-col h-full bg-black justify-center items-center ">
        //         <div className="w-[70%] w-full h-[70%] md:h-[70%] mb-[90px] md:mb-[90px] md:mt-[99px] md:ml-[107px] mr-[0px] md:mr-[33px] bg-[#15171F] text-[white]">
        //             <TrousersModel />
        //         </div>

        //         <div className="lg:w-[30%] lg:h-full w-[80%] h-[30%] overflow-y-auto bg-black m-[10px] md:mt-[17px] md:mr-[33px]">
        //             <Selectoptiontotall />
        //             <TrousersUIfabric />
        //             <TrousersStyleChange />
        //         </div>
        //     </div>
        // </StyleProvider>
        
        <StyleProvider>     

            <div className="flex lg:flex-row flex-col h-full bg-black">
                <div className="lg:w-[70%] lg:h-full w-full h-[70%] bg-[#141720] text-[white] ">
                    <TrousersModel />
                </div>
                
                <div className="lg:w-[30%] w-[80%] lg:h-full w-full h-[30%] overflow-y-auto bg-black lg:p-[10px] p-5">
                    <Selectoptiontotall/>
                    <TrousersUIfabric />
                    <TrousersStyleChange/>
                </div>
            </div>
        </StyleProvider>

    );
}