# MMM-bitcoin
A `bitcoin ticker` <a href="https://github.com/MichMich/MagicMirror">MagicMirror</a> module.

## Preview
![preview](preview.png)

## Using the module
Add `MMM-bitcoin` module to the `modules` array in the `config/config.js` file:
````javascript
modules: [
  {
    module: 'MMM-bitcoin',
    position: 'top_right',
    config: {
      fiat: 'usd',          // 'usd' and 'eur' available, defaults to 'usd'
      showBefore: 'foo',    // will display before the bitcoin price, default 'Bitstamp'
      updateInterval: 60000 // update interval in milliseconds
    }
  },
]
````

## Coming soon
- [ ] Chart
- [ ] Other exchanges
- [ ] Currency defaults
