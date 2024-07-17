import {FC, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import { useGenerateCode } from "@/api/mutation";
import { useNavigate } from "react-router-dom";

const ResetPassword: FC = () => {
	const [email, setEmail] = useState('');
	const generateCode = useGenerateCode();
	const navigate = useNavigate();
	const handleSubmit = async (event : any) => {
    event.preventDefault();
    try {
      const response = await generateCode.mutateAsync(email);
			if (response.data?.status === 200) {
				alert('Voir votre email');
				localStorage.setItem('email', email);
				navigate('/new-password')
			} else {
				alert(response.data?.data);
			}
    } catch (error) {
      alert("Network error: " + error);
    }
  };
	return (
		<div className="flex justify-center items-center h-screen w-screen bg-primary">
			<Card className="w-full max-w-sm p-2">
				<CardHeader>
					<CardTitle className="text-2xl text-center">Réinitialisation du mot de passe</CardTitle>
					<CardDescription className="text-center"></CardDescription>
				</CardHeader>
				<form onSubmit={handleSubmit}>
					<CardContent className="grid gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" onChange={(e) => setEmail(e.target.value)}  value={email} type="email" placeholder="m@example.com" required />
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-4 justify-center">
						<Button type="submit" className="w-full ">Réinitialiser le mot de passe</Button>
						<div className="text-sm text-center">
							Vous vous souvenez de votre mot de passe ?
							<br />
							<a href="/" className="font-medium underline underline-offset-4 hover:text-primary">
								Se connecter
							</a>
						</div>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
};

export default ResetPassword;
