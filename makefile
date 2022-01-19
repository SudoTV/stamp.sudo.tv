ifeq ($(OS),Windows_NT)
	OS := "Windows"
	OPEN_COMMAND := "start"
else
	UNAME_S := $(shell uname -s)
	ifeq ($(UNAME_S),Linux)
		OS := "Linux"
		OPEN_COMMAND := "open"
	endif
	ifeq ($(UNAME_S),Darwin)
		OS := "MacOS"
		OPEN_COMMAND := "open"
	endif
endif

main: serve

serve:
	@echo "[INFO] Running on $(OS)"
	@echo "[INFO] Serving at Port: 4000"
	@$(OPEN_COMMAND) "http://localhost:4000"
	@bundler exec jekyll serve

install:
	@echo "[INFO] Installing Dependencies"
	@bundler install

build:
	@echo "[INFO] Building Site"
	@bundler exec jekyll build
