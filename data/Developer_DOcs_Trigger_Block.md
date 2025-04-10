# Trigger Block

TheTrigger Blockis the starting point of the dataflow, where you can configure the dataflow with the API method type (e.g., POST, GET) and a custom API endpoint.

Once configured, the API cURL is created based on the configuration here. You can use either the API cURL or the endpoint to invoke the dataflow. The trigger block appears automatically after you create the dataflow.

## Configuring the Trigger Block

To configure the block,

1. From the dataflow canvas, hover on the Trigger Block and click on the edit icon.

2. In theAPI Methodfield, select the HTTP method (GET, POST, or PUT).

3. In theAPI urlfield, enter the unique endpoint for the dataflow.

4. ClickDone.

![Configuring Trigger Block](https://files.readme.io/c1a8856754f82d16c99a31b44f403cea27774f6114d63342b3bc336777f1ea7e-13.02.2025_18.41.02_REC_configuring_trigger.gif)

Configuring Trigger Block

For example, the below API cURL is created based on the configuration provided in the above image (API method-POSTand the API url -tierForceUpgrade).

`POST`

`tierForceUpgrade)`

```
curl --location --request POST 'https://apac.api.capillarytech.com/x/neo/tierForceUpgrade' \
            --header 'Content-Type: application/json' \
            --header 'x-cap-api-oauth-token: {token}' \
            --header 'x-cap-neo-test-variant-id: 1a0c38d9-be54-4592-9472-d73de8011cbd' \
            --header 'x-cap-neo-dag-scope: org' 
--data-raw '{
      "data": "add your json object here"
      }'
```

```
curl --location --request POST 'https://apac.api.capillarytech.com/x/neo/tierForceUpgrade' \
            --header 'Content-Type: application/json' \
            --header 'x-cap-api-oauth-token: {token}' \
            --header 'x-cap-neo-test-variant-id: 1a0c38d9-be54-4592-9472-d73de8011cbd' \
            --header 'x-cap-neo-dag-scope: org' 
--data-raw '{
      "data": "add your json object here"
      }'
```

Updated13 days ago