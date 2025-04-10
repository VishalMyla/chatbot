# Select data templates (Step 2 of 3)

A template is a combination of facts, dimensions, and/or KPIs. Standard templates are created from facts, and dimensions whereas a custom dimension is a combination of KPIs and dimensions.  Standard templates consist of raw data whereas custom templates can have summarized data. For example, Standard templates consist of columns such as points issued, total visits, purchases, and so on at the customer level, i.e., basically the columns which are summarized.  However, if you need these values for a specific duration, you need custom templates.

To create a custom template, see Creating Custom Templates.

There are over 20 different standard templates categorized as Fact, Dimension, and Fraud as mentioned below:

Fact

- Customer Merge Event Log

- Points Expiry Reminder

- Transaction

- Registration Event Log

- Footfall

- Call Tasks

- Messages

- Issue Trackers

- Return Transactions

- Slab Change Log

- Profiles

- Contacted

- Responders

- Points

- Coupons

- Members

- baseFactTemplate

Dimension

- item - Inventory

- event_zone_till - Stores

- campaign - Campaign

- campaign_group - Audience Group

- event_user - Users

Fraud (Currently, there are no templates in this category)

- initial_fraud_template

To select a template, do the following:

1. InExport Templates, clickAdd/RemoveTemplates. You can also create a new template using theCreate Newoption if required.

![](https://files.readme.io/93f7212-NGGlQdRA10EC_mNbxPzvo_qjfLo2oAkDng.png)

1. Check the templates that you want to add to the export job and clickSelect. You can select multiple templates at a time.For standard templates, you will see the default measures selected and for custom templates you will see the selected KPIs count. All the dimensions that are applicable for the KPIs or measures along with the applicable dimensions. You can modify the template to select only required dimension values and apply filters to the existing data if required. Data of each template is saved in a separate directory in the destination path.

![1333](https://files.readme.io/a6b96b5-Export_template.png)

1. To add filters and select dimensions that you want to download, clickModify

![](https://files.readme.io/bb7d252-UBRG8XewcE1XWV6DL5c03TwCp2Xf0J-Xkg.png)

As you see, by default all dimensions are selected as shown above.

- Filter down data: Filter down the export data to get only the information that is required. You can filter the data by filter dimensions and audience list

- Update the destination path of the current template data: You can use icon to modify the path of the current template's data on the FTP location

- Order field names (): This icon lets you reorder the field names as you would like to see in the exported file. To do so, hold the field icon and drag it to the required position

- Deselect KPIs (KPIs): By default, all the existing KPIs of the template are selected. You can uncheck all the KPIs that are not required

- Deselect Dimensions (Dimensions): By default, all the existing dimensions of the template are selected. You can uncheck all the dimensions that are not required

Note: The data that will be exported will have the columns KPI1, KPI2, ..., Dimension1.KPI1, Dimension2.KPI1, Dimension1.KPI2, Dimension2.KPI2, ...

1. Continue to Step 3 of 3 tomodify the template

> 📘NoteIn a template, custom fields will not be selected by default

## 📘Note

Note

In a template, custom fields will not be selected by default

## 

Updated10 months ago