"use client";
import "@/app/globals.scss";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CartProvider } from "@/context/CartContext";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <AppRouterCacheProvider>
          <QueryClientProvider client={queryClient}>
            <CartProvider>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </CartProvider>
          </QueryClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
