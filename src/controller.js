const {ctrlsGetSwapiTP} = require('./getSwapi');
const {ctrlGetDynamoTP} = require('./getDinamo');
const {ctrlPostDinamoTP} = require('./postDinamo');

exports.ctrlsGetSwapi = (req, res, next) => {
    getSwapiST(req.query)
      .then(data => {
          res.data = data;
          next();
      })
      .catch( err => {
          next(new Error(err));
      });
};
async function getSwapiST(item) {
  try {
      return await ctrlsGetSwapiTP(item);
  } catch(err) {
      throw err;
  }
}

exports.ctrlGetDynamo = (req, res, next) => {
    getDinamoST(req.query)
      .then(data => {
          res.data = data;
          next();
      })
      .catch( err => {
          next(new Error(err));
      });
};
async function getDinamoST(item) {
  try {
      return await ctrlGetDynamoTP(item);
  } catch(err) {
      throw err;
  }
}

exports.ctrlPostDinamo = (req, res, next) => {
    postDinamoST(req.body)
      .then( data => {
          res.data = data;
          next();
      })
      .catch( err => {
          next(new Error(err));
      });
};
async function postDinamoST(item) {
  try {
      return await ctrlPostDinamoTP(item);
  } catch(err) {
      throw err;
  }
}