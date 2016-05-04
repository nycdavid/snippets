// A single-nested Go-hash
hashObject := map[string]interface{} {
	"name": "foobar",
}

// A hash with another nested hash.
// Note the second appearance of the map[string]interface{} construct
hashObject := map[string]interface{} {
	"name": "foobar",
	"data": map[string]interface{} {
		"body": "Lorem ipsum dolor..."
	}
}
