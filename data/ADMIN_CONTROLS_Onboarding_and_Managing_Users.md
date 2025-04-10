# Onboarding and Managing Users

Users can be onboarded to the system through two methods:

- Individual Email Addresses:Add users one-by-one by entering their email addresses. This approach is suitable for onboarding a small number of users.

- Bulk User Import: Add multiple users at once by uploading a CSV file containing user details.This method is efficient for onboarding a large number of users.

# Adding Users

## Prerequisites

- CAP POC:Ensure a CAP POC is set for the organization. To set, navigate to Organization setings > Organization set up > Organization profile > Organization POC. This is required to send an email for setting a password for the user.

CAP POC:Ensure a CAP POC is set for the organization. To set, navigate to Organization setings > Organization set up > Organization profile > Organization POC. This is required to send an email for setting a password for the user.

![](https://files.readme.io/37f37e6f26b822e2d54fa65480520d2a78e2f50447f51a2924672ea9b0a56464-image.png)

- Roles Definition:Define the role of the organization. The roles below should be present in small cases.Note:The case sensitivity in the org roles will be removed in future releases.Org Level - Access to the entire organization-level data.Store Level - Access only to store-level dataZone Level - Access only to a zone level dataConcept Level - Access only to concept-level data

Roles Definition:Define the role of the organization. The roles below should be present in small cases.Note:The case sensitivity in the org roles will be removed in future releases.

- Org Level - Access to the entire organization-level data.

- Store Level - Access only to store-level data

- Zone Level - Access only to a zone level data

- Concept Level - Access only to concept-level data

![](https://files.readme.io/1068e2a-Roles.png)

## Using Individual Email Addresses

This feature enables you to add users by entering their email IDs. All email addresses will receive the same level of permissions chosen in this process. A maximum of 10 emails can be added at once. For adding more users, the bulk user upload feature is available to create users in bulk efficiently.

Perform the following:

> 🚧Admin access requiredYou need to have org access to add the users.

## 🚧Admin access required

Admin access required

You need to have org access to add the users.

1. ClickAdd new user.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/cfa0fca5-79c5-4dd7-9969-801fce541155.png)

1. SelectAdd with email addressesand clickContinue.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/4b7cdca8-3e58-4d3a-836d-19d1ae4fca8a.png)

1. Enter the email addresses one by one in this text box and click "enter" on your keyboard after typing each email. A maximum of 10 emails can be added.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/983b95ee-b18b-49c2-86b5-a10029114709.png)

1. Select the User Type and clickContinue. Please note that it is mandatory to assign a user type to each user.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/c4706865-d9e2-421f-9f8e-8e19f399ef5c.png)

1. ForStandard users- Select the entities to which you want to give access for those user(s) and clickContinue. You can give access to the entire Organisation or certain Org units or Stores.Note: Organisation owners will have access to the entire org by default, and hence there is no need to select any entity for an Org owner.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/e9ded079-16c9-44ec-8cca-2ea884a20c18.png)

1. (Applicable for Standard users) Choose the relevant permission set or you could alsocreate a new permission setand clickContinue.Org owners will have full authority, so there is no need to select any permission set for an org owner.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/0c76d029-1667-4ded-b083-869276a8d0f0.png)

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/683ca5c6-0c07-42d9-972f-cf0c51875e59.png)

1. ClickSend invite.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/b99be709-0cce-46d6-89f8-c968ba9e59b7.png)

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/2aa39f8a-1ac4-4532-a602-63a640b86f8a.png)

Once the Send Invite button is clicked, an email is triggered to the user's email address to set the user password. If the automatic email delivery fails or the user has not received the email, you cancopy the invite link and send it manually. For information on password requirements, refer todocumentation on the password requirements.

## Adding Bulk Users

You can use the bulk-upload option to add users in bulk. With the bulk upload, you can have different permissions mapped to different users. A maximum of 200 users can be added using bulk upload.

To add the users in bulk, perform the following:

1. ClickAdd new user.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/7c83c4ae-9f98-4164-b4bb-5920f2e24b55.png)

1. Select the bulk upload option.

![](https://files.readme.io/275a1ba-Bulk_upload_user.png)

1. Upload the CSV file. You can download the sample file, enter the values, and you can upload the same file. You can have multiple people on this list, and can also have different permissions for each person. So that way, you can customize permission for different users through this bulk upload flow.emailEmail ID of the useruserRoleA designation of the user. For example, admin.groupNameIf applicable, the user group to which the user is associated with.titleTitle of the user. For example, Mr, Miss.firstNameFirst name of the usermiddleNameMiddle name of the userlastNameLast name of the usermobileMobile number of the useraccessibleEntitiesEntities to which the user will have access. Organization, Org units/Concepts, Stores, Zones.userTypeThe user type. Standard or Org owner.

Upload the CSV file. You can download the sample file, enter the values, and you can upload the same file. You can have multiple people on this list, and can also have different permissions for each person. So that way, you can customize permission for different users through this bulk upload flow.

|  |  |

| --- | --- |

| email | Email ID of the user |

| userRole | A designation of the user. For example, admin. |

| groupName | If applicable, the user group to which the user is associated with. |

| title | Title of the user. For example, Mr, Miss. |

| firstName | First name of the user |

| middleName | Middle name of the user |

| lastName | Last name of the user |

| mobile | Mobile number of the user |

| accessibleEntities | Entities to which the user will have access. Organization, Org units/Concepts, Stores, Zones. |

| userType | The user type. Standard or Org owner. |



![](https://files.readme.io/9598914-CSV_file.png)

1. ClickCreate user(s). An email will be sent to the registered user to set the user password.  If the automatic email delivery fails or the user has not received the email, you cancopy the invite link and send it manually. For information on password requirements, refer todocumentation on the password requirements.

## Sending User Registration Invite Link Manually

If the automatic email notification fails to send, you can manually send the registration invite link to the user. Follow these steps:

1. Navigate to the User List page.

2. Locate the user's row and click the kebab menu (⋮).

3. Select theCopy invite linkfrom the menu options.

Once you have copied the link, you can:

- Send it to the user through your preferred communication channel

- Verify the link by pasting it in a browser - it should direct to the password reset page for that user

Note:When the user clicks this link, they will be taken to a password reset page to complete their registration

![](https://files.readme.io/230bb2181ab759417f36452acdf96ceb2750c7336341c1eb765c3427aea26ff5-Send_Invite_Link.gif)

> 🚧NoteThe invite link is valid for 24 hours from the time it was created. You can create a new invite link and share with the user.

## 🚧Note

Note

The invite link is valid for 24 hours from the time it was created. You can create a new invite link and share with the user.

# Managing Users

## Viewing Users

You can view the user list on the Onboarding users' homepage. You can also export the users' list. The users list includes the following details:

- Name and Email address of the user

- User type

- StatusActive indicates that the user is activePending indicates that the user has received the invite to join the organisation but has not joinedDeactivated indicates that the user is deactivated.

- Active indicates that the user is active

- Pending indicates that the user has received the invite to join the organisation but has not joined

- Deactivated indicates that the user is deactivated.

Note: User status filter applies to both proxy and original users.

![](https://files.readme.io/993e67d-users_list.png)

## Exporting Users List

You can export the present users' list of the org in a CSV format. The CSV file contains the following details:

- First name

- Last name

- Email address

- Mobile

- Status

- Created on

- Created by

- Last login

- Is cap tech user - Indicates if the user is a capillary tech user. This is identified using the email address of the user.

Note- Export function now respects the proxy user toggle.If proxy users are included in the list, they will also appear in the export.

![](https://files.readme.io/d04ca8a-Export_users.png)

## Updating Users

You can update the users one by one or in bulk.

### Updating Users Individually

To edit a single user,

1. Navigate to the User List page.

2. Locate the user's row and click the kebab menu (⋮).

3. Select Edit.

4. Make the required changes and clickSave Changes.

![](https://files.readme.io/b2fb957034a9234063a0f6eb91537a0f827fe710873fed294acbe82f41ae01c7-Editing_Instructions_Guide.gif)

### Updating Users in Bulk

1. Select theBulk update usersoption from the user listing page:

Select theBulk update usersoption from the user listing page:

2. Upload file with relevant fields to update user details:

Upload file with relevant fields to update user details:

![](https://files.readme.io/d0a2eaf-Screenshot_2024-05-14_at_10.06.15_PM.png)

![](https://files.readme.io/7580738-Screenshot_2024-05-14_at_10.06.29_PM.png)

1. ClickDone.

Note:Updating user permission will append or add to the existing permissions.

## Removing a User

You can remove users individually or multiple users together by selecting 1 or many user(s) from the user list available on UI. To remove, on the user listing page, select the user and clickRemove from organization.

![](https://files.readme.io/c61fe72-Screenshot_2024-05-14_at_9.59.43_PM.png)

# Password Requirements

The password set by users must adhere to the following guidelines:

## Password Complexity Requirements

- Minimum length of 9 characters

- Includes at least:one uppercase letterone numeric digit1=one special character (e.g., !, @, #, $)

- one uppercase letter

- one numeric digit

- 1=one special character (e.g., !, @, #, $)

- Cannot be the same as the user's username

## Password History Restrictions

- Cannot match any of the user's last 4 previously used passwords

Updated27 days ago