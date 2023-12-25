import DamageReport from "../model/report_model.js";

class DamageReportController {
    async getAll(req, res) {
        try {
            console.log("Get all damage reports");
            const reports = await DamageReport.find({})
                .populate('IDAccount') // Populate thông tin từ collection 'Account'
                .populate('IDBodyPolygon'); // Populate thông tin từ collection 'BodyPolygon'
            res.json(reports);
        } catch (error) {
            console.error('Error', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getbyID(req, res) {
        try {
            console.log('Get damage report by ID');
            const { reportId } = req.params;
    
            // Check if reportId is provided
            if (!reportId) {
                return res.status(400).json({ error: 'Report ID is required for retrieval' });
            }
    
            // Find the damage report by ID and populate related information
            const report = await DamageReport.findById(reportId)
                .populate('IDAccount')  // Populate information from the 'Account' collection
                .populate('IDBodyPolygon');  // Populate information from the 'BodyPolygon' collection
    
            // Check if the report exists
            if (!report) {
                return res.status(404).json({ error: 'Report not found' });
            }
    
            res.json(report);
        } catch (error) {
            console.error('Error when getting damage report by ID', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async addDamageReport(req, res) {
        try {
            console.log('Add damage report');
            const { Date, Content, Cause, IDAccount, IDBodyPolygon } = req.body;

            // Tạo một bản ghi mới trong bảng DamageReport
            const newDamageReport = new DamageReport({
                Date,
                Content,
                Cause,
                IDAccount,
                IDBodyPolygon,
            });

            // Lưu bản ghi mới vào cơ sở dữ liệu
            await newDamageReport.save();

            res.json(newDamageReport);
        } catch (error) {
            console.error('Error when creating damage report', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateDamageReport(req, res) {
        try {
            console.log('Update damage report');
            const { reportId } = req.params;
            const { Date, Content, Cause, IDAccount, IDBodyPolygon } = req.body;

            // Kiểm tra nếu reportId không được cung cấp
            if (!reportId) {
                return res.status(400).json({ error: 'Report ID is required for update' });
            }

            // Tìm và cập nhật bản ghi DamageReport
            const updatedReport = await DamageReport.findByIdAndUpdate(
                reportId,
                { Date, Content, Cause, IDAccount, IDBodyPolygon },
                { new: true }
            );

            // Kiểm tra xem bản ghi có tồn tại hay không
            if (!updatedReport) {
                return res.status(404).json({ error: 'Report not found' });
            }

            res.json(updatedReport);
        } catch (error) {
            console.error('Error when updating damage report', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteDamageReport(req, res) {
        try {
            console.log('Delete damage report');
            const { reportId } = req.params;

            // Kiểm tra nếu reportId không được cung cấp
            if (!reportId) {
                return res.status(400).json({ error: 'Report ID is required for delete' });
            }

            // Xóa bản ghi DamageReport
            const deletedReport = await DamageReport.findByIdAndDelete(reportId);

            // Kiểm tra xem bản ghi có tồn tại hay không
            if (!deletedReport) {
                return res.status(404).json({ error: 'Report not found' });
            }

            res.json({ message: 'Report deleted successfully' });
        } catch (error) {
            console.error('Error when deleting damage report', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default new DamageReportController();
