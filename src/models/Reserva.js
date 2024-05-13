const db = require('../config/database');

const Reserva = {
    getAll: (result) => {
        db.query('SELECT * FROM reservas', (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
    },

    getById: (id, result) => {
        db.query('SELECT * FROM reservas WHERE ID_Reserva = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            // Not found Reserva with the id
            result({ kind: "not_found" }, null);
        });
    },

    create: (newReserva, result) => {
        db.query('INSERT INTO reservas SET ?', newReserva, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newReserva });
        });
    },

    update: (id, reserva, result) => {
        db.query('UPDATE reservas SET ? WHERE ID_Reserva = ?', [reserva, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Reserva with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...reserva });
        });
    },

    delete: (id, result) => {
        db.query('DELETE FROM reservas WHERE ID_Reserva = ?', id, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Reserva with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
};

module.exports = Reserva;
