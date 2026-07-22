package level5

import "fmt"

func Hiddenp(s1, s2 string) {
	j := 0
	for i := 0; i < len(s1) && j < len(s2); i++ {
		if s1[i] == s2[j] {
			j++
		}
	}

	fmt.Println(j == len(s2))
}
