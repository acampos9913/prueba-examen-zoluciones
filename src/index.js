const express = require('express');
const compression = require('compression')
const bodyParser = require('body-parser');
const cors = require('cors');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const { ctrlsGetSwapi, ctrlGetDynamo, ctrlPostDinamo} = require('./controller');
const app = express();
/* const {
    routes: userRoutes,
} = require('./user/routes'); */
const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Examen API',
            version:'1.0.0',
            description:'Ejemplo de reto examen',
            contact:{
                name:'Miguel',
                email:'acampos9913@gmail.co'
            },
            servers:["http://localhost:3000"]
        }
    },
    apis:["src/index.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(compression());
app.use(cors());

/**
 * @swagger
 * /api/getswapi:
 *  get:
 *   summary: Obtiene el json de swapi
 *   description: Obtiene todos los elementos
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/api/getswapi', 
ctrlsGetSwapi, 
    (req, res) => res.json(res.data)
);

/**
 * @swagger
 * /api/users/:userId:
 *  get:
 *   summary: Obtiene usuarios por Id
 *   description: Obtiene los usurios por los Ids
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/api/listar', 
ctrlGetDynamo, 
    (req, res) => res.json(res.data)
);

 /**
  * @swagger
  * /api/users:
  *  post:
  *   summary: Crea usuario
  *   description: Crea usuarios en la bd
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/users'
  *   responses:
  *    200:
  *     description: users created succesfully
  *    500:
  *     description: users in creating employee
  */
app.post('/api/guardar', 
ctrlPostDinamo, 
    (req, res) => res.json(res.data)
);

app.use( (err, req, res, next) => {
    console.log(err)
    res.status(500).send('Ha ocurrido un error')
});

module.exports = app;