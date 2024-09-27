const coursesFa =[
    {id:1, 
     slug:'FA1', 
     course:'First Aid Level 1', 
     description:'First Aid Level 1 is an introductory course designed to provide individuals with the basic skills and knowledge to handle common medical emergencies.',
     lesson:"The curriculum includes training on CPR techniques and choking, as well as how to manage bleeding, burns, shock, heart attacks, strokes, hypo- and hyperthermia, diabetes, epilepsy, and other causes of unconsciousness. It also covers the basics of treating fractures and applying splints.", 
     duration:'20 hours', 
     certification:'First Aid Level 1 certificate, Valid for 3 years. Practical skills assessments and written exams are conducted to verify that competencies are met.', 
     prerequisite:'No prior qualification is needed for this course',
     url: "FA1.jpg" },

    {id:2, 
     slug:'FA2', 
     course:'First Aid Level 2', 
     description:'First Aid Level 2 is an intermediate course that builds on the foundational skills learned in First Aid Level 1. It provides more in-depth knowledge and practical skills for handling a wider range of medical emergencies.', 
     lesson:'The curriculum includes scene management, basic and applied anatomy and physiology, CPR techniques for adults, children, and infants. It covers choking, managing bleeding, burns, shock, heart attacks, strokes, environmental emergencies, diabetes, epilepsy, and other causes of unconsciousness. Additionally, it addresses fractures, splinting and immobilization, head and chest injuries, as well as poisons, bites, and stings.', 
     duration:'24 Hours', 
     certification:'First Aid Level 2 certificate, Valid for 3 years. Practical skills assessments and written exams are conducted to verify that competencies are met.', 
     prerequisite:'First Aid level 1 is required',
     url:'FA2.jpg'},

    {id:3, 
     slug:'FA3', 
     course:'First Aid Level 3', 
     description:'First Aid Level 3 is an advanced course that provides comprehensive training for managing serious medical emergencies and life-threatening conditions. This level of training is often required for workplace first responders, healthcare providers, and individuals in high-risk environments.', 
     lesson:'The curriculum includes scene management, basic and applied anatomy and physiology, CPR techniques for adults, children, and infants. It covers choking, managing bleeding, burns, shock, heart attacks, strokes, and environmental emergencies. Additionally, it covers diabetes, epilepsy, and other causes of unconsciousness, as well as fractures, splinting, and spinal immobilization. The course also addresses head and chest injuries, multiple injury management, poisons, bites, stings, emergency childbirth and water accidents', 
     duration:'40 Hours', 
     certification:'First Aid Level 3 certificate, Valid for 3 years. Practical skills assessments and written exams are conducted to verify that competencies are met.', 
     prerequisite:'First Aid level 2 is required',
     url:'FA3.jpg'},

    {id:4, 
     slug:'FACPR', 
     course:'Friends and Family CPR', 
     description:'CPR (Cardiopulmonary Resuscitation) training for friends and family is designed to teach the basic skills needed to help someone in cardiac arrest. The training focuses on easy-to-learn techniques that can be effectively applied in an emergency.', 
     lesson:'It teaches participants how to perform CPR on adults, children, and infants, including chest compressions and rescue breaths. The course also covers how to assist someone who is choking and provides fundamental first aid skills. Aimed at families, friends, and caregivers, Friends and Family CPR equips people with practical, accessible knowledge to handle emergency situations', 
     duration:'3-5 hours', 
     certification:'No certificate issued for this Training', 
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
