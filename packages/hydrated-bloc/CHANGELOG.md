## [3.0.3](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v3.0.2...hydrated-bloc-v3.0.3) (2023-12-01)


### Bug Fixes

* **bloc:** 🐛 bloc eventHandler no longer swallows errors ([f955fbb](https://github.com/jacobtipp/bloc-state/commit/f955fbb605a8db36dcc7e3e005fff4c1e1972113))

## [3.0.2](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v3.0.1...hydrated-bloc-v3.0.2) (2023-11-26)


### Bug Fixes

* **bloc:** 🐛 errors should be rethrown ([d570228](https://github.com/jacobtipp/bloc-state/commit/d570228266c73d56cd8a2b19bc7203c64acc9ccd))

## [3.0.1](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v3.0.0...hydrated-bloc-v3.0.1) (2023-11-14)


### Build System Dependencies

* **deps:** 📦️ add @jacobtipp/bloc as external dependency to @jacobtipp/hydrated-bloc ([51be20d](https://github.com/jacobtipp/bloc-state/commit/51be20dd3022203f64a52d70c08a04137f58ef6f))

## [3.0.0](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v2.0.7...hydrated-bloc-v3.0.0) (2023-11-13)


### ⚠ BREAKING CHANGES

* **bloc:** BlocObserver.onCreate requires initialState as second required paramter

### Features

* **bloc:** ✨ add fromJson and toJson to cubit/bloc ([86b05d4](https://github.com/jacobtipp/bloc-state/commit/86b05d43446d72909c60e88b3e784a15cbaa3ab1))
* **bloc:** ✨ add public __unsafeEmit__ method to BlocBase ([a785dec](https://github.com/jacobtipp/bloc-state/commit/a785dec8167e272498885b9b0b2328a33189bc00))
* **bloc:** 💥 ✨ add initialState argument to BlocObserver.onCreate ([38a5de7](https://github.com/jacobtipp/bloc-state/commit/38a5de7766a3147c0384ef1564b085da8cdce247))


### Code Refactoring

* **bloc:** ♻️ onChange and onTransition call after state is emitted ([5753e21](https://github.com/jacobtipp/bloc-state/commit/5753e2139cdbe78f5a8fbe12e101f7fe0e63fe78))

## [2.0.7](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v2.0.6...hydrated-bloc-v2.0.7) (2023-10-26)


### Documentation

* **readme:** 📚️ add imports to doc examples ([3d52ef3](https://github.com/jacobtipp/bloc-state/commit/3d52ef33650c51460ef3c10b0d92a006315e0f33))
* **readme:** 📚️ update introduction for @jacobtipp/bloc ([0774f6e](https://github.com/jacobtipp/bloc-state/commit/0774f6e6b205ebd0e327e98e5e2698167ef7a057))

## [2.0.6](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v2.0.5...hydrated-bloc-v2.0.6) (2023-10-25)


### Documentation

* **readme:** 📚️ add installation docs ([ac1d7ec](https://github.com/jacobtipp/bloc-state/commit/ac1d7eca936a2cfb96b7048a30b342976c4b8ab2))

## [2.0.5](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v2.0.4...hydrated-bloc-v2.0.5) (2023-10-24)


### Bug Fixes

* **hydrated-bloc:** 🐛 bind clear, fromJson, toJson, and hydrate methods ([e3bac85](https://github.com/jacobtipp/bloc-state/commit/e3bac8524104346081024a42e79894868a6bfd0a))

## [2.0.4](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v2.0.3...hydrated-bloc-v2.0.4) (2023-10-05)


### Documentation

* **readme:** 📚️ update readme for @jacobtipp/bloc [only bloc] ([1159d55](https://github.com/jacobtipp/bloc-state/commit/1159d55aa0ae98353b1c8394e60d2a73a1fc6f53))

## [2.0.3](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v2.0.2...hydrated-bloc-v2.0.3) (2023-10-05)


### Documentation

* **readme:** 📚️ update readme for @jacobtipp/hydrated-bloc ([87b6cea](https://github.com/jacobtipp/bloc-state/commit/87b6cea78aaf921ac668fc4236acf0897a4efe67))

## [2.0.2](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v2.0.1...hydrated-bloc-v2.0.2) (2023-10-03)


### Documentation

* **readme:** 📚️ add README for hydrated-bloc ([a37536e](https://github.com/jacobtipp/bloc-state/commit/a37536edb7d346638bdad1ccc2f2218d7fa8ce44))

## [2.0.1](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v2.0.0...hydrated-bloc-v2.0.1) (2023-10-01)


### Code Refactoring

* **hydrate-bloc:** ♻️ remove hydrate invocation from constructor ([ae10fbb](https://github.com/jacobtipp/bloc-state/commit/ae10fbb7da910ee77123da54da0e4d317f203eb6))

## [2.0.0](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v1.0.1...hydrated-bloc-v2.0.0) (2023-10-01)


### ⚠ BREAKING CHANGES

* **hydrated-bloc:** HydratedMixin is now a required return type for mixins

### Features

* **hydrated-bloc:** 💥 ✨ add HydratedMixin interface ([3db39d6](https://github.com/jacobtipp/bloc-state/commit/3db39d6680c6d517ac7ea4ffdd46739006fdf9cc))

## [1.0.1](https://github.com/jacobtipp/bloc-state/compare/hydrated-bloc-v1.0.0...hydrated-bloc-v1.0.1) (2023-10-01)


### Code Refactoring

* **bloc:** ♻️ export StateType from bloc package instead of react-bloc ([1f463be](https://github.com/jacobtipp/bloc-state/commit/1f463bed0335a0b5291484832ae9e5e59b9984e4))

## 1.0.0 (2023-09-30)


### ⚠ BREAKING CHANGES

* **bloc:** Bloc events no longer need to extend BlocEvent abstract class
* **bloc:** Bloc events no longer need to extend BlocEvent abstract class

### Features

* ✨ initial release ([ac300a3](https://github.com/jacobtipp/bloc-state/commit/ac300a3723fccf5a9ba406e2646cde029e75acb6))
* **bloc:** ✨ add optional name property to BlocBase constructor ([1f0321c](https://github.com/jacobtipp/bloc-state/commit/1f0321cc550706cb92e804b688d1661cbda1557c))
* **bloc:** 💥 ✨ remove BlocEvent abstract class ([1b80fb0](https://github.com/jacobtipp/bloc-state/commit/1b80fb058b67c1c42bafb37e67db6da4cecfba27))
* **hydrated-bloc:** ✨ add hydrated-bloc package ([e7c207f](https://github.com/jacobtipp/bloc-state/commit/e7c207fade6d27ffabe31df8045e060ecf2f5019))
* initial commit [skip-ci] ([904a867](https://github.com/jacobtipp/bloc-state/commit/904a867b4ded298c6dd9741a546bb97978680b39))


### Bug Fixes

* **bloc:** 🐛 updated BlocEvent with overridable name property ([9bc3b45](https://github.com/jacobtipp/bloc-state/commit/9bc3b45c5dceb197faf98c73cf1c4dac672baae1))


### Documentation

* **readme:** 📚️ update to publish with readme ([c1232ce](https://github.com/jacobtipp/bloc-state/commit/c1232cec2283b24087415cd3f2ee76f0057d3b6a))


### Build System Dependencies

* **deps:** 📦️ add typedoc library to dev dependencies ([c6f4cef](https://github.com/jacobtipp/bloc-state/commit/c6f4cef5792b88b9c7cd6160aa31a29922031175))


### Revert Changes

* **bloc): "refactor(bloc:** 💥 ✨ remove BlocEvent abstract class" ([d4bb6b1](https://github.com/jacobtipp/bloc-state/commit/d4bb6b11b18ec03a221ec0af9f4c85d4de70343c))


### Code Refactoring

* **bloc:** ♻️  add protected subscriptions set to BlocBase ([622446c](https://github.com/jacobtipp/bloc-state/commit/622446c0506d377b60166e80f6c1042e864f3aa3))
* **bloc:** ♻️  remove onCreate method from BlocBase ([fe9cc6c](https://github.com/jacobtipp/bloc-state/commit/fe9cc6cbe71971dfd4803dee4104aa18309698d8))
* **bloc:** ♻️ rename _Emitter class to BlocEmitterImpl ([1996bc4](https://github.com/jacobtipp/bloc-state/commit/1996bc4e34888193a550eb37b68460472553ec5b))
* **bloc:** 💥 ✨ remove BlocEvent abstract class ([5615d0c](https://github.com/jacobtipp/bloc-state/commit/5615d0c523d16ff449de7254245e5a012271b0ff))
* **react-bloc:** ♻️ remove observable-hooks dependency ([8d209b0](https://github.com/jacobtipp/bloc-state/commit/8d209b0bbb7372179090aff3dee429f5500e8f88))
