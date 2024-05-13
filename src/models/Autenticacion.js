const db = require('../config/database');

const Autenticacion = {
    getAll: (result) => {
        db.query('SELECT * FROM autenticaciones', (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
    },

    getById: (id, result) => {
        db.query('SELECT * FROM autenticaciones WHERE ID_Autenticacion = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            // Not found Autenticacion with the id
            result({ kind: "not_found" }, null);
        });
    },

    create: (newAutenticacion, result) => {
        db.query('INSERT INTO autenticaciones SET ?', newAutenticacion, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newAutenticacion });
        });
    },

    update: (id, autenticacion, result) => {
        db.query('UPDATE autenticaciones SET ? WHERE ID_Autenticacion = ?', [autenticacion, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Autenticacion with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...autenticacion });
        });
    },

    delete: (id, result) => {
        db.query('DELETE FROM autenticaciones WHERE ID_Autenticacion = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Autenticacion with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
};

module.exports = Autenticacion;
