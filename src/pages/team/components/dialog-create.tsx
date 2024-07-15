import {FC, useState} from "react";
import {Button} from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SelectTags} from "@/components/selectTags";

const leaders: string[] = ["Andry Rakoto", "Naina Ravao", "Lova Rasoamanana", "Jean Rabarison", "Rina Rasamimanana"];
const allMembers: string[] = [
	"Andry Rakoto",
	"Naina Ravao",
	"Lova Rasoamanana",
	"Jean Rabarison",
	"Rina Rasamimanana",
	"Fara Rabe",
	"Mbola Randria",
	"Faly Andriamampianina",
	"Soa Rakotondrasoa",
	"Tiana Rakotonirina",
	"Bema Rasoanirina",
	"Haja Raharison",
	"Tsiry Andrianirina",
	"Lala Randrianarivelo",
	"Vola Razafindrakoto",
	"Hasina Rakotomavo",
];

type Props = {
	isCreateModalOpen: boolean;
	setIsCreateModalOpen: (value: boolean) => void;
};

const DialogCreate: FC<Props> = ({isCreateModalOpen, setIsCreateModalOpen}) => {
	const [teamName, setTeamName] = useState("");
	const [leaderName, setLeaderName] = useState(leaders[0]);
	const [members, setMembers] = useState<string[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsCreateModalOpen(false);
		console.log("Team Created", {teamName, leaderName, members});
	};

	return (
		<Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
			<DialogContent className="!w-[800px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Création d'une équipe</DialogTitle>
					<DialogDescription></DialogDescription>
					<DialogClose />
				</DialogHeader>
				<form onSubmit={handleSubmit} className="grid gap-4 py-4">
					<div className="flex flex-col gap-1">
						<Label htmlFor="teamName" className="text-left">
							Nom de l'équipe
						</Label>
						<Input
							id="teamName"
							placeholder="Nom de l'équipe"
							className="col-span-3"
							value={teamName}
							onChange={(e) => setTeamName(e.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="leaderName" className="text-left">
							Nom du leader
						</Label>
						<Select value={leaderName} onValueChange={setLeaderName}>
							<SelectTrigger>
								<SelectValue>{leaderName}</SelectValue>
							</SelectTrigger>
							<SelectContent>
								{leaders.map((leader, index) => (
									<SelectItem key={index} value={leader}>
										{leader}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="members" className="text-left">
							Membres
						</Label>
						<SelectTags value={members} onChange={setMembers} options={allMembers} />
					</div>
					<DialogFooter>
						<div className="flex gap-2">
							<Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
								Annuler
							</Button>
							<Button type="submit">Créer</Button>
						</div>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default DialogCreate;
