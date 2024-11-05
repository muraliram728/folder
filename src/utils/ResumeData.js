import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import SharePoint1 from '../assets/images/sharpointProject1.jpg';
import PowerAutomate1 from '../assets/images/MIcrosoft-power-automate-2.jpg';


export default {
    name: 'MURALI.R',
    title: 'Web Developer',


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

    about: "I am a React Developer with experience in creating dynamic, responsive web applications using the MERN stack. My expertise includes building scalable front-end components with React and managing state effectively with Redux. \n\n Additionally, I have experience in SharePoint and Power Automate development, creating custom solutions that streamline workflows and improve user experiences. This unique combination of skills enables me to offer well-rounded web solutions that integrate seamlessly with existing business platforms.\n\n Let's connect if you're looking for a React Developer with a solid foundation in both modern web development and business process automation.",

    Experiences: [
        {
            companyName: 'TechnomaX Systems',
            title: 'React Developer & SharePoint Developer',
            date: 'Aug 2023 - Present',
            description:`
                - Built user-friendly interfaces with React for internal applications, optimizing performance and accessibility.\n
                - Created REST API integrations for seamless data flow between front-end React components and back-end services.\n
                - Designed and deployed custom web parts using SharePoint Framework (SPFx) for enhanced collaboration.\n
                - Developed Power Automate workflows to automate key business processes, improving efficiency across teams.
            `
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
