import meshobject from "../model/mesh_obj_model.js";
import node from "../model/node_model.js";
export class meshobjectcontroller{
    async getAll(req,res){
        try{
            console.log('Get meshobj');
            const list = await meshobject.find({})
            .populate({
                path: 'node_loc',
                select: {_id: 0, x :1, y: 1,z :1}
            })
            .lean();
            console.log(list);
            res.json(list);
    }catch(err){
        console.log('Error', err);
        throw new Error('Create mesh obj unsucessfully');
    }
}
async addMesh(req,res){
    try{
        console.log('add mesh');
        const {node_loc, ...others} = req.body;
        console.log(req.body);
          const newnode = node({
            x: req.body.node_loc.x,
            y: req.body.node_loc.y,
            z: req.body.node_loc.z,
          });
          await newnode.save(); 
        const newMeshObj = new meshobject({
          ...others,
          node_loc: newnode._id,
        });
        newMeshObj.save();
        res.json(newMeshObj);
      } catch (error) {
        console.log('Error when create new Mesh Object', error);
      }
      
}
}
export default new meshobjectcontroller()