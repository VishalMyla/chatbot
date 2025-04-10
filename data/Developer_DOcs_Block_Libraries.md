# Block Libraries

A Block Library in Neo enables users to create reusable, standardized blocks that can be utilized across different dataflows without the need to reconfigure them each time. This addresses the challenge of replicating blocks with similar configurations across multiple dataflows or rules.

# Features

- Reusability:Allow users to build blocks with specific configurations once and then reuse them in various dataflows. This avoids duplication of effort and promotes efficiency.

- Standardization:Ensures that certain functionalities or integrations are implemented consistently across different dataflows.

- Central Management:The Block Library acts as a central repository for these reusable components, making them easier to find, manage, and update.

- Versioning and Approval: Block Libraries are version-controlled and follow an approval process.

- Integration with Rules/Dataflows:Once approved, blocks from the library can be easily imported and used within rule versions or dataflows.

- Global Library:There is also a Global Library with predefined, read-only blocks managed at a higher organizational level.

# Global Block Libraries & Org-Specific Block Library

Global Block Library:Global Library includes a set of pre-defined uneditable blocks managed by the Capillary Technology organization and is available for use across organisations, in that particular cluster. Blocks in the Global Library are read-only within your current organization. You can use these blocks in your dataflows, but you cannot modify their configurations directly.

Org-specific Block Library- These libraries are created and managed within individual organizations. Users with the appropriate Neo Edit Access can create and update blocks in these libraries. Updates to these blocks are allowed only when the library version is in the draft state.

| Feature | Global Blocks | Org-Specific Blocks |

| --- | --- | --- |

| Ownership & Management | Defined and managed byCapillary Technology organization. | Created and managed withinindividual organizations. |

| Editability | Read-onlywithin your current organization. Configurations cannot be directly modified. | Can beeditedby users withNeo Edit Access. Updates are allowed inDraft state. |

| Accessibility & Scope | Available for use in your dataflows. Intended for use across organizations in the respective cluster. | Specific to anorganization. Can be reused within that organization. |

| Creation & Versioning | Created & Versioned byCapillary. | Created & versioned by users within the specific organization. |



# Access Control & User Roles

| Access | User Role |

| --- | --- |

| Neo View Access | View the available block libraries and their configurations |

| Neo Edit Access | Create new block libraries and update existing blocks within libraries |

| Neo Admin Access | Approve or reject new block library versions or changes to existing ones |



For information on Neo access and more, refer to the documentationhere.

# Block Library Versioning

Block libraries are version-controlled. By default, the versionv1is available in theDraftstate, allowing users with edit access to add blocks.

`v1`

`Draft`

When a Neo Admin approves a version under review, the system automatically creates a new version with the next consecutive number. This new version starts in theDraftstate and is a copy of the recently approved version, allowing further modifications.

`Draft`

## Switching Library Versions in Dataflows

Once a dataflow is approved, you cannot change its block library version. To use a different block library version, you must create a new dataflow and link it to the updated library version.

## Linking Library to Dataflows

A block library is linked to a specific dataflow version, not the dataflow itself. As a result, a dataflow can use multiple block library versions across different versions of the dataflow.

# Managing Blocks in the Block Library

## Adding a Block to a Version

To add a block to a specific library version,

1. On the Dataflows page in the Neo UI, clickAccess Libraries.Access Libraries

On the Dataflows page in the Neo UI, clickAccess Libraries.

![Access Libraries](https://files.readme.io/9fa91d01741352bd8edff4db57935210e9262afca18e51232c1465f9c067f0ab-access_libraries.png)

Access Libraries

2. On theLibrariespage, choose the version inDraftstate where you want to add the block.📘NoteIf no versions are available, any new block you create is automatically added to versionv1in theDraftstate.You can't add blocks into a version in thePublishedstate.Choose versions

On theLibrariespage, choose the version inDraftstate where you want to add the block.

`Draft`

> 📘NoteIf no versions are available, any new block you create is automatically added to versionv1in theDraftstate.You can't add blocks into a version in thePublishedstate.

## 📘Note

Note

- If no versions are available, any new block you create is automatically added to versionv1in theDraftstate.

`v1`

`Draft`

- You can't add blocks into a version in thePublishedstate.

`Published`

![Choose versions](https://files.readme.io/caa0c922d079d9bfaddfe86f8bbe55d40d5ffe478cd2f2c2c28dc7f498e4fb79-library_versions.png)

Choose versions

5. (Optional) Hover overAdd a description, to enter a description for the block library version.Add a description

(Optional) Hover overAdd a description, to enter a description for the block library version.

![Add a description](https://files.readme.io/fea4a440e128dd88b4e66fac59643b3fc8953123bf024b5e8abe8158069b6071-add_desc.png)

Add a description

6. Hover over+Add new blockand select the block to add to the block library version.

Hover over+Add new blockand select the block to add to the block library version.

7. Enter theBlock name,Description, andScript.📘Note:A version cannot have two blocks with the same name.You can use an existing block name in a different version, but the block type must be the same.

Enter theBlock name,Description, andScript.

> 📘Note:A version cannot have two blocks with the same name.You can use an existing block name in a different version, but the block type must be the same.

## 📘Note:

Note:

- A version cannot have two blocks with the same name.

- You can use an existing block name in a different version, but the block type must be the same.

10. ClickDone.

ClickDone.

![Adding a block to the library](https://files.readme.io/2ac6e0b4d3f12a160c54e118ba300b82ee9d17d2d12bf713c1640204f50e0e0e-Create_block_library_schema.gif)

Adding a block to the library

The block is created in the chosen library version and is in theDraftstate.

`Draft`

## Modifying a Version

You can edit blocks from a version in theDraftstate.

`Draft`

To edit a block,

1. On theLibrariespage, select the version in theDraftstate that you want to modify.

On theLibrariespage, select the version in theDraftstate that you want to modify.

`Draft`

2. Hover over the ellipsis next to the block you want to edit and clickEdit block.Edit block in a version

Hover over the ellipsis next to the block you want to edit and clickEdit block.

![Edit block in a version](https://files.readme.io/9324cfcd829cab7a337aab4128e92be0acd9c117013aa584d5f68a26ae930019-image.png)

Edit block in a version

3. Edit the required fields in the block and clickDone.Note: You cannot edit theBlock namefield.The block is successfully updated.

Edit the required fields in the block and clickDone.Note: You cannot edit theBlock namefield.

The block is successfully updated.

## Deleting a Block from a Version

You can delete blocks from a version in theDraftstate.

`Draft`

To delete a block,

1. On theLibrariespage, select the version in theDraftstate that you want to modify.

On theLibrariespage, select the version in theDraftstate that you want to modify.

`Draft`

2. Hover over the ellipsis next to the block you want to edit and clickDelete block.A confirmation message is received.

Hover over the ellipsis next to the block you want to edit and clickDelete block.A confirmation message is received.

![](https://files.readme.io/e4b8b8f767a262a0e7f9b6e8a62c0b8606b3be001ccec60ef15913271751c537-image.png)

3. ClickYes, delete.

ClickYes, delete.

The specified block is deleted from the version.

Note: If you delete a block from a block library version that a dataflow uses and then try to update the dataflow to a new library version where the block no longer exists, Neo triggers a validation error. To fix this, you must remove the outdated block from the dataflow before switching to the new block library version.

# Block Library Approval Workflow

The approval workflow for block library versions ensures that changes are reviewed and validated before deploying. The block library versions progress through different statuses, allowing you to create, submit, and refine block configurations.

Below are the key statuses in the workflow:

- Draft:The initial state where you can edit and update block configurations.

- Awaiting Approval:You can submit the version for approval once the changes are complete.

- Published:After a Neo Admin approves the version, it becomes available for use in dataflows.

- Rejected:If the version is rejected, you can edit the Block Library version and revert its status toDraftfor further modifications.

`Draft`

Below is a flow chart illustrating the state change of a block library version.

![States of a Block Library version](https://files.readme.io/4b48194b8915f3cf73a749b520ddd34c012b0e3fa660cfb367ad625df17d9268-Block_Library_flow.png)

States of a block library version

## Sending a Block Library Version for Approval

After making the necessary changes to the Block Library version, it is sent to the Neo Admin for approval.

To send the block library version for approval,

1. On theLibrariespage, clickSend for approval.A confirmation message appears.Send version for approval

On theLibrariespage, clickSend for approval.A confirmation message appears.

![Send version for approval](https://files.readme.io/16b43959bf06a9639618738429e42534cf80b17faa6cd8d7da90077908f6d8f5-library_sendforapproval.png)

Send version for approval

2. On the confirmation message, clickYes.Confirmation screen

On the confirmation message, clickYes.

![Confirmation screen](https://files.readme.io/3ed27245b6c36f496b056fbdb01864a0a048f7718d04c0148a83afb588821efd-image.png)

Confirmation screen

The block library version is sent for approval by the Neo Admin and transitions to theAwaiting Approvalstate.

## Approving a Block Library Version

The Neo Admin can approve the block library version.

To approve,

1. On theLibrariespage, clickReview and approve.The Review changes modal appears.Review and approve the block library version by the Neo Admin

On theLibrariespage, clickReview and approve.The Review changes modal appears.

![Review and approve Block Library version by the Neo Admin](https://files.readme.io/1886c0739f2dc8b1d5b7ef53726a91e48797bede62ea2f1e82e89c01462201d9-library_reviewandapprove.png)

Review and approve the block library version by the Neo Admin

2. On theReview changesmodal, review the changes by comparing the versions.📘NoteIf multiple versions of the Block Library exist, you can select the versions to compare from the drop-down.Compare versions

On theReview changesmodal, review the changes by comparing the versions.

> 📘NoteIf multiple versions of the Block Library exist, you can select the versions to compare from the drop-down.

## 📘Note

Note

If multiple versions of the Block Library exist, you can select the versions to compare from the drop-down.

![Compare versions](https://files.readme.io/4b09e42700a03622f0617a2eee53580896fa7d25722d5cd73e6c3706fc010034-image.png)

Compare versions

3. ClickApprove.A confirmation message appears.

ClickApprove.A confirmation message appears.

4. In the confirmation message, enter a reason for approval and clickYes.

In the confirmation message, enter a reason for approval and clickYes.

The block library version is approved and moves to thePublishedstate.

`Published`

# Using Block Libraries in a Dataflow

1. Attach a Library Version: To use blocks from a block library in a dataflow, attach an approved library version to the specific dataflow version you are working on. You can attach either a global or an oraganization specific library. This attachment happens at the dataflow version level, ensuring that all blocks within that dataflow version consistently use the same library version.

2. Import Blocks: Once a library version is attached, you can import any block from that library onto your dataflow canvas usingImport from Libraryfrom the block option.

3. Modify Block:  You can make modifications and override the Input Execution Logic, Cacheable feature, and Execution Path in the block imported from the library.

![Using Block Libraries in the dataflow](https://files.readme.io/4dec88129714e9ad840b276cfd8e5417a399a60e5f89229fa26f90af1090ae2d-Innovative_Approaches_in_Modern_Education.gif)

Using block libraries in a dataflow

> 📘NotesYou can add, modify, or delete blocks within a Block Library version while it is in the Draft stateEach Block Library is tied to a specific dataflow version, not the dataflow itself. If you delete blocks from a library version that are still being referenced by an approved dataflow version, a validation error will occur when trying to update the dataflow version's library reference. In such cases, the outdated library blocks must be removed from the dataflow before the library version can be updated.In the Neo UI, when you use a block from a library, the block's name (from BlockLibraryMeta) is displayed on the canvas. This name might change across different library versions, even if the underlying blockMetaId remains the same.

## 📘Notes

Notes

- You can add, modify, or delete blocks within a Block Library version while it is in the Draft state

- Each Block Library is tied to a specific dataflow version, not the dataflow itself. If you delete blocks from a library version that are still being referenced by an approved dataflow version, a validation error will occur when trying to update the dataflow version's library reference. In such cases, the outdated library blocks must be removed from the dataflow before the library version can be updated.

- In the Neo UI, when you use a block from a library, the block's name (from BlockLibraryMeta) is displayed on the canvas. This name might change across different library versions, even if the underlying blockMetaId remains the same.

Updated7 days ago