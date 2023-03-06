# Accessing Accounts

User accounts are used in a variety of contexts in BitcoinSV, including as identifiers and for signing transactions. In order to request a signature from the user or have the user approve a transaction, one must be able to access the user's accounts. The `wallet methods` below involve a signature or transaction approval and all require connect before use.

- `sendBitcoin`
- `sendInscription` 
- `signTx`
- `signMessage`

Once you've [connected to a user](./getting-started.html), you can always re-check the current account by checking `unisat.connect()`.
