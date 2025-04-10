# Redis Evict Block

The Redis Evict block removes old or unused data from the cache to free up memory and ensure that old data is not retrieved. It is useful when cached data becomes outdated due to updates or changes in the underlying data source and helps free up memory.

To remove data from the Redis cache, identify the cache key storing the data. Then, configure the Redis Evict block by specifying this key to target the correct data. Finally, execute the Redis Evict block to remove the data from the cache, to ensure future requests fetch the latest information.

# Configuring the RedisEvict block

To configure the RedisEvict block,

1. From the dataflow canvas, click on the node and select theRedisEvictblock.

2. In theBlock namefield, enter the block name.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

3. In theKeysfield, click+Add fieldto enter the key name. The key is the name specified in theKeyfield during caching.

4. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

5. ClickDone.

![Configuring the Redis Evict block](https://files.readme.io/85c21a47e92d068d10ba289fd3732d69627b17e8be47fa22f30b5daaff63d49a-17.02.2025_10.47.06_REC_Configuring_Redis.gif)

Configuring the Redis Evict block

Updated13 days ago