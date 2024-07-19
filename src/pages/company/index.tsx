import {Layout} from "@/components/custom/layout";
import {UserNav} from "@/components/user-nav";
import {DataTable} from "../../components/table/data-table";
import {columns} from "./components/columns";
import {Button} from "@/components/ui/button";
import {IconPlus} from "@tabler/icons-react";
import {useCallback, useEffect, useState} from "react";
import DialogCreate from "./components/dialog-create";
import {useCompanies} from "@/api/query";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Separator} from "@/components/ui/separator";
import {CheckIcon, Cross2Icon, PlusCircledIcon} from "@radix-ui/react-icons";
import {Badge} from "@/components/ui/badge";
import {regions} from "./data/data";
import {cn} from "@/lib/utils";

export default function Company() {
	const location = useLocation();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const [page, setPage] = useState<number>(Number(searchParams.get("page")) || 1);
	const [size, setSize] = useState<number>(Number(searchParams.get("size")) || 10);
	const [filter, setFilter] = useState<string | undefined>(searchParams.get("filter") || undefined);
	const [region, setRegion] = useState<string | undefined>(searchParams.get("region") || undefined);
	const [district, setDistrict] = useState<string | undefined>(searchParams.get("district") || undefined);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	const {data, isError, error, isFetching, refetch} = useCompanies(page, size, filter);

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		if (!queryParams.has("page") || !queryParams.has("size")) {
			queryParams.set("page", page.toString());
			queryParams.set("size", size.toString());
			navigate(`${location.pathname}?${queryParams.toString()}`, {replace: true});
		}
	}, [location, navigate, page, size, region]);

	useEffect(() => {
		if (data) {
			const totalPages = Math.ceil(data.totalElements / size);
			if (page > totalPages) {
				const newPage = totalPages > 0 ? totalPages : 1;
				setPage(newPage);
				setSearchParams({page: newPage.toString(), size: size.toString()});
			}
		}
	}, [size, data, page, setSearchParams]);

	const handleNext = () => {
		const newPage = page + 1;
		setSearchParams({page: newPage.toString(), size: size.toString()});
		setPage(newPage);
	};

	const handlePrevious = () => {
		const newPage = page - 1;
		setSearchParams({page: newPage.toString(), size: size.toString()});
		setPage(newPage);
	};

	const handleSizeChange = (value: string) => {
		const newSize = Number(value);
		const totalPages = Math.ceil(data!.totalElements / newSize);
		const newPage = page > totalPages ? totalPages : page;
		setSearchParams({page: newPage.toString(), size: newSize.toString()});
		setSize(newSize);
		setPage(newPage);
	};

	const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newPage = Number(event.target.value);
		if (newPage > 0 && newPage <= (data?.totalPages || 1)) {
			setPage(newPage);
			setSearchParams({page: newPage.toString(), size: size.toString()});
		}
	};

	const debouncedRefetch = useCallback(() => {
		const timeoutId = setTimeout(() => {
			refetch();
		}, 1000);
		return () => clearTimeout(timeoutId);
	}, [refetch]);

	useEffect(() => {
		if (filter !== undefined) {
			debouncedRefetch();
		}
	}, [filter, debouncedRefetch]);

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newFilter = event.target.value;
		setFilter(newFilter);
		setSearchParams({filter: newFilter, region: region || "", page: "1", size: size.toString()});
		setPage(1);
	};

	if (isFetching) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<Layout>
			{/* ===== Top Heading ===== */}
			<Layout.Header sticky>
				<div className="ml-auto flex items-center space-x-4">
					<UserNav />
				</div>
			</Layout.Header>

			<Layout.Body>
				<div className="mb-2 flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Societes</h2>
					</div>
					<Button onClick={() => setIsCreateModalOpen(true)}>
						<IconPlus size={18} className="mr-2" /> Creer une societe
					</Button>
				</div>
				<div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
					<div className="space-y-4">
						{/* Filters */}
						<div className="flex items-center justify-between">
							<div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
								<Input
									placeholder="filtre des sociétés..."
									value={filter ?? ""}
									onChange={handleFilterChange}
									className="h-8 w-[150px] lg:w-[250px]"
								/>
								<div className="flex gap-x-2">
									<Popover>
										<PopoverTrigger asChild>
											<Button variant="outline" size="sm" className="h-8 border-dashed">
												<PlusCircledIcon className="mr-2 h-4 w-4" />
												Region
												{region !== undefined && (
													<>
														<Separator orientation="vertical" className="mx-2 h-4" />
														<Badge variant="secondary" className="rounded-sm px-1 font-normal ">
															{region}
														</Badge>
													</>
												)}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-[200px] p-0" align="start">
											<Command>
												<CommandInput placeholder={"Region"} />
												<CommandList>
													<CommandEmpty>Auccun résultat.</CommandEmpty>
													<CommandGroup>
														{regions.map((option) => {
															const isSelected = region === option.label;
															return (
																<CommandItem
																	className="flex items-center py-3 px-2 cursor-pointer text-secondary-foreground shadow-sm hover:bg-secondary/80 text-xs"
																	key={option.label}
																	onSelect={() => {
																		console.log(`Option selected: ${option.label}`);
																		setSearchParams({
																			...searchParams,
																			filter: filter || "",
																			region: isSelected ? "" : option.label,
																		});
																		setRegion(isSelected ? undefined : option.label);
																	}}>
																	<div
																		className={cn(
																			"mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
																			isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
																		)}>
																		<CheckIcon className={cn("h-4 w-4")} />
																	</div>
																	{option.icon && <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
																	<span>{option.label}</span>
																</CommandItem>
															);
														})}
													</CommandGroup>
												</CommandList>
											</Command>
										</PopoverContent>
									</Popover>
								</div>

								{filter || region ? (
									<Button
										variant="ghost"
										onClick={() => {
											setSearchParams({...searchParams});
											setFilter(undefined);
											setRegion(undefined);
										}}
										className="h-8 px-2 lg:px-3">
										Réinitialiser
										<Cross2Icon className="ml-2 h-4 w-4" />
									</Button>
								) : null}
							</div>
						</div>
						<DataTable data={data?.content ?? []} columns={columns} />
						{/* ===== Pagination ===== */}
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-x-2">
								<span className="text-sm">Nombre de lignes par page</span>
								<Select value={size.toString()} onValueChange={handleSizeChange}>
									<SelectTrigger className="h-8 w-[70px]">
										<SelectValue placeholder={size.toString()} />
									</SelectTrigger>
									<SelectContent side="top">
										{[1, 5, 10, 15, 20].map((pageSize) => (
											<SelectItem key={pageSize} value={`${pageSize}`}>
												{pageSize}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex items-center gap-x-2">
								<span className="flex gap-2 items-center text-sm text-muted-foreground">
									Page{" "}
									<Input
										value={page}
										type="number"
										min="1"
										max={data?.totalPages}
										onChange={handlePageChange}
										className="w-16"
									/>{" "}
									sur {data?.totalPages}
								</span>
								<Button variant="outline" onClick={handlePrevious} disabled={page === 1} className="h-8 px-2 lg:px-3">
									Précédent
								</Button>
								<Button
									variant="outline"
									onClick={handleNext}
									disabled={page === data?.totalPages}
									className="h-8 px-2 lg:px-3">
									Suivant
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* ===== Create Company Modal ===== */}
				<DialogCreate
					isCreateModalOpen={isCreateModalOpen}
					setIsCreateModalOpen={(value: boolean) => setIsCreateModalOpen(value)}
				/>
			</Layout.Body>
		</Layout>
	);
}
