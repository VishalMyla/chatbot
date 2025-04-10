# Reset Password Using Import

To reset the passwords for admin users on respective Org, perform the following:

1. From the Organization settings, navigate toMaster Data Management>Data Import>Importprofile, and upload the CSV file containing users for password reset.

2. ClickSubmit.

![](https://files.readme.io/7990a93-Upload_CSV.png)

1. From theChoose profiledrop-down, selectAdminUsers.

2. Select a template for the mapping from theChoose templatedrop-down or select theCreate new templatecheck box to create a new template.

3. SelectSubmit.

4. In theConfigure Template, selectpasswordand selectadd

![](https://files.readme.io/be052a9-Set_up_import.png)

1. Select the appropriate column from the CSV file for each necessary field and configure the field mappings for resetting passwords. For example, from theUsername(Email)drop-down, select the column name that has the customer's email information.

2. SelectSubmit.

### Sample CSV for Password Reset user's

The password must contain:

- At least one uppercase letter (CAPS).

- At least one numeric character.

- At least one special character.

- A minimum of 9 characters long.

![](https://files.readme.io/be542c0-Screenshot_35.png)

Updated6 months ago