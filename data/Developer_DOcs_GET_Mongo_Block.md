# GET Mongo Block

Get Mongo block allows you to write a query to read from the MongoDB. It helps you interact with MongoDB directly from the Neo UI, allowing you to fetch data from a MongoDB collection based on a specific query.

# Example Scenario

RequirementAn airline brand allows customers to redeem loyalty points to book flight tickets for their dependants. However, before redeeming points, the dependants must be added as nominees. The system stores nominee details in a separate MongoDB table, with a maximum limit of five nominees per customer. Before adding a new nominee, the system must verify that the total number of nominees is less than five.

Solution

To implement this, create a dataflow that retrieves a customer's nominee information. Use aGetMongoblock to determine the number of existing nominees.

Refer to this exampledataflowto understand how it is configured for a use case. Make sure that you have access to DocDemo org (100737) andaccess to Neo.

# Configuring the Get Mongo Block

To configure the Get Mongo block,

1. From the dataflow canvas, click on the node and select theGET Mongoblock.

2. In theBlock namefield, enter the block name.Note:Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

3. In theCollection Namefield, enter the name of the MongoDB collection you want to query.

4. In theQueryfield, use JavaScript to enter the criteria for fetching data from MongoDB.

5. In theSortfield, specify how to sort the results. You can sort the results in ascending (represented by1) or descending order (represented by-1). To sort, include the field and the sort order in the syntax {field: sorting_order}. If sorting is not required, use{}as the default value.Example usage:{age:1} - Sorts the age field in ascending order{age:-1} - Sorts the age field in descending order

`{}`

6. (Optional) In theLimitfield, specify the limit on the number of data fetched. In theOptionsfield, specify any additional options for the query. These options modify query behavior and how results are returned.Note: For information on available options, refer to theMongoDB documentation on options.

7. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

8. ClickDone.

![Configuring GET Mongo block](https://files.readme.io/06721970dd8545e1983ac2ca6caf1c1a732f0cbdbb5b3225f2c0f163dbdba250-26.02.2025_16.57.38_REC_configuring_get_mongo.gif)

Configuring GET Mongo block

Updated6 days ago