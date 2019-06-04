type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameOrResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n()
  }
}