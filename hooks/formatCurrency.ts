export const formatCurrency = (amount: string): string => {
  return amount
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(parseFloat(amount))
    : "N/A";
};
