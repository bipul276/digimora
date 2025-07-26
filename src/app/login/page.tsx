// src/app/login/page.tsx
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    // Apply the new background class and center the content
    <div className="auth-bg flex items-center justify-center min-h-screen p-4">
      <LoginForm />
    </div>
  );
}
