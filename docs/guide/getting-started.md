# Getting Started

To develop for UniSat Wallet, install UniSat Wallet on your development machine. [Download here](https://unisat.io/).

::: warning A quick note...
This guide assumes intermediate knowledge of HTML, CSS, and JavaScript.
:::

Once UniSat Wallet is installed and running, you should find that new browser tabs have a `window.unisat` object available in the developer console.
This is how your website will interact with UniSat Wallet.

[comment]: <> (## Basic Considerations)

### Browser Detection

To verify if the browser is running UniSat Wallet, copy and paste the code snippet below in the developer console of your web browser:

```javascript
if (typeof window.unisat !== 'undefined') {
  console.log('UniSat Wallet is installed!');
}
```

You can review the full API for the `window.unisat` object [here](./unisat-provider.html).

### Connecting to UniSat Wallet

"Connecting" or "logging in" to UniSat Wallet effectively means "to access the user's Bitcoin account(s)".

You should **only** initiate a connection request in response to direct user action, such as clicking a button.
You should **always** disable the "connect" button while the connection request is pending.
You should **never** initiate a connection request on page load.

We recommend that you provide a button to allow the user to connect UniSat Wallet to your dapp.
Clicking this button should call the following method:

```javascript
unisat.requestAccounts()
```

### Demo 

- [Online Demo](https://demo.unisat.io)
- [Demo source code](https://github.com/unisat-wallet/unisat-web3-demo) 

