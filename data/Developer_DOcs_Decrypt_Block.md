# Decrypt Block

The decrypt block converts the data encrypted using the RSA and AES algorithms back to its original form. The block retrieves the encrypted data from the input and fetches the required key or password to unlock it. Based on its settings, it identifies the appropriate decryption method, as AES or RSA. Using the key and the selected decryption method, it converts the encrypted data back into its readable form.

# Example Scenario

Requirement

A mobile app displays a digital card as a QR code in the customer’s profile. Customers must present this QR code at the store during billing to apply offers and earn loyalty points. However, a static QR code increases the risk of fraudulent activities. To prevent this, the app generates a QR code dynamically upon request. The mobile backend creates an encrypted key using a digital number and timestamp, which the mobile app then converts into a QR code for display.

However, to update loyalty points after a transaction, the system must retrieve the digital number by decrypting the QR code.

Solution

To resolve this issue, create adataflowwith a decrypt block to retrieve the encrypted digital number. Once decrypted, the system can use the digital number to update the loyalty points.

To view the dataflow, make sure you have access to DocDemo org (100737) andaccess to Neo.

# Configuring the Decrypt Block

To configure the Decrypt block:

1. From the dataflow canvas, click the connector.

2. Select the Decrypt block from the pop-up window.

3. In theBlock Namefield, enter a name for the block.Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

4. In theDecrypt Algorithmfield, enter the algorithm used to decrypt the payload.

5. In thePayloadfield, enter the content to be decoded.

6. In thePasswordfield, enter the password or key shared during encryption.

7. Configure theinput execution logic,cachable feature, andexecution pathas needed.

8. ClickDoneto save the configuration.

![Configuring the Decrypt block](https://files.readme.io/10ee2da0bc3272269f28e276120d3c1803f7d1d9502d5d3330fff41992fae529-24.03.2025_20.08.44_REC_Configuring_decrypt_block.gif)

Configuring the Decrypt block

Updated6 days ago