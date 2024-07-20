import {FC} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useAuthuser} from "@/api/mutation";
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthUser} from "@/api/json/requestbody/AuthUser";
import {useNavigate} from "react-router-dom";
import ImageMIC from "@/assets/images/mic.png";
import Wareframe1 from "@/assets/decorations/Wireframe1.svg";

const Login: FC = () => {
	const navigate = useNavigate();
	const AuthMutation = useAuthuser();
	const HandleAuth: SubmitHandler<AuthUser> = async (data) => {
		const reponse = await AuthMutation.mutateAsync(data);
		if (reponse.data?.status === 200) {
			localStorage.setItem("role", reponse.data?.data.role);
			localStorage.setItem("token", reponse.data?.data.token);
			navigate("/dashboard");
		} else {
			alert("Mot de passe incorrect");
		}
	};
	const {register, handleSubmit} = useForm<AuthUser>();
	return (
		<div className="flex justify-center items-center h-screen w-screen bg-background overflow-y-hidden">
			<div className="relative md:flex hidden  flex-col justify-center items-center w-1/2 h-full bg-primary text-primary-foreground z-10">
				<img src={Wareframe1} alt="wireframe" className="w-full z-0 absolute rotate-12 -top-[45%] right-[-20%]" />
				<img src={Wareframe1} alt="wireframe" className="w-full z-0 absolute -rotate-180 bottom-[-50%] left-[-10%]" />
				<div className="flex flex-col gap-y-10 mx-20">
					<h1 className="font-bold text-5xl">
						Bienvenue sur SC<span className="text-red-600">O</span>
						<span className="text-green-600">M</span>
					</h1>
					<p className="text-sm">
						Le Ministère en charge du commerce veille au contrôle du marché afin de garantir la sécurité et la
						transparence des activités commerciales. Notre plateforme, SCOM (Suivi des Activités du Commerce), a été
						développée pour soutenir ces efforts en offrant un outil complet de gestion et de suivi des contrôles.
					</p>
				</div>
			</div>
			<div className=" md:w-1/2 w-full h-full flex flex-col justify-center items-center z-20">
				<img src={ImageMIC} alt="mic" className="md:w-1/3 w-3/4" />
				<Card className=" max-w-sm p-2">
					<CardHeader>
						<CardTitle className="text-2xl text-center">Connexion</CardTitle>
						<CardDescription className="text-center">
							Saisissez votre adresse email et votre mot de passe pour accéder à votre compte.
						</CardDescription>
					</CardHeader>
					<form onSubmit={handleSubmit(HandleAuth)}>
						<CardContent className="grid gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" {...register("email")} type="email" placeholder="m@example.com" required />
							</div>
							<div className="grid gap-2">
								<div className="flex items-center justify-between">
									<Label htmlFor="password">Mot de passe</Label>
									<a
										href="reset-password"
										className="text-xs font-medium underline underline-offset-4 hover:text-primary">
										Mot de passe oublié?
									</a>
								</div>
								<Input id="password" {...register("password")} type="password" required />
							</div>
						</CardContent>
						<CardFooter className="flex flex-col gap-4 justify-center">
							<Button type="submit" className="w-full ">
								Se connecter
							</Button>
							<a href="signin" className="">
								S'inscrire
							</a>
						</CardFooter>
					</form>
				</Card>
			</div>
		</div>
	);
};

export default Login;
