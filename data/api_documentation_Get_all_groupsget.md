# Get all groupsget

This API allows you to retrieve details of all the groups that are available in the org.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/v1/badges/group |

| HTTP method | GET |

| Pagination | Yes |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/group

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/group
```

# Request query parameters

| Parameters | Data type | Description |

| --- | --- | --- |

| Order | Enum | Sort response based on order. Supported values: ASC and DESC |

| Size | Integer | The number of items or records returned in a single API response. |

| Page | Integer | The amount of the data that you want to retrieve. Default value: 10. |



```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/group?size=100&page=0&order=ASC
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/group?size=100&page=0&order=ASC
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | String | Unique identifier of the item |

| orgId | Integer | Organization identifier |

| name | String | Name of the item |

| rank | Integer | Rank of the item |

| createdBy | Integer | ID of the user who created the item |

| createdOn | Timestamp | Timestamp when the item was created |

| lastUpdatedBy | Integer | ID of the user who last updated the item |

| lastUpdatedOn | Timestamp | Timestamp when the item was last updated |

| isActive | Boolean | Indicates whether the item is active |



```
{
    "data": {
        "badgeGroups": [
            {
                "id": "6560ad9c7e3e81134376008b",
                "orgId": 4000106,
                "name": "cafeb9fe",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700834716.366000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700834716.366000000,
                "isActive": true
            },
            {
                "id": "6560ae1d7e3e81134376008c",
                "orgId": 4000106,
                "name": "8b3886ed",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700834845.057000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700834845.057000000,
                "isActive": true
            },
            {
                "id": "6560ae637e3e81134376008d",
                "orgId": 4000106,
                "name": "846294a5",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700834915.626000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700834915.626000000,
                "isActive": true
            },
            {
                "id": "6560ae667e3e81134376008e",
                "orgId": 4000106,
                "name": "e1239ff5",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700834918.448000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700834918.448000000,
                "isActive": true
            },
            {
                "id": "6560b2337e3e81134376008f",
                "orgId": 4000106,
                "name": "fd4d5d07",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700835891.633000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700835891.633000000,
                "isActive": true
            },
            {
                "id": "6560b2837e3e811343760090",
                "orgId": 4000106,
                "name": "bc013c44",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700835971.469000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700835971.469000000,
                "isActive": true
            },
            {
                "id": "6560b3237e3e811343760091",
                "orgId": 4000106,
                "name": "5b5a8963",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700836131.125000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700836131.125000000,
                "isActive": true
            },
            {
                "id": "6560b3257e3e811343760092",
                "orgId": 4000106,
                "name": "d208c36f",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700836133.778000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700836133.778000000,
                "isActive": true
            },
            {
                "id": "6560b3747e3e811343760093",
                "orgId": 4000106,
                "name": "cf8b629c",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700836212.131000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700836214.808000000,
                "isActive": true
            },
            {
                "id": "6560b3f77e3e811343760094",
                "orgId": 4000106,
                "name": "1a04d78d",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700836343.473000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700836345.924000000,
                "isActive": true
            },
            {
                "id": "65641de242dcb6079baf760d",
                "orgId": 4000106,
                "name": "ad1bda2e",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060066.709000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060066.709000000,
                "isActive": true
            },
            {
                "id": "65641de442dcb6079baf760e",
                "orgId": 4000106,
                "name": "8263e00a",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060068.412000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060068.412000000,
                "isActive": true
            },
            {
                "id": "65641e2e42dcb6079baf760f",
                "orgId": 4000106,
                "name": "ad1bda2t",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060142.730000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060142.730000000,
                "isActive": true
            },
            {
                "id": "65641f1042dcb6079baf7611",
                "orgId": 4000106,
                "name": "90d749ae",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060368.159000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060369.502000000,
                "isActive": true
            },
            {
                "id": "656420f042dcb6079baf7612",
                "orgId": 4000106,
                "name": "ad4bda2t",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060848.231000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060848.231000000,
                "isActive": true
            },
            {
                "id": "6564404942dcb6079baf7613",
                "orgId": 4000106,
                "name": "8ed561471701068872.1198452",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701068873.306000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701068873.306000000,
                "isActive": true
            },
            {
                "id": "6564408b42dcb6079baf7615",
                "orgId": 4000106,
                "name": "6e0e684b1701068938.7028322",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701068939.797000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701068939.797000000,
                "isActive": true
            },
            {
                "id": "656456a842dcb6079baf7617",
                "orgId": 4000106,
                "name": "5ecbd1da1701074599.236541",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701074600.303000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701074600.303000000,
                "isActive": true
            },
            {
                "id": "656456a942dcb6079baf7618",
                "orgId": 4000106,
                "name": "1145e9b71701074599.236546",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701074601.438000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701074601.438000000,
                "isActive": true
            },
            {
                "id": "6564577d42dcb6079baf761c",
                "orgId": 4000106,
                "name": "630f11061701074812.3220859",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701074813.358000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701074813.358000000,
                "isActive": true
            },
            {
                "id": "6564577e42dcb6079baf761d",
                "orgId": 4000106,
                "name": "c3fb7c0f1701074812.322091",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701074814.450000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701074814.450000000,
                "isActive": true
            },
            {
                "id": "6564689342dcb6079baf7627",
                "orgId": 4000106,
                "name": "b222cf1c1701079186.337219",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701079187.559000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079187.559000000,
                "isActive": true
            },
            {
                "id": "6564689442dcb6079baf7628",
                "orgId": 4000106,
                "name": "1ca73ef61701079186.337225",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701079188.726000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079188.726000000,
                "isActive": true
            },
            {
                "id": "656468f242dcb6079baf7632",
                "orgId": 4000106,
                "name": "69fef22f1701079281.1071959",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701079282.323000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079282.323000000,
                "isActive": true
            },
            {
                "id": "656468f342dcb6079baf7633",
                "orgId": 4000106,
                "name": "57a8b73a1701079281.107202",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701079283.419000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079283.419000000,
                "isActive": true
            },
            {
                "id": "6564699442dcb6079baf763d",
                "orgId": 4000106,
                "name": "8a598ac01701079442.793278",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701079444.114000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079444.114000000,
                "isActive": true
            },
            {
                "id": "6564699542dcb6079baf763e",
                "orgId": 4000106,
                "name": "3cf9fb691701079442.7932842",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701079445.303000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079445.303000000,
                "isActive": true
            },
            {
                "id": "65646ad142dcb6079baf7642",
                "orgId": 4000106,
                "name": "112c08c51701079760.321273",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701079761.472000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079761.472000000,
                "isActive": true
            },
            {
                "id": "65646ad242dcb6079baf7643",
                "orgId": 4000106,
                "name": "b367680f1701079760.321279",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701079762.844000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079762.844000000,
                "isActive": true
            },
            {
                "id": "65646bc042dcb6079baf764d",
                "orgId": 4000106,
                "name": "cb2f6fc01701079999.8554182",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701080000.961000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701080000.961000000,
                "isActive": true
            },
            {
                "id": "65646bc242dcb6079baf764e",
                "orgId": 4000106,
                "name": "8bb706471701079999.855423",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701080002.213000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701080002.213000000,
                "isActive": true
            },
            {
                "id": "65648bb042dcb6079baf7659",
                "orgId": 4000106,
                "name": "d785f38e1701088174.996841",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701088176.113000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088176.113000000,
                "isActive": true
            },
            {
                "id": "65648bb142dcb6079baf765a",
                "orgId": 4000106,
                "name": "323d37be1701088174.9968472",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701088177.375000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088177.375000000,
                "isActive": true
            },
            {
                "id": "65648d4342dcb6079baf7666",
                "orgId": 4000106,
                "name": "05d19a461701088578.425049",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701088579.469000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088579.469000000,
                "isActive": true
            },
            {
                "id": "65648d4442dcb6079baf7667",
                "orgId": 4000106,
                "name": "78caefa61701088578.4250538",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701088580.722000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088580.722000000,
                "isActive": true
            },
            {
                "id": "65648d7542dcb6079baf7673",
                "orgId": 4000106,
                "name": "5f3c540b1701088628.0057018",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701088629.035000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088629.035000000,
                "isActive": true
            },
            {
                "id": "65648d7642dcb6079baf7674",
                "orgId": 4000106,
                "name": "774bb3901701088628.005708",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701088630.233000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088630.233000000,
                "isActive": true
            },
            {
                "id": "65648ece42dcb6079baf7680",
                "orgId": 4000106,
                "name": "a75548121701088973.335306",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701088974.328000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088974.328000000,
                "isActive": true
            },
            {
                "id": "65648ecf42dcb6079baf7681",
                "orgId": 4000106,
                "name": "a0092e1f1701088973.3353112",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701088975.573000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088975.573000000,
                "isActive": true
            },
            {
                "id": "6564920142dcb6079baf768d",
                "orgId": 4000106,
                "name": "cc9abe411701089792.2767382",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701089793.245000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701089793.245000000,
                "isActive": true
            },
            {
                "id": "6564920242dcb6079baf768e",
                "orgId": 4000106,
                "name": "64a2ec3f1701089792.276743",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701089794.447000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701089794.447000000,
                "isActive": true
            },
            {
                "id": "65649c5c42dcb6079baf769a",
                "orgId": 4000106,
                "name": "9c85a1f11701092443.010795",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701092444.265000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701092444.265000000,
                "isActive": true
            },
            {
                "id": "65649c5d42dcb6079baf769b",
                "orgId": 4000106,
                "name": "e57aa8991701092443.0108001",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701092445.842000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701092445.842000000,
                "isActive": true
            },
            {
                "id": "6564a9e442dcb6079baf76a7",
                "orgId": 4000106,
                "name": "045ddbff1701095906.6260989",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701095908.059000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701095908.059000000,
                "isActive": true
            },
            {
                "id": "6564a9e542dcb6079baf76a8",
                "orgId": 4000106,
                "name": "977eb23a1701095906.626105",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701095909.385000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701095909.385000000,
                "isActive": true
            },
            {
                "id": "6564aa2642dcb6079baf76aa",
                "orgId": 4000106,
                "name": "d90cedc71701095973.372811",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701095974.492000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701095974.492000000,
                "isActive": true
            },
            {
                "id": "6564aa2842dcb6079baf76ab",
                "orgId": 4000106,
                "name": "b847de811701095973.3728168",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701095976.015000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701095976.015000000,
                "isActive": true
            },
            {
                "id": "6564aac742dcb6079baf76af",
                "orgId": 4000106,
                "name": "acd650fb1701096134.7552671",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701096135.884000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096135.884000000,
                "isActive": true
            },
            {
                "id": "6564aac942dcb6079baf76b0",
                "orgId": 4000106,
                "name": "b362401e1701096134.755272",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701096137.393000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096137.393000000,
                "isActive": true
            },
            {
                "id": "6564abfe42dcb6079baf76b4",
                "orgId": 4000106,
                "name": "7272fdc11701096445.766407",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701096446.984000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096446.984000000,
                "isActive": true
            },
            {
                "id": "6564ac0142dcb6079baf76b5",
                "orgId": 4000106,
                "name": "33c684351701096445.766413",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701096449.522000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096449.522000000,
                "isActive": true
            },
            {
                "id": "6564ac5e42dcb6079baf76b9",
                "orgId": 4000106,
                "name": "416e235b1701096540.077079",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701096542.898000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096542.898000000,
                "isActive": true
            },
            {
                "id": "6564ac6042dcb6079baf76ba",
                "orgId": 4000106,
                "name": "9ec3e1be1701096540.077085",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701096544.228000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096544.228000000,
                "isActive": true
            },
            {
                "id": "6564ada642dcb6079baf76be",
                "orgId": 4000106,
                "name": "42984e881701096869.805921",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701096870.899000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096870.899000000,
                "isActive": true
            },
            {
                "id": "6564ada842dcb6079baf76bf",
                "orgId": 4000106,
                "name": "1ee1cb2f1701096869.8059258",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701096872.189000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096872.189000000,
                "isActive": true
            },
            {
                "id": "6564aeb642dcb6079baf76c3",
                "orgId": 4000106,
                "name": "0fbc9fe01701097141.511703",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701097142.648000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097142.648000000,
                "isActive": true
            },
            {
                "id": "6564aeb842dcb6079baf76c4",
                "orgId": 4000106,
                "name": "10bc40531701097141.51171",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701097144.110000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097144.110000000,
                "isActive": true
            },
            {
                "id": "6564aff742dcb6079baf76c8",
                "orgId": 4000106,
                "name": "287e0ad01701097462.3828218",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701097463.623000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097463.623000000,
                "isActive": true
            },
            {
                "id": "6564aff842dcb6079baf76c9",
                "orgId": 4000106,
                "name": "cc8818811701097462.382828",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701097464.942000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097464.942000000,
                "isActive": true
            },
            {
                "id": "6564b09842dcb6079baf76cd",
                "orgId": 4000106,
                "name": "abf45f421701097623.226032",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701097624.396000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097624.396000000,
                "isActive": true
            },
            {
                "id": "6564b09942dcb6079baf76ce",
                "orgId": 4000106,
                "name": "a2f3639a1701097623.226037",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701097625.704000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097625.704000000,
                "isActive": true
            },
            {
                "id": "6564bb4b42dcb6079baf76d2",
                "orgId": 4000106,
                "name": "b67147611701100362.557133",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701100363.904000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100363.904000000,
                "isActive": true
            },
            {
                "id": "6564bb4d42dcb6079baf76d3",
                "orgId": 4000106,
                "name": "fbe8c25d1701100362.557138",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701100365.185000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100365.185000000,
                "isActive": true
            },
            {
                "id": "6564bc0d42dcb6079baf76d7",
                "orgId": 4000106,
                "name": "d74c3ab51701100556.7808452",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701100557.959000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100557.959000000,
                "isActive": true
            },
            {
                "id": "6564bc0f42dcb6079baf76d8",
                "orgId": 4000106,
                "name": "ddad81691701100556.780851",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701100559.254000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100559.254000000,
                "isActive": true
            },
            {
                "id": "6564bc5842dcb6079baf76dc",
                "orgId": 4000106,
                "name": "3e30c94b1701100631.540341",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701100632.843000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100632.843000000,
                "isActive": true
            },
            {
                "id": "6564bc5a42dcb6079baf76dd",
                "orgId": 4000106,
                "name": "1834efe31701100631.5403478",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701100634.138000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100634.138000000,
                "isActive": true
            },
            {
                "id": "6564be0342dcb6079baf76e1",
                "orgId": 4000106,
                "name": "65a412691701101056.667959",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101059.063000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101059.063000000,
                "isActive": true
            },
            {
                "id": "6564be0442dcb6079baf76e2",
                "orgId": 4000106,
                "name": "87b9083a1701101056.667965",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701101060.431000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101060.431000000,
                "isActive": true
            },
            {
                "id": "6564beec42dcb6079baf76e9",
                "orgId": 4000106,
                "name": "620c0b0c",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101292.586000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101292.586000000,
                "isActive": true
            },
            {
                "id": "6564beed42dcb6079baf76ea",
                "orgId": 4000106,
                "name": "3e15dbdf",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101293.912000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101293.912000000,
                "isActive": true
            },
            {
                "id": "6564bef042dcb6079baf76eb",
                "orgId": 4000106,
                "name": "4a0d9fb7",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101296.276000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101297.585000000,
                "isActive": true
            },
            {
                "id": "6564bef242dcb6079baf76ec",
                "orgId": 4000106,
                "name": "021139191701101297.6815932",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101298.931000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101298.931000000,
                "isActive": true
            },
            {
                "id": "6564bef442dcb6079baf76ed",
                "orgId": 4000106,
                "name": "68df5b081701101297.681602",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701101300.283000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101300.283000000,
                "isActive": true
            },
            {
                "id": "6565b90ecb9da56918811b60",
                "orgId": 4000106,
                "name": "548ffb41",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701165326.756000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165326.756000000,
                "isActive": true
            },
            {
                "id": "6565b910cb9da56918811b61",
                "orgId": 4000106,
                "name": "417a7e17",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701165328.603000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165328.603000000,
                "isActive": true
            },
            {
                "id": "6565b942cb9da56918811b63",
                "orgId": 4000106,
                "name": "6986aa0c",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701165378.226000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165378.226000000,
                "isActive": true
            },
            {
                "id": "6565b943cb9da56918811b64",
                "orgId": 4000106,
                "name": "f5af475d",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701165379.483000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165379.483000000,
                "isActive": true
            },
            {
                "id": "6565b99acb9da56918811b70",
                "orgId": 4000106,
                "name": "47b9c46f",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701165466.151000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165466.151000000,
                "isActive": true
            },
            {
                "id": "6565b99bcb9da56918811b71",
                "orgId": 4000106,
                "name": "08169a51",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701165467.504000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165467.504000000,
                "isActive": true
            },
            {
                "id": "6565bf14392f9947b8f61f65",
                "orgId": 4000106,
                "name": "70acf39a",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701166868.563000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701166868.563000000,
                "isActive": true
            },
            {
                "id": "6565bf17392f9947b8f61f66",
                "orgId": 4000106,
                "name": "b3f0a6ee",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701166871.349000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701166871.349000000,
                "isActive": true
            },
            {
                "id": "6565bf6bf6d38647c6580b89",
                "orgId": 4000106,
                "name": "9f9b5ae9",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701166955.064000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701166955.064000000,
                "isActive": true
            },
            {
                "id": "6565bf6cf6d38647c6580b8a",
                "orgId": 4000106,
                "name": "1c13bb07",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701166956.939000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701166956.939000000,
                "isActive": true
            },
            {
                "id": "6565bfbbf6d38647c6580b8c",
                "orgId": 4000106,
                "name": "6c63c691",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701167035.574000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701167035.574000000,
                "isActive": true
            },
            {
                "id": "6565bfbcf6d38647c6580b8d",
                "orgId": 4000106,
                "name": "ec144fe5",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701167036.809000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701167036.809000000,
                "isActive": true
            },
            {
                "id": "6565c1dcf6d38647c6580ba5",
                "orgId": 4000106,
                "name": "5a677f2b",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701167580.493000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701167580.493000000,
                "isActive": true
            },
            {
                "id": "6565c1ddf6d38647c6580ba6",
                "orgId": 4000106,
                "name": "4417d4de",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701167581.826000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701167581.826000000,
                "isActive": true
            },
            {
                "id": "6565c38cf6d38647c6580bb8",
                "orgId": 4000106,
                "name": "cdd7ef2d",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168012.842000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168012.842000000,
                "isActive": true
            },
            {
                "id": "6565c38ef6d38647c6580bb9",
                "orgId": 4000106,
                "name": "52c9b909",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168014.465000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168014.465000000,
                "isActive": true
            },
            {
                "id": "6565c4a0f6d38647c6580bd7",
                "orgId": 4000106,
                "name": "76743ca4",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168288.649000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168288.649000000,
                "isActive": true
            },
            {
                "id": "6565c4a1f6d38647c6580bd8",
                "orgId": 4000106,
                "name": "92d9dd4b",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168289.939000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168289.939000000,
                "isActive": true
            },
            {
                "id": "6565c686c82c86460ad06200",
                "orgId": 4000106,
                "name": "9ce0284a",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168774.135000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168774.135000000,
                "isActive": true
            },
            {
                "id": "6565c687c82c86460ad06201",
                "orgId": 4000106,
                "name": "c3c4c2f0",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168775.848000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168775.848000000,
                "isActive": true
            },
            {
                "id": "6565c6acc82c86460ad06203",
                "orgId": 4000106,
                "name": "037a231e",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168812.843000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168812.843000000,
                "isActive": true
            },
            {
                "id": "6565c6aec82c86460ad06204",
                "orgId": 4000106,
                "name": "579639cf",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168814.009000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168814.009000000,
                "isActive": true
            },
            {
                "id": "6565c6fbc82c86460ad06214",
                "orgId": 4000106,
                "name": "8e8ac6bb",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168891.938000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168891.938000000,
                "isActive": true
            },
            {
                "id": "6565c6fdc82c86460ad06215",
                "orgId": 4000106,
                "name": "aabc37a0",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168893.229000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168893.229000000,
                "isActive": true
            },
            {
                "id": "6565d4fac82c86460ad06225",
                "orgId": 4000106,
                "name": "b44d85b7",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701172474.729000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701172474.729000000,
                "isActive": true
            },
            {
                "id": "6565d4fcc82c86460ad06226",
                "orgId": 4000106,
                "name": "60ae8a88",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701172476.010000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701172476.010000000,
                "isActive": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 100,
            "total": 893,
            "totalPages": 9
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeGroups": [
            {
                "id": "6560ad9c7e3e81134376008b",
                "orgId": 4000106,
                "name": "cafeb9fe",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700834716.366000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700834716.366000000,
                "isActive": true
            },
            {
                "id": "6560ae1d7e3e81134376008c",
                "orgId": 4000106,
                "name": "8b3886ed",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700834845.057000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700834845.057000000,
                "isActive": true
            },
            {
                "id": "6560ae637e3e81134376008d",
                "orgId": 4000106,
                "name": "846294a5",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700834915.626000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700834915.626000000,
                "isActive": true
            },
            {
                "id": "6560ae667e3e81134376008e",
                "orgId": 4000106,
                "name": "e1239ff5",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700834918.448000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700834918.448000000,
                "isActive": true
            },
            {
                "id": "6560b2337e3e81134376008f",
                "orgId": 4000106,
                "name": "fd4d5d07",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700835891.633000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700835891.633000000,
                "isActive": true
            },
            {
                "id": "6560b2837e3e811343760090",
                "orgId": 4000106,
                "name": "bc013c44",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700835971.469000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700835971.469000000,
                "isActive": true
            },
            {
                "id": "6560b3237e3e811343760091",
                "orgId": 4000106,
                "name": "5b5a8963",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700836131.125000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700836131.125000000,
                "isActive": true
            },
            {
                "id": "6560b3257e3e811343760092",
                "orgId": 4000106,
                "name": "d208c36f",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700836133.778000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700836133.778000000,
                "isActive": true
            },
            {
                "id": "6560b3747e3e811343760093",
                "orgId": 4000106,
                "name": "cf8b629c",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700836212.131000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700836214.808000000,
                "isActive": true
            },
            {
                "id": "6560b3f77e3e811343760094",
                "orgId": 4000106,
                "name": "1a04d78d",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1700836343.473000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1700836345.924000000,
                "isActive": true
            },
            {
                "id": "65641de242dcb6079baf760d",
                "orgId": 4000106,
                "name": "ad1bda2e",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060066.709000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060066.709000000,
                "isActive": true
            },
            {
                "id": "65641de442dcb6079baf760e",
                "orgId": 4000106,
                "name": "8263e00a",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060068.412000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060068.412000000,
                "isActive": true
            },
            {
                "id": "65641e2e42dcb6079baf760f",
                "orgId": 4000106,
                "name": "ad1bda2t",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060142.730000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060142.730000000,
                "isActive": true
            },
            {
                "id": "65641f1042dcb6079baf7611",
                "orgId": 4000106,
                "name": "90d749ae",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060368.159000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060369.502000000,
                "isActive": true
            },
            {
                "id": "656420f042dcb6079baf7612",
                "orgId": 4000106,
                "name": "ad4bda2t",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701060848.231000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701060848.231000000,
                "isActive": true
            },
            {
                "id": "6564404942dcb6079baf7613",
                "orgId": 4000106,
                "name": "8ed561471701068872.1198452",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701068873.306000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701068873.306000000,
                "isActive": true
            },
            {
                "id": "6564408b42dcb6079baf7615",
                "orgId": 4000106,
                "name": "6e0e684b1701068938.7028322",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701068939.797000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701068939.797000000,
                "isActive": true
            },
            {
                "id": "656456a842dcb6079baf7617",
                "orgId": 4000106,
                "name": "5ecbd1da1701074599.236541",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701074600.303000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701074600.303000000,
                "isActive": true
            },
            {
                "id": "656456a942dcb6079baf7618",
                "orgId": 4000106,
                "name": "1145e9b71701074599.236546",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701074601.438000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701074601.438000000,
                "isActive": true
            },
            {
                "id": "6564577d42dcb6079baf761c",
                "orgId": 4000106,
                "name": "630f11061701074812.3220859",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701074813.358000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701074813.358000000,
                "isActive": true
            },
            {
                "id": "6564577e42dcb6079baf761d",
                "orgId": 4000106,
                "name": "c3fb7c0f1701074812.322091",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701074814.450000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701074814.450000000,
                "isActive": true
            },
            {
                "id": "6564689342dcb6079baf7627",
                "orgId": 4000106,
                "name": "b222cf1c1701079186.337219",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701079187.559000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079187.559000000,
                "isActive": true
            },
            {
                "id": "6564689442dcb6079baf7628",
                "orgId": 4000106,
                "name": "1ca73ef61701079186.337225",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701079188.726000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079188.726000000,
                "isActive": true
            },
            {
                "id": "656468f242dcb6079baf7632",
                "orgId": 4000106,
                "name": "69fef22f1701079281.1071959",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701079282.323000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079282.323000000,
                "isActive": true
            },
            {
                "id": "656468f342dcb6079baf7633",
                "orgId": 4000106,
                "name": "57a8b73a1701079281.107202",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701079283.419000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079283.419000000,
                "isActive": true
            },
            {
                "id": "6564699442dcb6079baf763d",
                "orgId": 4000106,
                "name": "8a598ac01701079442.793278",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701079444.114000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079444.114000000,
                "isActive": true
            },
            {
                "id": "6564699542dcb6079baf763e",
                "orgId": 4000106,
                "name": "3cf9fb691701079442.7932842",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701079445.303000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079445.303000000,
                "isActive": true
            },
            {
                "id": "65646ad142dcb6079baf7642",
                "orgId": 4000106,
                "name": "112c08c51701079760.321273",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701079761.472000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079761.472000000,
                "isActive": true
            },
            {
                "id": "65646ad242dcb6079baf7643",
                "orgId": 4000106,
                "name": "b367680f1701079760.321279",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701079762.844000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701079762.844000000,
                "isActive": true
            },
            {
                "id": "65646bc042dcb6079baf764d",
                "orgId": 4000106,
                "name": "cb2f6fc01701079999.8554182",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701080000.961000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701080000.961000000,
                "isActive": true
            },
            {
                "id": "65646bc242dcb6079baf764e",
                "orgId": 4000106,
                "name": "8bb706471701079999.855423",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701080002.213000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701080002.213000000,
                "isActive": true
            },
            {
                "id": "65648bb042dcb6079baf7659",
                "orgId": 4000106,
                "name": "d785f38e1701088174.996841",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701088176.113000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088176.113000000,
                "isActive": true
            },
            {
                "id": "65648bb142dcb6079baf765a",
                "orgId": 4000106,
                "name": "323d37be1701088174.9968472",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701088177.375000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088177.375000000,
                "isActive": true
            },
            {
                "id": "65648d4342dcb6079baf7666",
                "orgId": 4000106,
                "name": "05d19a461701088578.425049",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701088579.469000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088579.469000000,
                "isActive": true
            },
            {
                "id": "65648d4442dcb6079baf7667",
                "orgId": 4000106,
                "name": "78caefa61701088578.4250538",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701088580.722000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088580.722000000,
                "isActive": true
            },
            {
                "id": "65648d7542dcb6079baf7673",
                "orgId": 4000106,
                "name": "5f3c540b1701088628.0057018",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701088629.035000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088629.035000000,
                "isActive": true
            },
            {
                "id": "65648d7642dcb6079baf7674",
                "orgId": 4000106,
                "name": "774bb3901701088628.005708",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701088630.233000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088630.233000000,
                "isActive": true
            },
            {
                "id": "65648ece42dcb6079baf7680",
                "orgId": 4000106,
                "name": "a75548121701088973.335306",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701088974.328000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088974.328000000,
                "isActive": true
            },
            {
                "id": "65648ecf42dcb6079baf7681",
                "orgId": 4000106,
                "name": "a0092e1f1701088973.3353112",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701088975.573000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701088975.573000000,
                "isActive": true
            },
            {
                "id": "6564920142dcb6079baf768d",
                "orgId": 4000106,
                "name": "cc9abe411701089792.2767382",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701089793.245000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701089793.245000000,
                "isActive": true
            },
            {
                "id": "6564920242dcb6079baf768e",
                "orgId": 4000106,
                "name": "64a2ec3f1701089792.276743",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701089794.447000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701089794.447000000,
                "isActive": true
            },
            {
                "id": "65649c5c42dcb6079baf769a",
                "orgId": 4000106,
                "name": "9c85a1f11701092443.010795",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701092444.265000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701092444.265000000,
                "isActive": true
            },
            {
                "id": "65649c5d42dcb6079baf769b",
                "orgId": 4000106,
                "name": "e57aa8991701092443.0108001",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701092445.842000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701092445.842000000,
                "isActive": true
            },
            {
                "id": "6564a9e442dcb6079baf76a7",
                "orgId": 4000106,
                "name": "045ddbff1701095906.6260989",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701095908.059000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701095908.059000000,
                "isActive": true
            },
            {
                "id": "6564a9e542dcb6079baf76a8",
                "orgId": 4000106,
                "name": "977eb23a1701095906.626105",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701095909.385000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701095909.385000000,
                "isActive": true
            },
            {
                "id": "6564aa2642dcb6079baf76aa",
                "orgId": 4000106,
                "name": "d90cedc71701095973.372811",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701095974.492000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701095974.492000000,
                "isActive": true
            },
            {
                "id": "6564aa2842dcb6079baf76ab",
                "orgId": 4000106,
                "name": "b847de811701095973.3728168",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701095976.015000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701095976.015000000,
                "isActive": true
            },
            {
                "id": "6564aac742dcb6079baf76af",
                "orgId": 4000106,
                "name": "acd650fb1701096134.7552671",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701096135.884000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096135.884000000,
                "isActive": true
            },
            {
                "id": "6564aac942dcb6079baf76b0",
                "orgId": 4000106,
                "name": "b362401e1701096134.755272",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701096137.393000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096137.393000000,
                "isActive": true
            },
            {
                "id": "6564abfe42dcb6079baf76b4",
                "orgId": 4000106,
                "name": "7272fdc11701096445.766407",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701096446.984000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096446.984000000,
                "isActive": true
            },
            {
                "id": "6564ac0142dcb6079baf76b5",
                "orgId": 4000106,
                "name": "33c684351701096445.766413",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701096449.522000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096449.522000000,
                "isActive": true
            },
            {
                "id": "6564ac5e42dcb6079baf76b9",
                "orgId": 4000106,
                "name": "416e235b1701096540.077079",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701096542.898000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096542.898000000,
                "isActive": true
            },
            {
                "id": "6564ac6042dcb6079baf76ba",
                "orgId": 4000106,
                "name": "9ec3e1be1701096540.077085",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701096544.228000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096544.228000000,
                "isActive": true
            },
            {
                "id": "6564ada642dcb6079baf76be",
                "orgId": 4000106,
                "name": "42984e881701096869.805921",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701096870.899000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096870.899000000,
                "isActive": true
            },
            {
                "id": "6564ada842dcb6079baf76bf",
                "orgId": 4000106,
                "name": "1ee1cb2f1701096869.8059258",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701096872.189000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701096872.189000000,
                "isActive": true
            },
            {
                "id": "6564aeb642dcb6079baf76c3",
                "orgId": 4000106,
                "name": "0fbc9fe01701097141.511703",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701097142.648000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097142.648000000,
                "isActive": true
            },
            {
                "id": "6564aeb842dcb6079baf76c4",
                "orgId": 4000106,
                "name": "10bc40531701097141.51171",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701097144.110000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097144.110000000,
                "isActive": true
            },
            {
                "id": "6564aff742dcb6079baf76c8",
                "orgId": 4000106,
                "name": "287e0ad01701097462.3828218",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701097463.623000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097463.623000000,
                "isActive": true
            },
            {
                "id": "6564aff842dcb6079baf76c9",
                "orgId": 4000106,
                "name": "cc8818811701097462.382828",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701097464.942000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097464.942000000,
                "isActive": true
            },
            {
                "id": "6564b09842dcb6079baf76cd",
                "orgId": 4000106,
                "name": "abf45f421701097623.226032",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701097624.396000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097624.396000000,
                "isActive": true
            },
            {
                "id": "6564b09942dcb6079baf76ce",
                "orgId": 4000106,
                "name": "a2f3639a1701097623.226037",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701097625.704000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701097625.704000000,
                "isActive": true
            },
            {
                "id": "6564bb4b42dcb6079baf76d2",
                "orgId": 4000106,
                "name": "b67147611701100362.557133",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701100363.904000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100363.904000000,
                "isActive": true
            },
            {
                "id": "6564bb4d42dcb6079baf76d3",
                "orgId": 4000106,
                "name": "fbe8c25d1701100362.557138",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701100365.185000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100365.185000000,
                "isActive": true
            },
            {
                "id": "6564bc0d42dcb6079baf76d7",
                "orgId": 4000106,
                "name": "d74c3ab51701100556.7808452",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701100557.959000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100557.959000000,
                "isActive": true
            },
            {
                "id": "6564bc0f42dcb6079baf76d8",
                "orgId": 4000106,
                "name": "ddad81691701100556.780851",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701100559.254000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100559.254000000,
                "isActive": true
            },
            {
                "id": "6564bc5842dcb6079baf76dc",
                "orgId": 4000106,
                "name": "3e30c94b1701100631.540341",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701100632.843000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100632.843000000,
                "isActive": true
            },
            {
                "id": "6564bc5a42dcb6079baf76dd",
                "orgId": 4000106,
                "name": "1834efe31701100631.5403478",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701100634.138000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701100634.138000000,
                "isActive": true
            },
            {
                "id": "6564be0342dcb6079baf76e1",
                "orgId": 4000106,
                "name": "65a412691701101056.667959",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101059.063000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101059.063000000,
                "isActive": true
            },
            {
                "id": "6564be0442dcb6079baf76e2",
                "orgId": 4000106,
                "name": "87b9083a1701101056.667965",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701101060.431000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101060.431000000,
                "isActive": true
            },
            {
                "id": "6564beec42dcb6079baf76e9",
                "orgId": 4000106,
                "name": "620c0b0c",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101292.586000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101292.586000000,
                "isActive": true
            },
            {
                "id": "6564beed42dcb6079baf76ea",
                "orgId": 4000106,
                "name": "3e15dbdf",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101293.912000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101293.912000000,
                "isActive": true
            },
            {
                "id": "6564bef042dcb6079baf76eb",
                "orgId": 4000106,
                "name": "4a0d9fb7",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101296.276000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101297.585000000,
                "isActive": true
            },
            {
                "id": "6564bef242dcb6079baf76ec",
                "orgId": 4000106,
                "name": "021139191701101297.6815932",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701101298.931000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101298.931000000,
                "isActive": true
            },
            {
                "id": "6564bef442dcb6079baf76ed",
                "orgId": 4000106,
                "name": "68df5b081701101297.681602",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701101300.283000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701101300.283000000,
                "isActive": true
            },
            {
                "id": "6565b90ecb9da56918811b60",
                "orgId": 4000106,
                "name": "548ffb41",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701165326.756000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165326.756000000,
                "isActive": true
            },
            {
                "id": "6565b910cb9da56918811b61",
                "orgId": 4000106,
                "name": "417a7e17",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701165328.603000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165328.603000000,
                "isActive": true
            },
            {
                "id": "6565b942cb9da56918811b63",
                "orgId": 4000106,
                "name": "6986aa0c",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701165378.226000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165378.226000000,
                "isActive": true
            },
            {
                "id": "6565b943cb9da56918811b64",
                "orgId": 4000106,
                "name": "f5af475d",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701165379.483000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165379.483000000,
                "isActive": true
            },
            {
                "id": "6565b99acb9da56918811b70",
                "orgId": 4000106,
                "name": "47b9c46f",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701165466.151000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165466.151000000,
                "isActive": true
            },
            {
                "id": "6565b99bcb9da56918811b71",
                "orgId": 4000106,
                "name": "08169a51",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701165467.504000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701165467.504000000,
                "isActive": true
            },
            {
                "id": "6565bf14392f9947b8f61f65",
                "orgId": 4000106,
                "name": "70acf39a",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701166868.563000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701166868.563000000,
                "isActive": true
            },
            {
                "id": "6565bf17392f9947b8f61f66",
                "orgId": 4000106,
                "name": "b3f0a6ee",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701166871.349000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701166871.349000000,
                "isActive": true
            },
            {
                "id": "6565bf6bf6d38647c6580b89",
                "orgId": 4000106,
                "name": "9f9b5ae9",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701166955.064000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701166955.064000000,
                "isActive": true
            },
            {
                "id": "6565bf6cf6d38647c6580b8a",
                "orgId": 4000106,
                "name": "1c13bb07",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701166956.939000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701166956.939000000,
                "isActive": true
            },
            {
                "id": "6565bfbbf6d38647c6580b8c",
                "orgId": 4000106,
                "name": "6c63c691",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701167035.574000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701167035.574000000,
                "isActive": true
            },
            {
                "id": "6565bfbcf6d38647c6580b8d",
                "orgId": 4000106,
                "name": "ec144fe5",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701167036.809000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701167036.809000000,
                "isActive": true
            },
            {
                "id": "6565c1dcf6d38647c6580ba5",
                "orgId": 4000106,
                "name": "5a677f2b",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701167580.493000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701167580.493000000,
                "isActive": true
            },
            {
                "id": "6565c1ddf6d38647c6580ba6",
                "orgId": 4000106,
                "name": "4417d4de",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701167581.826000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701167581.826000000,
                "isActive": true
            },
            {
                "id": "6565c38cf6d38647c6580bb8",
                "orgId": 4000106,
                "name": "cdd7ef2d",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168012.842000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168012.842000000,
                "isActive": true
            },
            {
                "id": "6565c38ef6d38647c6580bb9",
                "orgId": 4000106,
                "name": "52c9b909",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168014.465000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168014.465000000,
                "isActive": true
            },
            {
                "id": "6565c4a0f6d38647c6580bd7",
                "orgId": 4000106,
                "name": "76743ca4",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168288.649000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168288.649000000,
                "isActive": true
            },
            {
                "id": "6565c4a1f6d38647c6580bd8",
                "orgId": 4000106,
                "name": "92d9dd4b",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168289.939000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168289.939000000,
                "isActive": true
            },
            {
                "id": "6565c686c82c86460ad06200",
                "orgId": 4000106,
                "name": "9ce0284a",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168774.135000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168774.135000000,
                "isActive": true
            },
            {
                "id": "6565c687c82c86460ad06201",
                "orgId": 4000106,
                "name": "c3c4c2f0",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168775.848000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168775.848000000,
                "isActive": true
            },
            {
                "id": "6565c6acc82c86460ad06203",
                "orgId": 4000106,
                "name": "037a231e",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168812.843000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168812.843000000,
                "isActive": true
            },
            {
                "id": "6565c6aec82c86460ad06204",
                "orgId": 4000106,
                "name": "579639cf",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168814.009000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168814.009000000,
                "isActive": true
            },
            {
                "id": "6565c6fbc82c86460ad06214",
                "orgId": 4000106,
                "name": "8e8ac6bb",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701168891.938000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168891.938000000,
                "isActive": true
            },
            {
                "id": "6565c6fdc82c86460ad06215",
                "orgId": 4000106,
                "name": "aabc37a0",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701168893.229000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701168893.229000000,
                "isActive": true
            },
            {
                "id": "6565d4fac82c86460ad06225",
                "orgId": 4000106,
                "name": "b44d85b7",
                "rank": 1,
                "createdBy": 50677380,
                "createdOn": 1701172474.729000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701172474.729000000,
                "isActive": true
            },
            {
                "id": "6565d4fcc82c86460ad06226",
                "orgId": 4000106,
                "name": "60ae8a88",
                "rank": 2,
                "createdBy": 50677380,
                "createdOn": 1701172476.010000000,
                "lastUpdatedBy": 50677380,
                "lastUpdatedOn": 1701172476.010000000,
                "isActive": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 100,
            "total": 893,
            "totalPages": 9
        }
    },
    "errors": [],
    "warnings": []
}
```

`Try It!`