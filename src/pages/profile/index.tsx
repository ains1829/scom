import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Placeholder from "@/assets/images/placeholder.svg";
import {Layout} from "@/components/custom/layout";
import {UserNav} from "@/components/user-nav";
import {IconPrinter} from "@tabler/icons-react";

export default function MyProfile() {
	const [name, setName] = useState("John Doe");
	const [firstName, setFirstName] = useState("John");
	const [telephone, setTelephone] = useState("+1 (555) 123-4567");
	const [birthdate, setBirthdate] = useState("January 1, 1990");
	const [address, setAddress] = useState("123 Main St, Anytown USA");
	const [profile, setProfile] = useState("Chef d'equipe");
	return (
		<Layout>
			{/* ===== Top Heading ===== */}
			<Layout.Header sticky>
				<div className="ml-auto flex items-center space-x-4">
					<UserNav />
				</div>
			</Layout.Header>

			<Layout.Body>
				<div className="mb-10 flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Profil</h2>
					</div>

					<Button variant="outline">Enregistrer</Button>
				</div>
				<div className=" max-md:flex-col flex items-center md:items-start gap-6 md:gap-8">
					<div className="flex-shrink-0">
						<img
							src={Placeholder}
							width={128}
							height={128}
							alt="Profil"
							className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
						/>
						<Button variant="outline" className="mt-4">
							Changer l'image
						</Button>
					</div>
					<div className="flex-1 grid gap-4">
						<div className="grid gap-1">
							<Input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="text-2xl md:text-3xl font-bold"
							/>
							<p className="text-muted-foreground">{profile}</p>
						</div>
						<div className="grid sm:grid-cols-2 gap-4">
							<div className="grid gap-1">
								<Label>Prénom</Label>
								<Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
							</div>
							<div className="grid gap-1">
								<Label>Matricule</Label>
								<p>12345678</p>
							</div>
							<div className="grid gap-1">
								<Label>Téléphone</Label>
								<Input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
							</div>
							<div className="grid gap-1">
								<Label>Email</Label>
								<p>jean.rakoto@example.com</p>
							</div>
							<div className="grid gap-1">
								<Label>Date de naissance</Label>
								<Input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
							</div>
							<div className="grid gap-1">
								<Label>Adresse</Label>
								<Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
							</div>
							<div className="grid gap-1">
								<Label>Région</Label>
								<p>Analamanga</p>
							</div>
						</div>
					</div>
				</div>
			</Layout.Body>
		</Layout>
	);
}
