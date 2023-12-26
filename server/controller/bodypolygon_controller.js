import bodypolygon from "../model/bodypolygon_model.js";
import node from "../model/node_model.js";
import face from "../model/face_model.js";
export class bodypolygoncontroller {
  async getAll(req, res) {
    try {
      console.log("Get bodypolygon");
      const list = await bodypolygon.find({})
        .populate({
          path: 'face',
          populate: {
            path: 'coordinates',
            select: { _id: 0, x: 1, y: 1, z: 1 }
          },
        })
        .populate({
          path: 'face_2',
          populate: {
            path: 'coordinates',
            select: { _id: 0, x: 1, y: 1, z: 1 }
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
      res.status(500).json({ error: 'Internal Server Error' });
      throw new Error('Something is wrong when get all body line');
    }
  }
  async addBodypolygon(req, res) {
    try {
      console.log('add bodypolygon');
      console.log(req.body);
      const toado = [];
      const { coordinates, ...others } = req.body;
      for (let a of req.body.coordinates) {
        const newnode = node({
          x: a.x,
          y: a.y,
          z: a.z,
        });
        await newnode.save();
        toado.push(newnode._id);
      }
      const newface = face({ coordinates: toado });
      newface.save();
      const newBodyPolygon = new bodypolygon({
        ...others,
        face: newface._id,
      });
      newBodyPolygon.save();
      res.json(newBodyPolygon);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.log('Error when create body Polygon', error);
    }
  }
  async deletebodypolygonbyid(req, res) {
    try {
      console.log("Delete bodypolygon by id");
      const { id } = req.params;
      console.log(id);
      if (!id) {
        return res.status(400).json({ error: "Polygon ID is required for delete" });
      }
      const deletee = await bodypolygon.findByIdAndDelete(id);
      if (!deletee) {
        return res.status(400).json({ error: "Can't delete" });
      }
      res.json({ message: 'BodyPolygon deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  async addBodypolygonFromJson(req, res) {
    try {
      console.log('Add bodypolygon from JSON');

      const jsonData = req.body; // Assuming the JSON data is in the request body
      const features = jsonData.features;

      for (const feature of features) {
        const {
          properties: { "Building name": name, height, color, type },
          geometry: { coordinates },
        } = feature;

        // Create nodes
        const toado = [];
        for (const coord of coordinates[0]) {
          const newnode = new node({
            x: coord[0],
            y: coord[1],
            z: coord[2],
          });
          await newnode.save();
          toado.push(newnode._id);
        }

        // Create face
        const newface = new face({ coordinates: toado });
        await newface.save();

        // Create bodypolygon
        const newBodyPolygon = new bodypolygon({
          name,
          description: name, // Assuming "Building name" is used for description as well
          height,
          color,
          type,
          face: newface._id,
        });

        await newBodyPolygon.save();
      }

      res.json({ message: 'Bodypolygons added from JSON successfully' });
    } catch (error) {
      console.log('Error when adding body polygons from JSON', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
// async update(req, res){
//   try{
//     const {id} = req.params;
//     console.log('Update Body Polygon');
//     const {coordinates, }
//   }
// }
}
export default new bodypolygoncontroller();