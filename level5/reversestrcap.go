package level5

import "fmt"

func ReverseStrCap(str string) {
	newStr := ""
	result := ""
	for i := range str {
		newStr += string(str[len(str)-1-i])
	}
	for _, v := range newStr {
		if v >= 'a' && v <= 'z' {
			result += string(rune(v - 32))
		} else if v >= 'A' && v <= 'Z' {
			result += string(rune(v + 32))
		}
	}
	fmt.Println(result)
}
