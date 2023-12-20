import bodypolygonroutes from './bodypolygonroutes.js'
import meshobj from './meshobjectroute.js'
import entityrepairstatusroutes from './entityrepairstatusroutes.js';
function route(app){
    app.use('/bodypolygon', bodypolygonroutes);
    app.use('/mesh', meshobj);
    app.use('/entityrepairstatus', entityrepairstatusroutes);
}
export default route;