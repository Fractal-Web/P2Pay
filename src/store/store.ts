import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// interfaces
export interface IBanks {
	banks: {
		logo: string,
		name: string
	}[];
}


// key
export const key: InjectionKey<Store<IBanks>> = Symbol()


// data
export const store = createStore<IBanks>({
	state: {
		banks: [
			{
				logo: 'image',
				name: 'А-банк',
			},
			{
				logo: 'image',
				name: 'Izibank',
			},
			{
				logo: 'image',
				name: 'Monobank',
			},
			{
				logo: 'image',
				name: 'ПриватБанк',
			},
			{
				logo: 'image',
				name: 'ПУМБ',
			},
		],
	},
});