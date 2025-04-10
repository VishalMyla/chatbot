# Script Block

TheScript Blockin a dataflow allows you to execute custom JavaScript code. You can use theScript Blockto modify the dataflow to meet specific requirements, such as altering the request payload format to match an API’s expectations or applying logic to transform and enrich API responses.Access to datais managed throughData Access Object (DAO) functionsand theBusiness logiccan be defined using JavaScript methods.

Using the Script block, you can define and execute custom functions such as transforming API responses and modifying the request payload based on your requirements. It supports both single-line statements in the form of expressions and complex scripts to implement business logic.

# Example Scenario

Requirement:Consider a scenario where you need to add multiple execution paths after a validation block in a dataflow for an airline brand. The validation block validates the input against a schema in the Schema block. The result of this validation can be eithersuccessorfailure, and you need to define separate execution paths for each outcome:

1. If the validation succeeds: The system should retrieve customer details to proceed with issuing loyalty points.

2. If the validation fails: The system should return appropriate error messages and codes.

SolutionTo handle these scenarios, you can add Script blocks after theSchema block. These scripts will manage the success and failure paths.

## For a Successful Validation

When the validation succeeds, use the Script block to prepare the request for fetching customer details. This involves the following steps:

1. Remove Unnecessary Headers:Certain headers can cause errors if they contain invalid values. Remove the following headers:X-cap-neo-test-variant-idX-cap-api-attribution-entity-typex-cap-api-attribution-entity-codex-cap-api-attribution-till-code

- X-cap-neo-test-variant-id

`X-cap-neo-test-variant-id`

- X-cap-api-attribution-entity-type

`X-cap-api-attribution-entity-type`

- x-cap-api-attribution-entity-code

`x-cap-api-attribution-entity-code`

- x-cap-api-attribution-till-code

`x-cap-api-attribution-till-code`

6. Format Query Parameters:Format the parameters to match the expected input of the Get Customer Details API:SetFFNasexternalIdto align with the API’s input format.If thesourceparameter is missing, set it toINSTORE.

- SetFFNasexternalIdto align with the API’s input format.

`FFN`

`externalId`

- If thesourceparameter is missing, set it toINSTORE.

`source`

`INSTORE`

9. Send the Request:Include the following headers and query parameters in the API request:identifierName(e.g.,externalIdorFFN)source(e.g.,INSTORE)

- identifierName(e.g.,externalIdorFFN)

`identifierName`

`externalId`

`FFN`

- source(e.g.,INSTORE)

`source`

`INSTORE`

Below is an example of the script you can use in the Script block for the validation success scenario:

```
import dao from "neo/dao";


const {
    getEffectiveHeaders,
    getApiRequest
} = dao;


const script = {
    execute: () => {
        const requestQueryParams = getApiRequest().queryParams;
       
        let requestHeaders = getEffectiveHeaders();
        // Remove these headers because customer lookup api will throw error incase invalid values are passed here
        delete requestHeaders["x-cap-neo-test-variant-id"];
        delete requestHeaders["x-cap-api-attribution-entity-type"];
        delete requestHeaders["x-cap-api-attribution-entity-code"];
        delete requestHeaders["x-cap-api-attribution-till-code"];


        let queryParameters = {
            "identifierName" : "externalId",
            "identifierValue" : requestQueryParams.FFN,
            "source" : requestQueryParams.source ? requestQueryParams.source.toUpperCase() : "INSTORE"
        }
        return {
            headers : requestHeaders,
            queryParams : queryParameters
        };
    }
}


export {script as default}
```

```
import dao from "neo/dao";


const {
    getEffectiveHeaders,
    getApiRequest
} = dao;


const script = {
    execute: () => {
        const requestQueryParams = getApiRequest().queryParams;
       
        let requestHeaders = getEffectiveHeaders();
        // Remove these headers because customer lookup api will throw error incase invalid values are passed here
        delete requestHeaders["x-cap-neo-test-variant-id"];
        delete requestHeaders["x-cap-api-attribution-entity-type"];
        delete requestHeaders["x-cap-api-attribution-entity-code"];
        delete requestHeaders["x-cap-api-attribution-till-code"];


        let queryParameters = {
            "identifierName" : "externalId",
            "identifierValue" : requestQueryParams.FFN,
            "source" : requestQueryParams.source ? requestQueryParams.source.toUpperCase() : "INSTORE"
        }
        return {
            headers : requestHeaders,
            queryParams : queryParameters
        };
    }
}


export {script as default}
```

## For a Failed Validation

If the validation fails, use the Script block to generate a structured error response by,

- Retrieving validation errors

- Transforming the error into JSON format with the appropriate error code and message

- Returning an HTTP response with error details

Below is an example of the script in the Script block to handle the failure scenario.

```
import dao from "neo/dao";


const {
    getIn,
    getEffectiveHeaders
} = dao;


const script = {


    execute: () => {


        const validationErrors = getIn()?.err;
        const errorArr = validationErrors.map((currErr) => {
            return {
                "status": false,
                "code": 6001,
                "message" : currErr.message,
                "path" : currErr.instancePath
            }
        })
        return {
           http: {
               "res": {
                    status : 400,
                    "json": {
                        "errors" : errorArr
                    }
               }
           }
        }
    }


}


export {script as default}
```

```
import dao from "neo/dao";


const {
    getIn,
    getEffectiveHeaders
} = dao;


const script = {


    execute: () => {


        const validationErrors = getIn()?.err;
        const errorArr = validationErrors.map((currErr) => {
            return {
                "status": false,
                "code": 6001,
                "message" : currErr.message,
                "path" : currErr.instancePath
            }
        })
        return {
           http: {
               "res": {
                    status : 400,
                    "json": {
                        "errors" : errorArr
                    }
               }
           }
        }
    }


}


export {script as default}
```

Refer to this exampledataflowto understand how it is configured for a use case. Make sure that you have access to DocDemo org (100737) andaccess to Neo.

# Configuring Script Block

To configure the Script block, perform the following:

1. From the dataflow canvas, click on the connector.

2. Select the Script block from the pop-up window.

3. In theBlock namesection, enter the block name.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

4. In theScriptsection, write a script to meet your requirements.

5. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

6. ClickDone.

![Configuring the Script block](https://files.readme.io/ac4f8046ae3f6183b60aa20bbde812db274317b93910ba26510165c3968a069b-13.02.2025_19.37.05_REC_configuring_script.gif)

Configuring the Script block

Updated6 days ago