
- [Tailwind CSS Installation](https://tailwindcss.com/docs/installation)
- Start the Tailwind CLI build process
- Run the CLI tool to scan your template files for classes and build your CSS.

```rust
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
tailwindcss -i ./src/input.css -o ./src/output.css --watch
tw -i ./src/input.css -o ./src/output.css --watch
```

or run `twgo` in the directory `ex00` which is the location of the file `tailwind.config.js` and the `src` directory.

#### Bring up the web server

- [live-server](https://github.com/stormasm/live-server)

```rust
liveserver ./ex00/src
sm ./ex00/src
```

## References and Aliases

##
#   tailwind et al
##

```sh
alias rustbin='cd ~/mia/rust/bin'
alias twex='cd ~/j/tmp10/tailwind-examples'
```

```rust
alias twgo='npx tailwindcss -i ./src/input.css -o ./src/output.css --watch'
```

copy the [live-server](https://github.com/stormasm/live-server) binary to rustbin and then make a copy and call it `sm`
