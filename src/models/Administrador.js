const db = require('../config/database');

const Administrador = {
    getAll: (result) => {
        db.query('SELECT * FROM administradores', (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
    },

    getById: (id, result) => {
        db.query('SELECT * FROM administradores WHERE ID_Admin = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            // Not found Administrador with the id
            result({ kind: "not_found" }, null);
        });
    },

    create: (newAdmin, result) => {
        db.query('INSERT INTO administradores SET ?', newAdmin, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newAdmin });
        });
    },

    update: (id, admin, result) => {
        db.query('UPDATE administradores SET ? WHERE ID_Admin = ?', [admin, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Administrador with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...admin });
        });
    },

    delete: (id, result) => {
        db.query('DELETE FROM administradores WHERE ID_Admin = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Administrador with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
};

module.exports = Administrador;
