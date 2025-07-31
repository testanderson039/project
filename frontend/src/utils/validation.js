import * as Yup from 'yup';

// Login validation schema
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

// Registration validation schema
export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

// Profile update validation schema
export const profileSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string().nullable(),
  address: Yup.string().nullable(),
});

// Password change validation schema
export const passwordChangeSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Current password is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters')
    .notOneOf(
      [Yup.ref('currentPassword')],
      'New password must be different from current password'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

// Shop creation validation schema
export const shopSchema = Yup.object().shape({
  name: Yup.string()
    .required('Shop name is required')
    .min(2, 'Shop name must be at least 2 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters'),
  address: Yup.string().required('Address is required'),
  phone: Yup.string().required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

// Product creation validation schema
export const productSchema = Yup.object().shape({
  name: Yup.string()
    .required('Product name is required')
    .min(2, 'Product name must be at least 2 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be positive'),
  comparePrice: Yup.number()
    .nullable()
    .min(0, 'Compare price cannot be negative')
    .test(
      'is-greater',
      'Compare price should be greater than price',
      function (value) {
        return !value || value > this.parent.price;
      }
    ),
  quantity: Yup.number()
    .required('Quantity is required')
    .integer('Quantity must be an integer')
    .min(0, 'Quantity cannot be negative'),
  category: Yup.string().required('Category is required'),
});

// Review validation schema
export const reviewSchema = Yup.object().shape({
  rating: Yup.number()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating cannot be more than 5'),
  comment: Yup.string()
    .required('Comment is required')
    .min(5, 'Comment must be at least 5 characters'),
});

// Address validation schema
export const addressSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  addressLine1: Yup.string().required('Address line 1 is required'),
  addressLine2: Yup.string().nullable(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  postalCode: Yup.string().required('Postal code is required'),
  country: Yup.string().required('Country is required'),
  phone: Yup.string().required('Phone number is required'),
});