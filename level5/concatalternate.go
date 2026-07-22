package level5

import "fmt"

func Concatalternate(a, b string) {
	newStr := ""
	minLen := len(a)
	if len(b) < minLen {
		minLen = len(b)
	}

	for i := 0; i < minLen; i++ {
		newStr += string(a[i]) + string(b[i])
	}

	newStr += string(a[minLen:])
	newStr += string(b[minLen:])

	fmt.Println(newStr)
}
