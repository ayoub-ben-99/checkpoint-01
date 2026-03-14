package level3

import "fmt"

func LastWord(str string) {
	newStr := ""
	for _, v := range str {
		newStr += string(v)
		if v == ' ' {
			newStr = ""
		}
	}
	fmt.Println(newStr)
}
