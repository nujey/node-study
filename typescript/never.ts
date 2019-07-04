var desc = 'never类型表示的是那些永不存在的值的类型'

  desc = 'never类型是任何类型的子类型，也可以赋值给任何类型，然而没有类型是never的子类型或可以赋值给never类型'

  function error(message: string):never {
    throw new Error(message)
  }

  function fail() {
    return error("something failed")
  }

  function infiniteLoop(): never {
    while(true) {}
  }
  