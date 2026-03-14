package level4

import (
	"fmt"
)

// تضغط السلسلة النصية باستخدام طريقة الضغط البسيطة
func ZipString(str string) {
	if len(str) == 0 {
		return
	}

	count := 1
	result := ""

	for i := 0; i < len(str)-1; i++ {
		if str[i] == str[i+1] {
			count++
		} else {
			result += string(str[i]) + fmt.Sprint(count)
			count = 1
		}
	}
	result += string(str[len(str)-1]) + fmt.Sprint(count)
	fmt.Println(result)
}
