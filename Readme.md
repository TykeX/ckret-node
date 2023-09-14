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
|staging|ckret/stage|
|`blank or not set`| ckret/local|

### How to publish
1. bump up version in package.json
2. ```npm run build```
3. ```cd lib```
4. ```cp ../package.json .```
5. ```npm publish```
