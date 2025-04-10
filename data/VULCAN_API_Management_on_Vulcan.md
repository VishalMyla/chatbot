# API Management on Vulcan

Vulcan supports two categories of APIs accessible directly through the Vulcan node layer and those available throughArya APIs.

# Types of APIs Supported on Vulcan

## Type 1

APIs supported on the Vulcan node layer (whitelisted)

1. Intouch

2. XAJA

3. Extension (avengers API extension.)

4. Neo Extensions

5. Shield / Workflow Management APIs

6. Cortex APIs

Sample Method for Services/API.js:

```
export const methodName = (param) => {
	const url = `${endpoints.vulcan_endpoint}/<intouch|neo|extensions|xaja/AjaxService>/<URL path of svc>`;
	return httpRequest(url, getVulcanAPICallObject('GET'));
};
```

```
export const methodName = (param) => {
	const url = `${endpoints.vulcan_endpoint}/<intouch|neo|extensions|xaja/AjaxService>/<URL path of svc>`;
	return httpRequest(url, getVulcanAPICallObject('GET'));
};
```

> 📘Note:Always usegetVulcanAPICallObjectin the api.js method

## 📘Note:

Note:

Always usegetVulcanAPICallObjectin the api.js method

`getVulcanAPICallObject`

## Type 2

APIs supported on Arya (Node APIs and Whitelisted BE APIs):

1. EMF (/loyalty/emf/v1)

2. File service (/v1/file-service)

3. Promo engine (/v1/promotion-management)

4. Observability engine (/v1/observability)

5. Rewards core (/core)

6. Gamification (/gamification)

7. Badges (/v1/badges)

8. Any node API (loyalty/api/v1, member-care/api/v1, arya/api/v1/org-settings, arya/api/v1/creatives, any other Arya APIs)

> 📘Note:For all the above APIs, if the endpoint has "arya/api/v1" then useendpoints.arya_endpoint.Else define an endpoint in theendpoints.jsfile.

## 📘Note:

Note:

For all the above APIs, if the endpoint has "arya/api/v1" then useendpoints.arya_endpoint.Else define an endpoint in theendpoints.jsfile.

`endpoints.arya_endpoint`

`endpoints.js`

Sample:

```
fileservice_endpoint:"https://north-america.intouch.capillarytech.com/v1/file-service"
```

```
fileservice_endpoint:"https://north-america.intouch.capillarytech.com/v1/file-service"
```

Sample Method for Services/API.js:

```
export const methodName = (param) => {
	const url = `${endpoints.fileservice_endpoint}/<URL path of svc>/<param>`;
	return httpRequest(url, getAryaAPICallObject("GET"));
};
```

```
export const methodName = (param) => {
	const url = `${endpoints.fileservice_endpoint}/<URL path of svc>/<param>`;
	return httpRequest(url, getAryaAPICallObject("GET"));
};
```

> 📘Note:Always usegetAryaAPICallObjectin the api.js method.

## 📘Note:

Note:

Always usegetAryaAPICallObjectin the api.js method.

`getAryaAPICallObject`

# Whitelisted Endpoints

Theendpoint.jsfile contains all the possible whitelisted endpoints callable from Vulcan (Type 1 and Type 2). These are based on the InTouch cluster specified during the project setup

`endpoint.js`

![](https://files.readme.io/d25ddc3-image7.png)

# Making Vulcan endpoint calls for OAuth APIs

To make Vulcan endpoint calls for OAuth APIs, follow these steps:

1. Register the OAuth client key, secret, and till ID using themetadata/oauth-clientsAPI.cURLcurl --location 'https://{host}/vulcan/api/v1/metadata/oauth-clients' \
--header 'x-cap-api-auth-org-id: <orgId>' \
--header 'x-cap-remote-user: <userId>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ct_token>' \
--data '{
    "key": "<client_key>",
    "secret": "<client_secret>",
    "defaultTillId": <till_id_number>
}'

`metadata/oauth-clients`

```
curl --location 'https://{host}/vulcan/api/v1/metadata/oauth-clients' \
--header 'x-cap-api-auth-org-id: <orgId>' \
--header 'x-cap-remote-user: <userId>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ct_token>' \
--data '{
    "key": "<client_key>",
    "secret": "<client_secret>",
    "defaultTillId": <till_id_number>
}'
```

```
curl --location 'https://{host}/vulcan/api/v1/metadata/oauth-clients' \
--header 'x-cap-api-auth-org-id: <orgId>' \
--header 'x-cap-remote-user: <userId>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ct_token>' \
--data '{
    "key": "<client_key>",
    "secret": "<client_secret>",
    "defaultTillId": <till_id_number>
}'
```

2. After you register the OAuth client, make the necessary API calls, and ensure that thex-cap-api-auth-type: oauthheader is included in the request.

`x-cap-api-auth-type: oauth`

# Compressing a Vulcan API response

To improve the handling of large Vulcan API responses, enable response compression. This involves configuring the API to compress the response data and decompress the data on the client side once received. This reduces response size, improves data transfer speed, and prevents performance issues such as UI slowdowns or server-side timeouts  during response parsing.

To compress an API response, follow these steps:

1. Update the Vulcan SDKto version2.3.1.

`2.3.1`

2. Open the project folder on your local machine, then navigate to the./app/services/api.jsfile.

`./app/services/api.js`

3. At the start of theapi.jsfile, add the following code:JSONreturn httpRequest(url, { ...getVulcanAPICallObject('GET'), useResponseCompression: true });

`api.js`

```
return httpRequest(url, { ...getVulcanAPICallObject('GET'), useResponseCompression: true });
```

```
return httpRequest(url, { ...getVulcanAPICallObject('GET'), useResponseCompression: true });
```

4. .Update the Vulcan SDKto v2.4.0.