#### How to use

Set **ENVIRONMENT** variable to any value of *ENVIRONMENT column* and 
`ckret` will automatically pick appropriate Secret from Secret manager


|**ENVIRONMENT**| Secret Name|
|-----------|--------------------|
|prod|ckret/prod|
|production|ckret/prod|
|dev|ckret/dev|
|development|ckret/dev|
|stage|ckret/stage|
|staging|ckret/staging|
|`blank or not set`| ckret/local|
