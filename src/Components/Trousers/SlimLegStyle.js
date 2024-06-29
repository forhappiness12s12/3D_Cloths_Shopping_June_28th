import React from "react";
import { StyleContext } from "./StyleProvider";
import { useContext,useEffect } from "react";
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


export const SlimLegStyle = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);
    const BackPocketStyleChange = (number) => {
        const newarray = new Array(7).fill(false);
          newarray[number] = true;
        setSharedState({BackPocketStyle:newarray})
    }
    const TicketPocketStyleChange=()=>{
        if(sharedState.TicketPocketStyle[0]===true){
        setSharedState({TicketPocketStyle:[false,true]})}
        else{setSharedState({TicketPocketStyle:[true,false]})}
    }
    const BottomStyleChange=(number)=>{
        const newarray=new Array(6).fill(false)
        newarray[number]=true;
        if(number>2)
        newarray[0]=true;
        setSharedState({BottomStyle:newarray})
    }
    useEffect(()=>{
      BackPocketStyleChange(0)
      TicketPocketStyleChange(0)
      BottomStyleChange(0)

    },[]);
    return (
        <div>

            <article className="text-white text-[18px] font-[AcuminVariableConcept] mt-[45px] mb-[13px]">SLIM LEG TROUSERS STYLE OPTION</article>
            
            <div className=" bg-[#15171F]">
            <article className="text-white text-[15px] font-[AcuminVariable1] p-2">Back Pocket</article>
                {/* Back pocket */}
            <div className="grid grid-cols-3 grid-row-4 p-2 text-[12px] font-[AcuminVariable]"> 
            
                <div className="text-white" >STANDARD FLAP</div>
                <label className="container text-white" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">
                    
                    <input type="radio" name="flap" onChange={() => BackPocketStyleChange(0)} defaultChecked/>
                    <span className="checkmark px-1"></span>
                    Left
                </label>
                <Tooltip id="my-tooltip-left" className='opacity-100 justify-center items-center' >
                    <div>
                        <img src={halfpointedright} alt="Cat" className='w-[100px]' />
                        <span >T32K2</span>
                    </div>
                </Tooltip>
                <label
              className="container text-white"
              data-tooltip-id="my-tooltip-right"
              data-tooltip-place="top"
            >
              
              <input type="radio" name="flap" onChange={() => BackPocketStyleChange(1)} />
              <span className="checkmark px-1"></span>
              Right
            </label>
            <Tooltip id="my-tooltip-right" className="opacity-100">
              <div>
              <img src={halfpointedleft} alt="Cat"  className='w-[100px]'/>
                <span>T32K3</span>
              </div>
            </Tooltip>
            <div className="text-white mt-[10px]" >HALF POINTED</div>
            <label className="container text-white  mt-[10px]"  data-tooltip-id="my-htooltip-right" data-tooltip-place="top">
              <input type="radio" name="flap" onChange={() => BackPocketStyleChange(2)} />
              <span className="checkmark px-1"></span>Left
            </label>
            <Tooltip id="my-htooltip-right" className='opacity-100' >
              <div>
                <img src={pointedflapright} alt="Cat"  className='w-[100px]'/>
                <span>T32H9</span>
              </div>
            </Tooltip>
            <label className="container text-white   mt-[10px]"  data-tooltip-id="my-htooltip-left" data-tooltip-place="top">
              <input type="radio" name="flap" onChange={() => BackPocketStyleChange(3)} />
              <span className="checkmark px-1"></span>Right
            </label>
            <Tooltip id="my-htooltip-left" className='opacity-100' >
              <div>
              <img src={pointedflapleft} alt="Cat"  className='w-[100px]'/>
              <span>T32J1</span>
              </div>
            </Tooltip>
            <div className="text-white mt-[10px]">POINTED FLAP</div>
            <label className="container text-white  mt-[10px]" data-tooltip-id="my-stooltip-right" data-tooltip-place="top">
              <input type="radio" name="flap" onChange={() => BackPocketStyleChange(4)} />
              <span className="checkmark px-1"></span>Left
            </label>
            <Tooltip id="my-stooltip-right" className='opacity-100' >
              <div>
              <img src={standardflapright} alt="Cat"  className='w-[100px]'/>
              <span>T32K6</span>
              </div>
            </Tooltip>
            <label className="container text-white mt-[10px]" data-tooltip-id="my-stooltip-left" data-tooltip-place="top">
              <input type="radio" name="flap" onChange={() => BackPocketStyleChange(5)} />
              <span className="checkmark px-1"></span>Right
            </label>
            <Tooltip id="my-stooltip-left" className='opacity-100' >
              <div>
              <img src={standardflapleft} alt="Cat"  className='w-[100px]'/>
              <span>T32K7</span>
              </div>
            </Tooltip>
            <div className="text-white mt-[10px]">FLAP NO</div>
            <label className="container text-white mt-[10px]" data-tooltip-id="my-htooltip-No" data-tooltip-place="top">
              <input type="radio" name="flap" onChange={() => BackPocketStyleChange(6)} />
              <span className="checkmark px-1"></span>No
            </label>
            <Tooltip id="my-htooltip-No" className='opacity-100' >
              <div>
              <img src={nopocket} alt="Cat"  className='w-[100px]'/>
              <span>T3200</span>
              </div>
            </Tooltip>
            </div>
            </div>
            <div className=" bg-[#15171F]  font-[AcuminVariable] mt-[24px]">
            <article className="text-white text-[15px] font-[AcuminVariable1] p-2">Front Pocket</article>
            {/* Front pocket */}
            <div className="grid grid-cols-3 grid-rows-1  text-[12px]">
            <div className="text-white px-2 mt-[10px] mb-2">TICKET POCKET</div>
            <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-h" data-tooltip-place="top"> 
              <input type="radio" name="ticket" onChange={() => TicketPocketStyleChange()} defaultChecked/>
              <span className="checkmark px-1"></span>Horizontal
            </label>
            <Tooltip id="my-ticket-pocket-h" className='opacity-100' >
              <div>
              <img src={ticketpointhor} alt="Cat"  className='w-[100px]'/>
              <span>Ticket Horizontal</span>
              </div>
            </Tooltip>
            <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
              <input type="radio" name="ticket" onChange={() => TicketPocketStyleChange()} />
              <span className="checkmark px-1"></span>Vertical
            </label>
            <Tooltip id="my-ticket-pocket-v" className='opacity-100' >
              <div>
              <img src={ticketpointver} alt="Cat"  className='w-[100px]'/>
              <span>Ticket Vertical</span>
              </div>
            </Tooltip>


            </div>
            </div>
            <div className="bg-[#15171F] p-2 mt-[24px] font-[AcuminVariable] text-[12px]">
            <article className="text-white text-[15px] p-1 font-[AcuminVariable1]">HEM Style</article>
            {/* Hem style */}
            <div className="grid grid-cols-4 grid-rows-2 p-1">
            <div className="text-white mt-[10px]">BOTTOM STYLE</div>
            <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
              <input type="radio" name="bottom" onChange={() => BottomStyleChange(0)} defaultChecked/>
              <span className="checkmark px-1"></span>T-3620
            </label>
            <Tooltip id="my-bottom-vent" className='opacity-100' >
              <div>
              <img src={bottomvent} alt="Cat" className='w-[100px]' />
              <span>T-3620</span>
              </div>
            </Tooltip>
            <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
              <input type="radio" name="bottom" onChange={() => BottomStyleChange(1)} />
              <span className="checkmark px-1"></span>T-3621
            </label>
            <Tooltip id="my-bottom-pant" className='opacity-100' >
              <div>
              <img src={bottompant} alt="Cat" className='w-[100px]' />
              <span>T-3621</span>
              </div>
            </Tooltip>
            <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant3" data-tooltip-place="top">
              <input type="radio" name="bottom" onChange={() => BottomStyleChange(2)} />
              <span className="checkmark px-1"></span>T-362A
            </label>
            <Tooltip id="my-bottom-pant3" className='opacity-100' >
              <div>
              <img src={bottompant3} alt="Cat" className='w-[100px]' />
              <span>T-362A</span>
              </div>
            </Tooltip>
            <div className="text-white mt-[10px]">CUFF STYLE</div>
            <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-cuff" data-tooltip-place="top">
              <input type="radio" name="bottom" onChange={() => BottomStyleChange(3)} />
              <span className="checkmark px-1"></span>T-3605
            </label>
            <Tooltip id="my-bottom-cuff" className='opacity-100' >
              <div>
              <img src={bottomcuff} alt="Cat" className='w-[100px]' />
              <span>T-3605</span>
              </div>
            </Tooltip>
            <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-front1" data-tooltip-place="top">
              <input type="radio" name="bottom" onChange={() => BottomStyleChange(4)} />
              <span className="checkmark px-1"></span>T-3606
            </label>
            <Tooltip id="my-bottom-front1" className='opacity-100' >
              <div>
              <img src={bottomfrontcuff1} alt="Cat" className='w-[100px]' />
              <span>T-3606</span>
              </div>
            </Tooltip>
            <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-front2" data-tooltip-place="top">
              <input type="radio" name="bottom" onChange={() => BottomStyleChange(5)} />
              <span className="checkmark px-1"></span>T-3627
            </label>
            <Tooltip id="my-bottom-front2" className='opacity-100' >
              <div>
              <img src={bottomfrontcuff2} alt="Cat" className='w-[100px]' />
              <span>T-3627</span>
              </div>
            </Tooltip>

            </div>
            </div>
        </div>

    );
}