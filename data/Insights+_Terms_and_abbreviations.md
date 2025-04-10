# Terms and abbreviations

| Term | Description |

| --- | --- |

| Communication Channel | Channel via which a brand can communicate with customers related to promotions or transactions. Example, SMS, Email, WeChat, Line, Mobile Push. |

| Custom Dimension | Custom dimension is a specific dimension, which can be created through banding on dimension tables. For example, recency can be created on user dimension by applying banding on user.last_transaction_date. |

| Customer Segmentation | Customer Segmentation is the process of logical grouping customers based on shared characteristics, allowing brands to tailor their marketing efforts effectively. Segmentation is typically done based on demographics or customer behavior, and it helps brands understand their customers better and target them with more personalized and relevant marketing strategies. |

| Dimensions | Dimensions are metadata associated with an event. Facts consist of events data, but when these associated with an attribute it is called dimension. For example, transactions (fact) of a specific store, and registrations (fact) of a specific date. Here store and date become dimensions respectively. |

| Facts | A fact table consists of measures, metrics or facts of a business process. In simple terms, fact consists of event data such as transactions, points awarded, points deducted (expired, redeemed, or returned), customer registration, and slab upgrade. |

| KPI | A Key Performance Indicator (KPI) is a specific metric that reflects how effectively your organization achieves its key business objectives. It is used to measure the performance of the key business objectives. For example, percentage sales, average transaction value, average basket value, member transactions and so on. You can see the entire set of KPIs supported in EI on the Library > KPIs page. |

| Metric Dimension | Metric dimensions are banding on columns and are measurable by nature. For example, bill amount and discount. |

| Migration Chart | A particular type of chart that helps track the migration of users from one slab or segment to another slab or segment. |

| Non-SCD | Non-SCD; or Non-Slowly Changing Dimension, is a type of customer segmentation where the behavior of customers is not tracked and only the current snapshot of the customer list is maintained. The system stores only the recently updated time and does not maintain the tracking history of previous updates. Whereas SCD segments track the behavior of customers at a given point in time. SCD segments are usually used for migration charts. |

| NPS | Net Promoter Score; or NPS, is (Promoters-Detractors)/Total number of NPS responses. |

| Report | A report is a combination of charts that provides essential insights into a business based on the KPIs and Dimensions selected for each chart. |

| SCD | SCD, or Slowly Changing Dimension is a type of customer segmentation in which the behavior of customers is tracked at a given point in time. SCD segments are usually used for migration charts. Whereas in Non-SCD, the behaviour of customers is not tracked and only the current snapshot of the customer list is maintained.The system stores only the recently updated time and does not maintain the tracking history of previous updates. |

| ETL Sync | ETL Sync is the process of Extracting data from the production database (OLTP*), Transforming it into a structured format, and Loading it into the OLAP database*. This process typically occurs during the night for each cluster. For instance, the EU cluster's refresh begins around 2200 HRS GMT. Data is refreshed every 24 hours and applies to all reporting and analytics functions across the Capillary platform—for example, audience lists, Insights reporting and so on.*Online Analytical Processing Database - OLAP systems are a type of data warehouse system that helps analyse and report large volumes of data. For example, to analyze sales transactions over a period of time.*Online Transaction Processing (OLTP) - OLTP is a type of database system that is used to process a large number of transactions simultaneously. |



Updated8 months ago