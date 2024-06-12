const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://ten-f1.vercel.app'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permite los métodos HTTP especificados
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permite los encabezados especificados
  next();
});

app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const express = require('express');
// const weatherRoutes = require('./routes/weatherRoutes');

// const app = express();

// app.use('/api/weather', weatherRoutes);

// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// import path from 'path';
// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// import connectDB from './config/db.js';
// import cookieParser from 'cookie-parser';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// import userRoutes from './routes/userRoutes.js';
// import addRegisterRoutes from './routes/addRegisterRoutes.js';
// import typeValuesRoutes from './routes/typeValuesRoutes.js';
// //const cors = require('cors'); //solucion abajo
// import cors from 'cors';



// const port = process.env.PORT || 5000;

// connectDB();

// const app = express();

// //1
// // app.use((req, res, next) => {
// //   res.header('Access-Control-Allow-Origin', 'https://mern-f1.vercel.app'); // Reemplaza con tu dominio permitido
// //   res.header('Access-Control-Allow-Origin', 'https://localhost:3000'); // Reemplaza con tu dominio permitido
// //   next();
// // });

// //2
// const allowedOrigins = [
//   'https://mern-f1.vercel.app',
//   'http://localhost:3000',
//   'https://regbills-f1.vercel.app',
//   'https://regbills-mui-f1.vercel.app'
//   // Añadir más URLs permitidas según sea necesario
// ];

// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   next();
// });
  
// // app.use(cors({
// //   //origin: ['https://localhost:3000', 'https://glittery-pasca-60dcc8.netlify.app','https://mern-f1.onrender.com'],
// //   origin: ['*','https://localhost:3000','https://react-simple.onrender.com','https://mern-f1.onrender.com','https://mern-f1.vercel.app'],
// //   methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// // })); 

// app.use(cors({
//   origin: [  
//     '*',
//     'http://localhost:3000',
//     //'https://localhost:3000',
//     'https://react-simple.onrender.com',
//     'https://mern-f1.onrender.com',
//     'https://mern-f1.vercel.app',
//     'https://regbills-mui-f1.vercel.app'
//   ],
//   methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
// }));


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());

// app.use('/api/users', userRoutes);
// app.use('/api/registers', addRegisterRoutes); 
// app.use('/api/type-value', typeValuesRoutes); 

// if (process.env.NODE_ENV === 'production') {
//   const __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname, '/frontend/dist')));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
//   );
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....');
//   });
// }

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));
