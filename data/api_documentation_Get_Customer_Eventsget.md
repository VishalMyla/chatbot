# Get Customer Eventsget

# Query parameter

| Parameter | Description |

| --- | --- |

| userId | Unique ID of the customer whose events need to be fetched. |

| scope | Use the scopechildto retrieve the event details of a customer in a child org using the parent org till ID. This is applicable to a Connected org setup. |



`child`

# Response parameter

| Parameter | Description |

| --- | --- |

| data | A list of event details. |

| orgId | The organization's identification number. |

| userId | The user's identification number. |

| date | The date and time when the event occurred. |

| eventName | Name of the event. |

| eventId | Unique identifier for the event. |

| source | Source from which the event originated. |

| tillCode | Code of the till where the event took place. |

| source_till_id | Till ID of the till where the event took place. |

| source_user_id | User ID from which the event was generated. |

| additonalAttributes | Additional details associated with the event. |

| uniqueId | Unique generated for the event when the Is Unique feature is enabled. Refer to theUniqueness check documentationfor more information. |

| accountid | Account identification. |

| autoUpdateTimeStamp | Time when the event was automatically updated. |

| brandname/brand | Name of the brand. |

| browsername/browser_name | Name of the browser where the event took place. |

| cartid/cartrefkey | Unique identifier for the cart. |

| categoryname/category | Category under which the product/event falls. |

| city | City where the event took place. |

| country | Country where the event took place. |

| device | Type of device used during the event. |

| id | Unique identifier. |

| ip | IP address from which the event originated. |

| locationname | Name of the location where the event took place. |

| osname/os_name | Name of the operating system. |

| pageurl/page_url | URL of the page where the event occurred. |

| productname/name | Name of the product. |

| region | Region where the event took place. |

| till | Till details. |

| variant | Variant details of the product. |

| psiAttributes | Object indicating if the field contains Protected Sensitive Information. For more information refer,Classify Potentially Sensitive Information (PSI) |

| warnings | A list of warnings related to the response. |

| errors | A list of errors related to the response. |



[Uniqueness check documentation](/docs/setup-test-behavioral-events#enabling-uniqueness-check)

[Classify Potentially Sensitive Information (PSI)](/docs/classify-potentially-sensitive-information-psi)

`Try It!`