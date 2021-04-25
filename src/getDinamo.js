const AWS = require('aws-sdk');

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.ctrlGetDynamoTP = item => MiFuncion(item);

async function MiFuncion(item) {
    try {
        const params = {
            TableName: USERS_TABLE,
            Key: {
              userId: item.userId,
            },
          }
        dynamoDb.get(params, (error, result) => {
            if (error) {
              console.log(error);
              return res.status(400).json({ error: `No se ha podido crear el usuario ${userId}` });
            }
            if (result.Item) {
              const {userId, name} = result.Item;
              
              return res.json({ userId, name });
            } else {
              return res.status(404).json({ error: `Usuario ${userId} no fue encontrado` });
            }
          });
    } catch (error) {
      throw error;
    }
  }