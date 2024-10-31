## Tailwind CSS Layout

- [layout](https://tailwindcss.com/docs/aspect-ratio)
- [position](https://tailwindcss.com/docs/position)

#### Popup Story

```rust
div().absolute().bottom_4().left_0().w_full().h_10().child(
##
absolute
bottom_4
left_0
w_full
h_10
```

#### Breakpoints

CSS breakpoints are points where the website content responds according to the device width,
allowing you to show the best possible layout to the user.

- [What is a CSS Breakpoint](https://getflywheel.com/layout/css-breakpoints-responsive-design-how-to/)

#### References

- https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

##### Rust binary

- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
The binary is located here after running

```rust
pnpm  build
tailwindcss/packages/@tailwindcss-standalone/dist
```
