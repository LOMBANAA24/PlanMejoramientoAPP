const chai = require('chai');
const expect = chai.expect;
const db = require('../config/db');

describe('Base de datos', () => {
    it('debería conectarse correctamente a la base de datos', (done) => {
        db.connect((err) => {
            if (err) {
                done(err);
            } else {
                done();
            }
        });
    });

    it('debería ejecutar una consulta simple correctamente', (done) => {
        db.query('SELECT 1 + 1 AS solution', (err, rows) => {
            if (err) {
                done(err);
            } else {
                expect(rows[0].solution).to.equal(2);
                done();
            }
        });
    });
});
