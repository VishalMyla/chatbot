# PUT Mongo Block

The Put block lets you perform data operations such as INSERT, UPDATE, or UPSERT directly to the database based on a specified query and query key. This block is essential for modifying or adding new data entries within MongoDB during dataflow execution in Neo UI.

# Example Scenario

Requirement

An airline brand allows customers to redeem loyalty points to book flight tickets for their dependants. However, before redeeming points, the dependants must be added as nominees. The system stores nominee details in a separate MongoDB table, with a maximum limit of five nominees per customer. The system must allow customers to add nominees while ensuring the limit is not exceeded.

Solution

To add nominees, create a dataflow that inserts information into the MongoDB table. Use aPutMongoblock.

Refer to this exampledataflowto understand how it is configured for the given use case. Make sure that you have access to DocDemo org (100737) andaccess to Neo.

In this dataflow, theGET Mongoblock initially fetches the available nominees. Subsequently, thePUT Mongoblock is utilized to update the nominee. If the number of nominees is fewer than the maximum limit of five, the system permits the addition of a nominee.

# Configuring the Put Mongo Block

To configure the Put Mongo block,

1. From the dataflow canvas, click on the node and select thePUT Mongoblock.

2. In theBlock namefield, enter the block name.Note:Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

3. In theCollection Namefield, enter the name of the MongoDB collection you want to query.

4. In theModefield, choose the mode. The available modes are Insert, Update, and Upsert.

5. In theQueryfield, enter the data you want to inject into MongoDB using JavaScript.

6. (Optional) In theQuery Keyfield, specify the key used to perform the update. The key identifies the specific record in the database that needs to be updated.

7. (Optional) In theOptionsfield, specify any additional options for the query. These options modify query behavior and how results are returned.Note: For information on available options, refer to theMongoDB documentation on options.

8. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

9. ClickDone.

![Configuring the Put Mongo block](https://files.readme.io/45fa9390ba92b582424645f3f644b94cc6249ed0a260e54d0dfc74ab63e46acc-17.02.2025_10.42.29_REC_Configuring_PUT_Mongo.gif)

Configuring the Put Mongo block

Updated6 days ago