import React from "react"
import { IoIosClose } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import InnerFillPieChart from "./InnerFillPieChart";
import BarChart from "./BarChart";

const Modal = ({ open, userData, onClose }) => {
    if (!open) return null;
    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose();
    }

    return (
        <div 
            id="wrapper" 
            className={`
                fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10
                ${open ? "visible bg-black/20" : "invisible"}
            `} 
            onClick={handleClose}
        >
            <div className={`w-[53.75rem] md:w-[30rem] md:h-[20rem] md:overflow-hidden md:overflow-y-scroll sm:w-[25rem] bg-[#0A0D10] p-6 rounded-lg flex flex-col ${open ? "scale-100 " : "scale-125 opacity-0"} overflow-y-auto`}>
                <div className="flex md:flex-col  justify-between md:items-center md:gap-3 border-b border-[#47494c] pb-6">
                        <div className="flex gap-4">
                            <img src={userData?.profile.imageUrl} className="h-14 w-14" alt="" />
                            <div className="flex gap-[3px] flex-col items-starts">
                                <div className="flex items-center gap-[6px]">
                                    <h2 className="text-bold text-2xl">{userData?.profile.name}</h2>
                                    <span className="font-medium text-[8px] text-black px-1.5 py-1 rounded-full bg-gradient-to-r from-[#22B4F8] to-[#EDF3C2]">Open To Work</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="font-semibold text-sm">Austin, Texas</p>
                                    <GoDotFill size={10} className="text-sm"/>
                                    <p className="font-semibold text-sm">Data scientist</p>
                                    <GoDotFill size={10} className="text-sm"/>
                                    <p className="font-semibold text-sm">Senior Level</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="font-bold text-white text-sm px-4 py-3 rounded-lg bg-gradient-to-tr from-[#FC9C51] to-[#0422D8]">Recommended</button>
                            <button className="font-bold text-white text-sm px-4 py-3 rounded-lg bg-[#00619A]">View Profile</button>
                        </div>
                </div>
                <div className="flex justify-between pt-6 px-6 md:flex-col md:items-center">
                        <div>
                            <div className="flex md:flex-col justify-between md:itemce border-b border-[#47494c] py-2">
                                <h3 className="text-2xl md:text-base font-medium">Orion Score</h3>
                                <div className="flex items-center gap-4">
                                    <div className="h-6 w-32">
                                        <BarChart percentage_value={userData?.profile.orionScore} />
                                    </div>
                                    <span className="text-[#59A5F5] font-bold text-xl">{userData?.profile.orionScore}%</span>
                                </div>
                            </div>
                            <div className="flex md:flex-col justify-between border-b border-[#47494c] py-2">
                                <h3 className="text-2xl md:text-base  font-medium">Assessment Score</h3>
                                <div className="flex items-center gap-4">
                                    <div className="h-6 w-32">
                                        <BarChart percentage_value={userData?.profile.assesmentScore} />
                                    </div>
                                    <span className="text-[#59A5F5] font-bold text-xl">{userData?.profile.assesmentScore}%</span>
                                </div>
                            </div>
                            <div className="flex md:flex-col justify-between border-b border-[#47494c] py-2">
                                <h3 className="text-2xl md:text-base font-medium ">AI Pre-Interview Score</h3>
                                <div className="flex items-center gap-4 ">
                                    <div className="h-6 w-32">
                                        <BarChart percentage_value={userData?.profile.aiPreInterviewScore} />
                                    </div>
                                    <span className="text-[#59A5F5] font-bold text-xl">{userData?.profile.aiPreInterviewScore}%</span>
                                </div>
                            </div>
                            <div className="flex justify-between py-2 md:flex-col">
                                <h3 className="text-2xl md:text-base  font-medium">Live-Interview Score</h3>
                                <div className="flex items-center gap-4">
                                    <div className="h-6 w-32">
                                    <BarChart percentage_value={userData?.profile.liveInterviewScore} />
                                    </div>
                                    <span className="text-[#59A5F5] font-bold text-xl">{userData?.profile.liveInterviewScore}%</span>
                                </div>
                            </div>
                        </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="h-24 w-24 font-extrabold text-2xl">
                            <InnerFillPieChart percentage_value={userData?.job_fit_score === undefined ? "--" : `${userData?.job_fit_score}%` } gradient_color={["#22B4F8","#EDF3C2"]} bg_color= {userData?.interview_status.name === "Cancelled" ? "#EB5757" : "#1E1E1E"} txt_class={"bold"} />
                        </div>
                        <p className="text-2xl pt-5">Job-Fit Score</p>

                    </div>
                </div>
                <div className="flex md:flex-wrap gap-6 pt-12 items-center justify-center">
                    <button className="bg-[#EB5757] text-base font-medium text-white px-11 md:px-5 py-1.5 rounded-lg">Remove</button>
                    <button className="bg-[#0077C2] text-base font-medium text-white px-11 md:px-5 py-1.5 rounded-lg">Shortlists</button>
                    <button className="bg-[#16C098] text-base font-medium text-white px-11 md:px-5 py-1.5 rounded-lg">Hire</button>
                    <button 
                        className="bg-[#2D2D2D] text-base font-medium text-white flex px-11 md:px-5 py-1.5 rounded-lg"
                        onClick={() => onClose()}
                    >
                        <span><IoIosClose color="#fff" size={25} className="self-center"/></span>
                        <span>Close</span>
                            
                    </button>
                </div>
            </div>  
        </div>
    )
};

export default Modal;


// const Modal = ({open, onClose, userData}) => {
//     if(!open) return null

    // const handleClose = (e) => {
    //     if(e.target.id === "wrapper") onClose();
    // }

    // return (
    //     <div 
    //         id="wrapper" 
    //         className={`
    //             fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10
    //             ${open ? "visible bg-black/20" : "invisible"}
    //         `} 
    //         onClick={handleClose}
    //     >
    //         <div className={`w-[53.75rem] md:w-[30rem] md:h-[20rem] md:overflow-hidden md:overflow-y-scroll sm:w-[25rem] bg-[#0A0D10] p-6 rounded-lg flex flex-col ${open ? "scale-100 " : "scale-125 opacity-0"} overflow-y-auto`}>
    //             <div className="flex md:flex-col  justify-between md:items-center md:gap-3 border-b border-[#47494c] pb-6">
    //                     <div className="flex gap-4">
    //                         <img src={userData?.profile.imageUrl} className="h-14 w-14" alt="" />
    //                         <div className="flex gap-[3px] flex-col items-starts">
    //                             <div className="flex items-center gap-[6px]">
    //                                 <h2 className="text-bold text-2xl">{userData?.profile.name}</h2>
    //                                 <span className="font-medium text-[8px] text-black px-1.5 py-1 rounded-full bg-gradient-to-r from-[#22B4F8] to-[#EDF3C2]">Open To Work</span>
    //                             </div>
    //                             <div className="flex items-center gap-1">
    //                                 <p className="font-semibold text-sm">Austin, Texas</p>
    //                                 <GoDotFill size={10} className="text-sm"/>
    //                                 <p className="font-semibold text-sm">Data scientist</p>
    //                                 <GoDotFill size={10} className="text-sm"/>
    //                                 <p className="font-semibold text-sm">Senior Level</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="flex gap-4">
    //                         <button className="font-bold text-white text-sm px-4 py-3 rounded-lg bg-gradient-to-tr from-[#FC9C51] to-[#0422D8]">Recommended</button>
    //                         <button className="font-bold text-white text-sm px-4 py-3 rounded-lg bg-[#00619A]">View Profile</button>
    //                     </div>
    //             </div>
    //             <div className="flex justify-between pt-6 px-6 md:flex-col md:items-center">
    //                     <div>
    //                         <div className="flex md:flex-col justify-between md:itemce border-b border-[#47494c] py-2">
    //                             <h3 className="text-2xl md:text-base font-medium">Orion Score</h3>
    //                             <div className="flex items-center gap-4">
    //                                 <div className="h-6 w-32">
    //                                     <BarChart percentage_value={userData?.profile.orionScore} />
    //                                 </div>
    //                                 <span className="text-[#59A5F5] font-bold text-xl">{userData?.profile.orionScore}%</span>
    //                             </div>
    //                         </div>
    //                         <div className="flex md:flex-col justify-between border-b border-[#47494c] py-2">
    //                             <h3 className="text-2xl md:text-base  font-medium">Assessment Score</h3>
    //                             <div className="flex items-center gap-4">
    //                                 <div className="h-6 w-32">
    //                                     <BarChart percentage_value={userData?.profile.assesmentScore} />
    //                                 </div>
    //                                 <span className="text-[#59A5F5] font-bold text-xl">{userData?.profile.assesmentScore}%</span>
    //                             </div>
    //                         </div>
    //                         <div className="flex md:flex-col justify-between border-b border-[#47494c] py-2">
    //                             <h3 className="text-2xl md:text-base font-medium ">AI Pre-Interview Score</h3>
    //                             <div className="flex items-center gap-4 ">
    //                                 <div className="h-6 w-32">
    //                                     <BarChart percentage_value={userData?.profile.aiPreInterviewScore} />
    //                                 </div>
    //                                 <span className="text-[#59A5F5] font-bold text-xl">{userData?.profile.aiPreInterviewScore}%</span>
    //                             </div>
    //                         </div>
    //                         <div className="flex justify-between py-2 md:flex-col">
    //                             <h3 className="text-2xl md:text-base  font-medium">Live-Interview Score</h3>
    //                             <div className="flex items-center gap-4">
    //                                 <div className="h-6 w-32">
    //                                 <BarChart percentage_value={userData?.profile.liveInterviewScore} />
    //                                 </div>
    //                                 <span className="text-[#59A5F5] font-bold text-xl">{userData?.profile.liveInterviewScore}%</span>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 <div className="flex flex-col items-center justify-center">
    //                     <div className="h-24 w-24 font-extrabold text-2xl">
    //                         <InnerFillPieChart percentage_value={userData?.job_fit_score === undefined ? "--" : `${userData?.job_fit_score}%` } gradient_color={["#22B4F8","#EDF3C2"]} bg_color= {userData?.interview_status.name === "Cancelled" ? "#EB5757" : "#1E1E1E"} txt_class={"bold"} />
    //                     </div>
    //                     <p className="text-2xl pt-5">Job-Fit Score</p>

    //                 </div>
    //             </div>
    //             <div className="flex md:flex-wrap gap-6 pt-12 items-center justify-center">
    //                 <button className="bg-[#EB5757] text-base font-medium text-white px-11 md:px-5 py-1.5 rounded-lg">Remove</button>
    //                 <button className="bg-[#0077C2] text-base font-medium text-white px-11 md:px-5 py-1.5 rounded-lg">Shortlists</button>
    //                 <button className="bg-[#16C098] text-base font-medium text-white px-11 md:px-5 py-1.5 rounded-lg">Hire</button>
    //                 <button 
    //                     className="bg-[#2D2D2D] text-base font-medium text-white flex px-11 md:px-5 py-1.5 rounded-lg"
    //                     onClick={() => onClose()}
    //                 >
    //                     <span><IoIosClose color="#fff" size={25} className="self-center"/></span>
    //                     <span>Close</span>
                            
    //                 </button>
    //             </div>
    //         </div>  
    //     </div>
    // )
// }

// export default Modal