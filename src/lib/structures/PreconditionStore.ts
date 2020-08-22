import type { Client } from 'discord.js';
import { BaseStore } from './base/BaseStore';
import { Precondition } from './Precondition';

export class PreconditionStore extends BaseStore<Precondition> {
	public constructor(client: Client) {
		// @ts-expect-error Abstract classes are not assignable to Ctor<T>.
		super(client, Precondition);
	}
}
