import React, { useState, useEffect } from 'react';
import styles from "./NewTable.module.css"
import bookmarkImg from '../assets/bookmark.png';
import calenderIcon from '../assets/calenderIcon.png';
import bookIcon from '../assets/book.svg';
import notificationIcon from '../assets/notification.svg';
import InnerFillPieChart from './InnerFillPieChart';
import Modal from './Modal';

const NewTable = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/userData");
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const openProfileModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    return (
        <div className='w-full'>
            <table className='bg-black border-collapse wrapper'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Assigned To</th>
                        <th>Interview</th>
                        <th>Interview Status</th>
                        <th>Interview Score</th>
                        <th>Job-Fit Score</th>
                        <th>Stage</th>
                        <th>Employment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index} className="border-b border-[#808080]">
                            <td data-cell="Name" className="">
                                <div className='flex gap-2'>
                                    <input
                                        type="checkbox"
                                        className={`${styles.tickbox} 
                                    }`}
                                    />
                                    <div>
                                        <div className="flex justify-between items-center gap-2 w-full">
                                            <h2>{user.profile.name}</h2>
                                            <img src={bookmarkImg} className='h-[0.75rem] w[0.625rem]' alt="Bookmark" />
                                        </div>
                                        <div className="flex gap-2 items-center justify-start lg:col-start-2">
                                            <button
                                                className="underline cursor-pointer font-normal text-xs text-[#59A5F5]"
                                                onClick={() => openProfileModal(user)}
                                            >
                                                Profile
                                            </button>
                                            <span
                                                data-employeestatus={user.profile.employeeStatus}
                                                className="text-[8px] font-semibold text-black data-[employeestatus=Referred]:bg-[#16C098] data-[employeeStatus=Employee]:bg-[#6956E5] data-[employeeStatus=Employee]:text-white rounded-full px-3 py-[2px]"
                                            >
                                                {user.profile.employeeStatus}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td data-cell="assigned to" className="flex relative md:items-start">
                                {user.assigned_to.slice(0, 2).map((assignedUser, idx) => (
                                    <img
                                        key={idx}
                                        src={assignedUser.imageUrl}
                                        className="rounded-full h-10 w-10 object-cover absolute"
                                        style={{ right: `${40 + idx * 20}px`, top: '20px' }}
                                    />
                                ))}
                                {user.assigned_to.length > 2 && (
                                    <span className="absolute rounded-full h-10 w-10 right-[20px] flex items-center justify-center bg-[#081018] top-[20px]">
                                        +{user.assigned_to.length - 2}
                                    </span>
                                )}
                            </td>

                            <td data-cell="interview date">
                                <div className="flex gap-2">
                                    <img src={calenderIcon} className='h-5 w-5' alt="" />
                                    <span className='whitespace-nowrap'>
                                        {new Date(user.interview_date).toLocaleDateString(undefined, {
                                            day: '2-digit',
                                        }) +
                                            '-' +
                                            new Date(user.interview_date).toLocaleDateString(undefined, {
                                                month: 'short',
                                            }) +
                                            '-' +
                                            new Date(user.interview_date).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                            })}
                                    </span>
                                </div>
                            </td>

                            <td
                                data-cell="interview status"
                                data-interviewstatus={user.interview_status}
                                className="lg:text-start text-center text-base font-medium data-[interviewStatus=Completed]:text-[#16C098] data-[interviewStatus=Pending]:text-[#F29246] data-[interviewStatus=Cancelled]:text-[#EB5757]"
                            >
                                {user.interview_status}
                            </td>

                            <td
                                data-cell="interview score"
                                className="lg:items-center">
                                <div className="h-14 w-14">
                                    <InnerFillPieChart
                                        percentage_value={
                                            user.interview_score === null || user.interview_score === undefined
                                                ? '0'
                                                : `${user.interview_score}%`
                                        }
                                        gradient_color={['#22B4F8', '#EDF3C2']}
                                        bg_color={
                                            user.interview_status === 'Cancelled'
                                                ? '#EB5757'
                                                : '#1E1E1E'
                                        }
                                        txt_class={''}
                                    />
                                </div>
                            </td>

                            <td data-cell="job fit score" className='lg:items-center'>
                                <div className="h-14 w-14">
                                    <InnerFillPieChart
                                        percentage_value={
                                            user.job_fit_score === null || user.job_fit_score === undefined
                                                ? '0'
                                                : `${user.job_fit_score}%`
                                        }
                                        gradient_color={['#22B4F8', '#EDF3C2']}
                                        bg_color={
                                            user.interview_status === 'Cancelled'
                                                ? '#EB5757'
                                                : '#1E1E1E'
                                        }
                                        txt_class={''}
                                    />
                                </div>
                            </td>

                            <td data-cell="interview Stage">
                                <div
                                    data-interviewstatus={user.interview_status}
                                    className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-3xl group bg-gradient-to-r from-[#22B4F8] to-[#EDF3C2] data-[interviewstatus=Cancelled]:from-[#e94a4a] data-[interviewstatus=Cancelled]:to-[#fa3333]`}
                                >
                                    <span className="relative px-4 py-1 bg-black rounded-3xl text-sm whitespace-nowrap">
                                        live Interview - {user.interview_stage} / 2
                                    </span>
                                </div>
                            </td>

                            <td data-cell="employment status">
                                <div className="flex gap-4 items-center w-[10rem]">
                                    <img src={notificationIcon} className="h-5 w-5" alt="" />
                                    <img src={bookIcon} className="h-5 w-5" alt="" />
                                    <span
                                        data-empstatus={user.employment_status.split(' ').join('')}
                                        className="flex items-center justify-center rounded-xl font-medium text-base h-8 w-[8.5rem] px-2 whitespace-nowrap text-white data-[empstatus=Hired]:bg-[#16c098] data-[empstatus=Shortlisted]:bg-[#6956e5] data-[empstatus=TakeAction]:bg-[#1E1E1E]"
                                    >
                                        {user.employment_status}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && selectedUser && (
                <Modal open={showModal} userData={selectedUser} onClose={closeModal} />
            )}
        </div>
    );
}

export default NewTable;