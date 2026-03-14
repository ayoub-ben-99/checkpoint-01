package level4

import "fmt"

func Weareunique(str string) {
	ifbool := true
	for i := range str {
		num := 0
		for j := i; j < len(str); j++ {
			if str[i] == str[j] && num == 0 {
				num = 1
			} else if str[i] == str[j] && num == 1 {
				ifbool = false
			}
		}
	}
	fmt.Println(ifbool)
}
