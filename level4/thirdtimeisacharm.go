package level4

func Thirdtimeisacharm(arr []string, chr string) {
	if len(arr) < 3 {
		println("arr < 3")
		return
	} else if arr[2] == chr {
		println(arr[2], "=", chr)
	} else {
		println(arr[2], "!=", chr)
	}
}
