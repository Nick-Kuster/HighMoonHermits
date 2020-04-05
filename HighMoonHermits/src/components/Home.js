import React from 'react'
import AWS from 'aws-sdk'

function getTable () {
  
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
            console.log(json + " made it to err");
        }
        else {
            json = JSON.stringify(data, undefined, 2);
            console.log(json + " made it to json");
        }
    }).promise();
}

export default class Home extends React.Component {
    
    state = {    
        blogs: ''
    } 

    
    componentDidMount(){
        getTable().then(
            
            json => {
                var data = JSON.stringify(json, undefined, 2)
                console.log(data + 'hi')                
                this.setState({ blogs: data })
            }
        )

    }

    render() {
        const{ blogs} = this.state
        return (
            <div>{blogs} {process.env.REACT_APP_IDENTITY_ID + 'hi'} </div>
        )
    }
}