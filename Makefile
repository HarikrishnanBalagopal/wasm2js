.PHONY: full
full:
	cd lib/ && pnpm run clean && pnpm run build && cd ../demo/ && pnpm run clean && pnpm run build && pnpm run start
