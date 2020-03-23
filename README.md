# mpx-sku-select

### computed bug 复现🌰

以下代码中 checked计算属性没有生效
之前版本选择对应选项后，会高亮

components/option-selection-radio-group.mpx
```javascript
  computed: {
    checked: {
      get () {
        return this.value
      },
      set (value) {
        this.triggerEvent('input', { value })
      }
    },
    valuesCount () {
      return this.option.values.length
    }
  }
```

components/option-selection-radio.mpx
```javascript
  computed: {
    checked () {
      if (!this.value) {
        return false
      }
      return this.value[this.key] === this.label[this.key]
    }
  }
```

> A mpx project

## Dev

```bash
# install dep
npm i

# for dev
npm run watch

# for online
npm run product
```
