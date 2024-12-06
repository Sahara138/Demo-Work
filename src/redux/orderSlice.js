import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: "order",
    initialState: {
      customer: {
        name: "",
        email: "",
        mobile: "",
        address: "",
      },
      orderItems: [],
      savedOrders: [], // Array to store saved orders
      subtotal: 0,
      totalQuantity: 0,
      totalAmount: 0,
      shippingCharge: 0,
      vat: 0,
      discount: 0,
      advance: 0,
      due: 0,
    },
    reducers: {
      updateCustomer: (state, action) => {
        state.customer = { ...state.customer, ...action.payload };
      },
      addOrderItem: (state) => {
        state.orderItems.push({
          product: "",
          quantity: 1,
          rate: 0,
          price: 0,
        });
      },
      updateOrderItem: (state, action) => {
        const { index, field, value } = action.payload;
        const orderItem = state.orderItems[index];
        if (orderItem) {
          orderItem[field] = value;
          if (field === "quantity" || field === "rate") {
            orderItem.price = orderItem.quantity * orderItem.rate;
          }
        }
      },
      deleteOrderItem: (state, action) => {
        state.orderItems.splice(action.payload, 1);
      },
      calculateTotals: (state) => {
        state.totalQuantity = state.orderItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        state.subtotal = state.orderItems.reduce(
          (acc, item) => acc + item.price,
          0
        );
        state.totalAmount =
          state.subtotal + state.shippingCharge + state.vat - state.discount;
        state.due = state.totalAmount - state.advance;
      },
      saveOrder: (state) => {
        const order = {
          customer: state.customer,
          orderItems: [...state.orderItems],
          subtotal: state.subtotal,
          totalAmount: state.totalAmount,
          due: state.due,
        };
        state.savedOrders.push(order);
      },
      resetOrderForm: (state) => {
        state.customer = { name: "", email: "", mobile: "", address: "" };
        state.orderItems = [];
        state.subtotal = 0;
        state.totalQuantity = 0;
        state.totalAmount = 0;
        state.shippingCharge = 0;
        state.vat = 0;
        state.discount = 0;
        state.advance = 0;
        state.due = 0;
      },
    },
  });
  
  export const {
    updateCustomer,
    addOrderItem,
    updateOrderItem,
    deleteOrderItem,
    calculateTotals,
    saveOrder,
    resetOrderForm,
  } = orderSlice.actions;
  
  export default orderSlice.reducer;
  