import Home from '../pages/home_tab/Home'
import Community from '../pages/home_tab/Community'
import Interact from '../pages/home_tab/Interact'
import My from '../pages/home_tab/My'
const routes = [
    {
        name:"Home",
        component:Home,
        title:"首页"
    },{
        name:"Community",
        component:Community,
        title: "社区"
    },{
        name:"Interact",
        component:Interact,
        title:"互动"
    },{
        name:"My",
        component:My,
        title:"我的"
    },
]
export default routes
