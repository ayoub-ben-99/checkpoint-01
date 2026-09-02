package level5

import (
	"fmt"
	"os"
)

func Hiddenp() {
	if len(os.Args) != 3 {
		return
	}

	s1 := os.Args[1]
	s2 := os.Args[2]

	i := 0

	for _, char := range s2 {
		if i < len(s1) && byte(char) == s1[i] {
			i++
		}
	}

	if i == len(s1) {
		fmt.Println(1)
	} else {
		fmt.Println(0)
	}
}
