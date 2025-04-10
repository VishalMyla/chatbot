# Convert CSV to JSON

| Field Name | Description |

| --- | --- |

| Sort by | Arranges rows based on a chosen column so that similar entries appear together. This is often a prerequisite for grouping to group the similar entries. |

| Alphabetical sort | Arranges data in alphabetical or alphanumeric order based on a chosen column |

| Group by | Collects and organizes data entries that share the same value in a specified header. When you group by a field (e.g., "bill ID"), all rows with the same value are consolidated into a single JSON object, with the grouping key appearing once and the related fields organized as a sub-structure (like an array). Sorting by the grouping field often precedes this operation to ensure all related entries are grouped together. |

| Grouping limit | The "grouping limit" parameter sets a threshold on the number of grouped entries to be included in a single output structure. This helps manage payload size when handling many related entries. For example, if grouping by "bill ID" with a limit of 10, each JSON object will contain information for up to 10 bills; if there are more than 10, multiple output structures will be generated. It effectively splits bulk data into manageable chunks. |



# Example

Consider a CSV file containing records for different bills. Each bill may have multiple identifiers (mobile or email) and associated items. The goal is to:

- Sortthe data so that rows with the samebill IDare together.

- Apply analphabetical sortto ensure a consistent order.

- Group bythebill IDto combine records for each bill.

- Apply agrouping limitso that each output structure contains data for a maximum of two unique bill IDs.

## Original CSV Data

```
bill ID,identifier name,identifier value,itemID
BILL002,email,[email protected],ITEM-A
BILL001,mobile,040-1234567,ITEM-X
BILL002,mobile,050-9876543,ITEM-B
BILL001,email,[email protected],ITEM-Y
BILL003,mobile,044-5551234,ITEM-P
BILL001,mobile,044-1112233,ITEM-Z
BILL003,email,[email protected],ITEM-Q
BILL002,email,[email protected],ITEM-C
```

```
bill ID,identifier name,identifier value,itemID
BILL002,email,[email protected],ITEM-A
BILL001,mobile,040-1234567,ITEM-X
BILL002,mobile,050-9876543,ITEM-B
BILL001,email,[email protected],ITEM-Y
BILL003,mobile,044-5551234,ITEM-P
BILL001,mobile,044-1112233,ITEM-Z
BILL003,email,[email protected],ITEM-Q
BILL002,email,[email protected],ITEM-C
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

## Step 1: Sorting and Alphabetical Sort

- Purpose:Arrange rows based on thebill IDand alphabetically/alphanumerically so that records with the same bill are adjacent.

- Configuration:SetSort headervalue tobill IDandAlphabetical Sortto True.

- Result:The data is reordered alphabetically (or alphanumerically) bybill ID.

### Sorted CSV Data

```
bill ID,identifier name,identifier value,itemID
BILL001,mobile,040-1234567,ITEM-X
BILL001,email,[email protected],ITEM-Y
BILL001,mobile,044-1112233,ITEM-Z
BILL002,email,[email protected],ITEM-A
BILL002,mobile,050-9876543,ITEM-B
BILL002,email,[email protected],ITEM-C
BILL003,mobile,044-5551234,ITEM-P
BILL003,email,[email protected],ITEM-Q
```

```
bill ID,identifier name,identifier value,itemID
BILL001,mobile,040-1234567,ITEM-X
BILL001,email,[email protected],ITEM-Y
BILL001,mobile,044-1112233,ITEM-Z
BILL002,email,[email protected],ITEM-A
BILL002,mobile,050-9876543,ITEM-B
BILL002,email,[email protected],ITEM-C
BILL003,mobile,044-5551234,ITEM-P
BILL003,email,[email protected],ITEM-Q
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

## Step 2: Group By

- Purpose:Group all records with the samebill IDinto a single JSON object.

- Configuration:Set "group by" asbill ID.

- JSON Structure (Before Applying Grouping Limit):

```
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "040-1234567" },
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "044-1112233" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "050-9876543" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  },
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "044-5551234" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

```
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "040-1234567" },
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "044-1112233" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "050-9876543" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  },
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "044-5551234" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

## Step 3: Grouping Limit

- Purpose:Limit the number of grouped entries in each output structure to make payloads more manageable.

- Configuration:Set agrouping limit of 2, meaning that each output structure will contain data for at most two uniquebill IDgroups. If the total number of uniquebill IDvalues exceeds this limit, the output is split into multiple JSON structures.

### Result with Grouping Limit of 2:

#### Output 1

```
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "040-1234567" },
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "044-1112233" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "050-9876543" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  }
]
```

```
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "040-1234567" },
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "044-1112233" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "050-9876543" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  }
]
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

#### Output 2

```
[
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "044-5551234" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

```
[
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "044-5551234" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

[[email protected]](/cdn-cgi/l/email-protection)

Note:In this example, there are three uniquebill IDvalues. With a grouping limit of 2, the first output contains grouped data forBILL001andBILL002, while the second output contains grouped data forBILL003.

### Result with Grouping Limit of 3:

```
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "123-456-7890" },
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "111-222-3333" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "987-654-3210" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  },
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "555-123-4567" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

```
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "123-456-7890" },
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "111-222-3333" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "[email protected]" },
      { "identifier name": "mobile", "identifier value": "987-654-3210" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  },
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "555-123-4567" },
      { "identifier name": "email", "identifier value": "[email protected]" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

### Result with No Grouping:

```
[
  {
    "bill ID": "BILL002",
    "identifier name": "email",
    "identifier value": "[email protected]",
    "itemID": "ITEM-A"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "mobile",
    "identifier value": "123-456-7890",
    "itemID": "ITEM-X"
  },
  {
    "bill ID": "BILL002",
    "identifier name": "mobile",
    "identifier value": "987-654-3210",
    "itemID": "ITEM-B"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "email",
    "identifier value": "[email protected]",
    "itemID": "ITEM-Y"
  },
  {
    "bill ID": "BILL003",
    "identifier name": "mobile",
    "identifier value": "555-123-4567",
    "itemID": "ITEM-P"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "mobile",
    "identifier value": "111-222-3333",
    "itemID": "ITEM-Z"
  },
  {
    "bill ID": "BILL003",
    "identifier name": "email",
    "identifier value": "[email protected]",
    "itemID": "ITEM-Q"
  },
  {
    "bill ID": "BILL002",
    "identifier name": "email",
    "identifier value": "[email protected]",
    "itemID": "ITEM-C"
  }
]
```

```
[
  {
    "bill ID": "BILL002",
    "identifier name": "email",
    "identifier value": "[email protected]",
    "itemID": "ITEM-A"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "mobile",
    "identifier value": "123-456-7890",
    "itemID": "ITEM-X"
  },
  {
    "bill ID": "BILL002",
    "identifier name": "mobile",
    "identifier value": "987-654-3210",
    "itemID": "ITEM-B"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "email",
    "identifier value": "[email protected]",
    "itemID": "ITEM-Y"
  },
  {
    "bill ID": "BILL003",
    "identifier name": "mobile",
    "identifier value": "555-123-4567",
    "itemID": "ITEM-P"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "mobile",
    "identifier value": "111-222-3333",
    "itemID": "ITEM-Z"
  },
  {
    "bill ID": "BILL003",
    "identifier name": "email",
    "identifier value": "[email protected]",
    "itemID": "ITEM-Q"
  },
  {
    "bill ID": "BILL002",
    "identifier name": "email",
    "identifier value": "[email protected]",
    "itemID": "ITEM-C"
  }
]
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

Updated29 days ago