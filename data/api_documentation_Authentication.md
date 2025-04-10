# Authentication

Capillary supports three types of authentication:

1. OAuthThis auth flow is used when the API requests are made from a program or service running on a server. This flow uses an access token to authenticate an API request. You can enable oAuth from InTouch as mentioned in the respective section below.

2. Basic authThis is used where POS terminals are directly integrated with Capillary server. This flow uses Till ID and MD5 hash encoded password to authenticate an API request. Find more details in the section below.

3. Authentication for end-customer web and mobile appsThis is used for end-customer authentication where you want end-customers to login to a mobile or web application built on Capillary CDP.

> 📘It is mandatory to use only store-specific Till/Store Center credentials as API response depends on this identification.

## 📘It is mandatory to use only store-specific Till/Store Center credentials as API response depends on this identification.

It is mandatory to use only store-specific Till/Store Center credentials as API response depends on this identification.

## When to use Basic & OAuth?

| Authentication Type | Description |

| --- | --- |

| Basic | Can be used for POS integrations where API requests come to the Capillary server directly from POS front end or POS store server. |

| oAuth | Shall be used for backend integrations (from one backend to another backend). For example, POS integrations where API requests come to the Capillary server from an API gateway or a central server; FTP integrations where backend service needs to be authenticated; 3rd party integration where API requests come to Capillary from a backend platform. |



## Authentication scenarios and recommended authentication

| Scenario | Description | Authentication |

| --- | --- | --- |

| POS client-to-server integration | POS terminals are directly integrated with Capillary server. API requests come directly from POS terminal to the Capillary Server. | Basic authentication using till username and password |

| POS server-to-server integration | POS servers are directly integrated with Capillary Server.  API requests come directly from POS server to the Capillary Server. | oAuth2 client credentials flow using API key and secret |

| FTP server-to-server integration | Client  systems are configured to  Push files to an FTP and Capillary access the is  and Capillary will access and process files from FTP. (process - Via connect+ or OOB solution). | oAuth2 client credentials flow using API key and secret |

| Server-to-server custom integration | Client server will consume capillary API via. wrapper service. Development and maintenance is subjective to the deal. | oAuth2 client credentials flow using API key and secret |

| Prebuilt server-to-server integrations (Magento, Shopify, SFMC connectors) | In this, client-systems would consume Capillary Plugin to communicate with Capillary. | oAuth2 client credentials flow using API key and secret |

| End customer apps integration | These are third-party apps and consumes Mobile APIs and Gateway APIs to communicate with Capillary. | Mobile APIs auth service,usingusername & password/otp;till username & passwordCustom & non-standard (non oAuth2 or OIDC) authorization* No social login options supported |

| End-customer IAM (CIAM) in Partner Apps | Enable clients of Capillary’s direct customers to be able to access data in the Capillary Platform. Allow users to use the Customer’s login credentials to provide access to the 3rd Party clients to access data on behalf of the customer. | OAuth 2.0 Authorization Code Flow and SSO |

