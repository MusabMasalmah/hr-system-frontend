export interface Employee {
  id: number;
  name: string;
  email: string;
  picture: string | null; // picture can be a string or null
  credit: number;
  position: string;
  phone_number: string;
  address: string;
  max_paid_leave: number;
  role: 'ADMIN' | 'USER' | 'MANAGER'; // Assuming the role is one of these predefined values
}
