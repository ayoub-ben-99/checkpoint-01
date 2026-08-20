package level4

func PrintMemory(arr [10]byte) {
	for i := 0; i < len(arr); i++ {
		if i == 5 {
			print("\n")
		}

		print(hex(arr[i]), " ")
	}

	print("\n")

	for i := 0; i < len(arr); i++ {
		if arr[i] >= 32 && arr[i] <= 126 {
			print(string(arr[i]))
		} else {
			print(".")
		}
	}

	print("\n")
}

func hex(n byte) string {
	digits := "0123456789abcdef"

	result := ""

	result += string(digits[n/16])
	result += string(digits[n%16])

	return result
}
