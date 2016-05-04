package main

import (
	"fmt"
)

// You can allow a function to accept any type if you set the argument
// type to an empty interface

func main() {
	aStr := "5"
	aInt := 5

	UnrestrictiveFunction(aStr)
	UnrestrictiveFunction(aInt)
}

// And now, in this function, the interface can be type-asserted to whatever type you need
// It usually makes sense to normalize down into one type
func UnrestrictiveFunction(v interface{}) {
	var id int
	switch t := v.(type) {
	case string:
		id = int(t)
	case int:
		id = t
	}
}
