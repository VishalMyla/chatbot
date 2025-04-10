# Configuring Relations

Relations in Neo define how blocks connect and determine the dataflow path during execution. They work like a switch statement, where each condition directs the execution to the next block based on the dataflow logic. You can define relations using DAO functions or JavaScript. All Neo blocks support Relations.

By default, Neo provides two path relations using DAO functions:

- isSuccess() – Executes when the operation succeeds.

- hasError() – Executes when an error occurs.

You can add, edit, or delete these default path relations based on your requirements. However, at least one path relation must always be defined.

#### Adding a Path Relation

To add a path relation,

1. Click+ Add Path.

2. InPath Relation, enter the condition to be checked.

![Configuring Relations](https://files.readme.io/50e3b58ab8f7a5fb47a11aea8b0d08d05f88f4e642e63f6da5c442bc355a4ba2-Relations.png)

Configuring Relations

Updated13 days ago