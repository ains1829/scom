import {FC} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const ResetPassword: FC = () => {
	return (
		<div className="flex justify-center items-center h-screen w-screen bg-primary">
			<Card className="w-full max-w-sm p-2">
				<CardHeader>
					<CardTitle className="text-2xl text-center">Réinitialisation du mot de passe</CardTitle>
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
				</CardContent>
				<CardFooter className="flex flex-col gap-4 justify-center">
					<Button className="w-full ">Réinitialiser le mot de passe</Button>
					<div className="text-sm text-center">
						Vous vous souvenez de votre mot de passe ?
						<br />
						<a href="signup" className="font-medium underline underline-offset-4 hover:text-primary">
							Se connecter
						</a>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ResetPassword;
