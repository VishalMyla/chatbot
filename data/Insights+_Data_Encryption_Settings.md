# Data Encryption Settings

# Data encryption settings for export

> 📘NoteBy default, this feature is not enabled for all the orgs. To enable, contact your CSM.

## 📘Note

Note

By default, this feature is not enabled for all the orgs. To enable, contact your CSM.

If necessary, you can encrypt your export data to safeguard sensitive information. The export data is encrypted using a process that involves public-private key encryption. Users configure public keys for encryption within the Insights platform. These public keys are then used to encrypt the export data. When setting up an export, users have the option to choose the security type for encryption. They can select encryption and specify the public key to be used for encrypting the data. Once the export configuration is finalized and initiated, the export framework extracts the data and encrypts it using the selected public key. Only authorized parties with access to the corresponding private key can decrypt and access the original data.

To set the public keys, perform the following:

1. Navigate toSettings > Public keys > Add new public key.

Navigate toSettings > Public keys > Add new public key.

![](https://files.readme.io/d7d4c06-Add_new_public_key.png)

2. Enter the following:Key name: Enter a name for the key. A "key name" is a unique identifier to provide some indication of its purpose or origin. It helps users easily identify and manage different public keys within a system.Public username: Enter a unique username. A "public user name" for a key is a designation associated with the owner or entity to whom the public key belongs. It serves as a reference point for identifying the user or entity associated with the key, helping to organize and manage keys effectively, especially in scenarios where multiple users or entities may have their own keysPublic key: The public key can be generated using any PGP key generator.

Enter the following:

1. Key name: Enter a name for the key. A "key name" is a unique identifier to provide some indication of its purpose or origin. It helps users easily identify and manage different public keys within a system.

2. Public username: Enter a unique username. A "public user name" for a key is a designation associated with the owner or entity to whom the public key belongs. It serves as a reference point for identifying the user or entity associated with the key, helping to organize and manage keys effectively, especially in scenarios where multiple users or entities may have their own keys

3. Public key: The public key can be generated using any PGP key generator.

6. ClickDone. A maximum of five keys can be added.

ClickDone. A maximum of five keys can be added.

![](https://files.readme.io/9c7ffa4-Add_key.png)

> 📘NoteYou can only edit a key and cannot delete a key.

## 📘Note

Note

You can only edit a key and cannot delete a key.

# Editing a key

You can edit a public key. To edit, navigate to the list of public keys >  select edit option > make the necessary changes and clickDone.

Note:Editing a key will impact all the future exports of files encrypted using this public key.

![](https://files.readme.io/56476ad-Edit_key.png)

Updated3 months ago