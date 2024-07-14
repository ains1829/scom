import {Admin} from "./schema";

export const admins: Admin[] = [
	{
		id: "1",
		name: "Dev",
		firstName: "Dylan",
		telephone: "565135453",
		email: "dylandev@example.com",
		birthdate: new Date("2000-01-01"),
		image: "https://gravatar.com/avatar/2d298a0bd19f0dc95a5001e85f78eb9b?s=200&d=robohash&r=x",
		address: "123 Main St",
		profile: "Directeur Regional",
	},
	{
		id: "2",
		name: "Admin",
		firstName: "John",
		telephone: "565135453",
		email: "johnadmin@example.com",
		birthdate: new Date("2000-01-01"),
		image: "https://gravatar.com/avatar/2d298a0bd19f0dc95a5001e85f78eb9b?s=200&d=robohash&r=x",
		address: "123 Main St",
		profile: "Super Admin",
	},
	{
		id: "3",
		name: "User",
		firstName: "Alice",
		telephone: "565135453",
		email: "aliceuser@example.com",
		birthdate: new Date("2000-01-01"),
		image: "https://gravatar.com/avatar/2d298a0bd19f0dc95a5001e85f78eb9b?s=200&d=robohash&r=x",
		address: "123 Main St",
		profile: "Secretaire General",
	},
];
