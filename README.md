# lezer-taslx

```
# A comment
namespace ul http://underlay.org/ns/

map ex:target <= ex:source (s) => <ipfs:QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn>

map ex:target <= ex:source (source) => {
  ex:a <= s * ex:foo / ex:bar
  ex:b <= s / ex:baz [
    ex:foo (x) => x % ex:foo
    ex:bar (x) => "hello world"
  ] % ex:more % ex:stuff
} % ex:a/1 % ex:b/2
```
