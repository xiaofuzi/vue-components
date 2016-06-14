## a vue bootstrap modal components

## how to build?

### build pagination.js

```bash
npm run build
```

### build example

```bash
npm run build-example
```

## how to use?

```html
<bootstrap-modal :title='title' :on-cancel='onCancel' :on-success='onSuccess'>
	<a href="#">baiduwaimai</a> 	<!-- 触发元素，文本或html -->
	<div slot='modal-body'></div>	<!-- 主体内容， 文本或html -->
</bootstrap-modal>
```
* title: modal框标题
* hasFooter: {true|false}，是否显示底部，若不显示则onCancel,onSuccess回调函数不可用
* cancelText: cancel btn text
* successText: success btn text
* onCancel
* onSuccess