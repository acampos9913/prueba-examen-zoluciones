const AWS = require('aws-sdk');

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.ctrlPostDinamoTP = item => MiFuncion(item);

async function MiFuncion(item) {
    try {
        const userId = item.userId;
        const name = item.name;
        console.log(name)
        const params = {
            TableName: USERS_TABLE,
            Item: {
                userId: userId,
                name: name,
            },
            };
        dynamoDb.put(params, (error) => {
            if (error) {
                throw error;
            }
            return JSON.stringify({ userId, name });
            
        });
    } catch (error) {
      throw error;
    }
  }