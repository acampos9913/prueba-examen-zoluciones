const AWS = require('aws-sdk');

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.ctrlPostDinamoTP = item => MiFuncion(item);

async function MiFuncion(item) {
    try {
        const { userId, name } = item;
        const params = {
            TableName: USERS_TABLE,
            Item: {
                userId: userId,
                name: name,
            },
            };
        dynamoDb.put(params, (error) => {
            if (error) {
                console.log(error);
                return res.status(400).json({ error: `No se a podido crear el usuario ${userId}` });
            }
            return res.json({ userId, name });
            
            });
    } catch (error) {
      throw error;
    }
  }