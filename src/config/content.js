
// make references to the components by type
export const SECTIONS = [
    {
        component: 'About',
        id: 'about',
        menuItemText:'About me'
    },
    {
        component: 'Experience',
        id: 'experience',
        menuItemText:'Experience'
   },
   {
        component: 'Projects',
        id: 'projects',
        menuItemText:'Startups'
    },   
    {
        component: 'Interests',
        id: 'interests',
        menuItemText:'Interests'
   },
    {
        component: 'Skills',
        id: 'Skills',
        menuItemText:'Skills'
   }
]


export const ABOUT = {
    name: {
        firstName:'Lasha',
        lastName:'Kvantaliani',
    },
    contact: {
        address: 'Bay 49th St, Brooklyn, NY 11214',
        phone: '(317) 585-8468',
        mail: 'lasharela@gmail.com'
    },
    socialNetworks: [
        {
            url: 'https://twitter.com/Lasharela',
            icon: ["fab", "twitter"]
        },
        {
            url: 'https://www.linkedin.com/in/lkvantaliani/',
            icon: ["fab", "linkedin-in"]
        },
        {
            url: 'https://github.com/lasharela',
            icon:["fab", "github"]
        } 
    ],
    description: 'I am experienced in leveraging <b>agile frameworks</b> to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
}