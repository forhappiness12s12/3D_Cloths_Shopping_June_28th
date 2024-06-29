import React, { useContext } from "react";
import { JoggersModel } from "./JoggerModel";
import { JoggersUIfabric } from "./JogerUIfabric";
import { StyleProvider } from "./StyleProviderJoggers";
import { Selectoption } from "../Selectoption";
import { JoggerStyleChange } from "./JoggerStyle";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Joggers = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-black">
                <div className="lg:w-[70%] mt-[126px] w-full ml-[107px] mr-[33px] h-[80%] bg-[#15171F] text-[white] ">
                    <JoggersModel />
                </div>
                <div className="lg:w-[30%] lg:h-full w-full h-[30%] mr-[88px] overflow-y-auto bg-black my-[47px]">
                    <Selectoptiontotall/>
                    <JoggersUIfabric />
                    <JoggerStyleChange />
                </div>
            </div>
        </StyleProvider>

    );
}