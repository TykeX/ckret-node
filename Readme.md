# ckret

* **ckret** can be used in two ways.

### Using default instance
```typescript
ckret.init({region: "ap-south-1"}, "ckret/local") // initialize default ckret instance
await ckret.getCkret() // secret value from default ckret instance
ckret.name() // --> ckret/local i.e. secretId (name) of the secret
```

### Using new instance
```typescript
ck := new ckret.Ckret({region: "ap-south-1"}, "ckret/mango") // create and initialize new ckret instance
await ck.getCkret() // secret value from the instance
ckret.name() // --> ckret/mango i.e. secretId or name of the secret
```

### Warning & Suggestions
1. Avoid using default instance.
2. While using default instance make sure, it has been **initialized**.
3. Do not call *init()* more than once.

