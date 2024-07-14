import {Layout} from "@/components/custom/layout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {UserNav} from "@/components/user-nav";
import ProductType from "./product-type";
import Product from "./product";

const ManageProducts = () => {
	return (
		<Layout>
			{/* ===== Top Heading ===== */}
			<Layout.Header sticky>
				<div className="ml-auto flex items-center space-x-4">
					<UserNav />
				</div>
			</Layout.Header>

			<Layout.Body>
				<Tabs defaultValue="product-types">
					<TabsList className="flex items-center gap-4 border-b max-w-[50%] mx-auto">
						<TabsTrigger className="w-[50%]" value="product-types">
							Type de produits
						</TabsTrigger>
						<TabsTrigger className="w-[50%]" value="products">
							Produits
						</TabsTrigger>
					</TabsList>
					<TabsContent value="product-types">
						<ProductType />
					</TabsContent>
					<TabsContent value="products">
						<Product />
					</TabsContent>
				</Tabs>
			</Layout.Body>
		</Layout>
	);
};

export default ManageProducts;
