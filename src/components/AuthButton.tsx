
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthButton = () => {
  const { user, signOut, loading } = useAuth();

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        Loading...
      </Button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 text-nature-charcoal">
          <User className="h-4 w-4" />
          <span className="text-sm font-medium">Welcome, Jack</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={signOut}
          className="border-nature-moss text-nature-moss hover:bg-nature-moss hover:text-nature-sage"
        >
          <LogOut className="h-4 w-4 mr-1" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Link to="/auth">
      <Button
        variant="outline"
        size="sm"
        className="border-nature-moss text-nature-moss hover:bg-nature-moss hover:text-nature-sage"
      >
        <LogIn className="h-4 w-4 mr-1" />
        Sign In
      </Button>
    </Link>
  );
};

export default AuthButton;
