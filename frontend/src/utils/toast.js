import { toast } from 'react-toastify';

// Toast configuration
const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

// Success toast
export const showSuccessToast = (message) => {
  toast.success(message, toastConfig);
};

// Error toast
export const showErrorToast = (message) => {
  toast.error(message, toastConfig);
};

// Info toast
export const showInfoToast = (message) => {
  toast.info(message, toastConfig);
};

// Warning toast
export const showWarningToast = (message) => {
  toast.warning(message, toastConfig);
};

// Default toast
export const showToast = (message) => {
  toast(message, toastConfig);
};