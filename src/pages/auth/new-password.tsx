import {FC, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useNavigate} from "react-router-dom";
import {useResetPassword} from "@/api/mutation";
import {SubmitHandler, useForm} from "react-hook-form";
import {Lostpassword} from "@/api/json/requestbody/Lostpassword";
const NewPassword: FC = () => {
	const navigate = useNavigate();
	const storedValue = localStorage.getItem("email");
	var email = "andyrakotonavalona0@gmail.com";
	useEffect(() => {
		if (!storedValue) {
			navigate("/reset-password");
		} else {
			email = storedValue;
		}
	}, [navigate]);
	const ChangePassword = useResetPassword();
	const handleReset: SubmitHandler<Lostpassword> = async (data) => {
		const reponse = await ChangePassword.mutateAsync(data);
		console.log(reponse);
		if (reponse.data?.status === 200) {
			alert("Connectez vous maintenant");
			localStorage.removeItem("email");
			navigate("/");
		} else {
			alert(reponse.data?.data);
		}
	};
	const {register, handleSubmit} = useForm<Lostpassword>();
	return (
		<div className="flex justify-center items-center h-screen w-screen bg-primary">
			<h1 className="font-bold text-5xl text-primary-foreground mb-10">
				SC<span className="text-red-600">O</span>
				<span className="text-green-600">M</span>
			</h1>
			<Card className="w-full max-w-sm p-2">
				<CardHeader>
					<CardTitle className="text-2xl text-center">Nouveau mot de passe</CardTitle>
					<CardDescription className="text-center"></CardDescription>
				</CardHeader>
				<form onSubmit={handleSubmit(handleReset)}>
					<Input type="hidden" value={email} {...register("email")} />
					<CardContent className="grid gap-6">
						<div className="grid gap-2">
							<Label htmlFor="code">Code de verification</Label>
							<Input id="code" {...register("code")} type="text" placeholder="code" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="new-password">Nouveau mot de passe</Label>
							<Input id="new-password" {...register("password")} type="password" placeholder="password" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="new-password-confirmation">Confirmation du mot de passe</Label>
							<Input
								id="new-password-confirmation"
								{...register("confirpassword")}
								type="password"
								placeholder="confirm password"
								required
							/>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-4 justify-center">
						<Button type="submit" className="w-full ">
							Valider
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
};

export default NewPassword;
