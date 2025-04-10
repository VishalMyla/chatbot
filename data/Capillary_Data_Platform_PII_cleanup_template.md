# PII cleanup template

This template enables you to delete Personal Identifiable Information (PII) data of customers  in bulk.

Perform the below steps:

1. In theConnect to SourceBlock, enter the source server details. SeeConnect to source.

In theConnect to SourceBlock, enter the source server details. SeeConnect to source.

2. In theTransform datablock, enter thetransformation detailsand map the API fields.API FieldTransformationExamplesourceCustomer registration sourceWechat, web_engage etcidentifierTypeCustomer identifier typeMobile, e-mail etcidentifierValueCustomer identifier value for the defined identifier typemobile number, e-mail id etctypeType of request. In this case, the value should be CUSTOMER.CustomerbaseTypeSubtype of the request. In this case, the value should be DELETE.DeleteaccountIdAccount id of the sources with multiple accounts. This is required only if there are multiple accounts of the same source.123344commentsAdditional comments if anyAny comment

In theTransform datablock, enter thetransformation detailsand map the API fields.

| API Field | Transformation | Example |

| --- | --- | --- |

| source | Customer registration source | Wechat, web_engage etc |

| identifierType | Customer identifier type | Mobile, e-mail etc |

| identifierValue | Customer identifier value for the defined identifier type | mobile number, e-mail id etc |

| type | Type of request. In this case, the value should be CUSTOMER. | Customer |

| baseType | Subtype of the request. In this case, the value should be DELETE. | Delete |

| accountId | Account id of the sources with multiple accounts. This is required only if there are multiple accounts of the same source. | 123344 |

| comments | Additional comments if any | Any comment |



3. In theConnect to destinationblock, enter the PII deletion API endpoint details (https://<host>/v2/requests). SeeConnect to destination.For information on PII deletion API endpoint, seePII deletion API documentation.

In theConnect to destinationblock, enter the PII deletion API endpoint details (https://<host>/v2/requests). SeeConnect to destination.For information on PII deletion API endpoint, seePII deletion API documentation.

`https://<host>/v2/requests`

4. Set the trigger frequency. SeeTrigger frequency.

Set the trigger frequency. SeeTrigger frequency.

> 📘If the brand has multiple source profiles, for every source profile you need not run this flow multiple times. During the first run itself, the dataflow deletes both profile's PII data.

## 📘

If the brand has multiple source profiles, for every source profile you need not run this flow multiple times. During the first run itself, the dataflow deletes both profile's PII data.

Updatedover 1 year ago