# Create Search Filter for Entities

Search criteria allow you to define specific conditions for searchingCustomerandTransactionentities. After you create the filter, you can use theSearch APIto perform the search.  Internally, the framework is referred to as Cortex.

## Key Features:

- You can define the fields you want to search on - includes custom and extended fields

- The duration of data also is under your control

- Partial search (starts with) support for customer entity

- Support for multiple languages

- Works with Vulcan UI framework (but not restricted to that).

- Control the fields that appear in the search response. Neo can also be used for further customization

The maximum number of search filters with Prefix criteria (OR) you can create for a Customer entity per organization is two, and the maximum number of Combination criteria (AND) for an entity per organization is five.

# Use Cases

# Creating a Search Filter

To create a search filter, perform the following:

1. Navigate to the Search Filter Configuration Page

- Access the Organization Settings. Navigate toMaster Data Management>Search Filters.

Access the Organization Settings. Navigate toMaster Data Management>Search Filters.

![](https://files.readme.io/0b4d996b93755118145d751f4edf510981cc5029f1a281606a63e083420ea602-Search_UI.png)

- Alternatively, you can directly access theSearch Filter configuration pageusing the provided URL:{host}/search-criteria/ui/. For example, for the Europe cluster, the URL ishttps://eu.intouch.capillarytech.com/search-criteria/ui/.

Alternatively, you can directly access theSearch Filter configuration pageusing the provided URL:{host}/search-criteria/ui/. For example, for the Europe cluster, the URL ishttps://eu.intouch.capillarytech.com/search-criteria/ui/.

`{host}/search-criteria/ui/`

```
https://eu.intouch.capillarytech.com/search-criteria/ui/
```

1. Initiate New Search Filter Creation

- On the Search Filter configuration page, click on theNew search filterbutton. This action will open a new section where you can define your search filter.

On the Search Filter configuration page, click on theNew search filterbutton. This action will open a new section where you can define your search filter.

![](https://files.readme.io/d8ac0b4764f631e30e53b6269dff82ef6e5c8403d3674f1b98989d54d4a1e3c4-image.png)

1. From theEntitydrop-down, select the Entity. The available options areCustomerandTransaction.

From theEntitydrop-down, select the Entity. The available options areCustomerandTransaction.

2. In theNamefield, enter a name for the Search Filter.

In theNamefield, enter a name for the Search Filter.

![](https://files.readme.io/9b297323c5c2a19b97fd6ac848446546fd50fdd4288cc4261e8be849ee6f89d6-image.png)

3. Select the Search Condition (AND or OR).TransactionCustomerOnly theANDcondition is available. You can set the combinations of available fields and configure the search. For example, to enable search using bill number and bill date, you can select those fields with the AND condition. You can also set certain fields as mandatory as per your requirement.BothANDandORconditions are available.AND:This is used for combination searches. For example, to search using a first name and the last name of a customer.OR:Used for partial search. For example, searching for a customer using first few letters of his name or mobile number.

Select the Search Condition (AND or OR).

| Transaction | Customer |

| --- | --- |

| Only theANDcondition is available. You can set the combinations of available fields and configure the search. For example, to enable search using bill number and bill date, you can select those fields with the AND condition. You can also set certain fields as mandatory as per your requirement. | BothANDandORconditions are available.AND:This is used for combination searches. For example, to search using a first name and the last name of a customer.OR:Used for partial search. For example, searching for a customer using first few letters of his name or mobile number. |



4. (Applicable only for AND condition) Specify theSearch duration, which defines the data retention period for the filter.  The maximum duration you can define is 365 days. By default, for the Customer entity with OR criteria, the search duration is 10 years.

(Applicable only for AND condition) Specify theSearch duration, which defines the data retention period for the filter.  The maximum duration you can define is 365 days. By default, for the Customer entity with OR criteria, the search duration is 10 years.

5. Select the fields you want to include in your search filter under the "Searchable fields" section. The available fields depend on the selected entity type (Transaction or Customer) and the search condition (AND or OR).

Select the fields you want to include in your search filter under the "Searchable fields" section. The available fields depend on the selected entity type (Transaction or Customer) and the search condition (AND or OR).

| Transaction(AND) | Customer(AND) | Customer(OR) |

| --- | --- | --- |

| Standard fields:outlierStatus,billDate,billNumber, andtransactionType. | Standard fields:firstName,lastName. | Standard fields:firstName,lastName,mobile,externalId,fullName,email. |

| Additional fields:storecode | - | - |

| Custom fields and extended fields can also be selected. | Custom fields and extended fields can also be selected. | Nocustom and extended fields are available for OR filter. |

| The maximum number of allowed optional fields inANDfilter for transaction is5, and the maximum number of allowed mandatory fields is6. | The maximum number of allowed optional fields inANDfilter for customers is5, and the maximum number of allowed mandatory fields is6. | No limit |

| Onlyonedate or date-time field is allowed in anANDfilter for a transaction. | Onlyonedate or date-time field is allowed in anANDfilter for a customer.The registration date is not a standard searchable field. | - |



`outlierStatus`

`billDate`

`billNumber`

`transactionType`

`firstName`

`lastName`

`firstName`

`lastName`

`mobile`

`externalId`

`fullName`

`email`

`storecode`

1. Select the mandatory fields that should be used while searching. For AND criteria, at least one field needs to be indexed and  up to 6 mandatory and 5 non-mandatory fields are allowed. For OR criteria, there is no parameters are mandatory.

Select the mandatory fields that should be used while searching. For AND criteria, at least one field needs to be indexed and  up to 6 mandatory and 5 non-mandatory fields are allowed. For OR criteria, there is no parameters are mandatory.

2. Once you have selected the searchable fields and defined the search condition and duration, click the "Validate" button.

Once you have selected the searchable fields and defined the search condition and duration, click the "Validate" button.

![](https://files.readme.io/84e8a455b1d7125fe0f58347a403fd79a467b31ce2f67ef0230f2a8de2657c07-Validate_.gif)

3. On theConfirm filter creationdialog box, click "Yes, Sure". The validation takes 15-20 minutes.

On theConfirm filter creationdialog box, click "Yes, Sure". The validation takes 15-20 minutes.

4. After successful validation, you need toactivatethe filter. To activate, navigate to the search filter you want to activate and selectActivatefrom the meatball menu and clickCreateon the dialog box. The status of the criteria will be shown as "Activation in progress" and after activation, the status changes toActive.

After successful validation, you need toactivatethe filter. To activate, navigate to the search filter you want to activate and selectActivatefrom the meatball menu and clickCreateon the dialog box. The status of the criteria will be shown as "Activation in progress" and after activation, the status changes toActive.

![](https://files.readme.io/14f430d8564ae50d0fe9b5a0ba17fa89201454df78c65db84c58bd14436b4597-Activate.gif)

5. To deactivate a search filter, from the Search Filter list page, navigate to the search filter you want to deactivate and selectDeactivatefrom the meatball menu. Once a filter is deactivated, it cannot be reactivated. You will need to create a new one if needed.

To deactivate a search filter, from the Search Filter list page, navigate to the search filter you want to deactivate and selectDeactivatefrom the meatball menu. Once a filter is deactivated, it cannot be reactivated. You will need to create a new one if needed.

![](https://files.readme.io/289f7f06c65f17d699ad406dfe0407a3c5c7dcadde8368a84003600783d153fc-image.png)

# FAQs

1. How are null values handled in the search?If a search is created using a field that has no value associated with it, you won’t receive any matching records when you perform the search. For example, if an indexed field called age has no assigned value, the system will not include those records in the search results.

2. What is the default order for the search results?The search results are returned in descending order based on the registration date. This is the time when the customer data was initially entered into the collection—not the auto-update time. Even if a record is later updated, the ordering remains based on the original registration timestamp.

3. What happens to deleted customers (PII deletion) in search results? Are changes to customer identifiers reflected in search?Deleted customers (due to PII deletion) are removed from search results. When a customer identifier is changed, these changes are also reflected in the search functionality.

4. How can I perform a search?You can use or integrate theSearch APIto search.

Updatedabout 13 hours ago