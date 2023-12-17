import bodypolygon from "../model/bodypolygon_model.js";
import node from "../model/node_model.js";
import face from "../model/face_model.js";
export class bodypolygoncontroller{
async getAll(req, res){
    try {
        console.log("Get bodypolygon");
        const list = await bodypolygon.find({})
          .populate({
            path: 'face',
            populate: {
                path: 'coordinates',
                select: {_id: 0, x : 1, y : 1, z : 1}
            },
          })
          .lean()
          res.json(list);
    }
     catch (error) {
      console.log('Error', error);
      throw new Error('Something is wrong when get all body line');
    }
}}
export default new bodypolygoncontroller();