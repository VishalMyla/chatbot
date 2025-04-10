# HMAC Block

The HMAC block generates a cryptographic hash of a message (payload) using a secret key and a specified hash algorithm. The hash algorithms supported are SHA256, SHA1, SHA512, MD5, and MD5-SHA1.

HMAC is highly secure because it uses a secret key with a hashing algorithm, whereas standard hashing algorithms generate only a hash of the input data.

How the HMAC block works

The payload is first hashed using a hashing algorithm and then encoded in Base64. Base64 encoding converts binary data into a text format using a set of 64 characters.

Next, a message string is created by combining the API Key, timestamp, and hashed payload, with each part separated by a colon (:). The API Key and payload are taken from the request body, while the timestamp is generated during the dataflow execution.

Finally, the hashing algorithm is applied to this message using the Secret Key, which is retrieved from configuration management during dataflow execution. This process generates an HMAC, which is then encoded in Base64.

# Example scenario

Requirement

A gas company provides a mobile application that allows customers to locate nearby gas stations, check available facilities, view fueling details, track transactions, and access receipts. Capillary manages the company’s loyalty program.

For secure transaction processing, all transactions between Capillary and the gas company must be routed through a financial services provider. Accessing the provider’s APIs requires HMAC authentication, which Capillary must generate using the SHA-256 hash algorithm.

Solution

To overcome this issue, create a dataflow with an HMAC block that generates an HMAC.

Refer to this exampledataflowto understand how it is configured for a use case. Make sure you have access to DocDemo org (100737) andaccess to Neo.

# Configuring the HMAC Block

To configure the HMAC block,

1. From the dataflow canvas, click on the node and select theHmacblock.

2. In theBlock Name, enter the name of the block.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

3. In theHash Algorithm,choose the hash algorithm to compute the HMAC. The supported values are SHA256, SHA1, SHA512, MD5, MD5-SHA1

4. In theSecret Key,enter the client secret key retrieved in the previous blocks using the DAO functiongetValueByKey.

`getValueByKey`

5. In theBody,retrieved thebodyfrom the previous blocks using the DAO functiongetBody.

`body`

`getBody`

6. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

7. ClickDone.

![Configuring the HMAC block](https://files.readme.io/e255c0355c9f7652066030f248a608c1f32e01cff6d7b6a6358985a1fb94f7c3-18.02.2025_11.18.19_REC_Configuring_hmac.gif)

Configuring the HMAC block

Updated3 days ago