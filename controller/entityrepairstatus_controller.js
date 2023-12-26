import entityrepairstatus from '../model/entityrepairstatus_model.js';

export class entityrepairstatuscontroller{
    async getAll(req,res){
        try{
            console.log('Get all entityrepairstatus');
            const list = await entityrepairstatus.find({})
            .populate('bodypolygon')
            .populate('user')
            res.json(list);
        } catch (error) {
            console.log('Error', error);
            res.status(500).send(error);
        }
    }

    async addEntityRepairStatus(req,res){
        try{
            console.log('add entityrepairstatus');
            const {StartDate, FinishDate, Type, RepairReason, bodypolygon, user} = req.body;
            const newEntityRepairStatus = new entityrepairstatus({
                StartDate,
                FinishDate,
                Type,
                RepairReason,
                bodypolygon,
                user
            });
            newEntityRepairStatus.save();
            res.json(newEntityRepairStatus);
        }
        catch(error){
            console.log('Error when create new EntityRepairStatus', error);
            res.status(500).send(error);
        }
    }

    async getEntityRepairStatusById(req,res){
        try{
            console.log('Get entityrepairstatus by id');
            const {id} = req.params;
            const entityrepairstatus = await entityrepairstatus.findById(id)
            .populate('bodypolygon')
            .populate('user')
            res.json(entityrepairstatus);
        } catch (error) {
            console.log('Error', error);
            res.status(500).send(error);
        }
    }

    async updateEntityRepairStatusById(req,res){
        try{
            console.log('Update entityrepairstatus by id');
            const {id} = req.params;
            if(!id) {
                return res.status(400).send({message: 'EntityRepairStatus ID is required'});
            }
            const {StartDate, FinishDate, Type, RepairReason, bodypolygon, user} = req.body;
            const updatedEntityRepairStatus = await entityrepairstatus.findByIdAndUpdate(id, {
                StartDate,
                FinishDate,
                Type,
                RepairReason,
                bodypolygon,
                user
            }, {new: true});
            
            if(!updatedEntityRepairStatus){
                return res.status(404).send({message: 'EntityRepairStatus not found'});
            }

            res.json(updatedEntityRepairStatus);
        } catch (error) {
            console.log('Error', error);
            res.status(500).send(error);
        }
    }

    async deleteEntityRepairStatusById(req,res){
        try{
            console.log('Delete entityrepairstatus by id');
            const {id} = req.params;
            if(!id) {
                return res.status(400).send({message: 'EntityRepairStatus ID is required'});
            }
            const deletedEntityRepairStatus = await entityrepairstatus.findByIdAndDelete(id);

            if(!deletedEntityRepairStatus){
                return res.status(400).send({message: 'EntityRepairStatus not found'});
            }
            res.json(deletedEntityRepairStatus);
        } catch (error) {
            console.log('Error', error);
            res.status(500).send(error);
        }
    }
}

export default new entityrepairstatuscontroller()
