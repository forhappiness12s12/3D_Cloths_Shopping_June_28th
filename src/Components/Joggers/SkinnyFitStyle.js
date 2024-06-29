import React, { useEffect } from "react";
import { StyleContext } from "./StyleProviderJoggers";
import { useContext, startTransition } from "react";
import { Tooltip } from 'react-tooltip'
import halfpointedright from './stylepic/half-pointed-right.png'
import halfpointedleft from './stylepic/half-pointed-left.png'

export const SkinnyFitStyle = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);
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
    const Change_Model_Index_call = (number) => {
        startTransition(() => {
            setSharedState({ Change_Model_Index: number });
        });
    };
    useEffect(()=>{
        Change_Model_Index_call(5)
    },[]);



    return (
        <div className="  mt-[25px]">
            <article className="text-white text-[15px] font-[AcuminVariable1] bg-black mb-4">SKINY FIT LEG STYLE OPTION</article>
            <div className="bg-[#15171F] grid grid-cols-3 grid-row-2 p-1 text-[12px] font-[AcuminVariable]">
                <label className="container text-white p-2" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                    <input type="radio" name="rope" onChange={() => Change_Model_Index_call(5)} defaultChecked/>
                    <span className="checkmark px-1"></span>
                    WITH ROPE
                </label>
                {/* <Tooltip id="my-tooltip-left" className='opacity-100 justify-center items-center z-10' >
                    <div>
                        <img src={halfpointedright} alt="Cat" className='w-[100px]' />
                        <span >T32K2</span>
                    </div>
                </Tooltip> */}
                <label
                    className="container text-white p-2"
                    data-tooltip-id="my-tooltip-right"
                    data-tooltip-place="top"
                >

                    <input type="radio" name="rope" onChange={() => Change_Model_Index_call(6)} />
                    <span className="checkmark px-1"></span>
                    RIB CUFF
                </label>
                {/* <Tooltip id="my-tooltip-right" className="opacity-100 z-10">
                    <div>
                        <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                        <span>T32K3</span>
                    </div>
                </Tooltip> */}
                <label className="container text-white p-2" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                    <input type="radio" name="rope" onChange={() => Change_Model_Index_call(7)} />
                    <span className="checkmark px-1"></span>
                    FRONT POCKET
                </label>
                {/* <Tooltip id="my-tooltip-left" className='opacity-100 justify-center items-center' >
                    <div>
                        <img src={halfpointedright} alt="Cat" className='w-[100px]' />
                        <span >T32K2</span>
                    </div>
                </Tooltip> */}
                <label
                    className="container text-white p-2"
                    data-tooltip-id="my-tooltip-right"
                    data-tooltip-place="top"
                >

                    <input type="radio" name="rope" onChange={() => Change_Model_Index_call(8)} />
                    <span className="checkmark px-1"></span>
                    GENERAL
                </label>
                <label
                    className="container text-white p-2"
                    data-tooltip-id="my-tooltip-right"
                    data-tooltip-place="top"
                >

                    <input type="radio" name="rope" onChange={() => Change_Model_Index_call(9)} />
                    <span className="checkmark px-1"></span>
                    WITH HEM
                </label>
                {/* <Tooltip id="my-tooltip-right" className="opacity-100">
                    <div>
                        <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                        <span>T32K3</span>
                    </div>
                </Tooltip> */}

            </div>




        </div>

    );

}