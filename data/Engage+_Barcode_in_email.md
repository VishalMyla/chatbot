# Barcode in email

This feature enables you to create a barcode that contains customer identifier information and can be used by customers for identification purposes.  Customers can use this barcode at the POS to identify themselves and earn/claim loyalty benefits.

> 📘NoteBarcode feature is not enabled by default. Create aJIRA ticketto the sustenance team to enable the feature.Barcode feature can be used both in Loyalty programs and on Engage+.

## 📘Note

Note

- Barcode feature is not enabled by default. Create aJIRA ticketto the sustenance team to enable the feature.

- Barcode feature can be used both in Loyalty programs and on Engage+.

# Prerequisties to enable barcode

1. To enable barcode generation, the following configurations must be enabled:CONF_REGISTRATION_BARCODE_GEN_ENABLED: Set the value to 0 or 1. Default value: 0- FalseCONF_BARCODE_VALUE_IDENTIFIER: Set the value to 0,1 or 2 to set the barcode identifier. You can set the identifier according to the information to embed in the barcode.ValueDescription0Mobile number of the customer.1Email ID of the customer.2The external ID of the customer.

To enable barcode generation, the following configurations must be enabled:

1. CONF_REGISTRATION_BARCODE_GEN_ENABLED: Set the value to 0 or 1. Default value: 0- False

CONF_REGISTRATION_BARCODE_GEN_ENABLED: Set the value to 0 or 1. Default value: 0- False

2. CONF_BARCODE_VALUE_IDENTIFIER: Set the value to 0,1 or 2 to set the barcode identifier. You can set the identifier according to the information to embed in the barcode.ValueDescription0Mobile number of the customer.1Email ID of the customer.2The external ID of the customer.

CONF_BARCODE_VALUE_IDENTIFIER: Set the value to 0,1 or 2 to set the barcode identifier. You can set the identifier according to the information to embed in the barcode.

| Value | Description |

| --- | --- |

| 0 | Mobile number of the customer. |

| 1 | Email ID of the customer. |

| 2 | The external ID of the customer. |



4. Raise aJira ticketassigned to the Foundation team and enable bucket, namespace, and CDN URL support for the barcode service on the respective cluster where the organization is located.

Raise aJira ticketassigned to the Foundation team and enable bucket, namespace, and CDN URL support for the barcode service on the respective cluster where the organization is located.

# Configuring barcode

Capillary supports six types of barcodes, given below:

- ITF

- PDF417

- EAN 13

- UPC A

- QR code

- CODE 128

## Default barcode configuration

| Field | Value |

| --- | --- |

| Default barcode type | CODE_128 |

| Image type | PNG |

| Default barcode stylesaccording to the barcode type: |  |

| - ITF | - Barcode text: Disabled-  Image height: 200- Image width: 400 |

| - QR_CODE | - Barcode text: Disabled- Image height: 200- Image width: 300- Image width padding - Enabled- Image height padding - Enabled |

| - PDF_417 | - Barcode text: Disabled- Image height: 200- Image width: 300- Image width padding:  Enabled- Image height padding: Enabled- Font size: 5 |

| - EAN_13 | - Barcode text: Disabled- Image height: 200- Image width: 300- Image width padding:  Enabled- Image height padding: Enabled- Font size: 5 |

| - UPC_A | - Barcode text: Enabled- Image height: 200- Image width: 300- Image width padding:  Enabled- Image height padding: Enabled- Font size: 5- Font name: Arial |

| - CODE_128 | - Barcode text: Disabled- Image height: 200- Image width: 300- Image width padding:  Enabled- Image height padding: Enabled- Font size: 5- Font name: Arial |



| Field | Data Type | Description |

| --- | --- | --- |

| default_barcode | String | Default barcode type that will be used if no barcode type is mentioned in the barcode service API. |

| showBarcodeText | Boolean | If set to true, the text will be displayed with config |

| imageHeight | Integer | Height of the image in pixels. |

| imageWidth | Integer | Width of the image in pixels. |

| imageWidthPadding | Integer | Padding around the width of the barcode image. This property is applicable when showBarcodeText is set to true. Not applicable for ITF barcode. |

| imageHeightPadding | Integer | padding around the length of the barcode image. This property is applicable when showBarcodeText is set to true. Not applicable for ITF barcode. |

| fontName | String | Name of the font. Not applicable for EAN 13, PDF417, QR Code, ITF barcode. |

| fontSize | String | Size of the font. Not applicable for ITF and QR code. |



To edit the default barcode configuration, create aJIRA ticketto the Capillary sustenance team.

# Generating barcode

According to the configuration, during customer registration, theCustomer Add APIcalls the barcode service and the barcode image is stored in the images table in the backend. If the identifier provided in the configuration is changed usingcustomer identifier change API, a new barcode image is created and saved. You can retrieve the barcode image details using theGET customerdetails API.

> 📘NoteIf you want to create a barcode for an existing user or regenerate a barcode, create a ticket to the Sustenance team.

## 📘Note

Note

If you want to create a barcode for an existing user or regenerate a barcode, create a ticket to the Sustenance team.

To embed the barcode in the email creative, perform the following:

1. Navigate to the Engage+ homepage, and select the campaign to send the email creative.

![](https://files.readme.io/623cc4d-image.png)

1. ClickNew messageto create a new email creative.

![](https://files.readme.io/4721516-image.png)

1. In theContent block, clickAdd creative.

![](https://files.readme.io/a4468a5-image.png)

1. Navigate to theEmailtab and clickCreate new.

![](https://files.readme.io/f40d846-image.png)

1. ClickCreate using editorand clickContinue.

ClickCreate using editorand clickContinue.

![](https://files.readme.io/d38b3b4-image.png)

2. Select a template of your choice.

Select a template of your choice.

![](https://files.readme.io/9ca84df-image.png)

1. In the email body, clickAdd labeland select Customer barcode label.

In the email body, clickAdd labeland select Customer barcode label.

![](https://files.readme.io/e12a5b1-Select_label_barcode.png)

2. Embed the{{customer_barcode}}tag in your email template.

Embed the{{customer_barcode}}tag in your email template.

`{{customer_barcode}}`

![](https://files.readme.io/444cae4-image.png)

A barcode has been generated for the customer. A broken image is sent to the customer if a barcode fails to generate.

Updatedabout 1 year ago