# Managing Permission for Users in Multiple Orgs

A user created in one organization (originating org) can be granted access to other orgs. Users who were not originally created in an org but have access to it are calledproxy users. By default, when a user is given access to another org, their permissions from the originating org are inherited. However, their permissions in each assigned org can be managed separately as needed.

# Providing Access to a User to Multiple orgs

Perform the following to provide access to multiple orgs for a user who is created in an org.

1. Navigate toOrganisation Settings > Security and Audit > Configure Access Control > Change The User Permission.

Navigate toOrganisation Settings > Security and Audit > Configure Access Control > Change The User Permission.

![](https://files.readme.io/b32c4437721a234479d37ab01e7bde83a1709092ce20cdacd9280bd9a09a0ba1-image.png)

1. Expand theChange the User Permissionssection and search for the user for whom you want to provide access to an org.

Expand theChange the User Permissionssection and search for the user for whom you want to provide access to an org.

![](https://files.readme.io/9e8b5614ef14a922bfc6bfe2158fbcf72a5595d4a98adb6aa844e8e7e8616fea-image.png)

2. ClickManagethat's present in the Proxy Org column.

ClickManagethat's present in the Proxy Org column.

![](https://files.readme.io/f554a77d6907d5514ccb8194fed3071eb0b6f95acaf55b64ad46896a340ec41b-image.png)

3. A list of available organizations will appear in the left box. Select the organization you want to grant access and clickAdd.

A list of available organizations will appear in the left box. Select the organization you want to grant access and clickAdd.

![](https://files.readme.io/0e215a9988e699fd11349a31b6dec7c3e304ea37c687bd0a6e53c34092cd94a8-image.png)

1. Select the check boxCheck for Add &  Untick to Removeand clickSubmit.

Once submitted, the proxy user will be successfully granted access to the selected organization within the Multi-Org setup.

# Viewing Proxy Users

Once the proxy user is created and access is granted, follow these steps to verify their presence in the assigned organization and manage their visibility settings.

1. On the User Management page, use theOrg SelectionDropdown at the top to select the organization where the proxy user was added (e.g., Client Merge&Merge).

2. Click onSettings iconat the top-left corner of the page.

![](https://files.readme.io/600414d7497b75e32632b418f54f21d075ae471e2b10d64a3cc413e754d4cb83-Screenshot_2025-03-14_102901.png)

1. Expand the "Show Proxy Organization Users" tab. Use the toggle switch to enable or disable proxy user visibility:Toggle OFF → Only original users of the selected org will be displayed.Toggle ON → Proxy users will also be included in the user list.

- Toggle OFF → Only original users of the selected org will be displayed.

- Toggle ON → Proxy users will also be included in the user list.

4. ClickSave Changesto apply the setting.

![](https://files.readme.io/e68df8fd3629abf6bc81eb672fbd953c1743d01aba4993cfeecace30a0fab1d6-Screenshot_2025-03-14_103115.png)

Once enabled, proxy users will be displayed alongside original org users in the user list, allowing admins to manage them as needed.

# Exporting Proxy Users

Export function now respects the proxy user toggle. If proxy users are included in the list, they will also appear in the export. Refer to the documentation on exporting,here.

# Managing Permission for Proxy Users

1. A proxy user inherits permissions from their base organization by default. To modify them, go toOrganization Setup > User Management, select the organization, and find the proxy user.

2. In thePermissions tab, a note states: "Permissions are from the user's base org. Edit to set permissions for this org." ClickEditto override inherited permissions. Refer to thisdocumentationfor assigning permission sets.

![](https://files.readme.io/e87dc4baa27c510aec2b5107418b7c7895c3d86287753104652e36d4fd5ddd07-Screenshot_2025-03-14_104424.png)

Updated14 days ago