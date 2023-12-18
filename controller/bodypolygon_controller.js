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
                  select: {_id: 0, x :1, y : 1, z : 1}
            },
          })
          .lean();
          console.log(list);
          for (let bodypoly of list) {
            let coordinatesArray = bodypoly.face.coordinates;
            coordinatesArray = coordinatesArray.map(({ x, y, z }) => [x, y, z]);
            bodypoly.face.coordinates = coordinatesArray;
          }
          res.json(list);
    }
     catch (error) {
      console.log('Error', error);
      throw new Error('Something is wrong when get all body line');
    }
}
async addBodypolygon(req, res){
try{
  console.log('add bodypolygon');
  const toado = [];
  const {coordinates, ...others} = req.body;
  for(let a of req.body.coordinates){
    const newnode = node({
      x: a.x,
      y: a.y,
      z: a.z,
    });
    await newnode.save();
    toado.push(newnode._id);
  }
  const newface = face({coordinates: toado});
  newface.save();
  const newBodyPolygon = new bodypolygon({
    ...others,
    face: newface._id,
  });
  newBodyPolygon.save();
  res.json(newBodyPolygon);
} catch (error) {
  console.log('Error when create body Polygon', error);
}
}
}
export default new bodypolygoncontroller();