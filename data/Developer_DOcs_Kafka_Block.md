# Kafka Block

The Kafka block in the Neo application sends events to specific Kafka topics based on your input.

A Kafka topic is a channel or category in Apache Kafka where messages are published and stored. Producers are applications or services that send messages to specific topics, while consumers are applications that read messages from those topics. Each topic has a unique name within a Kafka cluster and can be divided into partitions

The Kafka block is generally configured after the JSON Schema validation block successfully validates the headers or input parameters, and the JavaScript block generates the payload.

# Example Scenario

Requirement

Consider a scenario where post-flight booking details of up to 1,000 requests per minute are sent to the Capillary system every hour. This data is processed to allocate loyalty points to the airline’s loyalty customers. Processing these requests synchronously would introduce latency and degrade system performance.

Solution

To solve this, use the Kafka block in the Neo dataflow to push messages into the Kafka system for asynchronous processing. Later, the system retrieves the messages from Kafka, processes the data, and allocates loyalty points.

Refer to this exampledataflowto understand how it is configured for a use case. Make sure you have access to DocDemo org (100737) andaccess to Neo.

# Configuring Kafka block

To configure the Kafka block,

1. From the dataflow canvas, click on the node and select theKafkablock.

From the dataflow canvas, click on the node and select theKafkablock.

2. In theBlock namefield, enter the block name.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

In theBlock namefield, enter the block name.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

3. In theTopic Namefield, enter the Kafka topic to determine where to send the event.Topic name formats:Draft/Approved Versions:neo_${orgId}${topic}_uatExample:neo_56123_Transaction_uatLive Version:neo_${orgId}_${topic}Example:neo_56123_TransactionKafka creates the topic automatically if it doesn’t exist.

In theTopic Namefield, enter the Kafka topic to determine where to send the event.Topic name formats:

- Draft/Approved Versions:neo_${orgId}${topic}_uatExample:neo_56123_Transaction_uat

`neo_${orgId}${topic}_uat`

`neo_56123_Transaction_uat`

- Live Version:neo_${orgId}_${topic}Example:neo_56123_Transaction

`neo_${orgId}_${topic}`

`neo_56123_Transaction`

Kafka creates the topic automatically if it doesn’t exist.

6. In theMessage Keyfield, enter a user-defined key that identifies each event within a topic and helps partition related events. If the key is defined in earlier blocks, retrieve it using DAO functions. Otherwise, define it using a JavaScript expression or enter a value manually. TheMessage Keymust be a string.

In theMessage Keyfield, enter a user-defined key that identifies each event within a topic and helps partition related events. If the key is defined in earlier blocks, retrieve it using DAO functions. Otherwise, define it using a JavaScript expression or enter a value manually. TheMessage Keymust be a string.

7. In theMessage Valuefield, enter the event’s data or payload.  If the value is defined in earlier blocks, retrieve it using DAO functions. Otherwise, define it using a JavaScript expression or enter a value manually. TheMessage Valuemust be a string.

In theMessage Valuefield, enter the event’s data or payload.  If the value is defined in earlier blocks, retrieve it using DAO functions. Otherwise, define it using a JavaScript expression or enter a value manually. TheMessage Valuemust be a string.

8. (Optional) In theHeadersfield, add the required headers. If any of the headers listed below are included in the incoming request to Neo (for example, when a dataflow is triggered as part of an event and data is sent to Neo), Neo automatically includes them in the Kafka request.x-cap-neo-test-variant-idx-cap-request-idx-cap-api-attribution-entity-typex-cap-api-attribution-entity-codex-cap-api-auth-org-id

(Optional) In theHeadersfield, add the required headers. If any of the headers listed below are included in the incoming request to Neo (for example, when a dataflow is triggered as part of an event and data is sent to Neo), Neo automatically includes them in the Kafka request.

- x-cap-neo-test-variant-id

`x-cap-neo-test-variant-id`

- x-cap-request-id

`x-cap-request-id`

- x-cap-api-attribution-entity-type

`x-cap-api-attribution-entity-type`

- x-cap-api-attribution-entity-code

`x-cap-api-attribution-entity-code`

- x-cap-api-auth-org-id

`x-cap-api-auth-org-id`

Note: For details on headers, refer toHeader Management in Neo.

1. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

2. ClickDone.

![Configuring the Kafka block](https://files.readme.io/60253691b555cc89b2e3e4a85ebf84401f59d3b6784e3839f098ccf99451c0b9-17.02.2025_11.20.25_REC_Configuring_Kafka.gif)

Configuring the Kafka block

Updated3 days ago