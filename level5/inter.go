package level5

import "fmt"

func Inter(s1, s2 string) {
    seen := map[rune]bool{}
    result := ""

    for _, v := range s1 {
        seen[v] = true
    }

    added := map[rune]bool{}
    for _, v := range s2 {
        if seen[v] && !added[v] {
            result += string(v)
            added[v] = true
        }
    }

    fmt.Println(result)
}
