const coursesFa =[
    {id:1, 
     slug:'FA1', 
     course:'First Aid Level 1', 
     description:'First Aid Level 1 is an introductory course designed to provide individuals with the basic skills and knowledge to handle common medical emergencies.',
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'yes',
     url: "FA1.jpg" },

    {id:2, 
     slug:'FA2', 
     course:'First Aid Level 2', 
     description:'First Aid Level 2 is an intermediate course that builds on the foundational skills learned in First Aid Level 1. It provides more in-depth knowledge and practical skills for handling a wider range of medical emergencies.', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'yes',
     url:'FA2.jpg'},

    {id:3, 
     slug:'FA3', 
     course:'First Aid Level 3', 
     description:'First Aid Level 3 is an advanced course that provides comprehensive training for managing serious medical emergencies and life-threatening conditions. This level of training is often required for workplace first responders, healthcare providers, and individuals in high-risk environments.', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'yes',
     url:'FA3.jpg'},

    {id:4, 
     slug:'FACPR', 
     course:'Friends and Family CPR', 
     description:'...', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'yes',
     url:'CPR.jpg'},
];

const coursesHBC =[
    {id:1, 
    slug:'HBC1', 
    course:'Home Based Care Level 1', 
    description:'...', 
    lesson:'......', 
    duration:'10minutes', 
    certification:'yes', 
    prerequisite:'yes',
    url:'HBCL1.jpg'},

    {id:2, 
     slug:'HBC2', 
     course:'Home Based Care Level 2', 
     description:'...', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'yes',
     url:'HBCL2.jpg'},

    {id:3, 
     slug:'HBC3', 
     course:'Home Based Care Level 3', 
     description:'...', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'yes',
     url:'HBCL3.jpg'},
];

export const  getCoursesFa = async () => {
    return coursesFa;
};

export const getCourseFa = async (slug) =>{
    return coursesFa.find((courseFa) => courseFa.slug == slug)
}


export const  getCoursesHBC = async () => {
    return coursesHBC;
};

export const getCourseHBC = async (slug) =>{
    return coursesHBC.find((courseHBC) => courseHBC.slug == slug)
}