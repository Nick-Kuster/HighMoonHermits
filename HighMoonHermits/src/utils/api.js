
const API_KEY = ''//process.env.YOUTUBE_API_KEY;
const channelId = '';

import AWS from 'aws-sdk'
export function getVideos (){
    return fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`)
        .then((res) => res.json())        
        .then((data) => data.items)
}

export function getBlogs () {
  
    AWS.config.region = 'us-east-2'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-2:98e81336-0bc7-45fe-b9fe-a59a42f11151',
    });
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName : "BlogPost"
    };
    var json = ''
    
    return docClient.scan(params, function (err, data) {
        if (err) {
            json = JSON.stringify(err, undefined, 2);
        }
        else {
            return data.Items
        }
    }).promise();
}

export function getEvents () {
  
    AWS.config.region = 'us-east-2'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-2:98e81336-0bc7-45fe-b9fe-a59a42f11151',
    });
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName : "Events"
    };
    var json = ''
    
    return docClient.scan(params, function (err, data) {
        if (err) {
            json = JSON.stringify(err, undefined, 2);
        }
        else {
            return data.Items
        }
    }).promise();
}