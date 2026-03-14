package level3

import "fmt"

func SearchReplace(str, str2, rep string) {
	newStr := ""
	num := 0
	for _, v := range str {
		if string(v) == str2 && num == 0 {
			newStr += rep
			num = 1
		} else {
			newStr += string(v)
		}
	}
	fmt.Println(newStr)
}
