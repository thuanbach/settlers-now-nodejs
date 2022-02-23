const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'ktshrawaodaoes',
  host: 'ec2-18-215-8-186.compute-1.amazonaws.com',
  database: 'd4e9mhrbmqv6mr',
  password: '87bb6e284eb58c429585c5fb2f66a9097c1099a663fb902a6ed24084166729b0',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
}
});


app.get('/categories', (req, res) => {
  pool.query('SELECT * from settle_category ', (err, result) => {
    res.send(result.rows);
  });
});

app.get('/categories/:id', (req, res) => {
  pool.query('SELECT * from settle_detail where settle_category_id = ' + req.params.id, (err, result) => {
    console.log(result.rows[0]);
    res.send(result.rows[0]);
  });
});

app.listen(port, () => {
  console.log(`Regina Settlers Now listening on port ${port}`);
});