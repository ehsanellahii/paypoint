import { z } from 'zod';

export const ContactFormSchema = z.object({
  firstName: z
    .string()
    .min(3, {
      message: 'First Name is required and should contain at least 3 characters!',
    })
    .refine((val) => val !== '', { message: 'First Name is required!' }),

  lastName: z
    .string()
    .min(3, {
      message: 'Last Name is required and should contain at least 3 characters!',
    })
    .refine((val) => val !== '', { message: 'Last Name is required!' }),

  email: z
    .string()
    .email({ message: 'Email should be in a correct format!' })
    .refine((val) => val !== '', { message: 'Email is required!' }),

  phoneNumber: z
    .string()
    .min(10, { message: 'Phone Number should contain at least 10 digits!' })
    .refine((val) => val !== '', { message: 'Phone Number is required!' }),

  businessName: z
    .string()
    .min(3, {
      message: 'Business Name is required and should contain at least 3 characters!',
    })
    .refine((val) => val !== '', { message: 'Business Name is required!' }),

  storeType: z
    .string()
    .min(3, {
      message: 'Store Type is required and should contain at least 3 characters!',
    })
    .refine((val) => val !== '', { message: 'Store Type is required!' }),

  agree: z.boolean().refine((val) => val, { message: 'Agreement is required!' }),
});
