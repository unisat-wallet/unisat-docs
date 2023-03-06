# Getting Started

To develop for Unisat Wallet, install Unisat Wallet on your development machine. [Download here](https://unisat.io/).

::: warning A quick note...
This guide assumes intermediate knowledge of HTML, CSS, and JavaScript.
:::

Once Unisat Wallet is installed and running, you should find that new browser tabs have a `window.unisat` object available in the developer console.
This is how your website will interact with Unisat Wallet.

[comment]: <> (## Basic Considerations)

### Browser Detection

To verify if the browser is running Unisat Wallet, copy and paste the code snippet below in the developer console of your web browser:

```javascript
if (typeof window.unisat !== 'undefined') {
  console.log('Unisat Wallet is installed!');
}
```

You can review the full API for the `window.unisat` object [here](./unisat-provider.html).

### Connecting to Unisat Wallet

"Connecting" or "logging in" to Unisat Wallet effectively means "to access the user's Bitcoin account(s)".

You should **only** initiate a connection request in response to direct user action, such as clicking a button.
You should **always** disable the "connect" button while the connection request is pending.
You should **never** initiate a connection request on page load.

We recommend that you provide a button to allow the user to connect Unisat Wallet to your dapp.
Clicking this button should call the following method:

```javascript
unisat.connect()
```
