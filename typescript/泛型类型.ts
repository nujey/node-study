function identity<T>(arg: T): T {
  return arg
}

let my1: <T>(arg: T) => T = identity

let my2: <U>(arg: U) => U = identity

let my3: {<T>(arg: T): T} = identity

interface GenericIdentityFn {
  <T>(arg: T): T
}

let my4: GenericIdentityFn = identity

interface GenericIdentityFn1<T> {
  (arg: T): T
}
let my5: GenericIdentityFn1<number> = identity

