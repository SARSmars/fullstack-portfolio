1. Text in Go is encoded in UTF-8.
2. The rune type can represent any individual symbol.
    a. Rune is an alias for int32.
    b. They are created using single quote: '
3. The string type contains a series of  symbols  as bytes.
    a. String are not null terminated.
    b. They are created using double quotes: "
4. Raw literals are created using backtics: `