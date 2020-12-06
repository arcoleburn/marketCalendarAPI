# 253 Trades - Market Calendar 

The 253Trades Market Calendar API provides basic data on the status of the US Stock Market. Currently, data are available for all years from 2013 - 2021.

The API can be accessed at: www.253cal.xyz

## GET /calendar 

Market calendar data contains: 
- date
- market-open status 
- market open time 
- market close time 


To get market calendar data, make a GET request to the /calendar endpoint. 

Two query parameters are required:
- startDate 
    - ex.) 2020-01-01 
- endDate
    - ex.) 2020-02-04

The API will respond with data for all days between the given dates. 


#### Example Request:

curl --location --request GET 'http://www.253cal.xyz/calendar?startDate=2020-01-01&endDate=2020-01-04'

#### Example Response: 
```[
    {
        "date": "2020-01-01T00:00:00.000Z",
        "open": false,
        "openTime": null,
        "closeTime": null
    },
    {
        "date": "2020-01-02T00:00:00.000Z",
        "open": true,
        "openTime": "09:30:00+00",
        "closeTime": "16:00:00+00"
    },
    {
        "date": "2020-01-03T00:00:00.000Z",
        "open": true,
        "openTime": "09:30:00+00",
        "closeTime": "16:00:00+00"
    },
    {
        "date": "2020-01-04T00:00:00.000Z",
        "open": false,
        "openTime": null,
        "closeTime": null
    }
]
```
