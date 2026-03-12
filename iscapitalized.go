package main

func isTrue(v byte) bool {
	return !(v >= 'A' && v <= 'Z')
}
func IsCapitalized(str string) {
	isBool := true

	for i, v := range str {
		if isTrue(str[0]) {
			isBool = false
			break
		}
		if v == ' ' {
			if isTrue(str[i+1]) {
				isBool = false
				break
			}
		}
	}
	println(isBool)
}
