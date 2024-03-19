import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import React from "react";

export default async function CartPage() {
  const userId = "123";
  const cart = await db.cart.findFirst({
    where: { userId },
    include: {
      products: true,
    },
  });

  return (
    <div>
      <h1>Cart</h1>
      <Separator />
      <div>
        {cart?.products ? (
          cart.products.map((product) => (
            <div>
              <p>{product.name}</p>
            </div>
          ))
        ) : (
          <p>No Cart Items found.</p>
        )}
      </div>
    </div>
  );
}
