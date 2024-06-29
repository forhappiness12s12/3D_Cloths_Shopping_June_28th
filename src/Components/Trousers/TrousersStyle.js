import React, { useState } from "react";
import { StyleContext } from "./StyleProvider";
import { useContext } from "react";
import { RegularLegStyle } from "./RegularLegStyle";
import { SlimLegStyle } from "./SlimLegStyle";
import { Selectoption } from "../Selectoption";


export const TrousersStyleChange = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);
    console.log("SharedState : ", sharedState);
    const Callslimorregular = (flag) => {
        if (flag == 'true') {
            setSharedState({StyleOption : 'RegularLeg'})
        }
        else {
            setSharedState({StyleOption : 'SlimLeg'})
        }
    }
    return (
        <div>
            <article className="text-white text-[18px] font-[AcuminVariableConcept] mt-[43.09px] mb-[12px]">TROUSERS STYLE OPTION</article>
            <div>
                <nav class="flex space-x-[30px] font-[AcuminVariableConcept]" aria-label="Tabs" role="tablist">
                    <button onClick={() => Callslimorregular('true')} type="button" class={`${sharedState.StyleOption=='RegularLeg' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                     inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm
                      text-gray-500 hover:text-white focus:outline-none focus:text-white disabled:opacity-50
                       disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-1" data="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                         Regular Leg
                    </button>
                    <button onClick={() => Callslimorregular('false')} type="button" class={`${sharedState.StyleOption=='SlimLeg' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                     inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm
                      text-gray-500 hover:text-white focus:outline-none focus:text-white disabled:opacity-50
                       disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-1" data="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                         Slim Leg
                    </button>
                </nav>
            </div>

            {sharedState.StyleOption === 'SlimLeg' && <SlimLegStyle />}
            {sharedState.StyleOption === 'RegularLeg' && <RegularLegStyle />}
        </div>

    );
}