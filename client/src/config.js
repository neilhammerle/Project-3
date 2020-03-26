export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-west-1",
        BUCKET: "chadderbox"
    },
    apiGateway: {
        REGION: "YOUR_API_GATEWAY_REGION",
        URL: "YOUR_API_GATEWAY_URL"
    },
    cognito: {
        REGION: " us-west-2_Hd3brPvbU",
        USER_POOL_ID: "arn:aws:cognito-idp:us-west-2:952645454571:userpool/us-west-",
        APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
        IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
    }
};

// const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/YOUR_TOKEN/token";
// const instanceLocator = "YOUR_KEY";

// exports.tokenUrl = tokenUrl;
// exports.instanceLocator = instanceLocator;