import {FC} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const Signin: FC = () => {
	return (
		<div className="flex justify-center items-center h-screen w-screen bg-primary">
			<Card className="w-full max-w-sm p-2">
				<CardHeader>
					<CardTitle className="text-2xl text-center">Inscription</CardTitle>
					<CardDescription className="text-center"></CardDescription>
				</CardHeader>
				<CardContent className="grid gap-6">
					<div className="grid gap-2">
						<Label htmlFor="matricule">Matricule</Label>
						<Input id="matricule" type="text" placeholder="XXXXXX" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="m@example.com" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Mot de passe</Label>
						<Input id="password" type="password" required />
					</div>
				</CardContent>
				<CardFooter className="flex flex-col gap-4 justify-center">
					<Button className="w-full ">S'inscrire</Button>
					<a href="signup" className="">
						Se connecter
					</a>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Signin;
