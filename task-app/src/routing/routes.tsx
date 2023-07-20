type RouteDefinition ={
    name:string,
    path:string,
    isAvailable:boolean
}
type RouteDefinitions = {
    [key:string]:RouteDefinition
}
const routesDefinitions :RouteDefinitions ={
    login:{name:'login',path:'/',isAvailable:true},
    register:{name:'register',path:'/register',isAvailable:true},
    home:{name:'home',path:'/home',isAvailable:true}
}

export default routesDefinitions;