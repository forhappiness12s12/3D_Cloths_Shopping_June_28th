import React, { useContext } from "react";
import { JoggersModel } from "./JoggerModel";
import { JoggersUIfabric } from "./JogerUIfabric";
import { StyleProvider } from "./StyleProviderJoggers";
import { Selectoption } from "../Selectoption";
import { JoggerStyleChange } from "./JoggerStyle";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Joggers = () => {

    return (
        // <StyleProvider>


        //     <div className="flex lg:flex-row flex-col h-full bg-black justify-center items-center ">
        //         <div className="w-[80%] w-full h-[60%] md:h-[80%] mb-[90px] md:mb-[90px] md:mt-[99px] md:ml-[107px] mr-[0px] md:mr-[33px] bg-[#15171F] text-[white]">
        //             {/* <JoggersModel /> */}
        //         </div>
        //         <div className="lg:w-[30%] lg:h-full w-[80%] h-[30%] overflow-y-auto bg-black m-[10px] md:mt-[17px] md:mr-[33px]">
        //            <Selectoptiontotall />
        //             <JoggersUIfabric />
        //             <JoggerStyleChange />
        //         </div>
        //     </div>
        // </StyleProvider>

        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-black justify-center items-center">
                <div className="lg:w-[70%] lg:h-[90%] lg:ml-[30px] w-[90%] h-[55%] mb-3 mt-[10px] bg-[#141720] text-[white]">
                    <JoggersModel />
                </div>


                <div className="lg:w-[30%] lg:h-full w-full h-[45%] overflow-y-auto bg-black lg:p-[10px] p-4">
                    <Selectoptiontotall />
                    <JoggersUIfabric />
                    <JoggerStyleChange />
                </div>
            </div>
        </StyleProvider>


    );
}