package level2

import "fmt"

func Checknumber(str string) {
	count := 0
	for _, v := range str {
		if v >= '0' && v <= '9' {
			count++
		} else {
			return
		}
	}
	fmt.Println(count)
}
