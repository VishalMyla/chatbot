# Mask Contents in a CSV

Thehash-csv-fieldsblock enables you to hash/mask the contents in a CSV file. This can be used when the CSV file contains PII data or any sensitive data. The hashing algorithm supported are:

- SHA-256

- SHA-512

- SHA-1

- MD5

- RIPEMD-160

![](https://files.readme.io/0a81c4ecbc37360b132251062c9027cfa444e1df7032b58bb8cae7369516dafb-Hash_CSV_fields.png)

| Field | Description |

| --- | --- |

| Enabled | Select true to enable the hashing. |

| Hashing Algorithm | Lists the available supported hashing algorithms. |

| Headers need to be hashed | Define the column header names that need to be hashed. The headings should be comma-separated without spaces between them.Syntax:heading1,heading2Example:email,mobile |

| Delimiter | The delimiter used to separate the header names. The delimiters supported are:- Pipe (|)- Comma (,)- Ampersand (&)- Per cent (%) |



`heading1,heading2`

`email,mobile`

Updated29 days ago