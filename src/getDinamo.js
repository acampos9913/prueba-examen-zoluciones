const AWS = require('aws-sdk');

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.ctrlGetDynamoTP = item => MiFuncion(item);

async function MiFuncion(item) {
    try {
        console.log(item.userId)
        const params = {
            TableName: USERS_TABLE,
            Key: {
              userId: item.userId,
            },
          }
        dynamoDb.get(params, (error, result) => {
            if (error) {
                throw error;
            }
            if (result.Item) {
              const {userId, name} = result.Item;
              
              return JSON.stringify({ userId, name });
            } else {
                throw error;
            }
          });
    } catch (error) {
      throw error;
    }
  }