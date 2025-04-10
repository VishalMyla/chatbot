# Behavioral Events

> 📘NoteBehavioural events ingestion operates asynchronously. When you send data to a Webhook, it acknowledges receipt and queues the data for processing, but does not provide an immediate response. This differs from synchronous APIs. To verify the status of your events after ingestion, use either theGet Events LogAPI or theSearch EventsAPI.

## 📘Note

Note

Behavioural events ingestion operates asynchronously. When you send data to a Webhook, it acknowledges receipt and queues the data for processing, but does not provide an immediate response. This differs from synchronous APIs. To verify the status of your events after ingestion, use either theGet Events LogAPI or theSearch EventsAPI.

## Status Codes

### Success Codes

| Code | Description |

| --- | --- |

| 7300 | Feed added successfully |



### Error Codes

| Code | Description |

| --- | --- |

| 7301 | Unable to add feed. |

| 7302 | Source is not specified. |

| 7303 | Invalid source passed. |

| 7304 | Event is not passed. |

| 7305 | Invalid event passed. |

| 7306 | UUID is not passed. |

| 7307 | Customer ID is not passed. |

| 7308 | Invalid customer ID passed. |

| 7309 | Invalid SKU passed. |

| 7310 | Invalid store code passed. |

| 7311 | Invalid customer details passed.Scan event failed. |

