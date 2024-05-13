const db = require('../config/database');

const Moto = {
    getAll: (result) => {
        db.query('SELECT * FROM motos', (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
    },

    getById: (id, result) => {
        db.query('SELECT * FROM motos WHERE ID_Moto = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            // Not found Moto with the id
            result({ kind: "not_found" }, null);
        });
    },

    create: (newMoto, result) => {
        db.query('INSERT INTO motos SET ?', newMoto, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newMoto });
        });
    },

    update: (id, moto, result) => {
        db.query('UPDATE motos SET ? WHERE ID_Moto = ?', [moto, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Moto with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...moto });
        });
    },

    delete: (id, result) => {
        db.query('DELETE FROM motos WHERE ID_Moto = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Moto with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
};

module.exports = Moto;
