.PHONY: full
full:
	cd lib/ && pnpm run clean && pnpm run build && cd ../demo/ && pnpm run clean && pnpm run build && pnpm run start

.PHONY: publish
publish:
	rm -rf docs/ && cp -r demo/dist/ docs/
