import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_PlQaE5Qmt",
    ClientId: "2baeio10cd6osrdm68o7o5q29v"
}

export default new CognitoUserPool(poolData);