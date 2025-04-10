# Rate limits

The rate limit is the number of API calls that can be made in a minute which is configured in the back end. This reduces the load on servers and stops certain fraud activities.

The rate limits are different for each API and it varies based on the region.

| API Name | Asia-2 (Singapore) | Asia-1 (N. Virginia) | EMEA (Ireland) | US |

| --- | --- | --- | --- | --- |

| V1.1/transaction/add | 1500 | 1500 | 700 | No default rate limit |

| V1.1/transaction/update | 500 | 100 | 100 | No default rate limit |

| V1.1/customer/add | 700 | 500 | 400 | No default rate limit |

| V1.1/customer/update | 500 | 600 | 300 | No default rate limit |

| v2/transactions (POST) | 100 | 1200 | 100 | No default rate limit |

| v2/transactions/bulk | 1200 | 700 | 300 | No default rate limit |

| v2/customers (POST) | 100 | 600 | 100 | No default rate limit |

| v2/customers/{id} - PUT | 1000 | 600 | 50 | No default rate limit |

