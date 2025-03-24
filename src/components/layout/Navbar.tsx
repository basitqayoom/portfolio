import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    theme,
    toggleTheme
  } = useTheme();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);
  const navItems = [{
    name: 'Home',
    href: '#'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Achievements',
    href: '#achievements'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 backdrop-blur-lg bg-background/80 shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold relative z-10 flex items-center" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary mr-2 dark:text-white bg-transparent">B.</div>
            
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => <a key={index} href={item.href} className="px-4 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                {item.name}
              </a>)}
            
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button asChild className="ml-4">
              <a href="https://docs.google.com/document/d/1wXG0wm7eX2jzkcDlH5E8hlWaWhBAXaq-uCWYVlUXZVk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button id="menu-toggle" variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-background shadow-xl transform transition-transform ease-in-out duration-300 pt-16 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col p-4">
          {navItems.map((item, index) => <a key={index} href={item.href} className="px-4 py-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {item.name}
            </a>)}
          
          <Button asChild className="mt-4 mx-4">
            <a href="https://docs.google.com/document/d/1wXG0wm7eX2jzkcDlH5E8hlWaWhBAXaq-uCWYVlUXZVk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>;
};
export default Navbar;