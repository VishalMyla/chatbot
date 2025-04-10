# Shopify plugin

Navigate toCapillary Shopify integrationto integrate Capillary plugin into Shopify.

To integrate, perform the following:

1. introduction – Project Overview1.1              Purpose of this DocumentThe purpose of this document is to give a detailed overview on all the Shopify user flows and how to navigate in the application.1.2              Scope of this DocumentThe scope of this document is to cover the Shopify user flows relating to Ph 1.1 scope.

1. introduction – Project Overview1.1              Purpose of this DocumentThe purpose of this document is to give a detailed overview on all the Shopify user flows and how to navigate in the application.1.2              Scope of this DocumentThe scope of this document is to cover the Shopify user flows relating to Ph 1.1 scope.

`introduction – Project Overview`

`introduction – Project Overview`

3. Plugin Installation stepsTo install shopify app as publicly we need to publish apps in shopify app marketplace. Second way is to install app in various stores. We can install app from the shopify partner account but the store should be available in the shopify partner account as a development store and the app should also be created in the partner account.

`Plugin Installation steps`

`Plugin Installation steps`

To install shopify app as publicly we need to publish apps in shopify app marketplace. Second way is to install app in various stores. We can install app from the shopify partner account but the store should be available in the shopify partner account as a development store and the app should also be created in the partner account.

Kindly find below step to create public app in shopify partner:Login to Shopify PartnerGo to apps from left sidebar and click on Create App

Choose Public App from Create App and add App Name, App URL and Allowed Redirection URL. App url will be of server which with domain will pointed, and allowed redirection URL will be app_url/authenticate

After app created, you will get API key and API secret key that need to be add in  .env file of laravel

Kindly find below step to install app in shopify store from shopify partner account.

Go to apps from left side bar.Select app which will createdClick on Select Store button

You will find list of all development store which will be available in partner account

Click on store in which you need to install app.By following all above step you can create public app in install in any development store.

1. SHOPIFY USER FLOWS1.1 AuthenticationClick on Apps -> Capillary CRM Integration

Click on General AuthenticateProvide basic AuthenticationClient ID: ****************Client Secret Key: **************Base URL of the API: Please contact to the Capillary TeamSubmit CONFIG

View Online store on the front-end:Click on the Online storesClick on the View your store

1.2 Steps to Configure Themes1.2.1 Turn on the App embedsClick on the Online Store >> CustomizeSelect “Theme settings” and click on “App embeds”.Turn on the toggle buttons “Capillary - Setting” and “Capillary - Includes ”. If you are not using Jquery in your code then please turn on the "Capillary - Jquery Files".

1.2.2 To Create Capillary CRM integration CART page With blocks, please follow the below steps:Click on the Online Store >> CustomizeFor Using capillary Coupon and Redeem Points, it is required to add our App block and also our checkout button.Search for Cart in search box.Click on “Add block” and you can configure the blocks you need in your Cart Page.

1.2.3 To Create Capillary CRM integration CART page Without blocks, please follow the below steps:For Redeem point feature: To add the redeem point feature please add the following div in your CART page “< div id='cap-cart-point'>< /div>”.For Coupon feature: To add the coupon feature please add the following div in your CART page “ < div id='cap-cart-coupon'>< /div> ”.For showing the Redeem points discount block feature: To add the Redeem points discount block feature add the following div in your CART page “ < div id='cap-redeem-point-discount-value'>< /div> ”.For showing coupon discount feature: To add the coupon discount block feature add the following div in your CART page “< div id='cap-coupon-discount'>< /div>”.For Checkout Button: To add the our checkout button please add the following div in your cart page "< div id="cap-check-out-btn">< /div>"Note:-For using the Redeem Points features and Capillary coupons features you need to use our checkout buttonAnd above setting will only work in Cart page1.2.4 To add email and mobile OTP field in the Registration page, please follow the below steps:Go to App >> CRM Capillary integration >> Config Capillary SettingsMobile OTP:Navigate to OTP verification subtab, wherein we need enable the “Mobile OTP Enable”.Enter Phone No. input field ID name in Phone otp Attribute field for fetching the phone number.Click on SaveAdd the “Send Otp” button for mobile, we need to add this class name "send-mobile-otp-btn" in your html anchor where you want to add the button in the registration page.For “adding enter otp” field and “send verify otp” button please add this class name "mobile-otp-box" in your html tag where you want to show these block in the registration page.Email OTP:Navigate to OTP verification subtab, wherein we need to enable the “Email OTP Enabled”.Enter Email input field ID name in Email otp Attribute field for feteching the email.Click on SaveAdd the “Send Otp” button for mobile, we need to add this class name "send-email-otp-btn" in your html anchor where you want to add the button in the registration page.For “adding enter otp” field and “send verify otp” button please add this class name "email-otp-box" in your html tag where you want to show these block in the registration page.1.2.5 Show “Point History” blockTo show the point history block we need to add “< div id="point-history-div">< /div>” in any pages where you would like to show the point history slab.1.2.6 Show “Coupon History” blockTo show the coupon history block we need to add “< div id="cap-coupon-div">< /div>” in any pages where you would like to show the point history slab.1.2.7 Show “Transaction History” blockTo show the Transaction history block we need to add “< div id="cap-trans">< /div>” in any pages where you would like to show the transaction history slab.1.2.8 Show “Available Points” blockTo show the Available points block we need to add "< div id="cap-point-id">< /div>" in any pages where you would like to show the Available Points slab.1.2.9 Show “Slab Name” blockTo show the Slab name block we need to add “< div id="cap-tier-id">< /div>” in any pages where you would like to show the Slab name.1.3 Mapping of fields to custom or extended fields1.3.1 Creation of Attributes from Shopify sideThis configuration allows the admin to create a custom attribute for the existing fields from the shopify panel.Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Click on Capillary Tech→ Assign Attributes

Click on Assign Attribute: Attribute type for Extended field

Status: Enabled (drop down)Attribute type (drop down) : Consists of values custom field and extended fieldAttribute Code: Give any attribute code. Ex: Middle NameCapillary Attribute Code: Give any attribute code. Ex: state"state" attribute should be added on the capillary end as well.SAVEAttribute type for Custom field:

Register a user on the front end.Give a last name and first name and save the userGo to capillary dashboard for the same user and check if the gender and state are updated

1.4 Customer Creation configuration1.4.1 Enabled Customer CreationWhen user registers to the site, User info should be updated on capillary systemFollow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >> Config Capillary settings >> CustomerEnabled Customer Creation: YES (dropdown)Submit CONFIGCreate a user on store front end

Creating customer from store front-end:

The created user will be reflected on the Shopify -> All customers

The created user will be reflected on the Capillary Byrne Dev dashboard (search for the created user[email protected])1.4.2 Disable Customer CreationWhen user is registered to the site, User info should not be updated on capillary systemFollow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >> Config Capillary settings >> CustomerEnabled Customer Creation: NO (dropdown)SAVE CONFIG

Create an user on front end siteThe created user will be reflected on the Shopify -> All customersThe created user will not be reflected on the Capillary Byrne Dev dashboard (search for the created user[email protected])

1.5 Customer Updation1.5.1 Enabled Customer UpdationWhen a user updates the name from the Shopify admin, the name should be updated on the capillary system. Customer edit is available from Shopify admin onlyFollow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerEnabled Customer Updation: YES (dropdown)Submit CONFIGNavigate to Customers -> Click on the customer, wants to editEdit Customer from Shopify admin:On updation the customer Details is updated in the Capillary system

1.5.2 Disable Customer UpdationWhen a user updates the name from the shopify admin, the name should not be updated on the capillary system.Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerEnabled Customer Updation: NO (dropdown)SAVE CONFIGNavigate to Customers -> click on customer→ Edit Contact InformationChange the name field (first name and last name) and saveThe name would be updated on the front end, shopify whereas it won't be updated on the Capillary dashboard

1.6 Loyalty Points and Slab1.6.1 Enable Loyalty Points and SlabWhen this configuration is enabled, User should be able to view the loyalty points and slab name information on the site.Follow the below configurationUser should be navigated to stores >> configuration >> Capillary tech >> CMI IntegrationScroll down to CustomerEnabled Customer Fetch: YES (dropdown)SAVE CONFIGNow go to Online Store >> Actions >> Edit CodePlease add this div in any page where you want to show the Loyalty Points "< div id="cap-point-id">< /div>"Please add this div in any page where you want to show the Slab Name "< div id="cap-tier-id">< /div>"Login to front end site, and navigate to your page where you added the above divUser should be able to view the Loyalty points and Slab Name

1.6.2 Disable Loyalty Points and SlabWhen this configuration is disabled User should not be able to view the loyalty points and slab name information on the site.Follow the below configurationUser should be navigated to stores >> configuration >> Capillary tech >> CMI IntegrationScroll down to CustomerEnabled Customer Fetch: No (dropdown)SAVE CONFIGNow go to Online Store >> Actions >> Edit CodeFor Loyalty Points Please add this div in any page where you want to show "< div id="cap-point-id">< /div>"For Slab Name Please add this div in any page where you want to show "< div id="cap-tier-id">< /div>"Login to front end site, and navigate to your page where you added the div for Slab Name & Loyalty PointsUser should not be able to view the Loyalty points and Slab Name

1.7 Success Transaction1.7.1 Enable Success transactionWhen the admin enables this configuration, if the user places any order or does the transactions capillary system should be notified.Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to TransactionsEnabled Add Transactions : YES (dropdown)Enable Customer grouping: Yes (dropdown)SAVE CONFIGPlease add this div in any page where you want to show the Transaction History "< div id="cap-trans">< /div>"Transaction History table would look like the below imagePlace an order from the frontend and navigate to your page where you added the div for Transaction HistoryUser should be able to view the Transaction History tableFor Group User success transactionOn the capillary dashboard under group purchases of primary user, should be able to see the success transaction for the Group UserOn frontend primary user should be able to view Group User’s transactions

1.7.2 Disable Success transactionWhen the admin disables this configuration, if the user places any order or does the transactions capillary system should not be notified.Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to TransactionsEnabled Add Transactions : No (dropdown)SAVE CONFIGPlace an order from the frontend and navigate to your page where you added the div for Transaction HistoryUser should not be able to view the transaction history after disabling the "Add Transactions"

1.8 Cancel Transaction (Full)1.8.1 Enable Cancel transactionWhen the admin enables this configuration, if user cancels any transaction or order, Capillary system should be notified. (Order cancellation tested from Shopify admin).Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to TransactionsEnabled Cancel Transactions: YES (dropdown)SAVE CONFIGEnable Customer grouping: Yes (dropdown)Place an order from the frontendGot to Sales >> orders >> View particular order id >> click on cancelUser should be able to view the 2 orders with amount on the frontendOne with success transaction and another with cancel transaction under transaction historyFor Group User Cancel transactionOn the capillary dashboard under group purchases of primary user, should be able to see the cancel transaction for the Group UserOn frontend primary user should be able to view Group User’s transactions

1.8.2 Disable Cancel transactionWhen the admin disables this configuration, if the user cancels any transaction or order, Capillary system should not be notified. (Order cancellation tested from Shopify admin).Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to TransactionsEnabled Cancel Transactions: No (dropdown)SAVE CONFIGPlace an order from the frontendGot to Sales >> orders >> View particular order id >> click on cancelUser should be able to view the 1 orders with amount on the frontendOne with transaction under transaction history and but no cancel transaction will show

1.9 Mapping of Transaction fields to custom or extended fields1.9.1 Creating a Transaction Attributes on Shopify adminAdmin will be able to create transaction attributes to map with custom/extended attributes of capillaryFollow the below configurationClick on Capillary Tech→ Assign Transaction Attributes

Click on Assign Transaction Attributes button

Status: Enabled (drop down)Attribute type (drop down) : Consists of values custom field and extended fieldAttribute Code: Give any transaction attribute code. Ex: total_line_items_price_set,shop_money,amountCapillary Attribute Code: Give any Capillary Transaction attribute code. Ex: cashier_nameSAVE

Attribute Code: Give any transaction attribute code. Ex: customer,default_address,country_nameCapillary Attribute Code: Give any Capillary Transaction attribute code. Ex: bill_status

Once attributes are mapped, place an order from Shopify front end.The transaction data will reflect in the Capillary Member Care section - View the transaction of the respective user.

Below are the configuration details to find out the capillary custom/extended fieldsClick on Profile icon>> Organization settingsMaster Data Management>> Data ModelCustom Fields >> View custom fields for loyalty transactions OR

Extended Fields

1.10 Tracker APIWhen a user is part of a group, tracker data will be displayed and if the user is not part of the group “Tracker Data” will be displayed as “False” in the API response.Follow the below configuration for Progress Tracker DataUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to Progress Tracker DataFill the following fieldsMinimum value of the progress BarMaximum value of the progress BarTotal Number of TierTiers of Data >> Enter the data in the json or array format, as this will be returned in API response ({1,0,100,FreeTier},{2,101,300,Bronze},{3,301,700,Silver},{4,701,100,Gold})Save the config

1.11 OTP Validation during Registration1.11.1 Enable OTP ValidationWhen the admin enables this configuration the OTP field should be displayed on the registration form ( for Mobile number and Email) based on the attributes given in the adminFollow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to OTP verificationMobile OTP Enabled: YES (dropdown)Country Code Enabled(if you are using country code selection in registration page): YES (dropdown)Email OTP Enabled: YES (dropdown)Mobile OTP Attribute: your Phone input field idEmail OTP Attribute: your Email input field idCountry Code Attribute: your country code input/selection field idSAVE CONFIGThe user should be able to view mobile number and OTP field with Generate and Validate buttonsThe user should be able to view email and OTP field with Generate and Validate buttonsEnter mobile number on the mobile fieldEnter email on the email fieldClick on generate OTP then OTP to be checked on capillary dashboard -> workbench -> Communication logs -> Search Messages By mobile.On entering valid OTP click on Validate button user should be able to registerOn entering invalid OTP and click on Validate button error message to be displayed

Mobile Field

Mobile field Invalid OTP

Mobile field Valid OTP

Email FieldEmail field Invalid OTP

Email field Valid OTP

1.11.2 Disable OTP ValidationWhen the admin disables this configuration the OTP field should not be displayed on the registration form ( for Mobile number and Email) based on the attributes given in the adminFollow the below configurationUser should be navigated to stores >> configuration >> Capillary techClick on Capillary Tech→ CRM IntegrationScroll down to OTP verificationMobile OTP Enabled: NO (dropdown)Email OTP Enabled: NO (dropdown)Mobile OTP Attribute: your Phone input field idEmail OTP Attribute: your email input field idSAVE CONFIGUser should not be displayed with OTP field, and they can register without mobile number and OTP

1.12 Group Coupon Redemption1.12.1 Enable group Coupon redemptionWhen the admin enables this configuration the Group User should be able to use the coupon of the Primary user and coupon history should be displayed based on the group on the frontend.(i.e Primary user and Group User should be able to see the same data on the coupon history page)Follow the below configurationUser should be navigated to stores >> Apps >> Capillary CRM IntegrationClick on Config Capillary SettingsScroll down to CouponGroup Redemption enabled : YES (dropdown)SAVE CONFIGOn the frontend Login with your credentialsCheck the coupon history of the primary userNow Login with Group UserCheck the coupon historyOn the checkout page the coupon of the primary user should be applied successfully by the Group User.Primary User (For Example:- Marry)

Group User (For Example:- Abi)

Capillary Dashboard Screenshot

1.12.2 Disable group Coupon redemptionWhen the admin disables this configuration, the Group User should not be able to use the coupon of the Primary user and coupon history should not be displayed based on the group on the frontend. (i.e Primary user and Group User should not be able to see the same data on the coupon history page).Follow the below configurationUser should be navigated to stores >> Apps >> Capillary CRM IntegrationClick on Config Capillary SettingsScroll down to CouponGroup Redemption enabled : No (dropdown)SAVE CONFIGOn the frontend Login with your login credentialsCheck the coupon history of the primary userNow Login with Group User login credentialsCheck the coupon historyOn the checkout page the coupon of the primary user should be applied successfully by the Group User.

Primary user

Group User

1.13 Redeem the coupons at SKU LevelWhen the user places an order for the SKU, a coupon will be issued to the user and the user will be able to redeem the coupon for the respective SKU.Follow the below stepsLogin as userPlace order for test2Check the coupon in the coupon historyAdd test2 product to the cartApply the coupon and place orderUser should be able to apply coupon successfullyIf a user adds other SKU product to cart and try to apply coupon error should be displayed.

1.14 Pilot Program1.14.1 Enable Pilot programWhen the admin enables this configuration, if the pilot program attribute value is set to “yes” then that user will be able to view all the Coupon history, Transaction history, Point history, slab information, and the user should be able to redeem coupons and points successfully.Follow the below configurationUser should be navigated to stores >> Capillary CRM IntegrationClick on Configure capillaryScroll down to Pilot programEnabled : YES (dropdown)Custom Field in Capillary: pilotCustom Field Value in Capillary: yesSAVE CONFIGUser with pilot : yes field will be able to view all the details and apply coupon successfullyUser with pilot : no field will not be able to view all the details

Pilot value: ”yes”User: Marry

Coupon Redemption

Pilot value: ”No”User: Abi

1.14.2 Disable Pilot programWhen the admin disables this configuration, both the users will not be able to view all the Coupon history,Transaction history, Point history, slab information, and the user should not be able to redeem coupons and points.Follow the below configurationo User should be navigated to stores >> configuration >> Capillary techClick on Stores→ Capillary CRM IntegrationClick on Configure capillaryScroll down to Pilot programEnabled : No (dropdown)Custom Field in Capillary: pilotCustom Field Value in Capillary: noSAVE CONFIGUser with pilot : yes field will be able to view all the details and apply coupon successfullyUser with pilot : no field will not be able to view all the details

1.15 Points Redemption1.15.1 Enable Points redemptionWhen the admin enables this configuration the Points field should be displayed on the cartFollow the below configurationUser should be navigated to stores >> Capillary CRM IntegrationClick on Configure capillaryScroll down to PointEnabled : YES (dropdown)Set Minimum redeemable pointsset Maximum redeemableSet Multiples of Redeemable Points can be claimedSAVE CONFIG

Place an order in the front end, add a product to cart and navigate to cart

1.15.2 Disable Points redemptionFollow the below configurationUser should be navigated to stores >> Capillary CRM IntegrationClick on Configure capillaryScroll down to PointEnabled : No (dropdown)SAVE CONFIG

Go to Front End, add an order to the cart and navigate to the cart

End of documentHomeGeneral AuthenticateConfig Capillary SettingsCapillary TechSuccess! Configured!Faild! Something went wrong!

1. SHOPIFY USER FLOWS1.1 AuthenticationClick on Apps -> Capillary CRM Integration

Click on General AuthenticateProvide basic AuthenticationClient ID: ****************Client Secret Key: **************Base URL of the API: Please contact to the Capillary TeamSubmit CONFIG

View Online store on the front-end:Click on the Online storesClick on the View your store

1.2 Steps to Configure Themes1.2.1 Turn on the App embedsClick on the Online Store >> CustomizeSelect “Theme settings” and click on “App embeds”.Turn on the toggle buttons “Capillary - Setting” and “Capillary - Includes ”. If you are not using Jquery in your code then please turn on the "Capillary - Jquery Files".

1.2.2 To Create Capillary CRM integration CART page With blocks, please follow the below steps:Click on the Online Store >> CustomizeFor Using capillary Coupon and Redeem Points, it is required to add our App block and also our checkout button.Search for Cart in search box.Click on “Add block” and you can configure the blocks you need in your Cart Page.

1.2.3 To Create Capillary CRM integration CART page Without blocks, please follow the below steps:For Redeem point feature: To add the redeem point feature please add the following div in your CART page “< div id='cap-cart-point'>< /div>”.For Coupon feature: To add the coupon feature please add the following div in your CART page “ < div id='cap-cart-coupon'>< /div> ”.For showing the Redeem points discount block feature: To add the Redeem points discount block feature add the following div in your CART page “ < div id='cap-redeem-point-discount-value'>< /div> ”.For showing coupon discount feature: To add the coupon discount block feature add the following div in your CART page “< div id='cap-coupon-discount'>< /div>”.For Checkout Button: To add the our checkout button please add the following div in your cart page "< div id="cap-check-out-btn">< /div>"Note:-For using the Redeem Points features and Capillary coupons features you need to use our checkout buttonAnd above setting will only work in Cart page1.2.4 To add email and mobile OTP field in the Registration page, please follow the below steps:Go to App >> CRM Capillary integration >> Config Capillary SettingsMobile OTP:Navigate to OTP verification subtab, wherein we need enable the “Mobile OTP Enable”.Enter Phone No. input field ID name in Phone otp Attribute field for fetching the phone number.Click on SaveAdd the “Send Otp” button for mobile, we need to add this class name "send-mobile-otp-btn" in your html anchor where you want to add the button in the registration page.For “adding enter otp” field and “send verify otp” button please add this class name "mobile-otp-box" in your html tag where you want to show these block in the registration page.Email OTP:Navigate to OTP verification subtab, wherein we need to enable the “Email OTP Enabled”.Enter Email input field ID name in Email otp Attribute field for feteching the email.Click on SaveAdd the “Send Otp” button for mobile, we need to add this class name "send-email-otp-btn" in your html anchor where you want to add the button in the registration page.For “adding enter otp” field and “send verify otp” button please add this class name "email-otp-box" in your html tag where you want to show these block in the registration page.1.2.5 Show “Point History” blockTo show the point history block we need to add “< div id="point-history-div">< /div>” in any pages where you would like to show the point history slab.1.2.6 Show “Coupon History” blockTo show the coupon history block we need to add “< div id="cap-coupon-div">< /div>” in any pages where you would like to show the point history slab.1.2.7 Show “Transaction History” blockTo show the Transaction history block we need to add “< div id="cap-trans">< /div>” in any pages where you would like to show the transaction history slab.1.2.8 Show “Available Points” blockTo show the Available points block we need to add "< div id="cap-point-id">< /div>" in any pages where you would like to show the Available Points slab.1.2.9 Show “Slab Name” blockTo show the Slab name block we need to add “< div id="cap-tier-id">< /div>” in any pages where you would like to show the Slab name.1.3 Mapping of fields to custom or extended fields1.3.1 Creation of Attributes from Shopify sideThis configuration allows the admin to create a custom attribute for the existing fields from the shopify panel.Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Click on Capillary Tech→ Assign Attributes

Click on Assign Attribute: Attribute type for Extended field

Status: Enabled (drop down)Attribute type (drop down) : Consists of values custom field and extended fieldAttribute Code: Give any attribute code. Ex: Middle NameCapillary Attribute Code: Give any attribute code. Ex: state"state" attribute should be added on the capillary end as well.SAVEAttribute type for Custom field:

Register a user on the front end.Give a last name and first name and save the userGo to capillary dashboard for the same user and check if the gender and state are updated

1.4 Customer Creation configuration1.4.1 Enabled Customer CreationWhen user registers to the site, User info should be updated on capillary systemFollow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >> Config Capillary settings >> CustomerEnabled Customer Creation: YES (dropdown)Submit CONFIGCreate a user on store front end

Creating customer from store front-end:

The created user will be reflected on the Shopify -> All customers

The created user will be reflected on the Capillary Byrne Dev dashboard (search for the created user[email protected])1.4.2 Disable Customer CreationWhen user is registered to the site, User info should not be updated on capillary systemFollow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >> Config Capillary settings >> CustomerEnabled Customer Creation: NO (dropdown)SAVE CONFIG

Create an user on front end siteThe created user will be reflected on the Shopify -> All customersThe created user will not be reflected on the Capillary Byrne Dev dashboard (search for the created user[email protected])

1.5 Customer Updation1.5.1 Enabled Customer UpdationWhen a user updates the name from the Shopify admin, the name should be updated on the capillary system. Customer edit is available from Shopify admin onlyFollow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerEnabled Customer Updation: YES (dropdown)Submit CONFIGNavigate to Customers -> Click on the customer, wants to editEdit Customer from Shopify admin:On updation the customer Details is updated in the Capillary system

1.5.2 Disable Customer UpdationWhen a user updates the name from the shopify admin, the name should not be updated on the capillary system.Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerEnabled Customer Updation: NO (dropdown)SAVE CONFIGNavigate to Customers -> click on customer→ Edit Contact InformationChange the name field (first name and last name) and saveThe name would be updated on the front end, shopify whereas it won't be updated on the Capillary dashboard

1.6 Loyalty Points and Slab1.6.1 Enable Loyalty Points and SlabWhen this configuration is enabled, User should be able to view the loyalty points and slab name information on the site.Follow the below configurationUser should be navigated to stores >> configuration >> Capillary tech >> CMI IntegrationScroll down to CustomerEnabled Customer Fetch: YES (dropdown)SAVE CONFIGNow go to Online Store >> Actions >> Edit CodePlease add this div in any page where you want to show the Loyalty Points "< div id="cap-point-id">< /div>"Please add this div in any page where you want to show the Slab Name "< div id="cap-tier-id">< /div>"Login to front end site, and navigate to your page where you added the above divUser should be able to view the Loyalty points and Slab Name

1.6.2 Disable Loyalty Points and SlabWhen this configuration is disabled User should not be able to view the loyalty points and slab name information on the site.Follow the below configurationUser should be navigated to stores >> configuration >> Capillary tech >> CMI IntegrationScroll down to CustomerEnabled Customer Fetch: No (dropdown)SAVE CONFIGNow go to Online Store >> Actions >> Edit CodeFor Loyalty Points Please add this div in any page where you want to show "< div id="cap-point-id">< /div>"For Slab Name Please add this div in any page where you want to show "< div id="cap-tier-id">< /div>"Login to front end site, and navigate to your page where you added the div for Slab Name & Loyalty PointsUser should not be able to view the Loyalty points and Slab Name

1.7 Success Transaction1.7.1 Enable Success transactionWhen the admin enables this configuration, if the user places any order or does the transactions capillary system should be notified.Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to TransactionsEnabled Add Transactions : YES (dropdown)Enable Customer grouping: Yes (dropdown)SAVE CONFIGPlease add this div in any page where you want to show the Transaction History "< div id="cap-trans">< /div>"Transaction History table would look like the below imagePlace an order from the frontend and navigate to your page where you added the div for Transaction HistoryUser should be able to view the Transaction History tableFor Group User success transactionOn the capillary dashboard under group purchases of primary user, should be able to see the success transaction for the Group UserOn frontend primary user should be able to view Group User’s transactions

1.7.2 Disable Success transactionWhen the admin disables this configuration, if the user places any order or does the transactions capillary system should not be notified.Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to TransactionsEnabled Add Transactions : No (dropdown)SAVE CONFIGPlace an order from the frontend and navigate to your page where you added the div for Transaction HistoryUser should not be able to view the transaction history after disabling the "Add Transactions"

1.8 Cancel Transaction (Full)1.8.1 Enable Cancel transactionWhen the admin enables this configuration, if user cancels any transaction or order, Capillary system should be notified. (Order cancellation tested from Shopify admin).Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to TransactionsEnabled Cancel Transactions: YES (dropdown)SAVE CONFIGEnable Customer grouping: Yes (dropdown)Place an order from the frontendGot to Sales >> orders >> View particular order id >> click on cancelUser should be able to view the 2 orders with amount on the frontendOne with success transaction and another with cancel transaction under transaction historyFor Group User Cancel transactionOn the capillary dashboard under group purchases of primary user, should be able to see the cancel transaction for the Group UserOn frontend primary user should be able to view Group User’s transactions

1.8.2 Disable Cancel transactionWhen the admin disables this configuration, if the user cancels any transaction or order, Capillary system should not be notified. (Order cancellation tested from Shopify admin).Follow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to TransactionsEnabled Cancel Transactions: No (dropdown)SAVE CONFIGPlace an order from the frontendGot to Sales >> orders >> View particular order id >> click on cancelUser should be able to view the 1 orders with amount on the frontendOne with transaction under transaction history and but no cancel transaction will show

1.9 Mapping of Transaction fields to custom or extended fields1.9.1 Creating a Transaction Attributes on Shopify adminAdmin will be able to create transaction attributes to map with custom/extended attributes of capillaryFollow the below configurationClick on Capillary Tech→ Assign Transaction Attributes

Click on Assign Transaction Attributes button

Status: Enabled (drop down)Attribute type (drop down) : Consists of values custom field and extended fieldAttribute Code: Give any transaction attribute code. Ex: total_line_items_price_set,shop_money,amountCapillary Attribute Code: Give any Capillary Transaction attribute code. Ex: cashier_nameSAVE

Attribute Code: Give any transaction attribute code. Ex: customer,default_address,country_nameCapillary Attribute Code: Give any Capillary Transaction attribute code. Ex: bill_status

Once attributes are mapped, place an order from Shopify front end.The transaction data will reflect in the Capillary Member Care section - View the transaction of the respective user.

Below are the configuration details to find out the capillary custom/extended fieldsClick on Profile icon>> Organization settingsMaster Data Management>> Data ModelCustom Fields >> View custom fields for loyalty transactions OR

Extended Fields

1.10 Tracker APIWhen a user is part of a group, tracker data will be displayed and if the user is not part of the group “Tracker Data” will be displayed as “False” in the API response.Follow the below configuration for Progress Tracker DataUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to Progress Tracker DataFill the following fieldsMinimum value of the progress BarMaximum value of the progress BarTotal Number of TierTiers of Data >> Enter the data in the json or array format, as this will be returned in API response ({1,0,100,FreeTier},{2,101,300,Bronze},{3,301,700,Silver},{4,701,100,Gold})Save the config

1.11 OTP Validation during Registration1.11.1 Enable OTP ValidationWhen the admin enables this configuration the OTP field should be displayed on the registration form ( for Mobile number and Email) based on the attributes given in the adminFollow the below configurationUser should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> CustomerClick on Capillary Tech→ CRM IntegrationScroll down to OTP verificationMobile OTP Enabled: YES (dropdown)Country Code Enabled(if you are using country code selection in registration page): YES (dropdown)Email OTP Enabled: YES (dropdown)Mobile OTP Attribute: your Phone input field idEmail OTP Attribute: your Email input field idCountry Code Attribute: your country code input/selection field idSAVE CONFIGThe user should be able to view mobile number and OTP field with Generate and Validate buttonsThe user should be able to view email and OTP field with Generate and Validate buttonsEnter mobile number on the mobile fieldEnter email on the email fieldClick on generate OTP then OTP to be checked on capillary dashboard -> workbench -> Communication logs -> Search Messages By mobile.On entering valid OTP click on Validate button user should be able to registerOn entering invalid OTP and click on Validate button error message to be displayed

Mobile Field

Mobile field Invalid OTP

Mobile field Valid OTP

Email FieldEmail field Invalid OTP

Email field Valid OTP

1.11.2 Disable OTP ValidationWhen the admin disables this configuration the OTP field should not be displayed on the registration form ( for Mobile number and Email) based on the attributes given in the adminFollow the below configurationUser should be navigated to stores >> configuration >> Capillary techClick on Capillary Tech→ CRM IntegrationScroll down to OTP verificationMobile OTP Enabled: NO (dropdown)Email OTP Enabled: NO (dropdown)Mobile OTP Attribute: your Phone input field idEmail OTP Attribute: your email input field idSAVE CONFIGUser should not be displayed with OTP field, and they can register without mobile number and OTP

1.12 Group Coupon Redemption1.12.1 Enable group Coupon redemptionWhen the admin enables this configuration the Group User should be able to use the coupon of the Primary user and coupon history should be displayed based on the group on the frontend.(i.e Primary user and Group User should be able to see the same data on the coupon history page)Follow the below configurationUser should be navigated to stores >> Apps >> Capillary CRM IntegrationClick on Config Capillary SettingsScroll down to CouponGroup Redemption enabled : YES (dropdown)SAVE CONFIGOn the frontend Login with your credentialsCheck the coupon history of the primary userNow Login with Group UserCheck the coupon historyOn the checkout page the coupon of the primary user should be applied successfully by the Group User.Primary User (For Example:- Marry)

Group User (For Example:- Abi)

Capillary Dashboard Screenshot

1.12.2 Disable group Coupon redemptionWhen the admin disables this configuration, the Group User should not be able to use the coupon of the Primary user and coupon history should not be displayed based on the group on the frontend. (i.e Primary user and Group User should not be able to see the same data on the coupon history page).Follow the below configurationUser should be navigated to stores >> Apps >> Capillary CRM IntegrationClick on Config Capillary SettingsScroll down to CouponGroup Redemption enabled : No (dropdown)SAVE CONFIGOn the frontend Login with your login credentialsCheck the coupon history of the primary userNow Login with Group User login credentialsCheck the coupon historyOn the checkout page the coupon of the primary user should be applied successfully by the Group User.

Primary user

Group User

1.13 Redeem the coupons at SKU LevelWhen the user places an order for the SKU, a coupon will be issued to the user and the user will be able to redeem the coupon for the respective SKU.Follow the below stepsLogin as userPlace order for test2Check the coupon in the coupon historyAdd test2 product to the cartApply the coupon and place orderUser should be able to apply coupon successfullyIf a user adds other SKU product to cart and try to apply coupon error should be displayed.

1.14 Pilot Program1.14.1 Enable Pilot programWhen the admin enables this configuration, if the pilot program attribute value is set to “yes” then that user will be able to view all the Coupon history, Transaction history, Point history, slab information, and the user should be able to redeem coupons and points successfully.Follow the below configurationUser should be navigated to stores >> Capillary CRM IntegrationClick on Configure capillaryScroll down to Pilot programEnabled : YES (dropdown)Custom Field in Capillary: pilotCustom Field Value in Capillary: yesSAVE CONFIGUser with pilot : yes field will be able to view all the details and apply coupon successfullyUser with pilot : no field will not be able to view all the details

Pilot value: ”yes”User: Marry

Coupon Redemption

Pilot value: ”No”User: Abi

1.14.2 Disable Pilot programWhen the admin disables this configuration, both the users will not be able to view all the Coupon history,Transaction history, Point history, slab information, and the user should not be able to redeem coupons and points.Follow the below configurationo User should be navigated to stores >> configuration >> Capillary techClick on Stores→ Capillary CRM IntegrationClick on Configure capillaryScroll down to Pilot programEnabled : No (dropdown)Custom Field in Capillary: pilotCustom Field Value in Capillary: noSAVE CONFIGUser with pilot : yes field will be able to view all the details and apply coupon successfullyUser with pilot : no field will not be able to view all the details

1.15 Points Redemption1.15.1 Enable Points redemptionWhen the admin enables this configuration the Points field should be displayed on the cartFollow the below configurationUser should be navigated to stores >> Capillary CRM IntegrationClick on Configure capillaryScroll down to PointEnabled : YES (dropdown)Set Minimum redeemable pointsset Maximum redeemableSet Multiples of Redeemable Points can be claimedSAVE CONFIG

Place an order in the front end, add a product to cart and navigate to cart

1.15.2 Disable Points redemptionFollow the below configurationUser should be navigated to stores >> Capillary CRM IntegrationClick on Configure capillaryScroll down to PointEnabled : No (dropdown)SAVE CONFIG

Go to Front End, add an order to the cart and navigate to the cart

End of docume