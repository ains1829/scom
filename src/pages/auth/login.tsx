import {FC} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const Login: FC = () => {
	return (
		<div className="flex justify-center items-center h-screen w-screen bg-primary">
			<Card className="w-full max-w-sm p-2">
				<CardHeader>
					<CardTitle className="text-2xl text-center">Connexion</CardTitle>
					<CardDescription className="text-center">
						Saisissez votre adresse email et votre mot de passe pour accéder à votre compte.
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-6">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="m@example.com" required />
					</div>
					<div className="grid gap-2">
						<div className="flex items-center justify-between">
							<Label htmlFor="password">Mot de passe</Label>
							<a href="reset-password" className="text-xs font-medium underline underline-offset-4 hover:text-primary">
								Mot de passe oublié?
							</a>
						</div>
						<Input id="password" type="password" required />
					</div>
				</CardContent>
				<CardFooter className="flex flex-col gap-4 justify-center">
					<Button className="w-full ">Se connecter</Button>
					<a href="signin" className="">
						S'inscrire
					</a>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Login;
