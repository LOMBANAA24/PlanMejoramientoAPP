const db = require('../config/database');

const Ciudad = {
    getAll: (result) => {
        db.query('SELECT * FROM ciudades', (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
    },

    getById: (id, result) => {
        db.query('SELECT * FROM ciudades WHERE ID_Ciudad = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            // Not found Ciudad with the id
            result({ kind: "not_found" }, null);
        });
    },

    create: (newCiudad, result) => {
        db.query('INSERT INTO ciudades SET ?', newCiudad, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newCiudad });
        });
    },

    update: (id, ciudad, result) => {
        db.query('UPDATE ciudades SET ? WHERE ID_Ciudad = ?', [ciudad, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Ciudad with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...ciudad });
        });
    },

    delete: (id, result) => {
        db.query('DELETE FROM ciudades WHERE ID_Ciudad = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Ciudad with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
};

module.exports = Ciudad;
