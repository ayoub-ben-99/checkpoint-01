package level5

func CanJump(input []uint) bool {
	if len(input) == 0 {
		return false
	}

	p := uint(0)

	for p < uint(len(input)-1) {
		if input[p] == 0 {
			return false
		}

		p += input[p]

		if p >= uint(len(input)) {
			return false
		}
	}

	return true
}
