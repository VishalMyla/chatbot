# Rebuild Headers / Define Headers and Transform Data

This block enables you to map and manipulate the data in the input file during file transfer. Below is the screenshot of the block.

![](https://files.readme.io/576dd24-template_define_headers_and_transform_data.png)

The table contains the fields and their descriptions.

| Field | Description |

| --- | --- |

| Headers Mapping | Map the column headers or headings according to the input file.Syntax:{"heading1 of output file":"heading1 of input file", "heading2 of output file":"heading2 of input file"}Example:{"TAmount":"t_amount", "BillID":"Bill_Number"}Here,t_amountandBill_Numberin the input file are stored asTAmountandBillIDrespectively in the output file. The information in the input and output files is identical.You can manipulate or change the information in the output during file transfer. This is done by using expressions.Example:{"TAmount":exp{hdr"t_amount"+1}}Here,t_amountin the input file is stored asTAmountin the output file. Each value underTAmountin the output file is the value fromt_amountin the input file increased by 1.SeeExample use casefor details. |

| Output Headers Order | Specify the order of column headers in the output file or skip columns during the transfer. The headings should be comma-separated without spaces between them.Syntax:heading1,heading2Example:TAmount,bill_name,BillIDSeeExample use casefor details. |

| Input File Delimiter | File delimiter separates fields in the input file. |

| Output File Delimiter | File delimiter separates fields in the output file. Delimiter allowed: pipe (|), comma (,) ampersand (&), per cent (%). Alphabets and numbers cannot be delimiters. |

| Output Filename | Name of the output filename with extension. Extensions allowed: .txt or .csv.The output filename cannot be null. Ensure that the output filename matches the one specified in the Connect to destination block. |

| Is the file headerless? | Select the check box if the columns in the input file do not have a header. |

| Mention header names (for use in mapping and expressions) | Define the column header or heading in the output file if the input file does not have a heading or column header. There cannot be spaces between two heading names and do not use double quotes.Syntax:heading1,heading2Example:TAmount,BillIDSeeExample use casefor details. |



```
{"heading1 of output file":"heading1 of input file", "heading2 of output file":"heading2 of input file"}
```

```
{"TAmount":"t_amount", "BillID":"Bill_Number"}
```

`t_amount`

`Bill_Number`

`TAmount`

`BillID`

`{"TAmount":exp{hdr"t_amount"+1}}`

`t_amount`

`TAmount`

`TAmount`

`t_amount`

[Example use case](/docs/sftp-to-sftp-with-headers-definition#example-use-case)

`heading1,heading2`

`TAmount,bill_name,BillID`

[Example use case](/docs/sftp-to-sftp-with-headers-definition#example-use-case)

`heading1,heading2`

`TAmount,BillID`

[Example use case](/docs/sftp-to-sftp-with-headers-definition#example-use-case)

Updated29 days ago