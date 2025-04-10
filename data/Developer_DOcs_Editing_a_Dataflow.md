# Editing a Dataflow

You can edit a dataflow only when it is in theDraftstatus.Note:  For dataflows in theRejectstatus, clickEditon the dataflow canvas to change the status toDraftbefore making edits.

`Draft`

`Reject`

`Draft`

To edit,

1. Navigate to the Neo extension portal{host url}/extensions/neo/ui, select the organization where you want to create the dataflow.

2. In theMy Dataflowstab, use the search bar to find the dataflow you want to edit.

3. Click on the dataflow.The dataflow version page opens.

4. In the dataflow version page, click the version of the dataflow that is inDraftstatus to modify it.

`Draft`

5. Add,delete, modify blocks,modify connectionsas per your requirement.

6. ClickSave.

7. Test the dataflowusing an API testing tool.

8. ClickSend for Approvalto submit the dataflow forapproval.The dataflow status changes toAwaiting approval.

`Awaiting approval`

![](https://files.readme.io/8ac379550b378c8392ad744333d8ff1bdb13513d7646b49ebbd87e9bbdb643de-Edit_Dataflow.gif)

## Modifying Dataflow Connections

In a dataflow,blocks are connectedby connector lines. When editing a dataflow, you can add a block, modify or remove these connections from thecanvas.

### Changing a Connection

You can change a connection to link to a different block.

To change a connection,

1. Click the connection line between two blocks that you want to move.

2. Drag the connection to the input node of the new target block on the canvas.

3. Release the connection to attach it to the new block.

### Removing a Connection

You can remove a connection between blocks.

To remove a connection,

1. Select the connection you want to remove.

2. Drag it to an empty area on the canvas.

3. Release it to delete the connection.

![](https://files.readme.io/4ce156765d501f598c9b2485aec0a6b0c110a1d2e08c683a058cadf4f11e7b25-remove_change_connections.gif)

## Adding a Block

On the dataflowcanvas, you can add blocks to meet your dataflow requirements.

To add a block,

1. Click the output node of an existing block.

2. Choose the desired block from the list that appears.

The block is added to the dataflow.

![](https://files.readme.io/40fd9e1d6fc898bac0ab2dd6f15eb837ef6a008ee9df125db314f8b5ce35b223-add_block.gif)

## Deleting a Block

On the dataflowcanvas, you can delete blocks as needed for your dataflow.

To delete a block:

1. Hover over the block you want to delete.

2. Click the delete icon.

3. ClickYes, deleteon the delete block modal.

The block and its connections are removed from the dataflow.

![](https://files.readme.io/d801e9368649294a63b5372faa73a1f214d9de37077d8ea30278361f825975a4-delete_block.gif)

Updated6 days ago