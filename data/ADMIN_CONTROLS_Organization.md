# Organization

At Capillary, organisations (also called orgs in this document) are managed in three ways based on the brand structure.

# Standard Organization

A Standard organisation in Capillary is an independent entity that has complete control over its customer data and loyalty operations. This organisation type manages everything from customer data to rewards programs independently. Most non-conglomerate organizations are considered independent or standard org.

## Key Features

A Standard organisation has full control over its:

- Customer database

- Loyalty programs

- Promotional campaigns

- Rewards and points system

- Customer communications

- Analytics and reporting

## Common Implementation Models

### 1. Single Brand Model

Suited for individual brands wanting to manage their own loyalty program.

#### Example: ABC Jewellers Loyalty Program

- Single loyalty program across all outlets

- Centralised customer database

- Unified points system

- Customers earn points at any outlet

- Points can be redeemed at any location

- Consistent customer experience across all touchpoints

### 2. Multi-Brand Model

Ideal for: Organizations managing multiple brands under a unified loyalty program.

Example: ABC Group’s Loyalty Program

Consider a company ABC Group that want to manage a common loyalty program across its various brands, such as:

- GroceryMart:A grocery and essentials chain.

- TechStore:A store specializing in gadgets and electronics.

- FashionStores:A clothing and accessories brand.

They can use the Standard Organisation framework to meet their requirements.

Benefits:

- Unified Point System: Customers earn points on purchases made at any brand under ABC Group.

- Flexible Redemption: Points can be redeemed across all participating brands.

- Centralized Customer Insights: Provides a single view of customer behaviour across all brands.

- Streamlined Campaigns: Facilitates cohesive cross-brand promotional strategies to encourage diverse shopping habits.

# Organization Units

Organisational Units (OUs) provide a flexible framework designed specifically for conglomerate businesses managing multiple brands or divisions under a single corporate umbrella where customer data is shared and not segregated.

## Core Concepts

### Customer Data Management

- Centralised Customer DatabaseAll customers are shared across all OUsCustomer attributes are consistent across OUsRegistration of a customer in one OU leads to registration in all OUsNo data segregation at the customer levelUnified Customer ViewSingle webpage access to customer dataAccess ControlUser Access ManagementAccess management primarily applies to Insights (Reporting)Control over asset and data access within OUsCross-unit collaboration enabled when neededNo data segregation at the customer levelLoyalty and Campaign FeaturesLoyalty ProgramsMultiple Program TypesCan be independent per OUCan be centralised across OUsPoints SystemEarn points at any brandRedeem points across brands within the same loyalty programCustomer SharingAll customers visible to all programsAudience creation and selection are availableCampaign ManagementShared CampaignsCreation and management across OUsCross-sell and upsell campaign capabilitiesNo OU-level filters available

- All customers are shared across all OUs

- Customer attributes are consistent across OUs

- Registration of a customer in one OU leads to registration in all OUs

- No data segregation at the customer level

- Unified Customer ViewSingle webpage access to customer data

- Single webpage access to customer data

### Access Control

- User Access ManagementAccess management primarily applies to Insights (Reporting)Control over asset and data access within OUsCross-unit collaboration enabled when neededNo data segregation at the customer level

- Access management primarily applies to Insights (Reporting)

- Control over asset and data access within OUs

- Cross-unit collaboration enabled when needed

- No data segregation at the customer level

### Loyalty and Campaign Features

#### Loyalty Programs

- Multiple Program Types

- Can be independent per OU

- Can be centralised across OUs

#### Points System

- Earn points at any brand

- Redeem points across brands within the same loyalty program

#### Customer Sharing

- All customers visible to all programs

- Audience creation and selection are available

#### Campaign Management

- Shared Campaigns

- Creation and management across OUs

- Cross-sell and upsell campaign capabilities

- No OU-level filters available

### OU-Specific Management

#### Communication and Subscriptions

- Independent Management

- Subscription preferences managed at OU level

#### Communication strategies customisable per OU

- Personalisation capabilities maintained

#### Store and Product Management

- Independent Inventory

- Each OU maintains a separate inventory and stores

- Reporting and Campaigns at the inventory level are not available

#### Reporting

- Dual-Level Reporting

- Consolidated reports at the conglomerate level

- Individual reports per OU

#### Billing

- Independent Configuration

- Each OU can maintain separate billing settings

- Autonomous billing management

# Connected Organizations (Connected Orgs)

Connected Organizations (Connected Orgs) enhance theOrg Unitconcept by focusing ondata segregationandsecurity. In this model:

- Each business unit is structured as aseparate organizationconnected to acommon organization, functioning as an independent entity.

- Business units under the common organization are termedchild orgs, while the main organization is called thesuper org(orparent org).

Note:The terms "parent org" and "super org" are used interchangeably.

## Key Features of Connected Organizations

### Data Segregation and Sharing

- Child Organizations: Operate autonomously and do not share data with other child orgs.

- Parent Organization: Has access to the data of all child orgs, ensuring a centralised data repository.

- Data Flow:Vertical sharing occurs between parent and child organizations.Horizontal sharing (between child orgs) does not happen.

- Vertical sharing occurs between parent and child organizations.

- Horizontal sharing (between child orgs) does not happen.

## Customer Data Management in Connected Organizations

### Customer Identity Management

- Aunified customer IDis maintained across all connected organizations.

- Each customer has asingle identityrecognised across both parent and child organizations.

- This unified ID ensures aconsistent customer viewat the parent level.

### Customer Registration Scenarios

- Initial Registration:A customer registers with a child org, but the profile is created and owned by the parent org.The child org associates the customer with the parent org’s profile.

Initial Registration:

- A customer registers with a child org, but the profile is created and owned by the parent org.

- The child org associates the customer with the parent org’s profile.

- Cross-Org Registration:When a customer registers in a new child org:Standard Fields: Values are inherited.Parent-Level Extended and Custom Fields: Inherited with their values.

Cross-Org Registration:

- When a customer registers in a new child org:Standard Fields: Values are inherited.Parent-Level Extended and Custom Fields: Inherited with their values.

- Standard Fields: Values are inherited.

- Parent-Level Extended and Custom Fields: Inherited with their values.

### Customer Updates

- Updates at theparent orglevel:Fields updated only at the parent level.Child org details remain unaffected.

- Fields updated only at the parent level.

- Child org details remain unaffected.

- Updates at thechild orglevel:Changes are reflected in the parent organization automatically.

- Changes are reflected in the parent organization automatically.

## Handling Fields in Connected Organizations

### Standard Fields

- Stored at theparent leveland visible across all connected organizations.

- Changes made in one child org are reflected in all others.

### Extended Fields (EF)

- Created at both parent and child levels:Parent-Level EF: Shared across all connected organizations.Child-Level EF: Private to that child unless configured at the parent level.

- Parent-Level EF: Shared across all connected organizations.

- Child-Level EF: Private to that child unless configured at the parent level.

### Custom Fields (CF)

- Created independently at parent and child levels:Parent-Level CF: Available to all connected orgs.Child-Level CF: Remain private to that child.

- Parent-Level CF: Available to all connected orgs.

- Child-Level CF: Remain private to that child.

- Note: Conflicting field names default to the parent-level field.

## Customer Profile Management

### Centralised Profile Creation

- Profiles are managed at theparent orglevel.

- Registration sources (e.g., WebEngage, WeChat) integrate with the parent org to create profiles.

### Child Registration & Association

- Profiles created by a child org are stored at the parent level but visible in the child org.

### Independent Profiles for Child-Specific Apps

- Child orgs can maintain independent profiles that are not accessible to the parent org.

## Handling Customer Data

### Customer Image, Barcode & External ID

- Stored at the parent level and displayed only in the child org where the customer is registered.

- Other child orgs do not access this data unless the customer registers there.

### Customer Label & Status

- Unique to each organization.

- Changes in one organization do not affect others.

### Customer Card

- Maintained independently by each organization.

## Audit Logging

### Parent-Level Audit Logs

- Changes to standard fields, parent-level custom fields, and extended fields are logged at the parent org level.

- Logs capture the originating connected organization.

### Child-Level Fields

- Exclusive fields at the child org level are not logged by the parent org.

### Source Identification

- A “dummy till” is assigned to each connected org.

- Combined with the change request ID, it helps the parent org trace changes to shared fields.

## Configurations in Connected Organizations

- Parent-Level Configurations: Automatically inherited by connected organizations.

- Child-Specific Configurations: Overridden by changes made at the parent level.

## Subscription and Test & Control

### Customer Subscriptions

- Parent-Level Subscriptions: Apply to the parent org.

- Child-Level Subscriptions: Specific to the respective child org.

### Test & Control

- Global Settings: Managed at the parent org level.

- Campaign Settings: Inherited by the respective connected org.

Updated3 months ago