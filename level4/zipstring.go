package level4

func ZipString(str string) {
	if len(str) == 0 {
		return
	}

	result := ""
	count := 1

	for i := 0; i < len(str)-1; i++ {
		if str[i] == str[i+1] {
			count++
		} else {
			result += string(str[i])
			result += string(count + '0')
			count = 1
		}
	}

	result += string(str[len(str)-1])
	result += string(count + '0')

	println(result)
}
