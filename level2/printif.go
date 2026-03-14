package level2

import "fmt"

func Printif(str string) {
	if !(len(str) > 3) {
		fmt.Println("invalid input")
	} else {
		fmt.Println("G")
	}
}

// Perimeter=
