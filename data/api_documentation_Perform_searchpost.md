# Perform searchpost

The Entity Search API allows you to search for specific entities (such as customers or transactions) based on defined search criteria.

> 🚧NotesMake sure that you have access toEntitySearchresource. For more information, seeaccess group documentation.By default, this search (cortex search) is not enbabled for all the orgs. Raise a Jira ticket to the sustenance team to activate.Make sure that a valid search criteria is available.Deleted customers are not included in the search results.

## 🚧Notes

Notes

- Make sure that you have access toEntitySearchresource. For more information, seeaccess group documentation.

`EntitySearch`

- By default, this search (cortex search) is not enbabled for all the orgs. Raise a Jira ticket to the sustenance team to activate.

- Make sure that a valid search criteria is available.

- Deleted customers are not included in the search results.

# API endpoint

{host}//v2/search/entity

`{host}//v2/search/entity`

# Body parameters

| Parameter | Type | Description | Required |

| --- | --- | --- | --- |

| entityType | String | The type of entity to search. Supported values: TRANSACTION, CUSTOMER. | Yes |

| limit | Integer | The default value is often set to 10. The maximum value supported is 20. The search result is listed as per the customer registration date. The newly added customer is listed first. | No |

| offset | Integer | The starting point for the pagination. The default value for offset is 0, meaning the pagination starts from the first record. Any non-negative integer, representing the starting point for the pagination, is supported. | No |

| searchConditions | Array | List of conditions to filter the search results. | Yes |

| fieldId | String | The field name to search. eg: ,billNumber, deliveryStatus etc. For search using prefix (Customer OR crteria), use field ID assearch_prefix. | Yes |

| operator | Enum | The comparison operator. Supported values EQUALS, STARTS_WITH, and RANGE (for date or date time fields). You cannot apply RANGE on multiple fields. | Optional |

| values | Array | Values to search against the field name (fieldId). For billDate, the date should be provided in epoch format. | Yes |

| enrichmentFields | Object | Specifies additional data fields to be retrieved in the response. | Yes |

| enrichedFields | Array | Additional enriched fields to be included in the search result. For example, if you want to include customer status in your response when searching for customer data, you can add customerStatus in the enrichedFields.Supported FieldsCustomer Entity:- customerStatus- statusLabel- registeredDate- loyaltyStatus- registeredStoreCode- registeredStoreName- cardNumber- cardSeriesName- lastUpdatedOnTransaction Entity:- payment_mode- outlier_status- transaction_notes- last_updated_on_date_timeIf not required, you can leave this field empty. When enrichedFields are provided as an empty list, no enrichment will be applied for any field in the response. This can be useful when certain fields are not required for a specific query. | Optional |

| customFields | Array | Custom fields that need to be included in the search results. For example, if you want to add information about a custom field called 'booking ID' in the response, you can specify the custom field name as 'booking ID'. If not required, you can leave this field empty.You can use an asterisk ([*]) sign in custom fields to include all available fields in that category in the response.If no values are mentioned, no custom fields will be fetched. | Optional |

| extendedFields | Array | Extended fields that need to be included in the search results. For example, if you want to add information about an extended field called 'Gender' in the response, you can specify the extended field name as 'booking ID'.  If not required, you can leave this field empty.You can use an asterisk ([*]) sign in extended fields to include all available fields in that category in the response.If no values are defined, no extended fields will be fetched. | Optional |



`entityType`

`limit`

`offset`

`searchConditions`

`fieldId`

`search_prefix`

`operator`

`values`

`fieldId`

`enrichmentFields`

`enrichedFields`

`customFields`

`extendedFields`

```
curl --location 'https://crm-nightly-new.cc.capillarytech.com/v2/search/entity' \
--header 'Content-Type: application/json' \
--header 'X-CAP-API-AUTH-KEY: Qjc0M0ExMDE0MDBBMTUzRDVFRTVFNDI0N0Q5QzAxOEI=' \
--header 'X-CAP-API-AUTH-ORG-ID: 1231' \
--header 'Authorization: Basic Y20uMToyMDJjYjk2MmFNzViOTY0YjA3MTUyZDIzNGI3MA==' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
        {
            "fieldId": "firstName",
            "operator": "EQUALS",
            "values": [
                "xyz1218"
            ]
        },
        {
            "fieldId": "gender",
            "operator": "EQUALS",
            "values": [
                "Male"
            ]
        },
        {
            "fieldId": "state",
            "operator": "EQUALS",
            "values": [
                "Delhi"
            ]
        }
    ],
    "enrichmentFields": {
        "customFields": [
            "*"
        ],
        "extendedFields": [
            "*"
        ],
        "enrichedFields": [
            "customerStatus"
        ]
    }
}'
```

```
curl --location 'https://crm-nightly-new.cc.capillarytech.com/v2/search/entity' \
--header 'Content-Type: application/json' \
--header 'X-CAP-API-AUTH-KEY: Qjc0M0ExMDE0MDBBMTUzRDVFRTVFNDI0N0Q5QzAxOEI=' \
--header 'X-CAP-API-AUTH-ORG-ID: 1231' \
--header 'Authorization: Basic Y20uMToyMDJjYjk2MmFNzViOTY0YjA3MTUyZDIzNGI3MA==' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
        {
            "fieldId": "firstName",
            "operator": "EQUALS",
            "values": [
                "xyz1218"
            ]
        },
        {
            "fieldId": "gender",
            "operator": "EQUALS",
            "values": [
                "Male"
            ]
        },
        {
            "fieldId": "state",
            "operator": "EQUALS",
            "values": [
                "Delhi"
            ]
        }
    ],
    "enrichmentFields": {
        "customFields": [
            "*"
        ],
        "extendedFields": [
            "*"
        ],
        "enrichedFields": [
            "customerStatus"
        ]
    }
}'
```

```
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity' \
--data '{
    "entityType": "TRANSACTION",
    "searchConditions": [
        {
            "fieldId": "billNumber",
            "operator": "EQUALS",
            "values": [
                "Transaction1"
            ]
        }
    ],
    "enrichmentFields": {
        "enrichedFields": [
            "payment_mode"
        ],
        "customFields" : [
             "booking_date"
        ]
        
    }
}'
```

```
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity' \
--data '{
    "entityType": "TRANSACTION",
    "searchConditions": [
        {
            "fieldId": "billNumber",
            "operator": "EQUALS",
            "values": [
                "Transaction1"
            ]
        }
    ],
    "enrichmentFields": {
        "enrichedFields": [
            "payment_mode"
        ],
        "customFields" : [
             "booking_date"
        ]
        
    }
}'
```

```
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": ["steve"]
        }
    ],
    "enrichmentFields": {
        "enrichedFields": [""],
        "customFields": ["ehpdivisionnameclien"],
        "extendedFields": ["affiliation_id"]
    }

}
'
```

```
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": ["steve"]
        }
    ],
    "enrichmentFields": {
        "enrichedFields": [""],
        "customFields": ["ehpdivisionnameclien"],
        "extendedFields": ["affiliation_id"]
    }

}
'
```

```
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": ["steve"]
        }
    ],
    "enrichmentFields": {
        "customFields": [
            "*"
        ],
        "extendedFields": [
            "*"
        ],
        "enrichedFields": [
            "customerStatus"
        ]
    }

}
'
```

```
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": ["steve"]
        }
    ],
    "enrichmentFields": {
        "customFields": [
            "*"
        ],
        "extendedFields": [
            "*"
        ],
        "enrichedFields": [
            "customerStatus"
        ]
    }

}
'
```

```
{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": ["bruce.wayne"]
        }
    ],
    "enrichmentFields": {
        "enrichedFields": ["customerStatus","statusLabel","registeredDate","loyaltyStatus","registeredStoreCode", "registeredStoreName","lastUpdatedOn","cardNumber"],
        "customFields": [""],
        "extendedFields": ["affiliation_id"]
    }

}
```

```
{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": ["bruce.wayne"]
        }
    ],
    "enrichmentFields": {
        "enrichedFields": ["customerStatus","statusLabel","registeredDate","loyaltyStatus","registeredStoreCode", "registeredStoreName","lastUpdatedOn","cardNumber"],
        "customFields": [""],
        "extendedFields": ["affiliation_id"]
    }

}
```

# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| pagination | Object | Contains details about the pagination of the response. |

| pagination.limit | Integer | The maximum number of records returned per request. |

| pagination.offset | Integer | The starting index for fetching records.  For instance, an offset=10 would skip the first 10 records and start returning results from the 11th record onwards. |

| pagination.sortBy | String | The field used to sort the results. |

| pagination.sortOrder | String | The sorting order (ASCfor ascending,DESCfor descending). |

| pagination.total | Integer | The total number of records available. |

| data | Array | Contains the list of entities returned in the response. |

| data[].entityType | String | The type of entity retrieved (e.g.,TRANSACTION). Based on the search, |

| Transaction or Customer Search Details |  | Based on the defined search, the transaction or customer details along with the custom field/extended field/other enrichment details appear. |

| warnings | Array | List of warning messages, if any. |

| errors | Array | List of error messages, if any. |



`pagination`

`pagination.limit`

`pagination.offset`

`pagination.sortBy`

`pagination.sortOrder`

`ASC`

`DESC`

`pagination.total`

`data`

`data[].entityType`

`TRANSACTION`

`warnings`

`errors`

```
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "sortBy": "ID",
        "sortOrder": "DESC",
        "total": 1
    },
    "data": [
        {
            "entityType": "TRANSACTION",
            "transactionSearchDetails": [
                {
                    "entityId": "881933080",
                    "transactionEnrichedFields": {
                        "customFields": {
                            "booking_date": "23feb2025"
                        },
                        "paymentModes": []
                    }
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```

```
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "sortBy": "ID",
        "sortOrder": "DESC",
        "total": 1
    },
    "data": [
        {
            "entityType": "TRANSACTION",
            "transactionSearchDetails": [
                {
                    "entityId": "881933080",
                    "transactionEnrichedFields": {
                        "customFields": {
                            "booking_date": "23feb2025"
                        },
                        "paymentModes": []
                    }
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```

```
{
  "pagination": {
    "limit": 10,
    "offset": 0,
    "sortBy": "ID",
    "sortOrder": "DESC",
    "total": 6
  },
  "data": [
    {
      "entityType": "CUSTOMER",
      "customerSearchDetails": [
        {
          "entityId": "565040882",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565041081",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565041087",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven1",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070880",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven2",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070883",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven5",
              "lastName": "Wilson4"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070886",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven6",
              "lastName": "Wilson4"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        }
      ]
    }
  ],
  "warnings": [
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    }
  ],
  "errors": []
}
```

```
{
  "pagination": {
    "limit": 10,
    "offset": 0,
    "sortBy": "ID",
    "sortOrder": "DESC",
    "total": 6
  },
  "data": [
    {
      "entityType": "CUSTOMER",
      "customerSearchDetails": [
        {
          "entityId": "565040882",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565041081",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565041087",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven1",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070880",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven2",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070883",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven5",
              "lastName": "Wilson4"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070886",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven6",
              "lastName": "Wilson4"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        }
      ]
    }
  ],
  "warnings": [
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    }
  ],
  "errors": []
}
```

`Try It!`