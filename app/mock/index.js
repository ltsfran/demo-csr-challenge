const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/v1/api/auth/login', (req, res) => {
  const body = req.body;
  const isValidUser = body.user === 'luis.tupa@challenge.com';

  setTimeout(() => {
    if(isValidUser) {
      res.status(200).json({
        code: 100,
        message: 'Solicitud exitosa',
        data: {
          user: {
            id: 1,
            email: body.user,
            name: 'Luis',
            token: 'abc'
          }
        }
      });
    } else {
      res.status(400).json({
        code: 111,
        message: 'Lo sentimos, el usuario o contraseña es incorrecto',
        data: []
      });
    }
  }, 2000);
});

app.listen(port, () => {
  console.log(`Ready localhost on port: ${port}`);
});