package level3

import "fmt"

func Cameltosnakecase(str string) {
	newStr := ""
	for i, v := range str {
		if v >= 'A' && v <= 'Z' {
			if i != 0 {
				newStr += "_"
			}
			newStr += string(v + 32)
		} else {
			newStr += string(v)
		}
	}
	fmt.Println(newStr)
}
