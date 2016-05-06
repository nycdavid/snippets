// Variadic functions are used when you want a function to accept a non-determinant
// amount of arguments
package main

import (
	"bytes"
	"fmt"
	"strconv"
)

func main() {
	string1 := "I "
	string2 := "am "
	string3 := "a string."

	concatenatedString := ConcatenateString(string1, string2, string3)
	fmt.Println(concatenatedString)

	unrestrictedConcatenatedString := UnrestrictedConcatenatedString(1, 2, 3, 4, 5, "A", "B", "C", "D", "E")
	fmt.Println(unrestrictedConcatenatedString)
}

func ConcatenateString(strings ...string) string {
	var concatenatedStringBuffer bytes.Buffer

	// doing a for, range will return two values:
	// the index and the value at the index: for idx, str := range strings...
	for _, str := range strings {
		concatenatedStringBuffer.WriteString(str)
	}
	return concatenatedStringBuffer.String()
}

func UnrestrictedConcatenatedString(args ...interface{}) string {
	var stringArg string
	var concatenatedStringBuffer bytes.Buffer
	for _, arg := range args {
		switch t := arg.(type) {
		case string:
			stringArg = t
		case int:
			stringArg = strconv.Itoa(t)
		}

		concatenatedStringBuffer.WriteString(stringArg)
	}
	return concatenatedStringBuffer.String()
}
