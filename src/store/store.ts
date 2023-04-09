import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// assets
import BanksIcon1 from '../assets/banks/banksIcon_1.svg';
import BanksIcon2 from '../assets/banks/banksIcon_2.svg';
import BanksIcon3 from '../assets/banks/banksIcon_3.svg';
import BanksIcon4 from '../assets/banks/banksIcon_4.svg';
import BanksIcon5 from '../assets/banks/banksIcon_5.svg';

// interfaces
export interface IStore {
	paymentInfo: IPaymentInfo;
	banks: IBanks[];
}

export interface IPaymentInfo {
	requestId: number;
	summ: number;
	pickedBank: IBanks | null;
	card: number;
	comment: string | null;
	status: 'inProgress' | false | true;
}

export interface IBanks {
	logo: string;
	name: string;
}


// key
export const key: InjectionKey<Store<IStore>> = Symbol()


// data
export const store = createStore<IStore>({
	state: {
		paymentInfo: {
			requestId: 56712,
			summ: 500,
			pickedBank: null,
			card: 1234567812345678,
			comment: null,
			status: 'inProgress'
		},

		banks: [
			{
				logo: BanksIcon1,
				name: 'А-банк',
			},
			{
				logo: BanksIcon2,
				name: 'Izibank',
			},
			{
				logo: BanksIcon3,
				name: 'Monobank',
			},
			{
				logo: BanksIcon4,
				name: 'ПриватБанк',
			},
			{
				logo: BanksIcon5,
				name: 'ПУМБ',
			},
		],
	},
	mutations: {
		userPickBank (state, payload) {
			state.paymentInfo.pickedBank = payload.bank;
		}
	  }
});