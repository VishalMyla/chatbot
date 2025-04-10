# Retrieve Blocks Supported by the Templateget

The API retrieves the blocks supported by the Connect+ DIY template. You use these blocks to create a DIY template that meets your requirements. When using a block in the Create DIY template API, you cannot change its name.

# API endpoint example

https://incrm.connectplus.capillarytech.com/api/diyprocessors

# Prerequisites

- Authentication: Access to Connect+

- Keep the Connect+ UI open

# Response parameters

| Field Name | Data Type | Description |

| --- | --- | --- |

| name | String | Block name is specified here. You use this name in theblockTypeparameter when you send a POST request to theCreate DIY templateAPI. |

| description | String | Description of the block's function. |

| source | Boolean | Indicates whether the block functions as a data source. The source block is the first block in the template and specifies the location of the source file.Values:true- It is a source,false- It is not a source. |



`blockType`

[Create DIY template](/reference/post-create-api-diy-template-connectplus)

`true`

`false`

```
[
    {
        "name": "intouch_transaction_v2",
        "description": "OAuth based Intouch Transaction Add V2",
        "source": false
    },
    {
        "name": "sftp_pull",
        "description": "Poll SFTP server, downloads file with satisfying regex, check constrain and move file",
        "source": true
    },
    {
        "name": "s3_pull",
        "description": "Poll S3 bucket, downloads file in the path and moves file",
        "source": true
    },
    {
        "name": "optional_decrypt_content",
        "description": "Decryption block",
        "source": false
    },
    {
        "name": "optional_encrypt_content",
        "description": "Encryption block",
        "source": false
    },
    {
        "name": "ok_file",
        "description": "Ok File",
        "source": false
    },
    {
        "name": "retro_destination",
        "description": "OAuth based Intouch Transaction Add V2 Retro",
        "source": false
    },
    {
        "name": "neo_transformer",
        "description": "Neo Transformer",
        "source": false
    },
    {
        "name": "kafka_connect_to_source",
        "description": "Kafka pull connect to source",
        "source": true
    },
    {
        "name": "csv_json_neo_transformer",
        "description": "CSV to JSON transformer for DIY",
        "source": false
    }
]
```

```
[
    {
        "name": "intouch_transaction_v2",
        "description": "OAuth based Intouch Transaction Add V2",
        "source": false
    },
    {
        "name": "sftp_pull",
        "description": "Poll SFTP server, downloads file with satisfying regex, check constrain and move file",
        "source": true
    },
    {
        "name": "s3_pull",
        "description": "Poll S3 bucket, downloads file in the path and moves file",
        "source": true
    },
    {
        "name": "optional_decrypt_content",
        "description": "Decryption block",
        "source": false
    },
    {
        "name": "optional_encrypt_content",
        "description": "Encryption block",
        "source": false
    },
    {
        "name": "ok_file",
        "description": "Ok File",
        "source": false
    },
    {
        "name": "retro_destination",
        "description": "OAuth based Intouch Transaction Add V2 Retro",
        "source": false
    },
    {
        "name": "neo_transformer",
        "description": "Neo Transformer",
        "source": false
    },
    {
        "name": "kafka_connect_to_source",
        "description": "Kafka pull connect to source",
        "source": true
    },
    {
        "name": "csv_json_neo_transformer",
        "description": "CSV to JSON transformer for DIY",
        "source": false
    }
]
```

`Try It!`