const API_BASE = import.meta.env.VITE_OPENCART_API_URL || '';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const createOpenCartOrder = async (payload) => {
  if (!API_BASE) {
    await wait(700);
    const randomSuffix = Math.floor(Math.random() * 9000 + 1000);
    return {
      orderId: `mock-${Date.now()}`,
      orderReference: `OC-${randomSuffix}`,
      status: 'created',
      payload,
    };
  }

  const response = await fetch(`${API_BASE}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('OpenCart order creation failed');
  }

  const data = await response.json();
  return {
    orderId: data.id,
    orderReference: data.reference || data.id,
    status: data.status || 'created',
  };
};

export const processOpenCartCardPayment = async ({ orderId, amount, cardToken, customerEmail }) => {
  if (!API_BASE) {
    await wait(900);
    return {
      paymentId: `pay-${Date.now()}`,
      orderId,
      amount,
      method: 'card',
      status: 'paid',
      customerEmail,
    };
  }

  const response = await fetch(`${API_BASE}/payments/card`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      orderId,
      amount,
      cardToken,
      customerEmail,
    }),
  });

  if (!response.ok) {
    throw new Error('OpenCart payment failed');
  }

  return response.json();
};

export const buildWhatsAppCheckoutLink = ({ items, totalPrice, orderReference }) => {
  const phone = import.meta.env.VITE_WHATSAPP_PHONE || '212632409738';
  const summary = items
    .map((item) => `${item.name} x${item.quantity}`)
    .join(', ');

  const message = `Bonjour, je souhaite confirmer ma commande ${orderReference}. Produits: ${summary}. Total: ${totalPrice.toFixed(2)} MAD.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
