import bodypolygonroutes from './bodypolygonroutes.js'
import meshobj from './meshobjectroute.js'
import userRoute from "./userRoute.js"
import entityrepairstatusroutes from './entityrepairstatusroutes.js';
import damagereportroutes from './damagereportroutes.js'
function route(app){
    app.use('/bodypolygon', bodypolygonroutes);
    app.use('/mesh', meshobj);
    app.use('/damagereport', damagereportroutes);
    app.use('/entityrepairstatus', entityrepairstatusroutes);
    app.use('/userControl', userRoute);
}
export default route;