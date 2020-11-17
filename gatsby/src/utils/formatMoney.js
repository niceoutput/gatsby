const formatter = Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
