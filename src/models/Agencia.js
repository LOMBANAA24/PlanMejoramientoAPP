const db = require('../config/database');

const Agencia = {
    getAll: (result) => {
        db.query('SELECT * FROM agencias', (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
    },

    getById: (id, result) => {
        db.query('SELECT * FROM agencias WHERE ID_Agencia = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            // Not found Agencia with the id
            result({ kind: "not_found" }, null);
        });
    },

    create: (newAgencia, result) => {
        db.query('INSERT INTO agencias SET ?', newAgencia, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newAgencia });
        });
    },

    update: (id, agencia, result) => {
        db.query('UPDATE agencias SET ? WHERE ID_Agencia = ?', [agencia, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Agencia with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...agencia });
        });
    },

    delete: (id, result) => {
        db.query('DELETE FROM agencias WHERE ID_Agencia = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Agencia with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
};

module.exports = Agencia;
