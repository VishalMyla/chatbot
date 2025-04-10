# Bulk Upsert Mongo Block

The Bulk Upsert Mongo block enables bulk upsert operations in MongoDB. Upsert is a database operation that combines update and insert actions, allowing new data to be inserted while updating existing records in bulk. Use this block when handling more than ten queries simultaneously.

# Example Scenario

Requirement

A retail company tracks customers who achieve a specific target within a given timeframe. These customers qualify for rewards as part of the company's loyalty management program, which Capillary handles. The data is exported from the company's database as a CSV file and sent to the Capillary system. If a record exists, Capillary must update the record available in the Capillary database; otherwise, the system should create a new record.

Solution

To insert and update a large amount of data in MongoDB, create a dataflow using the Bulk Upsert Mongo block. This block updates existing data and inserts new data if it is missing in the specified collection.

Refer to this exampledataflowto understand how it is configured for a use case.Make sure you have access to DocDemo org (100737) andaccess to Neo.

# Configuring the Bulk Upsert Mongo Block

To configure the Bulk Upsert Mongo block,

1. From the dataflow canvas, click on the node and select theBulk Upsert Mongoblock.

2. In theBlock Name, enter the name of the block.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

3. In theCollection Namefield, enter the collection name to be updated.

4. In theModefield, choose the mode of the update asbulkupsert.

`bulkupsert`

5. In theQueryfield, enter the data to ingest into MongoDB.

> 📘NoteBoth a filter and a query are mandatory in each object.Each object contains:Selection filter – Finds specific records in the database.Query – Defines how the record should be updated.DAO methods interact with the database and execute queries.Expression handling enables dynamic query generation, allowing logic or conditions to modify queries before execution.If the filter or query is missing, the operation fails due to an invalid input query.Below is the code from the Script blockCode in the Script blockconst requestBodyArray = getApiRequest().body;
> 
>         const bulkOps = [];
> 
>         for (const record of requestBodyArray) {
>             const { userGroupId, targetGroupId, targetRuleId, progressSumAmt, progressAvgAmt } = record;
> 
>             // Create the filter using the composite primary key
>             const filter = {
>                 userGroupId,
>                 targetGroupId,
>                 targetRuleId
>             };
> 
>             const upsertData = {
>                 filter: JSON.stringify(filter),
>                 query: JSON.stringify({ $set: { progressSumAmt, progressAvgAmt } }),
>                 upsert: true
>             };
>             bulkOps.push(upsertData);
>         }
> 
> 
>         return {
>             data: bulkOps
>         };

## 📘Note

Note

- Both a filter and a query are mandatory in each object.

- Each object contains:Selection filter – Finds specific records in the database.Query – Defines how the record should be updated.

- Selection filter – Finds specific records in the database.

- Query – Defines how the record should be updated.

- DAO methods interact with the database and execute queries.

- Expression handling enables dynamic query generation, allowing logic or conditions to modify queries before execution.

- If the filter or query is missing, the operation fails due to an invalid input query.Below is the code from the Script block

```
const requestBodyArray = getApiRequest().body;

        const bulkOps = [];

        for (const record of requestBodyArray) {
            const { userGroupId, targetGroupId, targetRuleId, progressSumAmt, progressAvgAmt } = record;

            // Create the filter using the composite primary key
            const filter = {
                userGroupId,
                targetGroupId,
                targetRuleId
            };

            const upsertData = {
                filter: JSON.stringify(filter),
                query: JSON.stringify({ $set: { progressSumAmt, progressAvgAmt } }),
                upsert: true
            };
            bulkOps.push(upsertData);
        }


        return {
            data: bulkOps
        };
```

```
const requestBodyArray = getApiRequest().body;

        const bulkOps = [];

        for (const record of requestBodyArray) {
            const { userGroupId, targetGroupId, targetRuleId, progressSumAmt, progressAvgAmt } = record;

            // Create the filter using the composite primary key
            const filter = {
                userGroupId,
                targetGroupId,
                targetRuleId
            };

            const upsertData = {
                filter: JSON.stringify(filter),
                query: JSON.stringify({ $set: { progressSumAmt, progressAvgAmt } }),
                upsert: true
            };
            bulkOps.push(upsertData);
        }


        return {
            data: bulkOps
        };
```

1. (Optional) In theOptionsfield, specify any additional options for the query. These options modify query behavior and how results are returned.Note: Refer toMongoDB documentation on optionsfor information onOptions.

2. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

3. ClickDone.

![Configuring the Bulk Upsert Mongo block](https://files.readme.io/0c39889ef39e83f5086261b9a4cbcf4b66a2c0e4816725b7aa369c0bbccfacf6-21.02.2025_12.22.32_REC_configuring_bulk_mongo.gif)

Configuring the Bulk Upsert Mongo block

Updated6 days ago