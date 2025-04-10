# DIY Templates

# Introduction

You can create custom Connect+ templates according to your specific requirements. The DIY template uses the Neo API extension to generate the necessary payload for API calls.

## Example scenario

Consider a brand that wants to create rewards in bulk, including custom fields vendor details and specific status codes. The addition of custom field information is not part of the standard Add Reward Connect+ templates. However, with the DIY template, you can create a custom template that captures these additional fields, customising the rewards creation process according to their needs.

## Key benefits

The key benefits of using DIY template creation are:

- Flexibility in template creation: The DIY template allows you to create templates based on your specific needs without requiring developer involvement.

- Reduced developer effort: The DIY template minimises developers' time and effort in creating new templates.

# Creating a Template

Below is a flow chart indicating the steps involved in creating a Connect+ DIY template.

![](https://files.readme.io/ac443c4abb325fc75272b2ac70af025adbb218bdf44d7913b003add6bbd2fe1f-C_v3.png)

## Pre-requisites

- API tester tools like Postman or Talend

API tester tools like Postman or Talend

- Authorisation credentials - Currently support Google authentication.

Authorisation credentials - Currently support Google authentication.

- Active session of the Connect+ for the respective org - The API tester retrieves credentials from an open and active session of the Connect+ portal for the respective organisation. Therefore, the Connect+ portal must remain open in a browser, active, and not timed out.

Active session of the Connect+ for the respective org - The API tester retrieves credentials from an open and active session of the Connect+ portal for the respective organisation. Therefore, the Connect+ portal must remain open in a browser, active, and not timed out.

- Neo dataflow to create the payload from the JSON format available within the same organisation where you create the template.

Neo dataflow to create the payload from the JSON format available within the same organisation where you create the template.

- APIs to create the template. The following APIs are required:GET workspacesGET processorsPOST Create DIY template

APIs to create the template. The following APIs are required:

- GET workspaces

- GET processors

- POST Create DIY template

The following sections guide you through the steps in creating a Connect+ template.

## Creating the structure for the template

To create the structure for the template,

1. Open Connect+ UI using the URLhttps://{host_name}.connectplus.capillarytech.com/connect/ui}/connect/ui/and select the organisation in which the template needs to be created.This is required for authorisation.

2. Get the workspace ID] using theGET workspacesAPI.

3. Retrieve the blocks supported for template creation using theGet ProcessorAPI.

4. Create the structure of the template using theCreate DIY templateAPI.

The template structure is created with the specified blocks after the POST method executes successfully and opens in Connect+.

# Troubleshooting

| Error | Reason |

| --- | --- |

| Unauthorised or Invalid credentials | Make sure you have the correct credentials and the Connect+ UI is open. |

| Invalid Workspace ID | Workspace ID is incorrect. Verify the workspace ID by sending aGET request to the workspacesAPI. |

| Invalid Block Type | blockTypeparameter is invalid. |



`blockType`

# FAQs

1. At what stage do you decide which API to call based on the contents of the CSV file?Answer: No specific options are available. The Neo dataflow identifies the necessary information from the CSV file contents and creates the appropriate payload for the API call.

2. How does the Neo Transformer block handle the transformation of CVS data?Answer: The Transformer block converts the CSV file into JSON format. The input to the Neo Transformer block is in the JSON format.

3. Where is the payload to call the API created?Answer: The Neo Transformer block creates the API payload based on the URL selected within the block.

4. Where is the Neo dataflow available?Answer: The Neo dataflow must be available in the same organisation as the template being created.

5. What happens if the first block is not a source block?Answer: If the first block is not a source block, the template becomes unusable, as it lacks the information needed to fetch the source file.

6. Why do I need to open Connect+UI while running the APIs to create the template?Answer: The API tester fetches the credentials from an open and active session of Connect+ UI opened for the respective organisation.

7. What types of files can the Transform-Data block handle?Answer: Currently, the Transform-Data block only supports CSV file formats. If you have a different file type, you have to convert it to CSV before uploading.

Updatedabout 2 months ago