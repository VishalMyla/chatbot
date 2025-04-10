# Add/Update Customer Preferencespost

## Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| customer | array-obj | Details of the customer and preferences. |

| mobile | string | Mobile number of the customer. |

| email | string | Email ID of the customer. |

| external_id | string | External ID of the customer. |

| user_id | long | Unique customer ID. |

| store | obj | Details of the store. |

| code | string | Unique store code associated with the customer. |

| id | long | Unique store ID associated with the customer. |

| custom_fields | obj | Update customer custom fields. |

| field | array-obj | Update customer preferences in each name and value. The name and value depends on what's configured for the org. |



`Try It!`