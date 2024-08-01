import image1 from "./assets/profile1.png"
import image2 from "./assets/profile2.png"

const status_completed = {
    id: 1,
    name: "Completed",
    color: "#16C098"
  }
  const status_pending = {
    id: 2,
    name: "Pending",
    color: "#F29246"
  }
  const status_cancelled = {
    id: 1,
    name: "Cancelled",
    color: "#EB5757"
  }
  
  
  const interviewStatuses = [
    status_completed,
    status_pending,
    status_cancelled
  ]
  
  const Names = [
    {
      name: "Bruce William",
      imageUrl: image1,
      orionScore: 84,
      assesmentScore: 89,
      aiPreInterviewScore:81,
      liveInterviewScore: 85,
      employeeStatus: "Referred"
    },
    {
      name: "Leo Wright",
      imageUrl: image2,
      orionScore: 54,
      assesmentScore: 29,
      aiPreInterviewScore:41,
      liveInterviewScore: 55,
      employeeStatus: "Employee"
    },
    {
      name: "Markus Dupree",
      imageUrl: image2,
      orionScore: 44,
      assesmentScore: 29,
      aiPreInterviewScore:61,
      liveInterviewScore: 55,
    },
    {
      name: "Ava Khan",
      imageUrl: image1,
      orionScore: 44,
      assesmentScore: 59,
      aiPreInterviewScore:21,
      liveInterviewScore: 45,
    },
    {
      name: "Ethan Miller",
      imageUrl: image2,
      orionScore: 64,
      assesmentScore: 49,
      aiPreInterviewScore:61,
      liveInterviewScore: 75,
    },
    {
      name: "Chloe Carter",
      imageUrl: image1,
      orionScore: 64,
      assesmentScore: 79,
      aiPreInterviewScore:81,
      liveInterviewScore: 85,
    },
    {
      name: "Olivia Bennett   ",
      imageUrl: image1,
      orionScore: 74,
      assesmentScore: 79,
      aiPreInterviewScore:851,
      liveInterviewScore: 65,
    },
  ]
  
  const Assignee = [
    {
      name: "Maria Joyce",
      imageUrl: image1
    },
    {
      name: "James David",
      imageUrl: image2
    },
    {
      name: "James David",
      imageUrl: image2
    },
   
    {
      name: "James David",
      imageUrl: image2
    },
   
    {
      name: "James David",
      imageUrl: image2
    },
   
    {
      name: "James David",
      imageUrl: image2
    },
   
  ]
  

  const userData = [
    {
      full_name: Names[0],
      assigned_to: Assignee,
      interview_date: new Date("2024-05-08"),
      interview_status: "Completed",
      interview_score: 70,
      job_fit_score: 79,
      interview_stage: 2,
      employment_status: "Hired"
    }, {
      full_name: Names[1],
      assigned_to: Assignee,
      interview_date: new Date ("2024-06-25"),
      interview_status: "Completed",
      interview_score: 34,
      job_fit_score: 33,
      interview_stage: 2,
      employment_status: "Shortlisted"
    }, {
      full_name: Names[2],
      assigned_to: Assignee,
      interview_date: new Date ("2024-06-05"),
      interview_status: "Completed",
      interview_score: 17,
      job_fit_score: 68,
      interview_stage: 2,
      employment_status: "Shortlisted"
    }, {
      full_name: Names[3],
      assigned_to: Assignee,
      interview_date: new Date ("2024-01-25"),
      interview_status: "Pending",
      interview_score: 10,
      job_fit_score: 18,
      interview_stage: 1,
      employment_status: "Take Action"
    }, {
      full_name: Names[4],
      assigned_to: Assignee,
      interview_date: new Date ("2024-03-05"),
      interview_status: "Pending",
      interview_score: undefined,
      job_fit_score: undefined,
      interview_stage:0,
      employment_status: "Take Action"
    }, {
      full_name: Names[5],
      assigned_to: Assignee,
      interview_date: new Date("2024-07-17"),
      interview_status: "Cancelled",
      interview_score: 0,
      job_fit_score: 0,
      interview_stage: 0,
      employment_status: "Take Action"
    }, {
      full_name: Names[6],
      assigned_to: Assignee,
      interview_date:new Date ("2023-09-10"),
      interview_status: "Cancelled",
      interview_score: 0,
      job_fit_score: 0,
      interview_stage: 0,
      employment_status: "Take Action"
    }
  ]
  
  export default userData