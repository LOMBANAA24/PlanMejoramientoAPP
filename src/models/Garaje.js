const db = require('../config/database');

const Garaje = {
    getAll: (result) => {
        db.query('SELECT * FROM garajes', (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
    },

    getById: (id, result) => {
        db.query('SELECT * FROM garajes WHERE ID_Garaje = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            // Not found Garaje with the id
            result({ kind: "not_found" }, null);
        });
    },

    create: (newGaraje, result) => {
        db.query('INSERT INTO garajes SET ?', newGaraje, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newGaraje });
        });
    },

    update: (id, garaje, result) => {
        db.query('UPDATE garajes SET ? WHERE ID_Garaje = ?', [garaje, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Garaje with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...garaje });
        });
    },

    delete: (id, result) => {
        db.query('DELETE FROM garajes WHERE ID_Garaje = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Garaje with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
};

module.exports = Garaje;
