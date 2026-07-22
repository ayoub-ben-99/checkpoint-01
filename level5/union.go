package level5

import "fmt"

func Union(s1, s2 string) {
	result := ""
	seen := map[rune]bool{}
	for _, v := range s1 + s2 {
		if !seen[v] {
			result += string(v)
			seen[v] = true
		}
	}
	fmt.Println(result)
}
