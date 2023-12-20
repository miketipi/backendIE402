import bodypolygonroutes from './bodypolygonroutes.js'
import meshobj from './meshobjectroute.js'
import userRoute from "./userRoute.js"
function route(app) {
    app.use('/bodypolygon', bodypolygonroutes);
    app.use('/mesh', meshobj);
    app.use('/userControl', userRoute)
}
export default route;