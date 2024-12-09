'use client';

import React from "react";
import "./page.css";
import Footer from "@/components/molecules/Footer/Footer";
import { Header } from "@/components/molecules/Header/Header";
import { useTranslations } from 'next-intl';

const orders = [
  {
    id: 1,
    orderNumber: "ORD-001",
    date: "2023-05-15",
    status: "Delivered",
    total: 25.99,
    items: [
      { name: "Spaghetti Carbonara", quantity: 1, price: 15.99 },
      { name: "Caesar Salad", quantity: 1, price: 10.00 }
    ]
  },
  {
    id: 2,
    orderNumber: "ORD-002",
    date: "2023-05-18",
    status: "Processing",
    total: 32.50,
    items: [
      { name: "Chicken Tikka Masala", quantity: 2, price: 16.25 }
    ]
  },
  {
    id: 3,
    orderNumber: "ORD-003",
    date: "2023-05-20",
    status: "Cancelled",
    total: 45.75,
    items: [
      { name: "Spaghetti Carbonara", quantity: 1, price: 15.99 },
      { name: "Caesar Salad", quantity: 1, price: 10.00 },
      { name: "Chicken Tikka Masala", quantity: 1, price: 16.25 }
    ]
  }
];

const OrdersPage: React.FC = () => {
  const t = useTranslations('orders');

  return (
    <>
      <Header />
      <div className="orders-page">
        <div className="orders-page__container">
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
          {orders.length === 0 ? (
            <p>{t('noOrders')}</p>
          ) : (
            <div className="orders-grid">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <h3>{t('orderNumber')}: {order.orderNumber}</h3>
                  <div className="order-details">
                    <p>{t('date')}: {order.date}</p>
                    <p>{t('status')}: {order.status}</p>
                    <p>{t('total')}: ${order.total.toFixed(2)}</p>
                  </div>
                  <div className="order-items">
                    <h4>{t('items')}</h4>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.name} x{item.quantity} - ${item.price.toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="view-order-button">{t('viewOrderDetails')}</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrdersPage;

