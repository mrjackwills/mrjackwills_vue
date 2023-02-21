class Env {
	readonly #version = String(import.meta.env.VERSION);
	readonly #build_date = new Date(import.meta.env.BUILD_DATE);
	readonly #mode_production = import.meta.env.PROD ;

	get build_date (): string {
		return this.#build_date.toISOString();
	}

	get mode_production (): boolean {
		return this.#mode_production;
	}

	get version (): string {
		return this.#version;
	}
}

export const env = new Env();