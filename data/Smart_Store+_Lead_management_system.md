# Lead management system

Lead Management System (LMS) is a set of procedures and practices that are designed by organizations to generate new potential business clientele. LMS is commonly operated through a variety of marketing campaigns or programs.

Following are the key benefits of using LMS:

- Tracks the customer throughout the purchase life cycle

Tracks the customer throughout the purchase life cycle

- Track leads by different statuses hot, warm, cold and takes appropriate action

Track leads by different statuses hot, warm, cold and takes appropriate action

- Get reminders to follow-ups with leads

Get reminders to follow-ups with leads

- Reassign leads to other store associates

Reassign leads to other store associates

- Capture leads at the product variant level

Capture leads at the product variant level

- Retarget leads via campaigns depending on the status

Retarget leads via campaigns depending on the status

- Detailed dashboard to check the performance of Stores and Store associates

Detailed dashboard to check the performance of Stores and Store associates

- Lead tracking at different levels ( area, store, zone, CA)

Lead tracking at different levels ( area, store, zone, CA)

- Open APIs to add leads into the system from anywhere eg. websites, campaigns

Open APIs to add leads into the system from anywhere eg. websites, campaigns

- Configurable User and Role Management

Configurable User and Role Management

1. LMS is managed with five(5) User Levels:Super Admin>Organization>Area Manager>Store Manager>Store Associate

LMS is managed with five(5) User Levels:Super Admin>Organization>Area Manager>Store Manager>Store Associate

2. Add a new user or deactivate a user easily

Add a new user or deactivate a user easily

3. Assign and restrict roles ( eg. download lead, reassign lead) to use level

Assign and restrict roles ( eg. download lead, reassign lead) to use level

On logging in, the LMS dashboard appears:

![771](https://files.readme.io/1c2727a-LMS_image_1.png)

The LMS Dashboard gives an overview of the following:

- It provides Lead activity notification to store associates

- It helps to see  Lead Conversion Funnel

- It provides missed follow up report to Store associates at store levels

![804](https://files.readme.io/7ceaae8-LMS_Image_2.png)

On the left panel, if you click on All Leads, the above page appears.

In this page, you can do the following:

- Download list for analysis/campaign

- Pending leads can be reassigned to another Customer Associate

- Leads can be searched using mobile number and name

- Creating a New Lead

On the left panel, click on Add New Lead.

The following page appears:

![803](https://files.readme.io/a06577d-LMS_Image_3.png)

![806](https://files.readme.io/f2db3f3-LMS_Image_4.png)

Find below the following steps to Create a Lead:

- Create a lead when a potential customer walks into the store

- A lead is automatically assigned to the person creating the lead

- Store Managers can reassign lead to another Customer Associate

- Store/Area Managers can download leads for analysis

- Dedicated API to add a new lead in any store from any source(website, campaigns, forums)

### Today's Follow Up

On the left panel, click on Today's Follow Up, following screen appears:

![774](https://files.readme.io/0d6d462-LMS_Image_5.png)

In the Today's Follow Up page, you can do/see the following:

1. Section to show all follow ups for given date

2. Makes it easy for the customer and store associates to plan

Detailed User ManagementFind below step by step guide that will explain the process of creation of users and entities for the LMS application.

#### Super Admin Tasks

- Create another Super Admin (optional):Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Super Admin

Create another Super Admin (optional):Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Super Admin

- Create a Partner:Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Partner

Create a Partner:Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Partner

- Create a Partner Admin:Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Partner Admin

Create a Partner Admin:Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Partner Admin

For further Partner related entity creation, you need to log in as thePartner Adminfor the particular partner and proceed.

#### Partner Configuration(Manual Process)

If you need to apply a specific configuration to aPartner, this can be achieved by creating aPartner folderunder theConfiguration Directory. Each of these folders will hold configuration for a particular partner in theLMS config.properties file. By default, two(2) files are present in the configuration directory.

LMSConfig.properties: Contains the default SMTP configuration and default demo status. If you would like to provide specific configuration values for a given partner, you will have to create a folder under the config directory and enter the mapping in theLMS partners.properties file.

LMSPartners.properties: Contains the mapping of partner id with the folder name that contains the configuration for that partner. For example:partner.id.name.1=Applepartner.id.name.2=CromaHere, the Partner ID of 1 (this can be obtained from the‘Manage Partners’listing page of LMS) is mapped to Apple folder that contains the configuration information for the configuration directory.

#### Partner Admin Tasks

The Partner Admin can login to the LMS application with partner admin credential. After login, click on Settings on the right-hand side of the panel.

On clicking, the following page appears:

![1351](https://files.readme.io/3f8c223-LMS_Image_6.png)

The Partner Admin can now create the following:

Create an Area:SelectManage Areas>Add New Area>Enter detailsandCreate an Area

Create Store(s):Select onManage Stores>Add New Store>Enter detailsandCreate a Store. While adding a new store, fields marked in * needs to be filled.

See figure below for clarity:

![1368](https://files.readme.io/87b9cb0-LMS_Image_7.png)

Create Product Categories Specific to the Partner:SelectManage Product Categories >Add New Product Category>Enter detailsandCreate a Product Category

Add Brand:SelectManage Product Brands>Add New Product Brand>Enter detailsandCreate a Product Brand

Add Product(s) based on Product Category and Brand:SelectManage Products>Add New Product>Select a Category>Enter detailsandCreate Products.

See figure below for more clarity:

![1368](https://files.readme.io/c7f669e-LMS_Image_8.png)

Create/Manage/Add Users:The partner admin can create an Area Manager, Store Managers, and Customer Associate.

- Create an Area Manager:SelectManage Users>Add New User>enter detailsandCreate an Area Manager

- Create Store Manager(s):SelectManage User>Add User>enter detailsandCreate a Store Manager

- Create a Customer Associate: SelectManage User>Add User>enter detailsandCreate a Customer Associate

Manage Privileges:SelectManage Privileges>Select UserandManage Privileges.

See figures below:

![1349](https://files.readme.io/7e512ae-LMS_Image_9.png)

Role of Area Admin

> Partner Admin can delegate his set of tasks to Area Admin by assigning the right privileges to the Area Admin.Area Admin cannot create a Partner or Areas but can create entities under him.

1. Partner Admin can delegate his set of tasks to Area Admin by assigning the right privileges to the Area Admin.

2. Area Admin cannot create a Partner or Areas but can create entities under him.

Role of Store Managers

> Store Manager can create Customer AssociatesStore Manager can also create and view his leads.He does not hold any other administration rights by default.

1. Store Manager can create Customer Associates

2. Store Manager can also create and view his leads.

3. He does not hold any other administration rights by default.

Role of Customer Associates

> Customer Associate can create and view his leads.He does not hold any other administration rights by default.

1. Customer Associate can create and view his leads.

2. He does not hold any other administration rights by default.

Once, task/role is created by the Partner Admin, they can viewDashboards & Reportson the Home page. They can also see there as well as othersLeaddepending on the hierarchy. Leads can also be downloaded.

![1332](https://files.readme.io/d844826-LMS_Image_10.png)

![1350](https://files.readme.io/d4b13cf-LMS_Image_11.png)

#### Changing Password

All users can change the password. Login to application with yourCredential>Click on Username>Select Manage Password>Change the Password

#### Current LMS Limitations

Currently, LMS has the following limitations:

- Mobile Version of LMS is not available

Mobile Version of LMS is not available

- Cannot send SMS/Email to leads from LMS

Cannot send SMS/Email to leads from LMS

- Not yet integrated with CRM

Not yet integrated with CRM

- Cannot reassign leads across stores-limited within store

Cannot reassign leads across stores-limited within store

- Lead follow up alert as an SMS/email notification to customer associates

Lead follow up alert as an SMS/email notification to customer associates

- Lead scoring based on lead's response

Lead scoring based on lead's response

- Automatic Closure of lead upon sale-currently CA(Customer Associate) gets a sale notification and he can decide whether to close the lead or not

Automatic Closure of lead upon sale-currently CA(Customer Associate) gets a sale notification and he can decide whether to close the lead or not

Updatedover 1 year ago