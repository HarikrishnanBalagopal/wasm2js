.PHONY: full
full:
	cd lib/ && pnpm run clean && pnpm run build && cd ../demo/ && pnpm run clean && pnpm run build && pnpm run start

.PHONY: dev
dev:
	cd lib/ && pnpm run clean && pnpm run build && cd ../demo/ && pnpm run clean && pnpm run build-dev && pnpm run start

.PHONY: publish-web
publish-web:
	rm -rf docs/ && cp -r demo/dist/ docs/

.PHONY: publish
publish:
	cd lib/ && npm publish --access public
