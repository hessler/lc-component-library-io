# Life.Church Web Services Library

Repository for the custom, shared library for the Life.Church Interactive Web Services team.

## Set Up and Use the Library

### Installation

To install and get set up in your React project, run the following command in the project's main directory:

```shell
npm i @hessler/lc-component-library-io
```

### Using a Component

To use a component in your project, simply import the necessary component(s) and supporting objects _(as needed)_ and add to your React project like any other component.

```js
import {
  ButtonItem,
  ButtonSizes,
  ButtonVariants,
} from "@hessler/lc-component-library-io/components";

<ButtonItem
  className="my-button-class-name"
  onClick={() => {
    /* Do something. */
  }}
  size={ButtonSizes.medium}
  variant={ButtonVariants.primary}
>
  Primary Button Example
</ButtonItem>;
```

## References

- **Repository:** [https://github.com/hessler/lc-component-library-io.git](https://github.com/hessler/lc-component-library-io.git)
- **Home Page:** [https://github.com/hessler/lc-component-library-io](https://github.com/hessler/lc-component-library-io)
- **NPM Page:** [https://www.npmjs.com/package/@hessler/lc-component-library-io](https://www.npmjs.com/package/@hessler/lc-component-library-io)
- **Life.Church:** [https://life.church/](https://life.church/)

## Contributors

<a href="https://github.com/hessler/lc-component-library-io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hessler/lc-component-library-io" />
</a>

<small><i>(Made with [contrib.rocks](https://contrib.rocks).)</i></small>
