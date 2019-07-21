const EmployeeServices = require('../services/emp_services');

const maxTimeoutMs = 100;
const errorCatch = function (err, res) {
    if (err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Record not found with id " + req.params._id
        });
    }
    if (err && err.message) return res.status(500).send({ message: err.message })
    return res.status(500).send({
        message: "Error record with id " + req.params._id
    });
}
// search all record
exports.findAll = async (req, res) => {
    const data = await EmployeeServices.findAll;
    res.send(data);
}
// search one record
exports.findOne = (req, res) => {
    Employee.findById(req.params._id).maxTimeMS(maxTimeoutMs).then(data => {
        if (!data) return res.status(404).send({
            message: "Record not found with id " + req.params._id
        })
        res.send(data);
    }).catch(err => errorCatch(err, res))
}
// Create and save a new record
exports.create = (req, res) => {
    const { name, yearOld, gender } = req.body;
    if (!name) return res.status(404).send({ message: "Field `Name` can not be empty" });
    if (!yearOld) return res.status(404).send({ message: "Field `yearOld` can not be empty" });
    if (!gender) return res.status(404).send({ message: "Field `gender` can not select" });

    //Khoi tao doi tuong model de save
    const employee = new Employee({ name, yearOld, gender })
    employee.save()
        .then(data => res.send(data))
        .catch(err => errorCatch(err, res))
}
// update one record
exports.update = (req, res) => {
    const { name, yearOld, gender } = req.body;
    if (!name) return res.status(404).send({ message: "Field `Name` can not be empty" });
    if (!yearOld) return res.status(404).send({ message: "Field `yearOld` can not be empty" });
    if (!gender) return res.status(404).send({ message: "Field `gender` can not select" });

    const employeeData = { name, yearOld, gender }
    // Find note and update it with the request body
    Employee.findByIdAndUpdate(req.params._id, employeeData, { new: true }).maxTimeMS(maxTimeoutMs).then(data => {
        if (!data) {
            return res.status(404).send({
                message: "Record not found with id " + req.params._id
            });
        }
        res.send(data);
    }).catch(err => errorCatch(err, res))
}
// delete one record
exports.delete = (req, res) => {
    Employee.findByIdAndRemove(req.params._id).maxTimeMS(maxTimeoutMs).then(note => {
        if (!note) return res.status(404).send({
            message: "Record not found with id " + req.params._id
        });
        res.send({ message: "Record deleted successfully!" });
    }).catch(err => errorCatch(err, res))
}