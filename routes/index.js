import bodypolygonroutes from './bodypolygonroutes.js'
function route(app){
    app.use('/bodypolygon', bodypolygonroutes);
}
export default route;