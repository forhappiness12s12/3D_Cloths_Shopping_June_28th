import React, { useState, useEffect } from "react";
import { StyleContext } from "./StyleProviderPolo";
import { useContext } from "react";
import { Tooltip } from 'react-tooltip'
import halfpointedright from './stylepic/half-pointed-right.png'
import halfpointedleft from './stylepic/half-pointed-left.png'
import pointedflapright from './stylepic/half-pointed-right.png'
import pointedflapleft from './stylepic/half-pointed-left.png'
import standardflapright from './stylepic/standard-flap-right.png'
import standardflapleft from './stylepic/standard-flap-left.png'
import nopocket from './stylepic/no-pocket.PNG'
import ticketpointhor from './stylepic/ticket-pocket-left.PNG'
import ticketpointver from './stylepic/ticket-pocket-vertical.PNG'
import bottomvent from './stylepic/bottom-vents.PNG'
import bottompant from './stylepic/bottom-pant.PNG'
import bottompant3 from './stylepic/bottom-pant-3.PNG'
import bottomcuff from './stylepic/bottom-cuff.PNG'
import bottomfrontcuff1 from './stylepic/bottom-front-cuff1.PNG'
import bottomfrontcuff2 from './stylepic/bottom-front-cuff2.PNG'
import { CollarContrastFabricUI } from "./CollarContrastFabirc";
import { NeckbandContrastFabricUI } from "./NeckbandContrastFabric";
import { CuffContrastFabricUI } from "./CuffContrastFabric";
import { ChangeCuffContrastFabricUI } from "./ChangeCuffContrastFabric";

export const ChangePoloStyle = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);

    const [ChangeCuffContrast, setChangeCuffContrast] = useState('false')
    const ChangeCuffContrastFabric = (number) => {
        if (number == 0) {
            setChangeCuffContrast('true')
            setSharedState({ CuffContrastFlag: true })
        }
        else {
            setChangeCuffContrast('false')
            setSharedState({ CuffContrastFlag: false })
        }

    }
    const CollarStyleChange = (number) => {
        const newarray = new Array(5).fill(false)
        newarray[number] = true
        setSharedState({ CollarStyle: newarray })


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
    const ChestStyleChange = (number) => {
        const newarray = new Array(3).fill(false)
        newarray[number] = true
        setSharedState({ ChestStyle: newarray })
    }
    useEffect(() => {
        CollarStyleChange(0)
        ChangeCuffContrastFabric(0)
        ChestStyleChange(0)
    }, []);

    return (
        <div>
            <article className="text-white text-[18px] font-[AcuminVariableConcept]  mt-[43.09px] mb-[12px]">INTERCHANGEABLE COLLAR STYLE OPTION</article>

            <div className="bg-[#15171F]">
                <article className="text-white text-[15px] font-[AcuminVariable] p-4">Collar</article>
                {/* Collar Style */}
                <div className="bg-[#15171F] grid grid-cols-3 grid-rows-1 text-[12px] font-[AcuminVariable]">

                    <div className="text-white mx-4 ">COLLAR STYLE</div>
                    <label className="container text-white" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                        <input type="radio" name="icollar" onChange={() => CollarStyleChange(0)} defaultChecked />
                        <span className="checkmark px-1"></span>Round
                    </label>
                    {/* <Tooltip id="my-bottom-vent" className='opacity-100 z-10' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip> */}
                    <label className="container text-white" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                        <input type="radio" name="icollar" onChange={() => CollarStyleChange(1)} />
                        <span className="checkmark px-1"></span>Cutaway
                    </label>
                    {/* <Tooltip id="my-bottom-pant" className='opacity-100 z-10' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip> */}

                </div>
                <div className="p-4">
                    <CollarContrastFabricUI />
                </div>
            </div>
            <div className="mt-[24px]">
                {/* Cuff */}
                <div className="bg-[#15171F]">
                    <article className="text-white text-[15px] font-[AcuminVariable] p-4">Cuffs</article>
                    {/* Collar Style */}
                    <div className="bg-[#15171F] grid grid-cols-3 grid-rows-1 mx-2 text-[12px] font-[AcuminVariable]">
                        <div className="text-white mx-2 ">CUFF STYLE</div>
                        <label className="container text-white  " data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                            <input type="radio" name="icuff" onChange={() => ChangeCuffContrastFabric(0)} defaultChecked />
                            <span className="checkmark px-1"></span>Contrast
                        </label>
                        {/* <Tooltip id="my-bottom-vent" className='opacity-100' >
                        <div>
                            <img src={bottomvent} alt="Cat" className='w-[100px]' />
                            <span>T-3620</span>
                        </div>
                    </Tooltip> */}
                        <label className="container text-white " data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                            <input type="radio" name="icuff" onChange={() => ChangeCuffContrastFabric(1)} />
                            <span className="checkmark px-1"></span>Plain
                        </label>
                        {/* <Tooltip id="my-bottom-pant" className='opacity-100' >
                        <div>
                            <img src={bottompant} alt="Cat" className='w-[100px]' />
                            <span>T-3621</span>
                        </div>
                    </Tooltip> */}

                    </div>
                    <div className="p-4">
                        {ChangeCuffContrast === 'true' && <ChangeCuffContrastFabricUI />}
                    </div>
                </div>
            </div>
            {/* Chest pocket */}
            <div className="mt-[24px] text-[12px] font-[AcuminVariable]">
                <article className="text-white text-[15px] font-[AcuminVariable] p-4 bg-[#15171F]">Chest Pocket</article>
                <div className="grid grid-cols-4 grid-rows-1 bg-[#15171F]">
                    <div className="text-white text-[12px] font-[AcuminVariable] mx-4 ">CHEST POCKET</div>
                    <label className="container text-white " data-tooltip-id="my-ticket-pocket-h" data-tooltip-place="top">
                        <input type="radio" name="chest" onChange={() => ChestStyleChange(2)} />
                        <span className="checkmark px-1"></span>NO
                    </label>

                    <label className="container text-white " data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
                        <input type="radio" name="chest" onChange={() => ChestStyleChange(1)} />
                        <span className="checkmark px-1"></span>Square
                    </label>

                    <label className="container text-white " data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
                        <input type="radio" name="chest" onChange={() => ChestStyleChange(0)} defaultChecked />
                        <span className="checkmark px-1"></span>Pointed
                    </label>
                </div>
            </div>
        </div>

    );
}