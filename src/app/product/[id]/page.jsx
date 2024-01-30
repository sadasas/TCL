import dynamic from "next/dynamic";
import { gql } from "@apollo/client";
import { notFound } from "next/navigation";

import styles from "@/styles/pages/product/Product.module.scss";
import HighligthLLoader from "@/components/contentLoader/HighligthLoader";
import ScrollUp from "@/components/ScrollUp";
import { getClient } from "libs/appolloClient";
import ProductDetail from "@/components/products/ProductDetail";

const HigligthProduct = dynamic(
  () => import("@/components/products/HigligthProduct"),
  {
    ssr: false,
    loading: () => <HighligthLLoader />,
  },
);

const GET_PRODUCTS = gql`
  query GetProducts {
    products(limit: 18) {
      _id
      img
      title
      price
    }
  }
`;

const GET_PRODUCT_BY_ID = gql`
  query GetProduct($id: ObjectId!) {
    products(query: { _id: $id }) {
      _id
      category
      description
      img
      price
      otherImgs
      title
    }
  }
`;

export async function generateMetadata({ params }) {
  let dataProducts;

  try {
    dataProducts = await getClient().query({
      query: GET_PRODUCT_BY_ID,
      variables: { id: params.id },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
  } catch (error) {
    return notFound();
  }

  if (!dataProducts) return notFound();
  return {
    language: "indonesia",
    title: dataProducts.data.products[0].title,
    keywords: [dataProducts.data.products[0].title],
    description: dataProducts.data.products[0].description,
    alternates: {
      canonical: `/products/${params.id}`,
    },
  };
}

export async function generateStaticParams() {
  const resp = await getClient().query({
    query: GET_PRODUCTS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return resp?.data?.products?.map((item) => ({
    slug: item._id ? item._id : "404",
  }));
}

export default async function Page({ params }) {
  const { id } = params;

  const product = await getClient().query({
    query: GET_PRODUCT_BY_ID,
    variables: { id: id },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const featuredProducts = await getClient().query({
    query: GET_PRODUCTS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return (
    <div className="container">
      <div className={styles["product-container"]}>
        <ProductDetail product={product.data.products[0]} />
        <HigligthProduct
          logoUrl="/img/trending.svg"
          title={"Trending Items"}
          items={featuredProducts.data.products}
          colorTitle="#146C94"
        />
      </div>
      <ScrollUp />
    </div>
  );
}
