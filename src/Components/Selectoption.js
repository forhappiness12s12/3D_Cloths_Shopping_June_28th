import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { StyleContext } from "./SelectoptionProvider";


export const Selectoption = () => {
    const navigate = useNavigate();
    const { sharedState, setSharedState } = useContext(StyleContext);
    console.log("111111111111",sharedState);
    const SetStyle = (flag) => {
        if (flag == '0')
            goToPage('Trousers', '/',)
        else if (flag == '1')
            goToPage('Jogger', '/Joggers',)
        else if (flag == '2')
            goToPage('Tshirt', '/Tshirt',)
        else if (flag == '3')
            goToPage('Polo', '/Polo')
        else if (flag == '4')
            goToPage('Shorts', '/Shorts')
    }
    const goToPage = (component, path) => {
        setSharedState({ Productype: component })

        startTransition(() => {
            navigate(path);
            console.log(component, path);
        });
        console.log("producttype:::", sharedState.Productype)

    };

    return (

        <div className="bg-black">
            <p className="text-white font-[AcuminVariable1] text-[18px]">SELECTION</p>
            {/* <div className="dropdown z-10 ">
                <label htmlFor="dropdown" className="dropdown-btn  opacity-80">
                    <span className="flex justify-center">{sharedS  tate.Productype}</span>
                    <span className="arrow"></span>
                </label>
                <ul className="dropdown-content opacity-90" role="menu">
                    <li><button onClick={() => goToPage('Trousers','/',)} className="w-[100%] h-15  text-white">Trousers</button></li>
                    <li><button onClick={() => goToPage('Jogger','/Joggers', )} className="w-[100%] h-15 text-white">Jogger</button></li>
                    <li><button onClick={() => goToPage('Tshirt','/Tshirt' )} className="w-[100%] h-15  text-white">Tshirt</button></li>
                    <li><button onClick={() => goToPage('Polo','/Polo' )} className="w-[100%] h-15 text-white">Polo</button></li>
                    <li><button onClick={() => goToPage('Shorts','/Shorts' )} className="w-[100%] h-15 text-white">Shorts</button></li>
                </ul> */}
            {/* </div> */}

            <div class="font-[AcuminVariable1] flex flex-col">
                <nav class="flex space-x-[31px]" aria-label="Tabs" role="tablist">
                    <button onClick={() => SetStyle('0')} type="button" class={`${sharedState.Productype == 'Trousers' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                     inline-flex border-b-2 border-transparent text-sm
                      text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                       disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-1" data="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                        Trousers
                    </button>
                    <button onClick={() => SetStyle('1')} type="button" class={`${sharedState.Productype == 'Jogger' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                     px-1 inline-flex ml-[31px] mx-2 border-b-2 border-transparent text-sm
                     text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                     disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-2" data="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                        Joggers
                    </button>
                    <button onClick={() => SetStyle('2')} type="button" class={`${sharedState.Productype == 'Tshirt' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                     px-1 inline-flex ml-[31px] mx-2 border-b-2 border-transparent text-sm
                      text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                       disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-3" data="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                        Tshirt
                    </button>
                    <button onClick={() => SetStyle('3')} type="button" class={`${sharedState.Productype == 'Polo' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                     px-1 inline-flex ml-[31px] mx-2 border-b-2 border-transparent text-sm
                      text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                       disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-2" data="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                        Polo
                    </button>
                    <button onClick={() => SetStyle('4')} type="button" class={`${sharedState.Productype == 'Shorts' && 'border-yellow-600'} active:border-yellow-600 active:text-white py-2
                     px-1 inline-flex ml-[31px] mx-2 border-b-2 border-transparent text-sm
                      text-gray-500 hover:text-white focus:outline-none focus:text-white focus:border-yellow-600 disabled:opacity-50
                       disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white`} id="tabs-with-underline-item-3" data="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                        Shorts
                    </button>
                </nav>
            </div>
        </div>
    );
}
