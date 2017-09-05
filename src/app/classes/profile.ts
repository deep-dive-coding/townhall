export class Profile{
	constructor(
		public id: number,
		public profileDistrictId: number,
		public profileActivationToken: string,
		public profileAddress1: string,
		public profileAddress2: string,
		public profileCity: string,
		public profileEmail: string,
		public profileFirstName: string,
		public profileLastName: string,
		public profileRepresentative: string,
		public profileSalt: string,
		public profileState: string,
		public profileUserName: string,
		public profileZip: string
){
	}
}