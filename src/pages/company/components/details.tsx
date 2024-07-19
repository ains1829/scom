import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Layout} from "@/components/custom/layout";
import {UserNav} from "@/components/user-nav";
import {IconArrowLeft} from "@tabler/icons-react";

export default function Details() {
	return (
		<Layout>
			{/* ===== Top Heading ===== */}
			<Layout.Header sticky>
				<div className="ml-auto flex items-center space-x-4">
					<UserNav />
				</div>
			</Layout.Header>

			<Layout.Body>
				<div className="mb-2 flex items-center ">
					<IconArrowLeft size={32} className="mr-2" />
					<a href="/companies" className="text-xl font-bold tracking-tight">
						Liste des sociétés
					</a>
				</div>
				<div className="flex flex-col gap-8 w-full max-w-5xl mx-auto py-12 px-4 md:px-6 lg:px-0">
					<header className="flex items-center justify-between">
						<h1 className="text-3xl font-bold">Company 1</h1>
						<div className="flex items-center gap-4">
							<Button variant="outline">Enregistrer</Button>
						</div>
					</header>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<div>
								<h2 className="text-lg font-medium mb-2">Description</h2>
								<Textarea
									className="w-full"
									defaultValue="Acme Inc. est un fournisseur de premier plan de produits et services de haute qualité. Nous sommes en activité depuis plus de 20 ans et nous nous engageons à offrir une valeur exceptionnelle à nos clients."
								/>
							</div>
							<div>
								<h2 className="text-lg font-medium mb-2">Détails</h2>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<Label htmlFor="nif">NIF</Label>
										<Input id="nif" defaultValue="123456789" />
									</div>
									<div>
										<Label htmlFor="stat">STAT</Label>
										<Input id="stat" defaultValue="123456789" />
									</div>
									<div>
										<Label htmlFor="fiscal-number">Numéro Fiscal</Label>
										<Input id="fiscal-number" defaultValue="987654321" />
									</div>
									<div>
										<Label htmlFor="telephone">Téléphone</Label>
										<Input id="telephone" defaultValue="+1 (555) 555-5555" />
									</div>
									<div>
										<Label htmlFor="responsible-person">Personne Responsable</Label>
										<Input id="responsible-person" defaultValue="John Doe" />
									</div>
								</div>
							</div>
						</div>
						<div className="space-y-4">
							<div>
								<h2 className="text-lg font-medium mb-2">Adresse</h2>
								<div className="grid gap-2">
									<Input defaultValue="Rue Ravoninahitriniarivo, Antananarivo, 101" />
								</div>
							</div>
							<div>
								<h2 className="text-lg font-medium mb-2">Localisation</h2>
								<div className="grid gap-2">
									<Input defaultValue="Region" />
									<Input defaultValue="District" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.Body>
		</Layout>
	);
}
