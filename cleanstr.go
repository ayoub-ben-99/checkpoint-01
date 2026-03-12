package main

import "fmt"

func minAndMax(max, min, v rune) bool {
	return v >= min && v <= max
}

func CleanStr(str string) {
	newStr := ""
	for _, v := range str {
		if minAndMax('z', 'a', v) || minAndMax('Z', 'A', v) || minAndMax('9', '0', v) {
			newStr += string(v)
		}
	}
	fmt.Println(newStr)
}
