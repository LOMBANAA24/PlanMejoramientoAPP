const db = require('../config/database');

const Cliente = {
    getAll: (result) => {
        db.query('SELECT * FROM clientes', (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
    },

    getById: (id, result) => {
        db.query('SELECT * FROM clientes WHERE ID_Cliente = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            // Not found Cliente with the id
            result({ kind: "not_found" }, null);
        });
    },

    create: (newCliente, result) => {
        db.query('INSERT INTO clientes SET ?', newCliente, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newCliente });
        });
    },

    update: (id, cliente, result) => {
        db.query('UPDATE clientes SET ? WHERE ID_Cliente = ?', [cliente, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Cliente with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...cliente });
        });
    },

    delete: (id, result) => {
        db.query('DELETE FROM clientes WHERE ID_Cliente = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Cliente with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
};

module.exports = Cliente;
