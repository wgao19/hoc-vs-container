# Higher Order Component v.s. "Container"

> Are they _not_ the same?

This is a repo used for my upcoming sharing on React _Higher Order Component_ and something I am trying out and what I call a _Container_ (sorry about the lame name).

I wish to point out that they are essentially equivalent, but provides a different mindset. The difference lies in when, where, and how they let their users pass in and make adjustments to `props`.

I will also talk about how I wish we write our _hoc_ or _container_ in the future. This part is going to be internal.

## Equivalency

Mathematically, to say that _A and B are equivalent_, it suffices to say that:

* A implies B

_and_

* B implies A

Here in our context I claim that a _higher order component_ and a _container_ are "more or less" equivalent, that they are equivalent to their purpose of usage - rendering the same dom structure with the same data.
However, there are non-trivial differences which I will later present.

Suppose that we have an innocent React component that looks like this:

```
const Innocent = props => {
  const { children, ...rest } = props;
  return (
    <div>
      {JSON.stringify(rest)}
      {...children}
    </div>
  );
};
```

When we use this innocent component, we might use it like this:

```
  <Innocent ownProp="own" />
```

And suppose that we want to render this innocent component with some additional props:

```
<GotMoreStuff dynamicProp="dynamic" injectedProp="injected" ownProp="own">
  <Child>Child</Child>
  <Child>Sibling</Child>
</GotMoreStuff>
```

### Higher Order Component

### "Container"

## Difference (When to Use What?)

### Dynamic Rendering

### Does Code Organization Matter?

### Currying A React Component

## Resources

Michael Jackson's opionated (against _hoc_) talk on _render props_:
[Michael Jackson - Never Write Another HoC](https://www.youtube.com/watch?v=BcVAq3YFiuc)

And his post:
[Use a Render Prop! – componentDidBlog](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)

[React Documentation on `cloneElement()`](https://reactjs.org/docs/react-api.html#cloneelement)

[Inverson of Control Containers and the Dependency Injection Pattern](https://martinfowler.com/articles/injection.html)
