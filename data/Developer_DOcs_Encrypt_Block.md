# Encrypt Block

The Encrypt block encrypts data using hash algorithms during the dataflow execution. It creates a unique, fixed-length value (hash) from input data. The hash algorithms supported are SHA256, SHA1, SHA512, MD5, MD5-SHA1, AES128, AES-256-CBC, AES256, and RSA.

# Example scenario

Requirement

A gas company offers a mobile application that allows customers to find the nearest gas station, check available facilities, view fueling details, track transactions, and access receipts. The company's loyalty program is managed by Capillary.

For secure transaction processing, all transactions between Capillary and the gas company must go through a financial services provider. Before any transaction can occur, an account must be created with the provider.

To ensure data security, Capillary must encrypt customer details before transmitting them securely to the financial services provider.

Solution

To encode customer details, create a dataflow with theEncryptblock. This block generates a hash-encoded data format, which the system uses to create an account with the financial services provider.

Refer to this exampledataflowto understand how it is configured for a use case. Make sure you have access to DocDemo org (100737) andaccess to Neo.

# Configuring the Encrypt Block

To configure the Encrypt block,

1. From the dataflow canvas, click on the node and select theEncryptblock.

2. In theBlock Name, enter the name of the block.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

3. In theHash Algorithm,choose the hash algorithm to compute the HMAC. Supported values are SHA256, SHA1, SHA512, MD5, MD5-SHA1, AES128, AES-256-CBC, AES-256, and RSA.

4. In thePayloadfield, enter the content to be encoded.

5. In thePassword/Public Keyfor encryption field, enter the password or the public key.This field is required when using the RSA or AES hash algorithm.If you select RSA, provide the public key.If you choose AES, provide the password as the encryption key.For additional details, refer toPasswords and Keys in Encryption.

- If you select RSA, provide the public key.

- If you choose AES, provide the password as the encryption key.For additional details, refer toPasswords and Keys in Encryption.

8. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

9. ClickDone.

![Configuring Encrypt block](https://files.readme.io/1636fc155f3ba78f8897ccf910f234a99e370be42c56d4c3bd3c24c93ca3986e-24.03.2025_19.35.40_REC_encrypt_withpassword.gif)

Configuring Encrypt block

# Passwords and Keys in Encryption

ThePassword/Public Keyfield in the Encrypt block provides encryption credentials based on the selected encryption method—RSA or AES.

`Password/Public Key`

## RSA Encryption

- The field stores the public key, which encrypts the data.

- RSA uses a key pair: a public key for encryption and a private key for decryption.

- Only the recipient with the private key can decrypt the data.

- Key pairs can be generated using external tools likeKey Generator.

- For security, store the public and private keys in aConfiguration Managerinstead of hardcoding them.

## AES Encryption

- The field contains the password, used for encryption and decryption.

- Unlike RSA, AES is a symmetric algorithm that uses the same key for both encryption and decryption.

- You can create a password using aPassword Generator.

- The provided password encrypts the payload.

- For security, store the password in aConfiguration Managerinstead of hardcoding it.

Updated6 days ago