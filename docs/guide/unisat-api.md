# Unisat Wallet API

## Table of Contents

[[toc]]

## Methods


### requestAccounts

```typescript
unisat.requestAccounts()
```

Connect the current account.

#### Parameters

none

#### Returns

`Promise` returns `string[]` : Address of current account.

#### Example

```typescript
try {
  let accounts = await window.unisat.requestAccounts();
  console.log('connect success', accounts);
} catch (e) {
  console.log('connect failed');
}
> connect success ['tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz']
```


### getAccounts

```typescript
unisat.getAccounts()
```

Get address of current account

#### Parameters

none

#### Returns

* `Promise` - `string`: address of current account

#### Example

```typescript
try {
  let res = await window.unisat.getAccounts();
  console.log(res)
} catch (e) {
  console.log(e);
}
> ["tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz"]
```

### getNetwork

```typescript
unisat.getNetwork()
```

get network

#### Parameters

none

#### Returns

* `Promise` - `string`: the network.  `livenet` and `testnet` 

#### Example

```typescript
try {
  let res = await window.unisat.getNetwork();
  console.log(res)
} catch (e) {
  console.log(e);
}

> 0
```

### switchNetwork

```typescript
unisat.switchNetwork(network)
```

switch network

#### Parameters

* `network` - `string`: the network.  `livenet` and `testnet` 

#### Returns

none

#### Example

```typescript
try {
  let res = await window.unisat.switchNetwork("livenet");
  console.log(res)
} catch (e) {
  console.log(e);
}

> 0
```




### getPublicKey

```typescript
unisat.getPublicKey()
```

Get publicKey of current account.

#### Parameters

none 

#### Returns

* `Promise` - `string`: publicKey

#### Example

```typescript
try {
  let res = await window.unisat.getPublicKey();
  console.log(res)
} catch (e) {
  console.log(e);
}
> 03cbaedc26f03fd3ba02fc936f338e980c9e2172c5e23128877ed46827e935296f
```




### getBalance

```typescript
unisat.getBalance()
```

Get BTC balance

#### Parameters

none

#### Returns

* `Promise` - `Object`: 
   - ` confirmed ` - ` number ` : the confirmed satoshis
   - ` unconfirmed ` - ` number ` : the unconfirmed satoshis
   - ` total ` - ` number ` : the total satoshis

  

#### Example

```typescript
try {
  let res = await window.unisat.getBalance();
  console.log(res)
} catch (e) {
  console.log(e);
}

> {
    "confirmed":0,
    "unconfirmed":100000,
    "total":100000
  }
```

### getInscriptions (todo)

```typescript
unisat.getInscriptions()
```

Get Inscriptions (Max to 100)

#### Parameters

none

#### Returns

* `Promise` - `Object[]`: 
   * ` id ` - ` string ` : the id of inscription.
   * ` num ` - ` string ` : the number of inscription.
   * ` address ` - ` string ` : the address of inscription.
   * ` content ` - ` string ` : the content url of inscription.
   * ` content_length` - ` string ` : the content length of inscription.
   * ` content_type ` - ` number ` : the content type of inscription.
   * ` preview ` - ` number ` : the preview link
   * ` timestamp ` - ` number ` : the timestamp of inscription.

#### Example

```typescript
try {
  let res = await window.unisat.getInscriptions();
  console.log(res)
} catch (e) {
  console.log(e);
}

> [
  ...
]
```



### sendBitcoin

```typescript
unisat.sendBitcoin(toAddress, satoshis)
```

Send BTC

#### Parameters

* `toAddress` - `string`: the address to send
* `satoshis` - `number`: the satoshis to send


#### Returns

* `Promise` - `string`: txid

#### Example

```typescript
try {
  let txid = await window.unisat.sendBitcoin("tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz",1000);
  console.log(txid)
} catch (e) {
  console.log(e);
}
```

### sendInscription (todo)

```typescript
unisat.sendInscription(options)
```

Send Inscription

#### Parameters

* `options` - `Object`:
    - `id` - `string`: the id of Inscription.
    - `address` - `string`:  the receiver address.

#### Returns

* `Promise` - `Object`: 
  + `txid` - `string` : the txid

#### Example

```typescript
try {
  let {txid} = await window.unisat.sendInscription({
    id:"e9b86a063d78cc8a1ed17d291703bcc95bcd521e087ab0c7f1621c9c607def1ai0",
    address:"tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny"
  });
  console.log("send Inscription 204 to tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny",{txid})
} catch (e) {
  console.log(e);
}
```

### signMessage

```typescript
unisat.signMessage(msg[, address])
```

sign message

#### Parameters

* `msg` - `string`: a string to sign

#### Returns

* `Promise` - `string`: the signature.

#### Example

```typescript
try {
  let res = await window.unisat.signMessage("abcdefghijk123456789");
  console.log(res)
} catch (e) {
  console.log(e);
}

> IMEo3yzgqJKlmc38IqlP3YjadVOnXmVR6fqeDhtVdiyHUbitYlO2CFUHUgGtM1/cjWsWoGVhTv6pyvj9L/kNT5A=
```

### signTx (todo)

```typescript
unisat.signTx(txHex, inputInfos)
```

Sign transaction

#### Parameters

* `txHex` - `string`: the hex raw transaction to sign
* `inputInfos` - `Object[]`: the inputs to sign
  + `inputIndex` - `number`: the index of input 
  + `scriptHex` - `string`: the previous output script of input 
  + `satoshis` - `number`: the previous output satoshis of input
  + `sighashType` - `number`: the sighash type
  + `address` - `number|string`: the address of account

#### Returns

* `Promise` - `SigResult[]`: 
  + `sig` - `string`: the signature 
  + `publicKey` - `string`: the publicKey of account

#### Example

```typescript
try {
  let res = await window.unisat.signTx("",[]);
  console.log(res)
} catch (e) {
  console.log(e);
}
```

### pushTx

```typescript
unisat.pushTx(options)
```

Push Transaction

#### Parameters

* `options` - `Object`:
    - `rawtx` - `string`:  rawtx to push

#### Returns

* `Promise` - `string`: txid

#### Example

```typescript
try {
  let txid = await window.unisat.pushTx({
    rawtx:"0200000000010135bd7d..."
  });
  console.log(txid)
} catch (e) {
  console.log(e);
}
```




### signPsbt

```typescript
unisat.signPsbt(psbtHex)
```

Sign PSBT  

This method will traverse all inputs that match the current address to sign.

#### Parameters

* `psbtHex` - `string`: the hex string of psbt to sign

#### Returns

* `Promise` - `string`:  the hex string of signed psbt 

#### Example

```typescript
try {
  let res = await window.unisat.signPsbt("70736274ff01007d....");
  console.log(res)
} catch (e) {
  console.log(e);
}
```

### pushPsbt

```typescript
unisat.pushPsbt(psbtHex)
```
Push transaction
#### Parameters

* `psbtHex` - `string`: the hex string of psbt to push

#### Returns

* `Promise` - `string`: txid

#### Example

```typescript
try {
  let res = await window.unisat.pushPsbt("70736274ff01007d....");
  console.log(res)
} catch (e) {
  console.log(e);
}
```

## Events


### accountsChanged

```typescript
unisat.on('accountsChanged', handler: (accounts: Array<string>) => void);
unisat.removeListener('accountsChanged', handler: (accounts: Array<string>) => void);
```

The `accountsChanged` will be emitted whenever the user's exposed account address changes.



### networkChanged

```typescript
unisat.on('networkChanged', handler: (network: string) => void);
unisat.removeListener('networkChanged', handler: (network: string) => void);
```

The `networkChanged` will be emitted whenever the user's network changes.


