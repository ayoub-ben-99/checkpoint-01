package level3

func RepeatAlpha(str string) string {
	newStr := ""
	for _, v := range str {
		for i := 0; i < int(v-'a'+1); i++ {
			newStr += string(v)
		}
	}
	return newStr
}
