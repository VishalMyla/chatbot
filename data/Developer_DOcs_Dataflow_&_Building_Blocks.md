# Dataflow & Building Blocks

# Dataflows in Neo

[iframe](https://player.vimeo.com/video/1060120203?h=860f56d4ff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479)

Dataflows are structured sequences of steps designed to build, customize, or transform APIs or process data. You can consider them as flow diagrams, where arrows connect different components to visually convey a process's logical steps.

# Building Blocks of Neo

[iframe](https://player.vimeo.com/video/1067334121?h=5431535223&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479)

In dataflows, we havebuilding blocks(similar to flowchart components) that perform certain tasks. For instance, the Trigger Block initiates the dataflow, the API Request Block calls external APIs, and the Script Block injects business logic. Within each block, you can use the DAO (Data Access Object) functions to interact with different blocks, collect data, and manipulate data as needed.

## Relationship Between Blocks

Blocks in a dataflow are connected by connector lines that define how data moves from one block to the next. These blocks can be linked together, much like Lego bricks, where each block represents a logical step in the process.

The Neo dataflows follow the state automata principles. The transition function determines how a system moves from one state to another based on input. In Neo dataflows, each block is a transition function—it takes the current state as input, processes it, and decides the next state in the flow based on predefined conditions. These conditions can be set using DAO methods or standard JavaScript. Dataflows follow a one-way flow - once a block executes, it cannot return to a previous block. This prevents circular dependencies and infinite loops.  Based on these conditions, you can create multiple execution paths from a single block.

Additionally, when a block receives input from multiple parent blocks, its execution is controlled by AND/ OR logic gates. A parent block refers to a block that precedes and provides input to another block called the child block. An OR gate ensures only one parent executes at a time, preventing conflicts. If multiple parents try to execute, the dataflow will throw an error due to conflicting state changes.  An AND gate, on the other hand, requires all parent blocks to meet their conditions before the child block executes.

See the below image for a representation of a Dataflow with an AND gate

![](https://files.readme.io/ec01463b5631a07fd153556dc3bf4e615a4bae4df5bebb9d4402d60c69bdd7a6-Flow_Diagram.jpeg)

## Field Values in a Block (Block Properties)

In a dataflow, you can assign a field's value from different sources based on your requirements. The available sources include:

- Static Value

A fixed, hardcoded value manually assigned to the field.

- Dynamic Value

Neo retrieves values dynamically from:

- Configuration Manager/Secret Manager– Using the DAO functionsgetValueByKey('key')andgetParentValueByKey(), Neo fetches values from the Configuration Manager. This is useful for handling sensitive information like credentials or API keys.

`getValueByKey('key')`

`getParentValueByKey()`

- Previous blocks – A field can derive its value from the output of a previous block. This allows computed, transformed, or generated data to pass downstream for further processing.

## Priority of Values

When multiple sources provide a value for the same field, Neo follows this priority order:

- Highest Priority– Dynamic values from previous blocks or the Configuration Manager take precedence over all other sources.

- Lowest Priority– Static values.

Updated7 days ago