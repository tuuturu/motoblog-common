

build:
	npm run build
	cp package.json dist/package.json

clean:
	@rm -r dist/ || true
