import meshobject from "../model/mesh_obj_model.js";
export class meshobjectcontroller{
    async getAll(req,res){
        try{
            console.log('Get meshobj');
            const list = await meshobject.find({})
            .populate({
                path: 'node',
                select: {_id: 0, x :1, y: 1,z :1}
            })
            .lean();
            console.log(list);
    }catch(err){
        console.log('Error', err);
        throw new Error('Create mesh obj unsucessfully');
    }
}
async addMesh(req,res){

}
}
export default new meshobjectcontroller()