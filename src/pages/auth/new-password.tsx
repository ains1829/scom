import {FC} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const NewPassword: FC = () => {
	return (
		<div className="flex justify-center items-center h-screen w-screen bg-primary">
			<Card className="w-full max-w-sm p-2">
				<CardHeader>
					<CardTitle className="text-2xl text-center">Nouveau mot de passe</CardTitle>
					<CardDescription className="text-center"></CardDescription>
				</CardHeader>
				<CardContent className="grid gap-6">
					<div className="grid gap-2">
						<Label htmlFor="code">Code de verification</Label>
						<Input id="code" type="text" placeholder="" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="new-password">Nouveau mot de passe</Label>
						<Input id="new-password" type="password" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="new-password-confirmation">Confirmation du mot de passe</Label>
						<Input id="new-password-confirmation" type="password" required />
					</div>
				</CardContent>
				<CardFooter className="flex flex-col gap-4 justify-center">
					<Button className="w-full ">Valider</Button>
					<div className="text-sm text-center">
						Vous n'avez pas reçu de code de confirmation ?
						<br />
						<a href="" className="font-medium underline underline-offset-4 hover:text-primary">
							Envoyer un nouveau code
						</a>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default NewPassword;
