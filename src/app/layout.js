import "@/styles/globals.scss";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import ApolloClientProvider from "@/utils/ApolloProvider";
import ReduxProvider from "@/utils/ReduxProvider";
import QueryProvider from "@/utils/ReactQueryProvider";

export const metadata = {
  title: "TCL",
  description: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloClientProvider>
          <ReduxProvider>
            <QueryProvider>
              <Navbar />
              {children}
              <Footer />
            </QueryProvider>
          </ReduxProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
