const dev = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "chadder"
    },
    apiGateway: {
        REGION: "",
        URL: ""
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2:162046142773",
        APP_CLIENT_ID: "6m82pbk0r4ppu4qgg7a33gnl4f",
        IDENTITY_POOL_ID: "us-west-2:0e4aec7d-0b67-48e0-a1ef-66e7d7f32875"
    }
};

const prod = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "chadder"
    },
    apiGateway: {
        REGION: "",
        URL: ""
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2:162046142773",
        APP_CLIENT_ID: "6m82pbk0r4ppu4qgg7a33gnl4f",
        IDENTITY_POOL_ID: "us-west-2:0e4aec7d-0b67-48e0-a1ef-66e7d7f32875"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};