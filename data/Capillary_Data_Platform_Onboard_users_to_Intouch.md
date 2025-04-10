# Onboard users to Intouch

This template enables you to onboard users in bulk to Intouch with the following attributes:

- User role

- Entities to which the user has access

- User type

- Security / Access groups to which the user has access

> 📘NoteThis is applicable only for external users and cannot be used to add Capillary users.

## 📘Note

Note

This is applicable only for external users and cannot be used to add Capillary users.

# Configuring the template

To configure the template, perform the below steps/actions:

1. In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theTransform Datablock, map the API fields with the source CSV file. SeeTransform data. The below parameters are mandatory:ParameterDescriptionfirstNameName of the user.reportsToThe email ID of the existing user to whom the user reports. You can also map all users whom you are onboarding to a single user.emailEmail ID of the user.userRoleRole of the user. Enter a valid role defined for this org inIntouch > Organization setup > Roles & Privileges. The API throws an error if the role entered does not belong to the user's org. This determines the level of data access the user has. For example, a concept-level role indicates that the user will have access to concept-level data.accessibleEntitiesEntities to which the user will have access. If the role is concept-level, the org units to which the user will have access are defined and separated by a comma. Example - orgunit1, orgunit2. This is not required if the user role is organisation level where the user will have access to entire org-level data.userTypeDefines the user type. The supported values are Brand User, Brand User - Reports Only, and Brand POC.Brand POC(Administrator) - A brand POC is a type of user who can add other users, and approve or reject the addition of users.Brand user(Standard user) - A brand user is a type of user in the system who cannot add new users or approve or reject existing users but they can configure or publish the campaigns according to their user permission.Brand user - reports only- A brand user - reports only is a type of user that will not be able to access the inTouch platform but will get insights plus report notifications, which they can click on and view.groupNameAccess group/Security group name to which the user will be assigned. This access group name should match with the access group name created in the Organizational Security Groups. The access groups are defined inOrganisation settings > Security & Audit > Access.Note:For groupName and permission-related information, contact the access team for access.

In theTransform Datablock, map the API fields with the source CSV file. SeeTransform data. The below parameters are mandatory:

| Parameter | Description |

| --- | --- |

| firstName | Name of the user. |

| reportsTo | The email ID of the existing user to whom the user reports. You can also map all users whom you are onboarding to a single user. |

| email | Email ID of the user. |

| userRole | Role of the user. Enter a valid role defined for this org inIntouch > Organization setup > Roles & Privileges. The API throws an error if the role entered does not belong to the user's org. This determines the level of data access the user has. For example, a concept-level role indicates that the user will have access to concept-level data. |

| accessibleEntities | Entities to which the user will have access. If the role is concept-level, the org units to which the user will have access are defined and separated by a comma. Example - orgunit1, orgunit2. This is not required if the user role is organisation level where the user will have access to entire org-level data. |

| userType | Defines the user type. The supported values are Brand User, Brand User - Reports Only, and Brand POC.Brand POC(Administrator) - A brand POC is a type of user who can add other users, and approve or reject the addition of users.Brand user(Standard user) - A brand user is a type of user in the system who cannot add new users or approve or reject existing users but they can configure or publish the campaigns according to their user permission.Brand user - reports only- A brand user - reports only is a type of user that will not be able to access the inTouch platform but will get insights plus report notifications, which they can click on and view. |

| groupName | Access group/Security group name to which the user will be assigned. This access group name should match with the access group name created in the Organizational Security Groups. The access groups are defined inOrganisation settings > Security & Audit > Access.Note:For groupName and permission-related information, contact the access team for access. |



4. In theConnect-to-destinationblock, enter the API endpoint details. SeeConnect to destination.For this template, the API used is/intouch-ui/api/v1/users. By default, this block is auto-filled and need not be modified.

In theConnect-to-destinationblock, enter the API endpoint details. SeeConnect to destination.For this template, the API used is/intouch-ui/api/v1/users. By default, this block is auto-filled and need not be modified.

`/intouch-ui/api/v1/users`

5. In theTrigger sectionblock, enter the details to schedule the trigger. Refer to the documentation on schedulingTrigger.

In theTrigger sectionblock, enter the details to schedule the trigger. Refer to the documentation on schedulingTrigger.

Updatedabout 1 year ago