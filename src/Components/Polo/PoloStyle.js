import React, { useState } from "react";
import { StyleContext } from "./StyleProviderPolo";
import { useContext } from "react";

import { FixedPoloStyle } from "./FixedPoloStyle";
import { ChangePoloStyle } from "./ChangePoloStyle";


export const PoloStyleChange = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);

    
    const Callfixedorchanged = (flag) =>{
        if(flag=='false'){
            setSharedState({StyleOption : 'Changeable'})
            setSharedState({CollarContrastFlag:true})
        }
        if(flag=='true'){
            setSharedState({StyleOption : 'Fixed'})
        }
    }

 
    return (
        <div>

            <article className="text-white text-[18px] font-[AcuminVariableConcept] pt-4 mb-2">POLO STYLE OPTION</article>
            
            
            <div>
                <nav class="flex space-x-[30px] font-[AcuminVariableConcept]" aria-label="Tabs" role="tablist">
                    <button onClick={()=>Callfixedorchanged('false')} type="button" class={`${sharedState.StyleOption=='Changeable'&&'border-yellow-600'} active:font-sans active:border-yellow-600 active:text-white py-4
                        px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap
                        text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                        disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-1" data="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                    Changeable
                    </button>
                    <button onClick={()=>Callfixedorchanged('true')} type="button" class={`${sharedState.StyleOption=='Fixed'&&'border-yellow-600'} active:font-semibold active:border-yellow-600 active:text-white py-4
                        px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap
                        text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                        disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-2" data="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                    Fixed
                    </button>
                </nav>
            </div>
            {sharedState.StyleOption==='Changeable'&&<ChangePoloStyle/>}
            {sharedState.StyleOption==='Fixed'&&<FixedPoloStyle/>}
            
            
            
        </div>

    );
}