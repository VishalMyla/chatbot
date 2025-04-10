# Add Product Attributespost

## Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| default_attribute_value_name | string | Default value for the attribute (when no value  is provided). |

| extraction_rule_data | string |  |

| extraction_rule_type | enum | POS, |

| is_enum |  |  |

| is_soft_enum |  |  |

| label | string | Label name for the attribute. |

| name | string | Name of the attribute. |

| ou_code | string | Identification code of the organisation unit. This is applicable only if OU support for product inventory is enabled.  For more information, seeOU support for product inventory. |

| type | enum |  |

| use_in_dump | enum | Value:1 |

| values | obj | Values of the attribute. |

| label | string | Label name for the attribute value. |

| name | string | Name of the attribute value. |



[OU support for product inventory](/docs/inventory-profiles#configuring-organisation-unit-ou-support-for-product-entities)

`1`

# Response parameters

| Parameter | Description |

| --- | --- |

| response | The main object containing the API response data. |

| response.status | The status information of the API response. |

| response.status.success | Indicates if the API call was successful (true/false) |

| response.status.code | Numeric code indicating the response status. |

| response.status.message | Message describing the status of the response. |

| response.product | Object containing product-related information. |

| response.product.attributes | Object containing attributes related to the product. |

| response.product.attributes.attribute | Array of attribute objects. |

| attribute.name | The name of the attribute. |

| attribute.label | Label associated with the attribute. |

| attribute.is_enum | Indicates if the attribute is an enumeration (1/0). |

| attribute.type | The data type of the attribute. |

| attribute.ou_code | Code related to the organizational unit. |

| attribute.ou_id | ID of the organizational unit. |

| attribute.extraction_rule_type | Type of extraction rule for the attribute. |

| attribute.extraction_rule_data | Data associated with the extraction rule. |

| attribute.is_soft_enum | Indicates if the attribute is a soft enumeration. |

| attribute.use_in_dump | Indicates if the attribute is used in dumps. |

| attribute.default_attribute_value_name | Default value for the attribute. |

| attribute.values.value | Array of values associated with the attribute. |

| value.name | The name of the value. |

| value.label | Label associated with the value. |

| attribute.item_status | Status information about the attribute addition. |

| attribute.item_status.success | Indicates if the attribute addition was successful. |

| attribute.item_status.code | Numeric code indicating the status of the addition. |

| attribute.item_status.message | Message describing the status of the addition. |



`Try It!`