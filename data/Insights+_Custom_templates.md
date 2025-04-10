# Custom templates

A custom template is a combination of KPIs and dimensions. You can use custom templates to get data from multiple fact tables or summarized data, say at user level, transaction-level, or points level. Use custom templates to export data at a granular level. Each combination of a KPI and dimension value forms a column of an export file. For example, you can use a standard template to export transaction-level dump, if you need transactions at user level, you need to use custom templates.

## Limitations of custom templates

- You can choose up to 5 dimensions per template.

- You cannot export custom fields, and measures (such as bill id, bill number, bill amount, auto-update time) in custom templates. You can export only KPIs and their dimensions.

## Create export template

To create an export template, do the following -

1. Navigate toData connectors > Export Templates.You will see the list of existing templates of the org as shown below. All fact templates will have Capillary as Created by whereas custom templates will have the name of the user who created it as highlighted in the following screenshot.

![1344](https://files.readme.io/7207f2c-OYtpQQm-Ck_DIp-2q4SH1-Yd0jfQn-7Idw.png)

1. ClickCreate newto configure a new profile template.

![1014](https://files.readme.io/ba19102-c7AEWYBb_KB5dLyOl4toDvOQu1C9ESygzg.png)

1. InTemplate Name, specify a meaningful name for the template. You cannot have duplicate template names

2. InDescription, specify a short description of the template

3. InKPIs, select the KPIs that you want to download for the template. You can select any number of KPIs

4. InDimensions, you will see the dimensions as per the chosen KPIs. Select your preferred dimensions to download dimension-wise data.You can select a maximum of 5 dimensions.You will see the preview of the data in the Preview table.

![947](https://files.readme.io/85477bc-EOclKrFXdGHge4VP2uWdrtsBKylVqHkWvw.png)

> 📘Note: Dimensions and measures are columns of an export

## 📘

Note: Dimensions and measures are columns of an export

- In the Preview table, you can see the list of KPIs selected for the template. To see details of a KPI such as definition, properties, and decimal point, click on the respective i icon.

![243](https://files.readme.io/f483675-W5CKWzioHGtaeMiTZWuxX2zXLY2rOxKiEQ_1.png)

- KPIs are categorized into two types of Properties:

- Additive: A metric that can be aggregated through all of the dimensions (cumulative). For example, total sales, total registrations, Lapsed customers

- Non-Additive: A metric that cannot be aggregated (non-cumulative measures). Example: Ratios - ATV, ABS, % redemption, % sales

1. ClickSubmitto create. You will see the following pop-up if the template is successfully created

![379](https://files.readme.io/6af6b53-LNTDL_d_vvxvuHwJAGEA7NkXo6sXLqleOA.jfif)

> 📘Note: You cannot edit a template once created.

## 📘

Note: You cannot edit a template once created.

![1343](https://files.readme.io/4fd43ad-PIUg9I3Q6-BchVUrYCEKEDVvG3S__g_Uog.png)

- Search a Template: Use the search box to search for a specific template.

- Filter list (Type): Use the Type drop-down to see All templates or only Fact Templates, Fraud Templates, Custom Templates, or Templates created by you.

- Created By: You will see the Capillary for Fact templates and the user name who created the template for Custom templates.

- Type: Type can be Fact, Dimension, or Fraud for Standard templates and Custom for custom templates.

- Actions: You can view the details of a template by clicking More Options > View Template.

![994](https://files.readme.io/7758ca6-kGT1OKEqct09gNh7-13LmE94gvj8rtgurg.png)

Updatedover 1 year ago