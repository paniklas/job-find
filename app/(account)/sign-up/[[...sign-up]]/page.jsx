import { SignUp } from '@clerk/nextjs';

export default function SignInPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <SignUp />
        </div>
    )
}