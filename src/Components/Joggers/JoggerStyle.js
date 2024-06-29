import React, { useState } from "react";
import { StyleContext } from "./StyleProviderJoggers";
import { useContext } from "react";
import { LooseFitStyle } from "./LooseFitStyle";
import { SkinnyFitStyle } from "./SkinnyFitStyle";


export const JoggerStyleChange = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);
    console.log("SharedState : ", sharedState);
    const CallJoggerType = (flag) => {
        if(flag=='false'){
        setSharedState({StyleOption : 'SkinnyFit'})
        console.log(flag);
        }
        else
        setSharedState({StyleOption : 'LooseFit'})
        console.log(flag);
    }

    const BackPocketStyleChange = (number) => {
        const newarray = new Array(7).fill(false);
        newarray[number] = true;
        setSharedState({ BackPocketStyle: newarray })
    }
    const TicketPocketStyleChange = () => {
        if (sharedState.TicketPocketStyle[0] === true) {
            setSharedState({ TicketPocketStyle: [false, true] })
        }
        else { setSharedState({ TicketPocketStyle: [true, false] }) }
    }
    const BottomStyleChange = (number) => {
        const newarray = new Array(6).fill(false)
        newarray[number] = true;
        if (number > 2)
            newarray[0] = true;
        setSharedState({ BottomStyle: newarray })
    }
    return (
        <div className=" bg-black">

            <article className="text-white text-[18px] font-[AcuminVariableConcept]  mt-[43.09px] mb-[12px]">JOGGERS STYLE OPTION</article>
            
            <div className="font-[AcuminVariableConcept] ">
                <nav class="flex space-x-[30px]" aria-label="Tabs" role="tablist ">
                    <button onClick={()=>CallJoggerType('false')} type="button" class={`${sharedState.StyleOption=='SkinnyFit' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                        inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm
                        text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                        disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-1" data="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                    SkinnyFit
                    </button>
                    <button onClick={()=>CallJoggerType('true')} type="button" class={`${sharedState.StyleOption=='LooseFit' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                        px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm
                        text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                        disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-2" data="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                    LooseFit
                    </button>
                </nav>
            </div>
            {sharedState.StyleOption ==='LooseFit' && <LooseFitStyle/>}
            {sharedState.StyleOption ==='SkinnyFit'&&<SkinnyFitStyle/>}

            
        </div>

    );
}