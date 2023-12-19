import bodypolygonroutes from './bodypolygonroutes.js'
import meshobj from './meshobjectroute.js'
function route(app){
    app.use('/bodypolygon', bodypolygonroutes);
    app.use('/mesh', meshobj);
}
export default route;