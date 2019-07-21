module.exports = (app) => {
    const employee = require('../controllers/employee');

    app.get('/employees', employee.findAll);
    app.get('/employees/:_id', employee.findOne);
    app.post('/employees', employee.create);
    app.put('/employees/:_id', employee.update);
    app.delete('/employees/:_id', employee.delete);

}