const coursesFa =[
    {id:1, 
     slug:'FA1', 
     course:'First Aid Level 1', 
     description:'First Aid Level 1 is an introductory course designed to provide individuals with the basic skills and knowledge to handle common medical emergencies.',
     lesson:'First Aid Level 1 training equips individuals with essential life-saving skills for both workplace and public settings. The curriculum covers a wide range of trauma and medical emergencies, including CPR, choking management, bleeding control, and treatment of burns and shock. Participants also learn to respond to heart attacks, strokes, hypo/hyperthermia, diabetes, epilepsy, and other causes of unconsciousness. Additionally, the course teaches how to manage fractures and apply splinting, ensuring that trainees are prepared to handle various emergency situations effectively.', 
     duration:'20 hours', 
     certification:'First Aid Level 1 HPCSA accredited certificate, The certificate is valid for 3 years', 
     prerequisite:'No prior qualification is needed for this course',
     url: "FA1.jpg" },

    {id:2, 
     slug:'FA2', 
     course:'First Aid Level 2', 
     description:'First Aid Level 2 is an intermediate course that builds on the foundational skills learned in First Aid Level 1. It provides more in-depth knowledge and practical skills for handling a wider range of medical emergencies.', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'First Aid level 1 is required',
     url:'FA2.jpg'},

    {id:3, 
     slug:'FA3', 
     course:'First Aid Level 3', 
     description:'First Aid Level 3 is an advanced course that provides comprehensive training for managing serious medical emergencies and life-threatening conditions. This level of training is often required for workplace first responders, healthcare providers, and individuals in high-risk environments.', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'First Aid level 2 is required',
     url:'FA3.jpg'},

    {id:4, 
     slug:'FACPR', 
     course:'Friends and Family CPR', 
     description:'CPR (Cardiopulmonary Resuscitation) training for friends and family is designed to teach the basic skills needed to help someone in cardiac arrest. The training focuses on easy-to-learn techniques that can be effectively applied in an emergency.', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'No prior qualification is needed for this course',
     url:'CPR.jpg'},
];

const coursesHBC =[
    {id:1, 
    slug:'HBC1', 
    course:'Home Based Care Level 1', 
    description:'Home-Based Care Level 1 involves basic support and assistance for individuals who need help with daily living activities but do not require intensive medical care.', 
    lesson:'......', 
    duration:'10minutes', 
    certification:'yes', 
    prerequisite:'No prior qualification is needed for this course',
    url:'HBCL1.jpg'},

    {id:2, 
     slug:'HBC2', 
     course:'Home Based Care Level 2', 
     description:'Home-Based Care Level 2 involves more advanced support than Level 1, addressing both personal care needs and certain health-related tasks. This level of care is suitable for individuals who require more comprehensive assistance but still do not need constant medical supervision.', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'Home Based Care Level 2 is required',
     url:'HBCL2.jpg'},

    {id:3, 
     slug:'HBC3', 
     course:'Home Based Care Level 3', 
     description:'Home-Based Care Level 3 involves advanced care and support, suitable for individuals with significant medical and personal care needs. This level of care often requires the involvement of trained healthcare professionals and addresses complex health conditions.', 
     lesson:'......', 
     duration:'10minutes', 
     certification:'yes', 
     prerequisite:'Home Based Care Level 3 is required',
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