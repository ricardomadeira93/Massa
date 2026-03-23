export function startOrderFlow(productId: string) {
  const url = new URL(window.location.href);
  url.searchParams.set('produto', productId);
  url.hash = 'pedido';
  window.history.replaceState({}, '', url.toString());

  const orderSection = document.getElementById('pedido');
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
