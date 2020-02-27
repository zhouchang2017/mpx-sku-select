# mpx-sku-select

### computed bug 复现🌰

components/sku.mpx
```javascript
data: {
    checkedItemId: null,
    checked: null,
    initialized: false,
    options: [],
    items: [],
    sku: {},
    maxPrice: 0,
    minPrice: 0,
    SKUResult: {},
    checkOptValues: {},
    valueSortMap: {},
    // checkedOptValueSlice: [], 
    // isAllChecked: false,
    qty: 1
  },
  ...

watch: {
    checkOptValues: {
      handler (value) {
        this.qty = 1
        // this.isAllChecked = Object.values(value).every(item => !!item) 
        // this.checkedOptValueSlice = Object.values(value).filter(item => item)
        this.loopSetOptionValueDisabled()
        this.checked = this.isAllChecked ? this.sku[this.currentKey] : null
        this.checkedItemId = this.checked ? this.checked.id : null
      },
      deep: true
    }
},

computed: {
    ...
    # 以下两个计算属性未响应

    // // 当前已选属性值
    checkedOptValueSlice () {
      return Object.values(this.checkOptValues).filter(item => item)
    },
    // // 是否全部选中
    isAllChecked () {
      return Object.values(this.checkOptValues).every(item => !!item)
    },
}
```

> 目前解决办法:

将 data 下的取消注释
```javascript
data(){
    ...
    checkedOptValueSlice: [], 
    isAllChecked: false,
    ...
}

```

将 watch 中的注释取消
```javascript
watch: {
    checkOptValues: {
      handler (value) {
        this.qty = 1
        this.isAllChecked = Object.values(value).every(item => !!item) 
        this.checkedOptValueSlice = Object.values(value).filter(item => item)
        this.loopSetOptionValueDisabled()
        this.checked = this.isAllChecked ? this.sku[this.currentKey] : null
        this.checkedItemId = this.checked ? this.checked.id : null
      },
      deep: true
    }
},
```

将 computed 注释
```javascript
    // 当前已选属性值
    // checkedOptValueSlice () {
    //   return Object.values(this.checkOptValues).filter(item => item)
    // },
    // 当前已选属性值id
    checkedOptValueIdSlice () {
      return this.checkedOptValueSlice.map(value => value.id)
    },
    // // 是否全部选中
    // isAllChecked () {
    //   return Object.values(this.checkOptValues).every(item => !!item)
    // },
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
