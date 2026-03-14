package level2

import "fmt"

func Countcharacter(str, cher string) {
	count := 0
	for _, v := range str {
		for _, c := range cher {
			if v == c {
				count++
			}
		}
	}
	fmt.Println(count)
}
