import dynamic from "next/dynamic";
import { gql } from "@apollo/client";

import ListLoader from "@/components/contentLoader/ListLoader";
import styles from "@/styles/categories/CategoriesItem.module.scss";
import { getDataQueryServer } from "app/api/getDataQuery";
import { getAccessToken } from "app/api/getAccessToken";
const ProductItem = dynamic(() => import("@/components/products/ProductItem"), {
  loading: () => <ListLoader />,
});

export async function generateStaticParams() {
  const categories = ["chair", "table", "cupboard", "sofa"];

  return categories.map((category) => ({
    type: category,
  }));
}

const GET_PRODUCTS_CAT = (type) => gql`
    query Query {
      products(query: { category: ${JSON.stringify(type)} }) {
        _id
		img
		price
		title
      }
    }
  `;

async function CategoriesItem({ params }) {
  const { type } = params;
  const accessToken = await getAccessToken();
  const { products: categoryProducts } = await getDataQueryServer(
    GET_PRODUCTS_CAT(type),
    accessToken
  );

  return (
    <div className={styles["product-container"]}>
      <div className={styles.title}>{params.type}</div>
      <div className={styles["products-content-container"]}>
        {categoryProducts.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesItem;
