# Attribute : Code

## code

Profile:Current StoreAttribute:CodeSub-Attribute:NAOperators:contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists, ==(string comparison)Syntax:currentStore.code[operator][value]Example:currentStore.code.contains("6TM")

| Attribute | Attribute | Operator | Example |

| --- | --- | --- | --- |

| currentStore | code | Contains - used to see if the string contains the defined value | currentStore.code.contains("PUM45") |

| currentStore | code | Exists - Some proper value exists for this string (i.e. source passed a value that was not an empty string) | currentStore.code.exists() |

| currentStore | code | Matches - this is used to perform regular expression based matching on the string | currentStore.code.matches("MH09") |

| currenrStore | code | == (compare the string to find the exact match) | currentStore.code == "indianterrain.web" |

| currentStore | code | isNull - checks if the string is Null i.e. it was not passed from sourceisNotNull - checks if the the string is NOT Null i.e. some value was passed from source (even an empty string counts) | currentStore.code.isNotNull() |



| Example: Write a rule to check the nike store code, located in Hyderabad is "nike.hyd.himayatnagar" |

| --- |

| Rule: currentStore.code == "nike.hyd.himayatnagar" |



Updatedover 1 year ago