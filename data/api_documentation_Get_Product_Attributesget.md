# Get Product Attributesget

### Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| name | string | Name of the attribute. |

| label | string | Label name of the attribute |

| is_enum | enum | Whether the attribute values are predefined values.1if enum type,0if not enum. |

| type | string | Datatype of the attribute value. |

| default_attribute_value_name | string | Default value of the attribute if any. |

| inventory_item_attributes | string | Name of the table (in the database) from which the attributes are retrieved. |

| ou_id | integer | Indicates the ID of the OU. -1 indicates that the product belongs to a master org. This is applicable only if OU support for product inventory is enabled. |



`1`

`0`

`Try It!`