# Update target periodput

This API is used to update existing target period using the "target group id". Meaning, this works with the help of the "target group id" and so that's why that is mandatory parameter.

# Target Period Status: Stopped, Running, and Not Started

The API allows you to update:

- end date of a target that is running

- start date and end date of a target that is yet to start

Let's consider the following target periods:

- Target Period 1: 1st Oct - 2nd Oct →STOPPED(Target period has ended)

- Target Period 2: 4th Oct - 5th Oct →RUNNING(Target period is currently active)

- Target Period 3: 8th Oct - 10th Oct →NOT STARTED(Target period is upcoming)

Based on these statuses, the API allows the following updates:

- Target Period 2 (RUNNING): You can update the end date. For example, the end date can be extended to 6th Oct.

- Target Period 3 (NOT STARTED): Both the start and end dates can be updated. For example, you can change the period to 10th Oct - 12th Oct.

- Target Period 1 (STOPPED): The dates for this period cannot be updated since it has already ended.

# Retro Use Cases

The system only processes events after the streak/promotion has been created.

Scenario 1: You create a streak on 6th January with a duration from 3rd to 5th January. If a new event for 3rd January is received after 6th January, it will be processed because it falls within the streak duration.

Scenario 2: If you had already sent the 3rd January event data on 3rd January before the streak existed or was configured for that date, it won’t be processed retroactively.

To see 200 response, please click on the 200 symbol.

To see sample request body, click on the request body example.

`Try It!`