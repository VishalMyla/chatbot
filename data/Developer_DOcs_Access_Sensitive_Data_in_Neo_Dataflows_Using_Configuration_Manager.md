# Access Sensitive Data in Neo Dataflows Using Configuration Manager

You can store the organization-specific configurations and sensitive data, such as API keys, passwords, in theConfiguration Managerand use it in the Neo dataflow. This prevents hardcoding sensitive data in the dataflow.

In a Neo dataflow, you can use Data Access Objects (DAOs) to retrieve these stored values dynamically. The two DAO functions for this purpose are:

- getValueByKey('config name')– Retrieves a configuration value stored in the Configuration Manager.Example:const KeyLoyaltyId = getValueByKey('KeyLoyaltyId');

`getValueByKey('config name')`

```
const KeyLoyaltyId = getValueByKey('KeyLoyaltyId');
```

- getParentValueByKey('config name')– Retrieves a configuration stored at the parent organization level from a child organization.Example:const parentConfig = getParentValueByKey('ParentKey');

`getParentValueByKey('config name')`

```
const parentConfig = getParentValueByKey('ParentKey');
```

You can use the DAO functions in the block fields to retrieve data from the Configuration Manager. The retrieved data can be used within the same block or passed to other blocks in the dataflow.

The following code snippet from the Script field of a Script block demonstrates how to access and use configurations from the Configuration Manager in a Neo dataflow.

```
const script = {

    execute: async () => {
        const loyaltyID = getApiRequest().queryParams.loyaltyID;
        const timestamp = Date.now();
        const uniqueKey = loyaltyID + "|" + timestamp;
        const KeyLoyaltyId = await getValueByKey('KeyLoyaltyId');
        return {
            uniqueKey: uniqueKey,
            KeyLoyaltyId: KeyLoyaltyId,
        };
    }
}

export {
    script as default
}
```

```
const script = {

    execute: async () => {
        const loyaltyID = getApiRequest().queryParams.loyaltyID;
        const timestamp = Date.now();
        const uniqueKey = loyaltyID + "|" + timestamp;
        const KeyLoyaltyId = await getValueByKey('KeyLoyaltyId');
        return {
            uniqueKey: uniqueKey,
            KeyLoyaltyId: KeyLoyaltyId,
        };
    }
}

export {
    script as default
}
```

Updated13 days ago