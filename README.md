# context 使用

- 1.先创建一个 Context 容器对象，可以进行结构 Provider 及 Consumer 方便之后的简单应用。
  `const ThemeContext = createContext(defaultValue);`
  只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。
- 2.包裹要用的组件，给谁用就在谁的外面包裹，使用属性关键字 value 进行传值，value 不可改变。
  `<ThemeContext.Provider value={/* 某个值 */}></ThemeContext.Provider>`
  每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
- 3.context 对象接受一个名为 displayName 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容。
  `ThemeContext.displayName = "MyThemeContext";`

---

# 注意事项

因为 context 会使用参考标识（reference identity）来决定何时进行渲染，这里可能会有一些陷阱，当 provider 的父组件进行重渲染时，可能会在 consumers 组件中触发意外的渲染。举个例子，当每一次 Provider 重渲染时，以下的代码会重渲染所有下面的 consumers 组件，因为 value 属性总是被赋值为新的对象：

```javascript
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{ something: "something" }}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

# 为了防止这种情况，将 value 状态提升到父节点的 state 里：

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { something: "something" },
    };
  }

  render() {
    return (
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}
```
