package level5

import "fmt"

func isArr(value string) []string {
	newArr := []string{}
	newStr := ""
	for _, v := range value {
		if v != ' ' {
			newStr += string(v)
			fmt.Println(newStr)
		} else {
			newArr = append(newArr, newStr)
			newStr = ""
		}
	}
	// newArr = append(newArr, string(value[len(value)-1]))
	return newArr
}

func WdMatch(str1, str2 string) {
	// j := 0
	// for i := 0; i < len(str1) && j < len(str2); i++ {
	// 	if str1[i] == str2[j] {
	// 		j++
	// 	}
	// }
	fmt.Println(isArr(str2))
}
