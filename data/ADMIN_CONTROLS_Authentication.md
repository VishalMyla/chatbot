# Authentication

Capillary supports three types of authentication:

1. Basic

2. OAuth

3. Authentication for end-customer web and mobile apps

# Basic authentication

In basic authentication, the till ID and password (in MD5 format) are used for authenticating the APIs. For information on creating a till ID and password, seeAdd till.

## Enabling basic authentication

To enable or disable basic authentication, perform the following:

1. Log on to InTouch of your cluster.

Log on to InTouch of your cluster.

2. Navigate to theProfile icon > Organization Settings > Tools > Authentication.

Navigate to theProfile icon > Organization Settings > Tools > Authentication.

![](https://files.readme.io/17c930d-Authentication.png)

1. Click theAPI clienttab.

2. ClickModify.

![](https://files.readme.io/0a1d6d6-orgg.png)

1. Use theEnable Basic Authenticationtoggle switch to enable or disable basic authentication.By default, basic authentication is always enabled.

![](https://files.readme.io/54a5bde-Enable_basic_auth.png)

# OAuth authentication

OAuth (Open Authorization) is a standardized framework that enables secure and controlled access to resources, such as data and services, without requiring the sharing of sensitive credentials, like passwords.

In OAuth, API client key and secret or access token are used for API authentication.

## Creating an API client key and secret

Perform the following:

1. Log on to InTouch of your cluster.

Log on to InTouch of your cluster.

2. Navigate to theProfile icon > Organization Settings > Tools > Authentication.

Navigate to theProfile icon > Organization Settings > Tools > Authentication.

![](https://files.readme.io/17c930d-Authentication.png)

1. Click theAPI clienttab.

2. Click Register.

![](https://files.readme.io/b458f7d-register.png)

1. InClient name, enter a name for the client.

![](https://files.readme.io/f690f6e-Access.png)

1. In theDescription, enter a short description of the client.

2. InToken expiry duration, set the default expiry for the tokens created for the client. By default, the maximum duration of an access token that you can set is configured as 60 minutes. An error message is displayed, if you try to set the token expiry duration for more than 60 minutes. This is for/v3/oauth/token/generateonly. For information on creating an access token, seeGenerating access token.

`/v3/oauth/token/generate`

![](https://files.readme.io/06e18e0-60_min_limit.png)

> 📘If required, you can raise aticketand set the maximum token expiry duration that you can set to 30 days. You can set the duration in minutes, hours or days. An error message is displayed if you try to set the maximum duration for more than 30 days.

## 📘If required, you can raise aticketand set the maximum token expiry duration that you can set to 30 days. You can set the duration in minutes, hours or days. An error message is displayed if you try to set the maximum duration for more than 30 days.

If required, you can raise aticketand set the maximum token expiry duration that you can set to 30 days. You can set the duration in minutes, hours or days. An error message is displayed if you try to set the maximum duration for more than 30 days.

![](https://files.readme.io/40e1b46-Token_30_days.png)

> 🚧For security reasons, Capillary does not recommend setting the token duration for more than 60 minutes.

## 🚧For security reasons, Capillary does not recommend setting the token duration for more than 60 minutes.

For security reasons, Capillary does not recommend setting the token duration for more than 60 minutes.

1. InDefault till code, enter default till code for the API and clickValidate. If a till code is not passed in the API header, the default till is used for API attribution.

2. Select the default till code check box to use this till code for API attribution, If an invalid till is passed in the API header.

3. From theAccess groupdrop-down, select the appropriate access group for your API client. For information on access groups, seeAccess group. This access group restriction is applicable only for the API client and not the till.

![](https://files.readme.io/ac9b19c-Select_access_group.png)

1. ClickNext. The Client key and Client secret are generated for the client.

![](https://files.readme.io/11dd3fd-clie.png)

1. Copy the Client key and client secret and use it for authentication (OAuth).🚧After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client

> 🚧After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client

## 🚧After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client

After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client

2. ClickDoneto close the screen.

3. To create more API client accounts, clickNew API Client.

![](https://files.readme.io/825679d-clienttt.png)

![](https://files.readme.io/916d8e7-demo.png)

> 🚧After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client

## 🚧After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client

After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client

## Creating an access token

You can use the API client key and secret and create an access token for authentication. For information on creating an access token, seeGenerating access token.

Updatedover 1 year ago

- Access group