# Target/Milestone

# Basic introduction

This section contains APIs for various capabilities powered by "targets" in the system. The following are the capabilities that are currently being powered by targets:

1. MilestonesSingle milestone: Contains only 1 targetUnified milestone: Contains more than 1 target & they are linked together with arithmetic operations like:ALL: Works similar to ANDANY (N-1): Words identical to OR

1. Single milestone: Contains only 1 target

2. Unified milestone: Contains more than 1 target & they are linked together with arithmetic operations like:ALL: Works similar to ANDANY (N-1): Words identical to OR

1. ALL: Works similar to AND

2. ANY (N-1): Words identical to OR

6. Streaks

7. Cappings(Individual customer type of capping)

8. User-created challengesThese are similar to single milestones but can be created by the end-user directly from the mobile app instead of the brand creating them via CRM for their end-users. In this case, the word 'challenge' is analogous to 'milestone'.

1. These are similar to single milestones but can be created by the end-user directly from the mobile app instead of the brand creating them via CRM for their end-users. In this case, the word 'challenge' is analogous to 'milestone'.

# Good to know information:

To know how the target (and its downstream capabilities) works, it is advised to know about the following nuances for better & enhanced understanding. Following are the 4 major components involved here:

1. Target groupThis is like a container (or a bowl) that can hold one/more target rules in it.This will have core properties associated with it like:Tracking type: Defines what is the nature of the trackingSingleUnifiedStreakCappingStart & End date on a wholeFrequencyThe number of periods/cycles, etc...

Target group

1. This is like a container (or a bowl) that can hold one/more target rules in it.

2. This will have core properties associated with it like:Tracking type: Defines what is the nature of the trackingSingleUnifiedStreakCappingStart & End date on a wholeFrequencyThe number of periods/cycles, etc...

1. Tracking type: Defines what is the nature of the trackingSingleUnifiedStreakCapping

1. Single

2. Unified

3. Streak

4. Capping

6. Start & End date on a whole

7. Frequency

8. The number of periods/cycles, etc...

12. Periods/CycleThis will have information on the timelines within which the tracking will happen.Will have the exact start & end date for each cycle of the target group.If the frequency & number of cycles are given as weekly, 3 in the target group level info, then this contains what is the exact start & end date for all the 3 cycles:1st cycle: Start date (point a) - End date (point b)2nd cycle: Start date (point b)  - End date (point c)3rd cycle: Start date (point c) - End date (point d)A few points to note here are:The start date given in the target group (point x) should always be <=  1st cycle's start date (point a)The end date given in the target group (point y) should always be >= Last cycle's end date (point d)No tracking will happen between point (x, a) & point (d, y). Tracking will always happen within cycles.

Periods/Cycle

1. This will have information on the timelines within which the tracking will happen.Will have the exact start & end date for each cycle of the target group.

1. Will have the exact start & end date for each cycle of the target group.

3. If the frequency & number of cycles are given as weekly, 3 in the target group level info, then this contains what is the exact start & end date for all the 3 cycles:1st cycle: Start date (point a) - End date (point b)2nd cycle: Start date (point b)  - End date (point c)3rd cycle: Start date (point c) - End date (point d)

1. 1st cycle: Start date (point a) - End date (point b)

2. 2nd cycle: Start date (point b)  - End date (point c)

3. 3rd cycle: Start date (point c) - End date (point d)

7. A few points to note here are:The start date given in the target group (point x) should always be <=  1st cycle's start date (point a)The end date given in the target group (point y) should always be >= Last cycle's end date (point d)No tracking will happen between point (x, a) & point (d, y). Tracking will always happen within cycles.

1. The start date given in the target group (point x) should always be <=  1st cycle's start date (point a)

2. The end date given in the target group (point y) should always be >= Last cycle's end date (point d)

3. No tracking will happen between point (x, a) & point (d, y). Tracking will always happen within cycles.

4. 

![](https://files.readme.io/34ca65052a646b4a5190e7aae8bc23e2ed9a0350b3ed97a72020d1030026cb9f-Screenshot_2024-11-04_at_11.32.00_AM.png)

24. Target rule (some call this as the target itself)This contains information on what to track exactlyKPI to be trackedTarget valueFilters, etc...Depending on the tracking type of target group, a single target group can have 1 target or multiple targetsCapabilityHow many target groupsHow many target rulesSingle milestone11Unified milestone1more than 1Streak11Capping11User-created challenges11No matter how many target rules are present in a target group, all of them will have the same period/cycle information. For instance, even though more than 1 target is present in unified target milestones, all the targets are tracked in similar timelines.This means that, period/cycle is associated with 'target group' but not 'target rule'.

Target rule (some call this as the target itself)

1. This contains information on what to track exactlyKPI to be trackedTarget valueFilters, etc...

This contains information on what to track exactly

1. KPI to be tracked

2. Target value

3. Filters, etc...

5. Depending on the tracking type of target group, a single target group can have 1 target or multiple targetsCapabilityHow many target groupsHow many target rulesSingle milestone11Unified milestone1more than 1Streak11Capping11User-created challenges11No matter how many target rules are present in a target group, all of them will have the same period/cycle information. For instance, even though more than 1 target is present in unified target milestones, all the targets are tracked in similar timelines.This means that, period/cycle is associated with 'target group' but not 'target rule'.

Depending on the tracking type of target group, a single target group can have 1 target or multiple targets

1. CapabilityHow many target groupsHow many target rulesSingle milestone11Unified milestone1more than 1Streak11Capping11User-created challenges11

| Capability | How many target groups | How many target rules |

| --- | --- | --- |

| Single milestone | 1 | 1 |

| Unified milestone | 1 | more than 1 |

| Streak | 1 | 1 |

| Capping | 1 | 1 |

| User-created challenges | 1 | 1 |



2. No matter how many target rules are present in a target group, all of them will have the same period/cycle information. For instance, even though more than 1 target is present in unified target milestones, all the targets are tracked in similar timelines.This means that, period/cycle is associated with 'target group' but not 'target rule'.

No matter how many target rules are present in a target group, all of them will have the same period/cycle information. For instance, even though more than 1 target is present in unified target milestones, all the targets are tracked in similar timelines.

1. This means that, period/cycle is associated with 'target group' but not 'target rule'.

33. StreakWhen the tracking type is mentioned as 'streak' in the target group info, then this extra information will also need to be added to the payload.This essentially contains information on how many continuous/non-continuous periods the user has to achieve to get the rewards.

Streak

1. When the tracking type is mentioned as 'streak' in the target group info, then this extra information will also need to be added to the payload.

2. This essentially contains information on how many continuous/non-continuous periods the user has to achieve to get the rewards.