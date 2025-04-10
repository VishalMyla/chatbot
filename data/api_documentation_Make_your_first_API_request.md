# Make your first API request

# Prerequisites:

1. Authentication details - Till ID and password forbasic authand valid access token forOAuth.

2. Appropriateaccess groupaccess.

3. API details

4. Any API testing tool such as Postman, Swagger, etc.

# Step-by-step instructions:

1. Determine the necessary API for your first request. ReferAPI Indexfor a list of our APIs.

Determine the necessary API for your first request. ReferAPI Indexfor a list of our APIs.

2. Select an API tool. Below are some suggested tools along with guidance on their usage:Postman'Try it' from ReadMe

Select an API tool. Below are some suggested tools along with guidance on their usage:

1. Postman

2. 'Try it' from ReadMe

5. Build a URL for the API call. For more information, refer to theAPI URL structuredocumentation.

Build a URL for the API call. For more information, refer to theAPI URL structuredocumentation.

6. Select the type of API call. For information on API call types, refer to theAPI HTTP methodsdocumentation.

Select the type of API call. For information on API call types, refer to theAPI HTTP methodsdocumentation.

7. Enter the authentication details. You can use Basic auth or OAuth. For more information refer to theBasic AuthandOAuthdocumentation.🚧Ensure that your till has the appropriate access group permissions. For example, if your till lacks write permissions for Customer resources, you will be unable to add a customer using those till credentials. For more information, refer to theaccess group. documentation.

Enter the authentication details. You can use Basic auth or OAuth. For more information refer to theBasic AuthandOAuthdocumentation.

> 🚧Ensure that your till has the appropriate access group permissions. For example, if your till lacks write permissions for Customer resources, you will be unable to add a customer using those till credentials. For more information, refer to theaccess group. documentation.

## 🚧

Ensure that your till has the appropriate access group permissions. For example, if your till lacks write permissions for Customer resources, you will be unable to add a customer using those till credentials. For more information, refer to theaccess group. documentation.

8. Run the request.

Run the request.

9. Evaluate the response.For information on API response codes, referAPI status codesdocumentation.Once you have successfully made a request, make sure to check the response to ensure it is correct and as expected.

Evaluate the response.

- For information on API response codes, referAPI status codesdocumentation.Once you have successfully made a request, make sure to check the response to ensure it is correct and as expected.

# Getting started with Postman

## Prerequisites:

1. Authentication details - Till ID and password forbasic authand valid access token forOAuth.

2. Appropriateaccess groupaccess.

3. API endpoint details.

## Step by step instructions

1. Open Postman and from the home page, clickNew.

![](https://files.readme.io/6eac91c-NEW_IMPORT_POSTMAN.gif)

1. Select theAuthorizationtab and from theTypedrop-down, select the authentication type. For basic authentication, selectBasic authand for authenticating using an access token, selectNo Auth.

![](https://files.readme.io/98d3529-AUTH.gif)

Basic AuthTo authenticate using basic auth, enter the Till ID inUsernameand in the Password field, enter the till password in MD5 format. For more information on these, referBasic authenticationdocumentation.

![](https://files.readme.io/1bcc2d0-Basic_auth.png)

Authenticating using access tokenTo authenticate using an access token,generate the token, selectHeaders, and enter theKeyX-CAP-API-OAUTH-TOKEN, then input the token in theValuefield. TheContent-Typeandacceptkey fields are auto-generated.

![](https://files.readme.io/052a6df-Access_token.png)

> 🚧WarningEnsure that your till has the appropriate access group permissions. For example, if your till lacks write permissions for Customer resources, you will be unable to add a customer using those till credentials. For more information, refer to theaccess group. documentation.

## 🚧Warning

Warning

Ensure that your till has the appropriate access group permissions. For example, if your till lacks write permissions for Customer resources, you will be unable to add a customer using those till credentials. For more information, refer to theaccess group. documentation.

1. From the method drop-down, select the method type.

![](https://files.readme.io/96735bf-Type.png)

1. In the URL text box, enter the API URL. ReferAPI Indexfor a list of our APIs and refer to theAPI URL structuredocumentation for information on building a URL.

![](https://files.readme.io/6209f2f-API_URL_text_box.png)

1. (a) ForPOSTandPUTmethods, selectBodytab >rawand enter the body parameters.

![](https://files.readme.io/78b078f-Body.png)

(b)ForGET/DELETEmethods, select theParameterstab and enter the query parameters.

![](https://files.readme.io/076535e-GET.png)

1. ClickSend. The response is displayed on the interface.

![](https://files.readme.io/c15b0f4-save.png)

```
{
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "profiles": [
        {
            "firstName": "Jose",
            "lastName": "Jones",
            "identifiers": [
                {
                    "type": "mobile",
                    "value": "988001234"
                },
                {
                    "type" : "email",
                    "value" : "[email protected]"
                }
            ],
            "source": "INSTORE"
        }
    ]
}
```

```
{
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "profiles": [
        {
            "firstName": "Jose",
            "lastName": "Jones",
            "identifiers": [
                {
                    "type": "mobile",
                    "value": "988001234"
                },
                {
                    "type" : "email",
                    "value" : "[email protected]"
                }
            ],
            "source": "INSTORE"
        }
    ]
}
```

[[email protected]](/cdn-cgi/l/email-protection)

```
//REQUEST
https://eucrm.cc.capillarytech.com/v2/customers/lookup?source=INSTORE&identifierName=mobile&identifierValue=9449489999

//RESPONSE

{
  "entity": 552695692,
  "warnings": []
}
```

```
//REQUEST
https://eucrm.cc.capillarytech.com/v2/customers/lookup?source=INSTORE&identifierName=mobile&identifierValue=9449489999

//RESPONSE

{
  "entity": 552695692,
  "warnings": []
}
```

```
// BODY

{
  "profiles": [
    {
      "firstName": "Tom",
      "lastName": "Sawyer",
      "fields": {
        "gender": "Male",
        "city": "Bangalore"
      },
      "identifiers": [
        {
          "type": "mobile",
          "value": 919111111111
        },
        {
          "type": "email",
          "value": "[email protected]"
        },
        {
          "type": "wechat",
          "value": "wc_2"
        }
      ],
      "commChannels": [
        {
          "type": "email",
          "value": "[email protected]",
          "primary": "true",
          "verified": "false",
          "meta": {
            "residence": true
          }
        },
        {
          "type": "wechat",
          "value": "wc_2",
          "primary": "true",
          "verified": "true",
          "meta": {
            "residence": true
          }
        },
        {
          "type": "mobilePush",
          "value": "abcd12343434",
          "primary": true,
          "verified": true,
          "meta": {
            "lastViewedDate": "2019-10-25"
          }
        }
      ],
      "source": "WECHAT",
      "accountId": "1234"
    }
  ],
  "loyaltyInfo": {
    "loyaltyType": "loyalty"
  },
  "extendedFields": {
    "gender": "MALE",
    "city": "Bangalore"
  },
  "loyaltyProgramEnrollments": [
    {
      "programId": 1016,
      "tierNumber": 234,
      "loyaltyPoints": 75,
      "tierExpiryDate": "2022-02-11T16:36:17+05:30",
      "pointsExpiryDate": "2022-02-11T16:36:17+05:30"
    }
  ]
}



//RESPONSE

{
  "createdId": 162116213,
  "warnings": [],
  "sideEffects": [
    {
      "awardedPoints": 25,
      "type": "points"
    }
  ]
}
```

```
// BODY

{
  "profiles": [
    {
      "firstName": "Tom",
      "lastName": "Sawyer",
      "fields": {
        "gender": "Male",
        "city": "Bangalore"
      },
      "identifiers": [
        {
          "type": "mobile",
          "value": 919111111111
        },
        {
          "type": "email",
          "value": "[email protected]"
        },
        {
          "type": "wechat",
          "value": "wc_2"
        }
      ],
      "commChannels": [
        {
          "type": "email",
          "value": "[email protected]",
          "primary": "true",
          "verified": "false",
          "meta": {
            "residence": true
          }
        },
        {
          "type": "wechat",
          "value": "wc_2",
          "primary": "true",
          "verified": "true",
          "meta": {
            "residence": true
          }
        },
        {
          "type": "mobilePush",
          "value": "abcd12343434",
          "primary": true,
          "verified": true,
          "meta": {
            "lastViewedDate": "2019-10-25"
          }
        }
      ],
      "source": "WECHAT",
      "accountId": "1234"
    }
  ],
  "loyaltyInfo": {
    "loyaltyType": "loyalty"
  },
  "extendedFields": {
    "gender": "MALE",
    "city": "Bangalore"
  },
  "loyaltyProgramEnrollments": [
    {
      "programId": 1016,
      "tierNumber": 234,
      "loyaltyPoints": 75,
      "tierExpiryDate": "2022-02-11T16:36:17+05:30",
      "pointsExpiryDate": "2022-02-11T16:36:17+05:30"
    }
  ]
}



//RESPONSE

{
  "createdId": 162116213,
  "warnings": [],
  "sideEffects": [
    {
      "awardedPoints": 25,
      "type": "points"
    }
  ]
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

```
//REQUEST

https://eucrm.cc.capillarytech.com/v2/userGroup2/1234/leave?source=INSTORE&accountId=321&identifierName=mobile&identifierValue=1234566789

//RESPONSE

{
  "warnings": [],
  "errors": [],
  "success": true
}
```

```
//REQUEST

https://eucrm.cc.capillarytech.com/v2/userGroup2/1234/leave?source=INSTORE&accountId=321&identifierName=mobile&identifierValue=1234566789

//RESPONSE

{
  "warnings": [],
  "errors": [],
  "success": true
}
```

You can clickSave as exampleto save the response for future reference.

![](https://files.readme.io/95dc9cb-save_as_ex.gif)

# Using Postman for Bulk API requests

You can configure automation for repetitive API requests in Postman. This approach allows the automatic execution of numerous API requests and is useful when there is no specific BULK API available for your requirements.

> 👍NoteThis method is primarily intended for cleanup activities during migrations or other rare circumstances. It is not recommended for all APIs and should not be considered a replacement for BULK APIs.

## 👍Note

Note

This method is primarily intended for cleanup activities during migrations or other rare circumstances. It is not recommended for all APIs and should not be considered a replacement for BULK APIs.

To create a Bulk API request using POSTMAN, perform the following:

1. Click on the Add icon.

![](https://files.readme.io/cc7178f-Add_Icon.png)

1. ClickBlank collection. A new collection is created.

![](https://files.readme.io/e728889-blank_collection.png)

1. Click the three-dot menu, and clickAdd a request.

![](https://files.readme.io/81ad138-Add_request.png)

1. Enter the API information such as HTTP method, API endpoint, and authorization.

![](https://files.readme.io/d408b15-Api_info.png)

1. In theBody, enter the body parameters. For the dynamic values, define the value using a variable. The variables should be defined in the format{{variablename}}. For example, see the below sample body of a transaction ADD API where "mobilenumber", "billNumber", and "billAmount" are the variables:

`{{variablename}}`

![](https://files.readme.io/238811a-Add_transaction.png)

1. Define the values for the variables in a CSV file and save it. Make sure that the names of the variables defined and those in the CSV files are the same. For example, if the variables are "mobilenumber", "billNumber", and "billAmount", define the values for those in the CSV file.

![](https://files.readme.io/8bb7517-Variable_file.png)

1. Save the request.

2. Click the three-dot menu, and clickRun collection.

3. ClickSelect Fileand upload the  CSV file which contains the variables and the values for the dynamic parameters.

4. Select thePersist response for a sessioncheckbox to view the response in the results.

5. ClickRun.

6. To view the responses, click on the Iterations.

![](https://files.readme.io/f62a339-Response.png)

# Getting started wih 'Try it' on ReadMe

This section will walk you through the steps to make your API request from the ReadMe portal.

## Prerequisites

1. Basic Auth credentials -  till ID and MD5 encoded password. For more information refer to theBasic authenticationdocumentation.

2. Host URL

## Step by step instructions

1. Navigate to the Capillarydeveloper documentation portal.

2. Select the API you want to run. For example,Add a user group.

3. Enter the body parameters (for POST and PUT) or query parameters (for GET and DELETE) information.

![](https://files.readme.io/77e6ae5-Readme_body_parameters.png)

NOTE:Parameters marked required are mandatory.For POST or PUT calls, if the body parameters fields are not available, enter the API payload in theRAW_BODYin the appropriate JSON format.

![](https://files.readme.io/77866e6-RAW_BODY.png)

1. From theCURLsection, selectCURLfrom the drop-down. To view available request CURL examples, click theREQUESTdrop-down and select the CURLs.

![](https://files.readme.io/3e55a0a-CURL_examples.png)

To clear an example, selectClear example.

![](https://files.readme.io/fab22ce-image.png)

1. In theURL, enter the HOST URL.

![](https://files.readme.io/9e19ada-Enter_HOST.png)

1. If applicable, Enter the appropriate header values. The headers section is visible only if the API supports any additional headers.

![](https://files.readme.io/df557a2-image.png)

1. In theAuthorizationsection, enter the till ID and password in MD5 format.NOTE:This is not required if you have entered the access token in theX-CAP-API-OAUTH-TOKENheader.

`X-CAP-API-OAUTH-TOKEN`

![](https://files.readme.io/d997854-Readme_Authentication.png)

1. ClickTry it!. TheResponsesection displays the response.

![](https://files.readme.io/a6cbd1a-image.png)

To view other sample responses, click theRESPONSEdrop-down. The drop-down displays the available example responses.

![](https://files.readme.io/822414c-Response_example.png)

## Testing API using ReadMe Try it

![](https://files.readme.io/faa3d03-try_it-min.gif)

## Viewing example in ReadMe

![](https://files.readme.io/2d7952f-Example.gif)

> 👍Congratulations! You have successfully sent your first Capillary API call!

## 👍Congratulations! You have successfully sent your first Capillary API call!

Congratulations! You have successfully sent your first Capillary API call!