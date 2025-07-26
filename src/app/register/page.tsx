// src/app/register/page.tsx
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    // Apply the same background class and centering as the login page
    <div className="auth-bg flex items-center justify-center min-h-screen p-4">
      <RegisterForm />
    </div>
  );
}
