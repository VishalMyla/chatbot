# Retro Transactionpost

Retro transaction means you can convert a not-interested transaction to a loyalty transaction (by tagging a not-interested transaction to the respective customer once registered).

To avail Retro Transaction, you need to enableCONF_RETRO_TRANSACTION_ENABLEon InTouch >Settings>Systems & Deployment>InTouch PoS Configuration>Billing page.

On the Billing page, you will also see a configuration to set the maximum duration allowed convert a not-interested transaction regular.

- CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS

- CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS

Additional Header Required for Retro Transaction

‘X-CAP-CLIENT-SIGNATURE’

To recognize which source has made the retro call, you need to pass the name of the source. It is recommended to use a single name for a source so that it would be easy to track retro transactions of each source.

Example ’“X-CAP-CLIENT-SIGNATURE”:“INTOUCH_BLR”’

# Request URL

https://{host}/v1.1/transaction/update?format={xml/json}

```
https://{host}/v1.1/transaction/update?format={xml/json}
```

# Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| mobile/external_id/email/id* | string | Pass any one of the customer identifiers. |

| new_type* | enum | Specify "REGULAR" to convert to a regular transaction. |

| notes | string | Provide any additional information about the conversion for reference. |

| id* | int | Unique ID of the transaction that you want to convert. |

| old_type* | enum | Earlier type of transaction. Usually, it will be "NOT_INTERESTED". |



Note that parameters marked with an asterisk (*) are mandatory.

```
curl --location 'https://eu.api.capillarytech.com/v1.1/transaction/update' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'X-CAP-CLIENT-SIGNATURE: INTOUCH_BLR' \
--header 'Authorization: Basic bmVlcmFqLmRvYzpiDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=sDY0XTxoNWKvGGj2I7gSCFlk1ElG0Gs6vvl9YVoiAfY-1736158614229-0.0.1.1-604800000' \
--data-raw '{
  "root": {
    "transaction": [{
      "customer": {
        "mobile": "9199860586",
        
        "email": "[email protected]"
      },
      "new_type": "REGULAR",
      "notes": "Retro Transaction",
      "id": "322926035",
      "old_type": "NOT_INTERESTED"
    }]
  }
}'
```

```
curl --location 'https://eu.api.capillarytech.com/v1.1/transaction/update' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'X-CAP-CLIENT-SIGNATURE: INTOUCH_BLR' \
--header 'Authorization: Basic bmVlcmFqLmRvYzpiDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=sDY0XTxoNWKvGGj2I7gSCFlk1ElG0Gs6vvl9YVoiAfY-1736158614229-0.0.1.1-604800000' \
--data-raw '{
  "root": {
    "transaction": [{
      "customer": {
        "mobile": "9199860586",
        
        "email": "[email protected]"
      },
      "new_type": "REGULAR",
      "notes": "Retro Transaction",
      "id": "322926035",
      "old_type": "NOT_INTERESTED"
    }]
  }
}'
```

[[email protected]](/cdn-cgi/l/email-protection)