# Basic authentication

In basic authentication, the till ID and password (in MD5 format) are used for authenticating the APIs. To authenticate using Basic Auth, you can use any of the following methods:

- Pass the credentials in the authorization header

- Use till ID and password for authentication

# Prerequisite

- Till credentials. For information on creating till credentials, seeAdd TILL.

- Basic authentication should be enabled. For information on enabling basic authentication, seeEnable basic authentication.

# Using authorization header

For using basic authentication by passing the values in the authorization header, construct the authorization header as mentioned in the below format:

Basic <Base64 encoded (username:md5(password))>

```
Basic <Base64 encoded (username:md5(password))>
```

![](https://files.readme.io/edb2a2f-image.png)

Follow the steps below:

1. Calculate the MD5 hash of the password

2. Concatenate the username and the MD5 hashed password with a colon in between.

3. Encode the concatenated string in Base64.

For example, if the username isstore123and the password is Pass123,

`store123`

- MD5 hash of the password Pass123 - bdc87b9c894da5168059e00ebffb9077

- Concatenate the username and the MD5 hashed password with a colon in between - store123:bdc87b9c894da5168059e00ebffb9077

- Base64 value of the concatenated string - c3RvcmUxMjM6YmRjODdiOWM4OTRkYTUxNjgwNTllMDBlYmZmYjkwNzc=

Final value:Basic c3RvcmUxMjM6YmRjODdiOWM4OTRkYTUxNjgwNTllMDBlYmZmYjkwNzc=

```
Basic c3RvcmUxMjM6YmRjODdiOWM4OTRkYTUxNjgwNTllMDBlYmZmYjkwNzc=
```

# Using till ID and password

You can use your till ID as your username and theMD5 encryptionof the password.

For example, if the username is store.server and password is 123, enterstore.serverin the username field and enter202cb962ac59075b964b07152d234b70in the password field.

`store.server`

`202cb962ac59075b964b07152d234b70`

# Headers required for basic authentication

- Content-Type - This should be set as application/JSON.

- Accept - This should also be set as application/JSON.

# Submitting requests on behalf of other tills

V2 API supports submitting requests on behalf of other tills (active tills). In the database, the combination of attribution_lookup and lookup_code are mapped to till ids and org ids. When a new POST request is placed with the combination of a lookup name and lookup code, the data will be inserted in the database on behalf of the till that is mapped to the specified combination.

To enable this functionality, add the following code snippet into your request HEADER:

X-CAP-API-ATTRIBUTION-LOOKUP-TYPE:<name> X-CAP-API-ATTRIBUTION-LOOKUP:<value>

```
X-CAP-API-ATTRIBUTION-LOOKUP-TYPE:<name> X-CAP-API-ATTRIBUTION-LOOKUP:<value>
```

NOTE:valuetag is case sensitive.

`value`