import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import SharePoint1 from '../assets/images/sharpointProject1.jpg';
import PowerAutomate1 from '../assets/images/MIcrosoft-power-automate-2.jpg';


export default {
    name: 'MURALI.R',
    title: 'Sharepoint Developer',


    birthday: '17th december 2001',
    email: 'muraliraman728@gmail.com',
    phone: '8056439365',
    address: 'Namakkal,Tamil Nadu',

    socials: {
        linkedin: {
            link: "https://www.linkedin.com/in/muraliram728/",
            text: 'Linkedin',
            icon: <LinkedInIcon />
        },
        github: {
            link: "https://github.com/muraliram728/my-repo",
            text: 'Github',
            icon: <GitHubIcon />
        },
    },

    about: "I am a SharePoint and Power Automate Developer with expertise in the SharePoint Framework (SPFx) and RESTful APIs, creating custom web parts and automating business processes. I also have experience optimizing Power Automate flows for tasks such as list retrieval, folder creation, and workflow management.\n\n In addition to my SharePoint and Power Automate skills, I am proficient in the MERN stack (MongoDB, Express.js, React, Node.js) and am actively seeking opportunities in web development to apply my skills in a broader context. \n\n Let’s connect if you’re looking for a versatile developer with a strong foundation in both SharePoint solutions and modern web technologies.",

    Experiences: [
        {
            companyName: 'TechnomaX Systems',
            title: 'SharePoint Developer & Power Automate Specialist',
            date: 'Aug 2023 - Present',
            description: 'Designed and deployed custom web parts using SharePoint Framework (SPFx), utilizing RESTful APIs to integrate and display list and library items. \n\n Developed Power Automate workflows to automate business processes, enhancing efficiency and user experience across platforms.'
        }
    ],

    Educations: [
        {
            degree: 'Bachelor of Engineering (B.E.) - Automobile Engineering',
            institution: 'KSR College of Engineering, Tiruchengode',
            completionDate: '2023'
        }
    ],

    Skills: [
        {
            title: 'FRONT-END',
            description: [
                'ReactJs',
                'JavaScript',
                'TypeScript',
                'Bootstrap',
                'Material UI'
            ]
        },
        {
            title: 'SHARE POINT',
            description: [
                'SPFx Framework',
                'REST API',
                'PnPjs'
            ]
        },
        {
            title: 'POWER PLATFORM',
            description: [
                'Power Automate',
            ]
        },
        {
            title: 'SOURCE-CONTROL',
            description: [
                'Git',
                'GitHub'
            ]
        }
    ],

    projects:[
        {
            tag:'React',
            title:'In Progress',
            image:'https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180',
            caption:'A short description',
            description:'this is my project',
            link:[
                {link: 'https://github.com/muraliram728/my-repo', icon: <GitHubIcon />},
                {link: 'https://github.com/muraliram728', icon: <LanguageIcon />}

            ]
        },
        {
            tag:'Sharepoint',
            title:'Sharepoint(SPFx) project 2',
            image: SharePoint1,
            caption:'Adds a custom ECB (Edit Control Block)',
            description:'This project demonstrates how to create a SharePoint Framework (SPFx) extension that adds a custom ECB (Edit Control Block) menu item',
            link:[
                {link: 'https://github.com/muraliram728/SPFx-ECB-menu-item', icon: <GitHubIcon />},
            ]
        },
        {
    tag: 'PowerPlatform',
    title: 'Approval Process Automation',
    image: PowerAutomate1,
    caption: 'Automating the approval workflow using Power Automate',
    description: `
        This project implements a multi-level approval process using Power Automate.
        It utilizes three SharePoint lists: 
        1. **Approval Matrix** - Contains approver details.
        2. **Workflow History Details** - Tracks the approval status and details.
        3. **Approval Mail Content** - Stores dynamic email content based on the approval status.
        
        Notifications are sent to the next approver via Outlook, ensuring seamless communication throughout the approval workflow.
    `,
    link: [
        { link: 'https://github.com/muraliram728/Power-Automate/tree/main', icon: <GitHubIcon /> },
        { link: 'https://github.com/muraliram728', icon: <LanguageIcon /> }
    ]
}
    ]



}
