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

      for (let bodypoly of list) {
        let coordinatesArray = bodypoly.face.coordinates;
        coordinatesArray = coordinatesArray.map(({ x, y, z }) => [x, y, z]);
        bodypoly.face.coordinates = coordinatesArray;
        if (bodypoly.face_2) {
          let coordinatesArray1 = bodypoly.face_2.coordinates;
          coordinatesArray1 = coordinatesArray1.map(({ x, y, z }) => [x, y, z]);
          bodypoly.face_2.coordinates = coordinatesArray1;
        }
      }
      res.json(list);
      console.log(list);
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
  async update(req, res) {
    try {
      console.log('Update Body Polygon');
      const { id } = req.params;
      const { coordinates, ...updateData } = req.body;

      // Check if ID is provided
      if (!id) {
        return res.status(400).json({ error: 'Polygon ID is required for update' });
      }

      // Find the existing bodypolygon by ID
      const existingBodyPolygon = await bodypolygon.findById(id);
      if (!existingBodyPolygon) {
        return res.status(404).json({ error: 'BodyPolygon not found' });
      }

      // Update node coordinates if provided
      if (coordinates) {
        // Delete existing coordinates
        await node.deleteMany({ _id: { $in: existingBodyPolygon.face.coordinates } });

        // Create and save new nodes
        const updatedCoordinates = [];
        for (const coord of coordinates) {
          const newnode = new node({
            x: coord.x,
            y: coord.y,
            z: coord.z,
          });
          await newnode.save();
          updatedCoordinates.push(newnode._id);
        }

        // Update face with new coordinates
        await face.findByIdAndUpdate(existingBodyPolygon.face._id, { coordinates: updatedCoordinates });
      }

      // Update other fields in bodypolygon
      await bodypolygon.findByIdAndUpdate(id, updateData);

      // Fetch the updated bodypolygon
      const updatedBodyPolygon = await bodypolygon.findById(id)
        .populate({
          path: 'face',
          populate: {
            path: 'coordinates',
            select: { _id: 0, x: 1, y: 1, z: 1 },
          },
        })
        .populate({
          path: 'face_2',
          populate: {
            path: 'coordinates',
            select: { _id: 0, x: 1, y: 1, z: 1 },
          },
        })
        .lean();

      // Format coordinates
      updatedBodyPolygon.face.coordinates = updatedBodyPolygon.face.coordinates.map(({ x, y, z }) => [x, y, z]);
      if (updatedBodyPolygon.face_2) {
        updatedBodyPolygon.face_2.coordinates = updatedBodyPolygon.face_2.coordinates.map(({ x, y, z }) => [x, y, z]);
      }

      res.json(updatedBodyPolygon);
    } catch (error) {
      console.log('Error when updating body polygon', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getBodyPolygonById(req, res) {
    try {
      console.log("Get bodypolygon by ID");
      const { id } = req.params;

      // Check if ID is provided
      if (!id) {
        return res.status(400).json({ error: "Polygon ID is required" });
      }

      // Find the bodypolygon by ID
      const bodyPolygon = await bodypolygon.findById(id)
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

      // If the bodypolygon is not found
      if (!bodyPolygon) {
        return res.status(404).json({ error: "BodyPolygon not found" });
      }

      // Format coordinates
      bodyPolygon.face.coordinates = bodyPolygon.face.coordinates.map(({ x, y, z }) => [x, y, z]);
      if (bodyPolygon.face_2) {
        bodyPolygon.face_2.coordinates = bodyPolygon.face_2.coordinates.map(({ x, y, z }) => [x, y, z]);
      }

      res.json(bodyPolygon);
      console.log(bodyPolygon);
    } catch (error) {
      console.log('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}
export default new bodypolygoncontroller();