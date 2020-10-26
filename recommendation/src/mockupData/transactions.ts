export const transactions = [
  {
    id: 1,
    invoice_id: 'TRX000001',
    total_price: 100000,
    products: [
      {
        id: 1,
        name: 'Kaos Polos',
        qty: 2,
        total_price: 40000,
        tags: ['T-Shirt', 'Simple'],
      },
      {
        id: 2,
        name: 'Masker Kain 3 Lapis',
        qty: 5,
        total_price: 25000,
        tags: ['Health', 'Covid19'],
      },
      {
        id: 3,
        name: 'Hand Sanitizer',
        qty: 2,
        total_price: 35000,
        tags: ['Health', 'Covid19'],
      },
    ],
    created_at: '2020-10-01 08:00:00',
  },
  {
    id: 2,
    invoice_id: 'TRX000002',
    total_price: 100000,
    products: [
      {
        id: 1,
        name: 'Kaos Polos',
        qty: 3,
        total_price: 60000,
        tags: ['T-Shirt', 'Simple'],
      },
    ],
    created_at: '2020-10-01 08:00:00',
  },
  {
    id: 2,
    invoice_id: 'TRX000003',
    total_price: 100000,
    products: [
      {
        id: 4,
        name: 'Kaos Polos Bahan Halus',
        qty: 3,
        total_price: 90000,
        tags: ['T-Shirt', 'Simple'],
      },
    ],
    created_at: '2020-10-01 08:00:00',
  },
];
