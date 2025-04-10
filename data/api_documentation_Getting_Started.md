# Getting Started

Capillary APIs are structured following the REST model. Our APIs use HTTPS protocol and support requests and responses in JSON format.

# HTTP methods

The HTTP methods used in Capillary APIs are as follows:

| Command | Description |

| --- | --- |

| POST | To create a new resource. |

| PUT | To update an existing resource. |

| GET | To retrieve a resource. |

| DELETE | To delete a resource. |

| PATCH | To partially update an existing resource. |



# Know about API URL structure, host URL and headers

## API URL structure

The below image displays Capillary API structure with an example:

![](https://files.readme.io/c951292-API_URL_structure.jpeg)

The resource ID is a combination of theEntityand the action you tell the API to perform. In this case, adding acustomeris the entity andaddis the action. For more information on entities, seeEntities management.

`customer`

## Host URLs

A host is a server to which the API calls are made, usually the API cluster URL.

The host URLs are the same for both v1.1, v2, and v3 APIs. However, the v1 APIs mentioned in the documentation have different URLs for each entity. You can see those URLs under the respective section.

| Cluster | Host URL |

| --- | --- |

| Asia 1 | https://apac.api.capillarytech.com |

| Asia 2 | https://apac2.api.capillarytech.com |

| Europe | https://eu.api.capillarytech.com |

| US | https://us.api.capillarytech.com |

| China | https://cdn-api.capillarytech.cn.com[or]https://api.capillarytech.cn.com |



[https://apac.api.capillarytech.com](https://apac.api.capillarytech.com)

[https://apac2.api.capillarytech.com](https://apac2.api.capillarytech.com)

[https://eu.api.capillarytech.com](https://eu.api.capillarytech.com)

[https://us.api.capillarytech.com](https://us.api.capillarytech.com)

[https://cdn-api.capillarytech.cn.com](https://cdn-api.capillarytech.cn.com)

[https://api.capillarytech.cn.com](https://api.capillarytech.cn.com)

## Request Headers

| Header | Description | Value |

| --- | --- | --- |

| Accept | Request format from the server side | application/jsonfor JSON formatapplication/xmlfor XML format |

| Content-Type | Representation of data at the client side. | application/jsonfor JSON formatapplication/xmlfor XML format |

| User-Agent | A characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent. | Format{product} / {product-version} {comment}Example:User-Agent: Mozilla/{version} ({system-information}) {platform} ({platform-details}) {extensions} |

| CAP-API-ACCESS-TOKEN | Unique access token generated with the Key and Secret combination. Applicable for OAuth based authentication. | Generated token value. |

| X-CAP-API-ATTRIBUTION-ENTITY-TYPE | Till or store from which you want to post the data. This is applicable for the OAuth authentication only. | TILL, STORE_CODE, STORE_NAME, STORE_EXTERNAL_ID, STORE_EXTERNAL_ID_1, STORE_EXTERNAL_ID_2.The default value isTILL. |

| X-CAP-API-ATTRIBUTION-ENTITY-CODE | Value of the specified entity type. | Example: IfX-CAP-API-ATTRIBUTION-ENTITY-TYPEisSTORE_CODE, thenX-CAP-API-ATTRIBUTION-ENTITY-CODEis the store code that you want to tag to POST data.By default, it considers the Till associated with the client key and secret. |

| X-CAP-API-ATTRIBUTION-LOOKUP-TYPE:{name}X-CAP-API-ATTRIBUTION-LOOKUP:{value} | Supported only for v2 APIs:Lets you submit requests on behalf of other TILLs (active TILLs) instead of the authenticating till. In db, the combination of attribution_lookup and lookup_code are mapped to TILL ids and org ids. When a new POST request is placed with the combination of a lookup name and lookup code, the data will be inserted in the db on behalf of the TILL that is mapped to the specified combination.NOTE:It is recommended to use OAuth authentication. | Accepted values are WECHAT and MOBILE_TRIGGER. |



`application/json`

`application/xml`

`application/json`

`application/xml`

`{product} / {product-version} {comment}`

```
User-Agent: Mozilla/{version} ({system-information}) {platform} ({platform-details}) {extensions}
```

```
TILL, STORE_CODE, STORE_NAME, STORE_EXTERNAL_ID, STORE_EXTERNAL_ID_1, STORE_EXTERNAL_ID_2.
```

`TILL`

`X-CAP-API-ATTRIBUTION-ENTITY-TYPE`

`STORE_CODE`

`X-CAP-API-ATTRIBUTION-ENTITY-CODE`

# API version

Capillary's APIs are divided into four versions:

- v1

- v1.1

- v2

- v3

These versions are not merely upgrades; they are a combination of:

- new sets of APIs that receive new version numbers, and

- upgraded versions of existing APIs.

The v1 APIs support both JSON and XML. The V2 and V3 APIs are developed in JSON.

## Additional features of v2 and v3 APIs

The list below highlights the additional features that v2 and v3 APIs support compared to v1 and v1.1 APIs:

- Provide extended support for multiple sources, i.e., you can now manage accounts of different sources such as InStore, MartJack, WeChat, e-commerce and Facebook.

Provide extended support for multiple sources, i.e., you can now manage accounts of different sources such as InStore, MartJack, WeChat, e-commerce and Facebook.

- Support multiple accounts of a single source. For example, an org could have multiple accounts on WeChat and Facebook. Each account will have a different account ID. You would need to pass the respective account ID when making API calls.

Support multiple accounts of a single source. For example, an org could have multiple accounts on WeChat and Facebook. Each account will have a different account ID. You would need to pass the respective account ID when making API calls.

- Merge accounts automatically when the same identifier is registered in different sources. For example, assume that a customer has registered on InStore using his mobile number and e-commerce site using his email ID. Now, if the customer registers the same mobile number on the e-commerce site, the accounts will be merged automatically to a single customer ID. You can retrieve the customer details from various sources of an organization using the unique customer ID.

Merge accounts automatically when the same identifier is registered in different sources. For example, assume that a customer has registered on InStore using his mobile number and e-commerce site using his email ID. Now, if the customer registers the same mobile number on the e-commerce site, the accounts will be merged automatically to a single customer ID. You can retrieve the customer details from various sources of an organization using the unique customer ID.

NOTE:By default, all the API versions are enabled for the organisations across clusters.

# Tracking Request

A unique ID is generated for every request made using Capillary APIs and is sent to the requester in the Response Headers asX-Cap-Requestid. You can use this request id to track the request end-to-end. <aside class=“notice” It is recommended to note theX-Cap-Requestidof a request for future requirements.

`X-Cap-Requestid`

`X-Cap-Requestid`

![](https://files.readme.io/c191be1-Tracking_ID.png)

When an API call is made with 4 batch transactions, A response header is generated with theX-Cap-Requestidas shown below. This ID can be used to track the details of the entire API call (both request and response).

`X-Cap-Requestid`

```
{
  "Date": "Wed, 16 Dec 2015 06:05:13 GMT",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "must-revalidate,no-cache,no-store",
  "X-Cap-Requestid": "5670FF17B7D58",
  "Server": "CapWS",
  "Content-Encoding": "gzip",
  "X-Cache": "MISS from localhost",
  "Transfer-Encoding": "chunked",
  "Connection": "keep-alive"
}
```

```
{
  "Date": "Wed, 16 Dec 2015 06:05:13 GMT",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "must-revalidate,no-cache,no-store",
  "X-Cap-Requestid": "5670FF17B7D58",
  "Server": "CapWS",
  "Content-Encoding": "gzip",
  "X-Cache": "MISS from localhost",
  "Transfer-Encoding": "chunked",
  "Connection": "keep-alive"
}
```

# Organization setup

An organization associated with Capillary is registered inIntouch. Based on the organization’s architecture, store TILL or Store Center accounts are created besides zones, concepts, and stores. Only Capillary users have access to register an organization in inTouch. For more information, contact your Account Manager or Delivery Manager of Capillary.

To set up an organization as a Capillary admin, seeSetting up Organization.